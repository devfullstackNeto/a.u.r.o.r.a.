# Matriz de rastreabilidade

> **Estado documental:** protótipo funcional digital. A pulseira física não foi construída nem testada. Dados da demonstração são sintéticos; registros de piloto nesta versão permanecem apenas no navegador e não constituem, por si, avaliação institucional realizada.

| Objetivo | Meta | Atividade | Requisito | Funcionalidade | Teste | Resultado | Evidência | Documento |
|---|---|---|---|---|---|---|---|---|
| Interação local | 2 | Motor | RF01–RF04 | `src/core.ts` | `src/core.test.ts` | Ver QA | QA_REPORT | Meta 2/03 |
| Sessões | 2/3 | Registro | RF05 | `src/storage.ts` | E2E fluxo | Ver QA | QA_REPORT | Meta 3/01 |
| SUS | 3 | Avaliação | RF07 | `calculateSUS` | Unitário/E2E | Ver QA | QA_REPORT | Meta 3/05 |
| Mentoria | 4 | Apoio | RF10 | `/mentora` | E2E navegação | Ver QA | QA_REPORT | Meta 4/02 |
| Indicadores | 5 | Sistematização | RF08–RF09 | `/dashboard` | E2E navegação | Ver QA | QA_REPORT | Meta 5/02 |
| Consentimento e retomada | 3 | Preparação do piloto | RF05 | `/participar`, `src/Pilot.tsx` | E2E-01, 08, 13 | Ver Sprint 2.1 | AUR-M3-EV-002/003 | Termo modelo e Sprint 2.1 |
| Segregação de dados | 3 | Dados | RF09 | `src/storage.ts`, `/dashboard` | E2E-04 a 06 | Ver Sprint 2.1 | AUR-M3-EV-005 | Privacidade e dados |
| Exportação | 3/5 | Sistematização | RF08 | `src/export.ts` | E2E-10 e teste unitário | Ver Sprint 2.1 | RESULTADOS_TESTES | Formato de exportação |
| Privacidade | 3 | Preparação do piloto | RNF05 | `/privacidade` | E2E de rotas e captura | Ver Sprint 2.1 | AUR-M2-EV-004 | Privacidade e dados |
