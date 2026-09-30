# Resultados de testes — Sprint 2.1

Ambiente: Windows, Node.js v24.17.0, npm 11.13.0, Vite 6.4.3, Vitest 3.2.7, Playwright Chromium desktop e emulação móvel. Data: 2026-09-30.

| Comando/cenário | Resultado observado | Estado |
|---|---|---|
| `npm run build` | Compilou; aviso de bundle JS acima de 500 kB | Passou com aviso |
| `npm install --offline` | Dependências atualizadas pelo lockfile local | Passou |
| `npm run test` | 13 testes unitários passaram | Passou |
| `npm run test:e2e` | 36 testes passaram; 2 capturas móveis duplicadas foram intencionalmente ignoradas | Passou |
| E2E-01 a 16 | Fluxos em desktop e emulação móvel; dez trilhas, migração v1→v2, rascunhos, exportação, exclusão e teclado | Passou |
| Capturas | 12 PNGs da sprint e 14 PNGs gerais gerados | Passou |
| PWA de produção | `scripts/check-pwa.mjs` recarregou `/privacidade` e `/experiencia` offline no Chromium | Passou |

Falhas intermediárias de seletor Playwright foram corrigidas: o filtro REAL já mostrava zero; o teste correspondia indevidamente a outro texto contendo “sintéticos”. O roteiro antigo de captura usava papel `button` para uma aba `tab`, corrigido. A validação de voz em diferentes navegadores e a avaliação com tecnologias assistivas reais permanecem pendentes.
