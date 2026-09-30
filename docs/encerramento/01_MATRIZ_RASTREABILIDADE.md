# Matriz mestre de rastreabilidade

Estado em 30/09/2026. Resultados são técnicos; captura e teste não comprovam atividade com participantes. RF/RNF constam dos requisitos da Meta 1. IDs resolvem em `evidence/EVIDENCE_INDEX.md`.

| Objetivo | Meta | Atividade | Requisito | Funcionalidade | Arquivo/código | Teste | Resultado | Evidência | Documento |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Definir experiência pedagógica | 1 | Pesquisa e design | RF01–RF04 | Vocabulário inicial e dez trilhas | `src/data.ts`, `src/Experience.tsx` | `src/core.test.ts`; E2E experiência | Fluxos digitais testados; sem coleta real | AUR-M1-EV-001; AUR-FIN-07 | `docs/01-meta-01-pesquisa-design/09_RELATORIO_META_01.md` |
| Apoiar interação local | 2 | Motor | RF01–RF04 | Regras, voz opcional e texto | `src/core.ts`, `src/Experience.tsx` | `src/core.test.ts`; E2E interação | Validado tecnicamente | AUR-M2-EV-001; AUR-FIN-05 | `docs/02-meta-02-prototipo-testes/10_RELATORIO_META_02.md` |
| Manter uso offline | 2 | PWA | RNF disponibilidade | Cache após primeiro carregamento | `vite.config.ts`, `scripts/check-pwa.mjs` | Build; verificação PWA | Offline técnico verificado | AUR-M2-EV-001; AUR-FIN-13 | `docs/02-meta-02-prototipo-testes/07_TESTE_OFFLINE.md` |
| Guardar sessões com minimização | 2/3 | Persistência | RF05; RNF05 | IndexedDB, código, exclusão | `src/storage.ts`, `src/Pilot.tsx`, `src/Privacy.tsx` | `src/sprint21.test.ts`; E2E-01/08/13 | Técnica testada; sem participante real | AUR-M3-EV-002/003; AUR-FIN-03/04/13 | `docs/arquitetura/PRIVACIDADE_E_DADOS.md` |
| Preparar participação | 3 | Consentimento e retomada | RF05 | `/participar` | `src/Pilot.tsx` | E2E-01/08/13 | Pronto para piloto; aplicação pendente | AUR-M3-EV-002/003; AUR-FIN-03/04 | `docs/03-meta-03-piloto/RELATORIO_META_03_PREPARACAO.md` |
| Preparar avaliação | 3 | Feedback e SUS | RF07 | Formulários distintos e cálculo | `src/Pilot.tsx`, `src/analytics.ts` | Unitários; E2E feedback/SUS | Interação automatizada; sem SUS real | AUR-M3-EV-004; AUR-FIN-08/09 | `docs/03-meta-03-piloto/05_QUESTIONARIO_SUS.md` |
| Sistematizar dados | 3/5 | Painel e exportações | RF08–RF09 | Filtros real/sintético, CSV/JSON | `src/Dashboard.tsx`, `src/export.ts` | Unitário exportação; E2E-04/06/10 | Demonstração sintética separada | AUR-M3-EV-005; AUR-FIN-10 | `docs/arquitetura/FORMATO_EXPORTACAO.md` |
| Preparar mentoria | 4 | Formação digital | RF10 | Sete módulos e checklists | `src/Mentor.tsx` | E2E mentoria/formação | Ambiente implementado; formação real pendente | AUR-M4-EV-001/002; AUR-FIN-11/12 | `docs/04-meta-04-mentoria/RELATORIO_META_04_PREPARACAO.md` |
| Comunicar produto e autoria | 5 | Documentação | Registro institucional | `/projeto`, `/creditos`, README | `src/App.tsx`, `src/Credits.tsx`, `src/team.ts` | E2E créditos e capturas | Documentado; publicação externa não comprovada | AUR-FIN-02/14 | `docs/05-meta-05-disseminacao/08_RELATORIO_META_05.md` |
| Explicar evolução física futura | 2/5 | Design conceitual | CF-01–CF-12, sem validação física | `/device` e peças de relatório/apresentação/pôster | `src/DeviceConcept.tsx`, `src/device.css`, `public/aurora-device/svg/` | `e2e/device-concept.spec.ts`; inspeção visual | Visualização digital validada; hardware não produzido | AUR-S04-01 a 08 | `docs/sprint-04/01_CONCEITO_DISPOSITIVO.md`, `02_REQUISITOS_FISICOS_CONCEITUAIS.md` |

`FINAL_QA_REPORT.md` registra a execução final. Atividades de campo das Metas 3 e 4 permanecem preparadas para execução real; o wearable físico é trabalho futuro.
