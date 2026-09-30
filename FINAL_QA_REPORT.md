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
