import {describe,it,expect} from 'vitest';
import {aggregate,datasetKind,durationMinutes,selectSessions} from './analytics';
import {calculateSUS,generateId,makeSyntheticSessions,newSession,type Session} from './core';
import {exportPayload} from './export';
import {createUniqueSession,type StorageAdapter} from './storage';

const real=():Session=>({...makeSyntheticSessions()[0],id:'SES-REAL',sessionId:'SES-REAL',participantId:'AUR-REAL01',synthetic:false,kind:'pilot'});
describe('identificação e persistência',()=>{
  it('gera código anônimo de seis caracteres e sessão independente',()=>{expect(generateId(()=>0)).toBe('AUR-AAAAAA');const s=newSession('pilot','AUR-ABC123');expect(s.participantId).toBe('AUR-ABC123');expect(s.sessionId).not.toBe(s.participantId);expect(s.synthetic).toBe(false);expect(s.consentAt).toBeTruthy()});
  it('repete geração quando encontra código existente',async()=>{const rows=[real()];let tries=0;const adapter:StorageAdapter={list:async()=>rows,get:async()=>undefined,create:async s=>{rows.push(s)},save:async()=>{},remove:async()=>{},removeSynthetic:async()=>0,seed:async()=>{}};const result=await createUniqueSession(()=>{tries++;return {...newSession('pilot',tries===1?'AUR-REAL01':'AUR-NEW001'),id:`SES-${tries}`,sessionId:`SES-${tries}`}},adapter);expect(tries).toBe(2);expect(result.participantId).toBe('AUR-NEW001');expect(rows).toHaveLength(2)});
});
describe('SUS, seleção e analytics',()=>{
  it('calcula limites SUS e rejeita respostas incompletas',()=>{expect(calculateSUS([1,5,1,5,1,5,1,5,1,5])).toBe(0);expect(calculateSUS([5,1,5,1,5,1,5,1,5,1])).toBe(100);expect(()=>calculateSUS([1,2,3])).toThrow()});
  it('mantém real e sintético separados',()=>{const sessions=[real(),...makeSyntheticSessions()];expect(selectSessions(sessions,'REAIS')).toHaveLength(1);expect(selectSessions(sessions,'SINTÉTICOS')).toHaveLength(25);expect(datasetKind(sessions)).toBe('MISTO');expect(datasetKind(selectSessions(sessions,'REAIS'))).toBe('REAL')});
  it('agrega dados armazenados e calcula duração e conclusão',()=>{const source=makeSyntheticSessions();const metrics=aggregate(source);expect(metrics.sessions).toBe(25);expect(metrics.participants).toBe(25);expect(metrics.sessionsCompleted).toBe(source.filter(s=>s.status==='completed').length);expect(metrics.voiceInteractions).toBeGreaterThan(0);expect(metrics.textInteractions).toBeGreaterThan(0);expect(metrics.averageSUS).not.toBeNull();expect(durationMinutes(source[0])).toBe(4);expect(aggregate([]).sessionCompletionRate).toBeNull()});
});
describe('exportação',()=>{
  it('marca origem e exporta sessões sem inventar dados pessoais',()=>{const payload=exportPayload([real(),makeSyntheticSessions()[0]],'sessoes','json','TODOS');const parsed=JSON.parse(payload.content);expect(parsed.metadata.dataset).toBe('MISTO');expect(parsed.data).toHaveLength(2);expect(parsed.data[0]).not.toHaveProperty('nome');expect(payload.filename).toMatch(/misto.*json$/)});
  it('produz CSV com cabeçalho de origem e métricas SUS separadas',()=>{const payload=exportPayload(makeSyntheticSessions(),'sus','csv','SINTÉTICOS');expect(payload.content).toContain('SINTÉTICO');expect(payload.content).toContain('score');expect(payload.metadata.records).toBeGreaterThan(0)});
});
