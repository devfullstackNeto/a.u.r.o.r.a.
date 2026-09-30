import {activities} from './data';
import {calculateSUS,type Session} from './core';
export type Filter='TODOS'|'REAIS'|'SINTÉTICOS';
export function selectSessions(all:Session[],filter:Filter):Session[]{return all.filter(s=>filter==='TODOS'||(filter==='REAIS'?!s.synthetic:s.synthetic))}
export function datasetKind(sessions:Session[]):'VAZIO'|'REAL'|'SINTÉTICO'|'MISTO'{if(!sessions.length)return 'VAZIO';const synthetic=sessions.some(s=>s.synthetic),real=sessions.some(s=>!s.synthetic);return synthetic&&real?'MISTO':synthetic?'SINTÉTICO':'REAL'}
export function durationMinutes(session:Session):number|undefined{const end=session.completedAt||session.endedAt;return end?Math.max(0,(Date.parse(end)-Date.parse(session.startedAt))/60000):undefined}
export function aggregate(sessions:Session[]){const interactions=sessions.flatMap(s=>s.interactions);const attempts=interactions.filter(i=>i.correct!==undefined);const completed=attempts.filter(i=>i.correct===true).length;const durations=sessions.map(durationMinutes).filter((v):v is number=>v!==undefined&&Number.isFinite(v));const ratings=sessions.flatMap(s=>s.feedbackRatings?[s.feedbackRatings]:[]);const sus=sessions.flatMap(s=>s.sus?[calculateSUS(s.sus)]:[]);const average=(values:number[])=>values.length?values.reduce((a,b)=>a+b,0)/values.length:null;return {
  participants:new Set(sessions.map(s=>s.participantId)).size,sessions:sessions.length,sessionsCompleted:sessions.filter(s=>s.status==='completed').length,
  sessionCompletionRate:sessions.length?100*sessions.filter(s=>s.status==='completed').length/sessions.length:null,
  activities:attempts.length,activitiesCompleted:completed,activityCompletionRate:attempts.length?100*completed/attempts.length:null,
  averageDurationMinutes:average(durations),interactions:interactions.length,averageInteractions:sessions.length?interactions.length/sessions.length:null,
  errors:attempts.length-completed,voiceInteractions:interactions.filter(i=>i.mode==='voz').length,textInteractions:interactions.filter(i=>i.mode==='texto').length,
  averageFeedback:average(ratings.map(r=>r.overall)),averageEase:average(ratings.map(r=>r.ease)),averageClarity:average(ratings.map(r=>r.clarity)),averageUsefulness:average(ratings.map(r=>r.usefulness)),feedbackCount:ratings.length,
  averageSUS:average(sus),susCount:sus.length,susDistribution:[0,1,2,3].map(index=>({range:['0–24,9','25–49,9','50–74,9','75–100'][index],count:sus.filter(value=>index===3?value>=75:value>=index*25&&value<(index+1)*25).length})),
  trails:activities.map(activity=>({id:activity.id,name:activity.titulo,count:interactions.filter(i=>i.activityId===activity.id).length}))
}}
