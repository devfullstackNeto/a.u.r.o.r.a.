# Relatório de QA do protótipo digital

Data de verificação: 2026-09-30. Ambiente: Windows, Node.js v24.17.0, npm 11.13.0, Vite 6.4.3, Vitest 3.2.7, Playwright Chromium.

| Cenário | Esperado | Obtido | Estado | Evidência |
|---|---|---|---|---|
| Compilação TypeScript/Vite | Sem erro | Compilação concluída; aviso de bundle acima de 500 kB | Passou com aviso | `npm run build` |
| Motor, SUS, IDs, progressão, catálogo | Testes aprovados | 6 testes passaram | Passou | `npm run test` |
| Fluxo de atividade em desktop/móvel | Navegar, responder e concluir | Passou | Passou | `e2e/flows.spec.ts` |
| Piloto e SUS em desktop/móvel | Consentir, concluir, avaliar | Passou | Passou | `e2e/flows.spec.ts` |
| Mentora, painel e diagnóstico | Abrir rotas | Passou | Passou | `e2e/flows.spec.ts` |
| Persistência | Sessão aparece após navegação no painel | Observado no fluxo E2E | Passou | `e2e/flows.spec.ts` |
| Separação de registros | Remover sintéticos sem excluir piloto local | Observado após recarga em desktop e móvel | Passou | `e2e/flows.spec.ts` |
| Console | Rotas principais sem exceções de página | Sem erros em desktop e móvel | Passou | `e2e/flows.spec.ts` |
| Offline de produção | Recarregar experiência após cache | Página e conteúdo abriram offline no Chromium | Passou | `scripts/check-pwa.mjs` em `npm run preview` |
| Hardware físico | Não se aplica à entrega digital | Não construído/testado | Fora do escopo desta fase | Documentação |
| Avaliação com participantes | Aplicação real autorizada | Não realizada nesta fase | Pendente | Plano de piloto |

O roteiro de capturas gerou 14 PNGs em `evidence/screenshots/`. A captura 08 no servidor de desenvolvimento demonstra o indicador de conexão; o teste separado `scripts/check-pwa.mjs` verificou a recarga offline do PWA de produção. As capturas devem ser revisadas antes de uso institucional.

## Sprint 2.1

A auditoria inicial, os critérios e os resultados estão em `docs/sprint-02-1/`. Na rodada final, 13 testes unitários e 36 testes E2E passaram; 2 capturas móveis redundantes foram ignoradas. Foram ampliados os testes para fluxo completo, dez trilhas, migração IndexedDB, rascunhos, filtros, exportações, exclusão local, teclado e três viewports móveis. O PWA de produção recarregou as rotas de privacidade e experiência offline no Chromium. Acessibilidade técnica está detalhada em `docs/qa/ACCESSIBILITY_REPORT.md`. Nenhum teste da sprint envolve participantes reais ou hardware.
