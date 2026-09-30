# Relatório da Sprint 4 — materialização visual conceitual

Data: 30/09/2026. **Entrega:** representação visual e documentação técnica de uma possível pulseira educacional A.U.R.O.R.A. **Estado do hardware:** não produzido, não montado e não testado fisicamente. A implementação verificável continua sendo o protótipo funcional digital.

## Realizado

1. Auditado o README, `/device`, `/projeto`, `/creditos`, encerramento, `public/`, assets, arquitetura e capturas; ver `AUDITORIA_INICIAL.md`.
2. Criados seis SVGs editáveis em `public/aurora-device/svg/`: vista frontal, vista lateral, componentes, fluxo, arquitetura e estados. Os oito slots PNG solicitados estão documentados em `public/aurora-device/README.md` para eventual renderização futura de origem verificável; nenhum PNG fotorrealista foi fabricado para preencher lacunas.
3. Refeita `/device` com design conceitual, componentes, sete estados, fluxo, camadas software/hardware, offline e telemetria do demonstrador digital. A experiência existente foi preservada na própria página.
4. Criadas `/device-report` para impressão, `/device-presentation` em 16:9 e `/device-poster` vertical, todas com aviso de hardware não produzido.
5. Acrescentada em `/projeto` a sequência projeto original → protótipo digital → validação técnica → design conceitual → futura prototipagem física.
6. Integrados README e relatório final base. Criados conceito, requisitos físicos conceituais, mapa de componentes, estados, cenários, legendas e plano futuro de hardware.
7. Produzidas oito capturas Playwright em `evidence/sprint-04/`, indexadas como AUR-S04-01 a 08. São evidências de interface digital.
8. Ajustado o footer conforme pedido associado: primeiros nomes em ordem alfabética, com nomes completos somente em `/creditos` na interface.

## QA técnico

- `npm install --cache .npm-cache --offline --no-audit --no-fund`: concluído.
- `npm run typecheck`: aprovado.
- `npm run build`: aprovado; aviso de bundle JS acima de 500 kB permanece.
- `npm run test`: **13 unitários aprovados**.
- `npm run test:e2e`: **48 E2E aprovados**, 4 capturas móveis redundantes ignoradas, desktop Chromium e mobile Chromium.
- `node scripts/check-pwa.mjs` com preview de produção: `/device`, SVG frontal, créditos, privacidade, experiência e conteúdo disponíveis offline após cache inicial.
- Índice de evidências: **36 entradas, zero caminhos ausentes**; 8 PNGs da Sprint 4 conferidos. As peças principais foram inspecionadas visualmente.

## Limitações e continuidade

As vistas SVG são esquemas de design, sem cota de fabricação. Componentes, peso, autonomia, ergonomia, segurança, volume, vibração e proteção são requisitos ou metas futuras. Não houve integração embarcada, fabricação, ensaio físico ou piloto com wearable. A próxima etapa está detalhada em `08_PLANO_PROTOTIPAGEM_FISICA_FUTURA.md`. Voz depende do navegador; offline requer primeiro carregamento. A navegação e o layout foram verificados tecnicamente, mas acessibilidade com o público-alvo continua pendente de estudo real.
