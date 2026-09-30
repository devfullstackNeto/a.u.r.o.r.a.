# Auditoria inicial — Sprint 4

Data: 30/09/2026. Inspeção da base da Sprint 3.1 antes das alterações específicas da visualização do wearable. O ajuste de ordenação e concisão do footer solicitado na mesma mensagem começou antes deste registro e não altera o estado do dispositivo aqui auditado.

| Item | Estado inicial | Evidência consultada | Lacuna da Sprint 4 |
| --- | --- | --- | --- |
| README | Declara corretamente que a pulseira física não foi construída; descreve `/device` como simulação | `README.md` | Explicar conceito físico e ligar diagramas editáveis. |
| Página `/device` | Representação CSS simples e experiência digital incorporada | `src/App.tsx`, `src/style.css`, `src/Experience.tsx` | Apresentar vistas, componentes, estados, fluxo, arquitetura, telemetria e aviso conceitual com hierarquia visual. |
| Página `/projeto` | Objetivos, metas, arquitetura, ética e limites | `src/App.tsx` | Acrescentar sequência da prototipagem digital à possível materialização física. |
| `/creditos` | Equipe e limites da fase digital | `src/Credits.tsx`, `src/team.ts` | Sem mudança de conteúdo prevista; apenas ordem alfabética solicitada separadamente. |
| Relatório de encerramento | Produto digital e hardware futuro descritos | `docs/encerramento/RELATORIO_FINAL_AURORA_BASE.md` | Inserir seção de materialização conceitual, com limite explícito. |
| Evidências | 15 capturas finais, incluindo a página antiga de dispositivo | `evidence/final/`, `evidence/EVIDENCE_INDEX.md` | Oito capturas próprias da Sprint 4, todas rotuladas como conceito. |
| Assets/public | Ícone, manifesto e service worker; sem imagens de dispositivo | `public/` | Criar SVGs editáveis e documentar que PNGs fotorrealistas não foram produzidos. |
| Arquitetura | Motor local e dez trilhas funcionais no navegador | `src/core.ts`, `src/data.ts`, `src/storage.ts`, `src/Experience.tsx` | Mapear software atual para componentes físicos futuros sem alegar integração embarcada. |
| QA | 13 unitários, 39 E2E, build/PWA aprovados na Sprint 3.1 | `FINAL_QA_REPORT.md`, `e2e/` | Exercitar novas rotas, responsividade, acessibilidade básica, capturas e links. |

## Limite de evidência

Há validação técnica do software em navegador. Não há compra, montagem, prototipagem física, ensaio de bateria, áudio embarcado, vibração, resistência ou uso de wearable por participantes. Dimensões, autonomia e componentes nesta sprint serão requisitos conceituais ou metas futuras.
