# Auditoria inicial — Sprint 2.1

Data: 2026-09-30. Escopo: estado do repositório antes das alterações desta sprint. Inspeção do código, rotas, documentação, testes e evidências existentes. Os testes anteriores estão registrados em `FINAL_QA_REPORT.md`; existência de código não equivale a validação desta sprint.

| Funcionalidade | Arquivo/componente | Status | Evidência encontrada | Ação necessária |
|---|---|---|---|---|
| Landing e rotas principais | `src/App.tsx` | Implementado | Rotas `/`, `/projeto`, `/experiencia`, `/device`, `/participar`, `/mentora`, `/dashboard`, `/diagnostics` | Preservar; ampliar rotas de privacidade |
| Fluxo `/participar` | `Pilot` em `src/App.tsx` | Parcial | Apresentação, consentimento, tutorial, experiência, avaliação e agradecimento | Persistir etapa; impedir duplicação; separar orientações, feedback e SUS |
| Consentimento | `Pilot` | Precisa correção | Checkbox e texto breve | Explicar dados, voluntariedade, saída e finalidade com clareza; registrar versão/data |
| Identificador anônimo | `generateId` em `src/core.ts` | Parcial | Padrão `AUR-XXXXXX` com `Math.random` | Usar fonte criptográfica, verificar colisão, persistir e oferecer cópia |
| Sessões | `Session` em `src/core.ts`, `src/storage.ts` | Parcial | ID, `synthetic`, datas, interações, comentário e SUS | Adicionar participantId, status, eventos de etapa e campos de feedback; migração de registros antigos |
| Dez trilhas | `src/data.ts`, `respond` | Parcial | Uma atividade por trilha; intents abrem algumas trilhas | Garantir seleção direta de todas as dez e sequência funcional em cada uma |
| SUS | `calculateSUS`, `Pilot` | Implementado com lacunas | Fórmula padrão e validação de dez respostas; teste unitário | Separar da avaliação geral, persistir em etapa própria e ampliar testes |
| Feedback | `Pilot` | Parcial | Comentário livre opcional | Adicionar quatro escalas 1–5 e manter comentário opcional |
| Separação sintético/real | `synthetic` e filtros do painel | Implementado com lacunas | Campo explícito, filtros e limpeza seletiva | Testar ausência de vazamento; distinguir registros locais de atendimento institucional |
| Seed | `makeSyntheticSessions` | Parcial | 25 sessões sintéticas determinísticas | Variar métricas de forma plausível sem parecer dado real; testar |
| Dashboard | `Dashboard` | Parcial | Métricas básicas calculadas, gráfico e filtros | Seletores dedicados, participantes únicos por código, conclusão, modos, feedback e distribuição SUS; estado vazio |
| Exportação | Repositório | Ausente | Nenhum exportador CSV/JSON | Implementar exportações rotuladas e documentar formato |
| Mentora | `Mentor` | Parcial | Guia, checklist simples, vocabulário e sessões locais | Tornar formação navegável; criar checklists pré/pós, materiais e orientações práticas |
| Privacidade | Texto na página de projeto e README | Parcial | Explicação dispersa | Criar `/privacidade`, exclusão e política técnica documentada |
| Persistência | `src/storage.ts` | Parcial | Adapter IndexedDB v1, `list/save/seed/removeSynthetic` | Versionamento, leitura por ID, criação exclusiva, falhas e exclusão seletiva |
| PWA | `public/sw.js`, manifest | Implementado com limite | Cache local; verificação anterior em Chromium | Revalidar no final, especialmente nova rota |
| Testes | `src/core.test.ts`, `e2e/flows.spec.ts` | Parcial | 6 unitários e 11 E2E reportados antes desta sprint | Ampliar cenários reais de fluxo, agregação, exportação, mobile e acessibilidade técnica |
| Documentos institucionais | `docs/03-meta-03-piloto`, `docs/04-meta-04-mentoria` | Modelos | Não afirmam piloto ou formação real | Atualizar métodos e limites sem fabricar resultados |

**Diagnóstico:** existe um demonstrador digital executável. O endurecimento necessário concentra-se em integridade do fluxo e dos dados, clareza de consentimento, métricas rastreáveis e operação local para futuro piloto. Não há evidência de atendimento real, avaliação com participantes ou formação institucional executada.
