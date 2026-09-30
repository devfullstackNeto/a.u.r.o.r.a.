# Verificação final — protótipo funcional digital

Data: 2026-09-30.

- `npm install`: concluído.
- `npm run build`: concluído, com aviso de tamanho do bundle JavaScript.
- `npm run test`: 6 testes aprovados.
- `npm run test:e2e`: 11 testes aprovados e 1 captura móvel duplicada ignorada; 14 PNGs produzidos. Inclui persistência, segregação de dados e ausência de erros de execução nas rotas principais em desktop e móvel.
- TypeScript: sem erros na compilação.
- PWA de produção: recarga offline da experiência e conteúdo passou em Chromium com `scripts/check-pwa.mjs`.
- Console: nenhum erro de execução nos fluxos automatizados. Acessibilidade com participantes: avaliação real pendente.

Não há evidência de construção ou teste da pulseira física, nem de piloto ou formação realizados com pessoas. Dados demonstrativos são sintéticos e separados por `synthetic: true`.

## Atualização — Sprint 2.1

O fluxo de piloto, mentoria, SUS, analytics e exportação foi fortalecido após a verificação acima. Consulte `docs/sprint-02-1/RESULTADOS_TESTES.md` para as execuções desta sprint e `docs/sprint-02-1/CHECKLIST_PILOTO_REAL.md` para condições ainda pendentes antes de atividade com participantes.

Verificação final da Sprint 2.1: `npm install --offline`, build e TypeScript passaram; 13 testes unitários passaram; 36 testes E2E passaram (2 capturas móveis redundantes ignoradas); 12 capturas específicas foram geradas; recarga offline do PWA de produção passou em Chromium para `/privacidade` e `/experiencia`. O build mantém aviso de bundle acima de 500 kB. Não se testou voz em todos os navegadores nem acessibilidade com participantes.

## Verificação final — Sprint 3.1 (30/09/2026)

| Verificação | Execução e resultado |
| --- | --- |
| Dependências | `npm install --cache .npm-cache --offline --no-audit --no-fund`: concluído, sem alteração de dependências |
| TypeScript | `npm run typecheck`: aprovado; `npm run build` também executou `tsc -b` sem erros |
| Build | `npm run build`: aprovado; aviso de bundle JS de 719,50 kB (212,89 kB gzip), acima de 500 kB |
| Unitários | `npm run test`: **13 aprovados**, 2 arquivos |
| E2E | `npm run test:e2e`: **39 aprovados**, **3 ignorados** (roteiros de captura móvel redundantes); desktop Chromium e projeto mobile |
| PWA/offline | `npm run preview -- --port 4174` + `node scripts/check-pwa.mjs`: créditos, privacidade, experiência e conteúdo reabertos offline após cache inicial |
| Capturas | `e2e/final-screenshots.spec.ts`: **15 PNGs** em `evidence/final/`; créditos desktop e mobile inspecionados visualmente |
| Índice | **28 entradas e 28 caminhos verificados**, nenhum caminho quebrado; 15 PNGs finais presentes |

### Cobertura observada

Rotas principais, `/creditos`, conteúdo e limites de `/projeto`, responsividade de créditos a 390 px, participação e consentimento, retomada, migração IndexedDB v1, dez trilhas, feedback separado do SUS, painel e filtros `REAIS`/`SINTÉTICOS`, geração e limpeza de dados sintéticos, exportação CSV/JSON, privacidade e exclusão, mentoria e progressão, teclado/foco/menu móvel, PWA e recarga offline. O teste E2E-17 verifica os sete nomes institucionais e a indicação de hardware não construído.

Na primeira rodada E2E, a expectativa nova buscava a expressão literal “piloto real”, enquanto a página dizia “aplicação real pendente”. A expectativa foi alinhada ao texto da interface e a suíte inteira foi repetida, com 39 aprovações. Não houve falha de comportamento do produto nesse caso.

### Limites da validação

Esses testes usam navegador e dados de teste. Não verificam avaliação de SUS com pessoas, piloto, formação real, adequação pedagógica ou acessibilidade com o público-alvo. Voz não foi exercitada em todos os navegadores; uso offline pressupõe primeiro carregamento; não há backend nem ensaio de wearable físico. O aviso de tamanho do bundle permanece como oportunidade de otimização.
