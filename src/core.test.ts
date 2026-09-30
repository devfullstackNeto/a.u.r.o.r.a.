import {describe,it,expect} from 'vitest';
import {activities} from './data';
import {calculateSUS,detectIntent,generateId,makeSyntheticSessions,nextLevel,normalize,respond,validateActivities} from './core';
describe('motor educacional local',()=>{
  it('normaliza acentos e detecta intents',()=>{expect(normalize('  SÍ-LA-BAS! ')).toBe('si la bas');expect(detectIntent('Quero aprender números')).toBe('NUMEROS');expect(detectIntent('Preciso de ajuda')).toBe('AJUDA')});
  it('inicia atividade, verifica resposta e progride',()=>{const first=respond('letras',{completed:0});expect(first.activity?.id).toBe('letras-01');const answer=respond('A',{completed:0,activity:first.activity});expect(answer.correct).toBe(true);expect(answer.completed).toBe(1);expect(answer.activity).toBeUndefined();expect(nextLevel(3)).toBe(2)});
  it('fornece fallback compreensível',()=>{expect(respond('xyz',{completed:0}).response).toContain('Não entendi')});
});
describe('dados e métricas',()=>{
  it('calcula SUS padrão e valida respostas',()=>{expect(calculateSUS([5,1,5,1,5,1,5,1,5,1])).toBe(100);expect(calculateSUS([3,3,3,3,3,3,3,3,3,3])).toBe(50);expect(()=>calculateSUS([1])).toThrow()});
  it('gera IDs e sessões sintéticas inequívocas',()=>{expect(generateId(()=>0)).toMatch(/^AUR-[A-Z0-9]{6}$/);const rows=makeSyntheticSessions();expect(rows).toHaveLength(25);expect(rows.every(r=>r.synthetic&&r.kind==='demo')).toBe(true);expect(new Set(rows.map(r=>r.id)).size).toBe(25)});
  it('valida o catálogo de atividades',()=>{expect(validateActivities(activities)).toBe(true);expect(validateActivities([...activities,activities[0]])).toBe(false)});
});
