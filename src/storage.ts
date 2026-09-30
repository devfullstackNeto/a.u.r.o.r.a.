import type {Session} from './core';
export interface PersistenceAdapter {list():Promise<Session[]>;save(session:Session):Promise<void>;removeSynthetic():Promise<void>;seed(sessions:Session[]):Promise<void>}
const DB='aurora-digital';const STORE='sessions';
function openDB():Promise<IDBDatabase>{return new Promise((resolve,reject)=>{const request=indexedDB.open(DB,1);request.onupgradeneeded=()=>{if(!request.result.objectStoreNames.contains(STORE))request.result.createObjectStore(STORE,{keyPath:'id'})};request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error)})}
async function transaction<T>(mode:IDBTransactionMode,work:(store:IDBObjectStore,done:(value:T)=>void)=>void):Promise<T>{const db=await openDB();return new Promise<T>((resolve,reject)=>{const tx=db.transaction(STORE,mode);let value:T;work(tx.objectStore(STORE),v=>{value=v});tx.oncomplete=()=>{db.close();resolve(value)};tx.onerror=()=>{db.close();reject(tx.error)}})}
export const storage:PersistenceAdapter={
  list:()=>transaction<Session[]>('readonly',(store,done)=>{const r=store.getAll();r.onsuccess=()=>done(r.result as Session[])}),
  save:(session)=>transaction<void>('readwrite',(store)=>{store.put(session)}),
  removeSynthetic:async()=>{const sessions=await storage.list();await transaction<void>('readwrite',(store)=>{sessions.filter(s=>s.synthetic).forEach(s=>store.delete(s.id))})},
  seed:async(sessions)=>{await transaction<void>('readwrite',(store)=>{sessions.forEach(s=>{if(!s.synthetic)throw Error('Seed exige dados sintéticos');store.put(s)})})}
};
