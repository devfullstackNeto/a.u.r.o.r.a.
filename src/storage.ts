import type {Session} from './core';

export interface StorageAdapter {
  list():Promise<Session[]>;get(id:string):Promise<Session|undefined>;create(session:Session):Promise<void>;
  save(session:Session):Promise<void>;remove(id:string):Promise<void>;removeSynthetic():Promise<number>;seed(sessions:Session[]):Promise<void>
}
export type PersistenceAdapter=StorageAdapter;
const DB='aurora-digital';const STORE='sessions';
function migrate(raw:Session):Session {const completedAt=raw.completedAt||raw.endedAt;return {...raw,sessionId:raw.sessionId||raw.id,participantId:raw.participantId||raw.id,synthetic:raw.synthetic===true,consent:raw.consent===true,createdAt:raw.createdAt||raw.startedAt,completedAt,endedAt:raw.endedAt||completedAt,status:raw.status||(completedAt?'completed':'in_progress'),trailIds:raw.trailIds||[...new Set(raw.interactions.map(i=>i.activityId).filter((v):v is string=>!!v))]}}
function openDB():Promise<IDBDatabase>{return new Promise((resolve,reject)=>{const request=indexedDB.open(DB,2);request.onupgradeneeded=()=>{const db=request.result;const store=db.objectStoreNames.contains(STORE)?request.transaction!.objectStore(STORE):db.createObjectStore(STORE,{keyPath:'id'});if(!store.indexNames.contains('synthetic'))store.createIndex('synthetic','synthetic');if(!store.indexNames.contains('participantId'))store.createIndex('participantId','participantId')};request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error)})}
async function tx<T>(mode:IDBTransactionMode,run:(store:IDBObjectStore,done:(result:T)=>void)=>void):Promise<T>{const db=await openDB();return new Promise<T>((resolve,reject)=>{const transaction=db.transaction(STORE,mode);let result:T;run(transaction.objectStore(STORE),value=>{result=value});transaction.oncomplete=()=>{db.close();resolve(result)};transaction.onerror=()=>{db.close();reject(transaction.error||Error('Falha no armazenamento local'))};transaction.onabort=()=>{db.close();reject(transaction.error||Error('Transação cancelada'))}})}
export const storage:StorageAdapter={
  list:()=>tx<Session[]>('readonly',(store,done)=>{const request=store.getAll();request.onsuccess=()=>done((request.result as Session[]).map(migrate))}),
  get:(id)=>tx<Session|undefined>('readonly',(store,done)=>{const request=store.get(id);request.onsuccess=()=>done(request.result?migrate(request.result as Session):undefined)}),
  create:(session)=>tx<void>('readwrite',store=>{store.add(session)}),
  save:(session)=>tx<void>('readwrite',store=>{store.put(session)}),
  remove:(id)=>tx<void>('readwrite',store=>{store.delete(id)}),
  removeSynthetic:()=>tx<number>('readwrite',(store,done)=>{let count=0;const request=store.openCursor();request.onsuccess=()=>{const cursor=request.result;if(!cursor){done(count);return}if((cursor.value as Session).synthetic===true){cursor.delete();count++}cursor.continue()}}),
  seed:async(sessions)=>{if(sessions.some(s=>s.synthetic!==true))throw Error('Seed exige dados sintéticos');await tx<void>('readwrite',store=>{sessions.forEach(s=>store.put(s))})}
};
export async function createUniqueSession(sessionFactory:()=>Session,adapter:StorageAdapter=storage):Promise<Session>{for(let attempt=0;attempt<12;attempt++){const candidate=sessionFactory();const all=await adapter.list();if(all.some(s=>s.participantId===candidate.participantId||s.id===candidate.id))continue;try{await adapter.create(candidate);return candidate}catch(error){if(error instanceof DOMException&&error.name==='ConstraintError')continue;throw error}}throw Error('Não foi possível gerar um código anônimo único. Tente novamente.')}
