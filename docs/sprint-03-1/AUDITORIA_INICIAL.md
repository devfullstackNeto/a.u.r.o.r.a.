# Auditoria inicial — Sprint 3.1

Data: 30/09/2026. Escopo: estado do repositório antes das alterações desta sprint. A classificação abaixo distingue implementação técnica de execução com público real.

| Item | Evidência encontrada | Implementação | Documento associado | Teste existente | Status inicial | Lacuna para encerramento |
| --- | --- | --- | --- | --- | --- | --- |
| Identidade e equipe | README e página `/projeto` | Identidade A.U.R.O.R.A. e IFMT no aplicativo | README | Navegação E2E | Parcial | Equipe oficial completa, responsabilidades documentadas, `/creditos` e rodapé. |
| Meta 1: concepção | Requisitos, vocabulário, fluxos e arquiteturas em `docs/01-meta-01-pesquisa-design/` | Conteúdo e interação em `src/data.ts` e `src/Experience.tsx` | Relatório e conclusão Meta 1 | Testes de fluxo | Implementado como concepção | Consolidar a origem do vocabulário como inicial de desenvolvimento; nenhuma entrevista real comprovada. |
| Meta 2: protótipo digital | Código em `src/`, capturas em `evidence/screenshots/` | PWA, motor local, trilhas, voz opcional, texto, IndexedDB e exportação | `docs/02-meta-02-prototipo-testes/` | 13 unitários; 36 E2E na Sprint 2.1; verificação PWA | Implementado e testado tecnicamente | Consolidar relatório e declarar expressamente que o wearable físico não foi montado. |
| Meta 3: piloto | Instrumentos, termo, SUS, plano e modelos em `docs/03-meta-03-piloto/` | `/participar`, consentimento, feedback, SUS, painel, exportações e dados sintéticos | Plano, instrumento e modelos Meta 3 | Fluxos E2E de participação e painel | Preparado para execução real | Não há evidência de aplicação com participantes, respostas reais ou número de atendidos. Criar relatório de preparação. |
| Meta 4: mentoria | Materiais e modelos em `docs/04-meta-04-mentoria/` | Ambiente da mentora, sete módulos, checklists | Plano e guia Meta 4 | Fluxos E2E da mentoria | Ambiente implementado; formação real não executada | Registrar a preparação sem atribuir capacitação a pessoa real. |
| Meta 5: disseminação | Materiais em `docs/05-meta-05-disseminacao/` | Sistema, README e evidências digitais | Relatório, roteiro de vídeo, artigo-base, resumo e continuidade | Build e E2E anteriores | Material-base preparado | Consolidar entregáveis sem afirmar submissão de artigo ou publicação de vídeo. |
| Rastreabilidade | Matrizes numeradas em `docs/encerramento/` | Código e testes rastreáveis | `01_MATRIZ_RASTREABILIDADE.md`, `02_MATRIZ_METAS_EVIDENCIAS.md` | Testes existentes | Parcial | Fechar cadeia objetivo–meta–atividade–requisito–função–código–teste–resultado–evidência–documento. |
| Evidências visuais | `evidence/screenshots/` e `evidence/sprint-02-1/` | Capturas anteriores disponíveis | `evidence/EVIDENCE_INDEX.md` | Playwright screenshot specs | Parcial | Criar 15 capturas finais, incluir créditos e validar todos os caminhos do índice. |
| Privacidade e dados | `src/Privacy.tsx`, `src/storage.ts`, `src/export.ts` | Persistência local, consentimento, exclusão e exportação | `docs/arquitetura/PRIVACIDADE_E_DADOS.md` | Unitários e E2E | Implementado tecnicamente | Revalidar filtros real/sintético e registrar limites do armazenamento local. |
| QA e funcionamento offline | `FINAL_QA_REPORT.md`, `scripts/check-pwa.mjs` | PWA e service worker | Relatórios de QA e Sprint 2.1 | Build, unitários, E2E e script PWA anteriores | Validado na Sprint 2.1 | Reexecutar após as alterações, incluindo rota de créditos e responsividade. |
| Encerramento institucional | Arquivos numerados em `docs/encerramento/` | Base documental | `08_RELATORIO_FINAL_BASE.md` e demais | Revisão documental | Parcial | Criar pacote final solicitado, guia SUAP, anexos, plano de fotos e auditoria de alegações. |

## Fontes verificadas

Árvore de arquivos; `README.md`; `CHANGELOG.md`; `FINAL_QA_REPORT.md`; `package.json`; `docs/sprint-02-1/`; documentos das cinco metas; `docs/encerramento/`; `evidence/EVIDENCE_INDEX.md`; `src/App.tsx`, `Experience.tsx`, `Pilot.tsx`, `Mentor.tsx`, `Dashboard.tsx`, `Privacy.tsx`, `data.ts`, `storage.ts`, `analytics.ts`, `export.ts`, `core.ts`; testes em `src/*.test.ts` e `e2e/*.spec.ts`; `scripts/check-pwa.mjs`.

## Premissa de evidência

Capturas do aplicativo e testes automatizados demonstram comportamento do protótipo digital. Não demonstram atendimento, entrevista, formação de mentora, resultado social, avaliação real de SUS ou teste de hardware.
