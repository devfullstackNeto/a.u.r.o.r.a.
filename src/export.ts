import {aggregate,datasetKind,type Filter} from './analytics';
import {calculateSUS,type Session} from './core';
export type ExportScope='sessoes'|'atividades'|'feedback'|'sus'|'indicadores';
export type ExportFormat='csv'|'json';
const escapeCsv=(value:unknown)=>`"${String(value??'').replace(/"/g,'""')}"`;
const csv=(rows:Record<string,unknown>[])=>{const columns=[...new Set(rows.flatMap(row=>Object.keys(row)))];return '\uFEFF'+[columns.map(escapeCsv).join(','),...rows.map(row=>columns.map(key=>escapeCsv(row[key])).join(','))].join('\r\n')};
export function exportPayload(sessions:Session[],scope:ExportScope,format:ExportFormat,filter:Filter){const kind=datasetKind(sessions);const metrics=aggregate(sessions);let rows:Record<string,unknown>[]=[];
  if(scope==='sessoes')rows=sessions.map(s=>({sessionId:s.sessionId,participantId:s.participantId,synthetic:s.synthetic,status:s.status,createdAt:s.createdAt,startedAt:s.startedAt,completedAt:s.completedAt||'',trilhas:s.trailIds.join('|'),interacoes:s.interactions.length,acertos:s.interactions.filter(i=>i.correct===true).length,erros:s.interactions.filter(i=>i.correct===false).length}));
  if(scope==='atividades')rows=sessions.flatMap(s=>s.interactions.filter(i=>i.activityId).map(i=>({sessionId:s.sessionId,participantId:s.participantId,synthetic:s.synthetic,activityId:i.activityId,at:i.at,mode:i.mode,input:i.input,response:i.response,intent:i.intent,correct:i.correct??'',durationMs:i.durationMs})));
  if(scope==='feedback')rows=sessions.filter(s=>s.feedback||s.feedbackRatings).map(s=>({sessionId:s.sessionId,synthetic:s.synthetic,overall:s.feedbackRatings?.overall??'',ease:s.feedbackRatings?.ease??'',clarity:s.feedbackRatings?.clarity??'',usefulness:s.feedbackRatings?.usefulness??'',comment:s.feedback||''}));
  if(scope==='sus')rows=sessions.filter(s=>s.sus).map(s=>({sessionId:s.sessionId,synthetic:s.synthetic,...Object.fromEntries(s.sus!.map((answer,i)=>[`item${i+1}`,answer])),score:calculateSUS(s.sus!)}));
  if(scope==='indicadores')rows=[{...metrics,trails:JSON.stringify(metrics.trails),susDistribution:JSON.stringify(metrics.susDistribution)}];
  const metadata={schema:'aurora-export-v1',scope,filter,dataset:kind,generatedAt:new Date().toISOString(),records:rows.length,notice:'Registros locais deste navegador. REAL significa não sintético; não comprova atendimento institucional.'};
  const content=format==='json'?JSON.stringify({metadata,data:rows},null,2):csv([{...metadata},...rows]);
  return {content,mime:format==='json'?'application/json':'text/csv;charset=utf-8',filename:`aurora-${scope}-${kind.toLowerCase()}-${new Date().toISOString().slice(0,10)}.${format}`,metadata};
}
export function downloadExport(payload:ReturnType<typeof exportPayload>){const url=URL.createObjectURL(new Blob([payload.content],{type:payload.mime}));const a=document.createElement('a');a.href=url;a.download=payload.filename;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)}
