# Auditoria de alegações — Sprint 3.1

Busca em 30/09/2026 em README, CHANGELOG, QA, `docs/`, `src/` e índice de evidências, com `rg -n -i` para `atendid|entrevist|piloto realizado|mentora capacitada|hardware validado|pulseira construída|artigo submetido|vídeo publicado|impacto`, seguida de leitura contextual. Uma expressão em negação, modelo ou plano não constitui alegação positiva.

| Arquivo/trecho | Evidência pertinente | Decisão |
| --- | --- | --- |
| `src/Mentor.tsx`: “Não foi coletado em entrevistas comunitárias” | Vocabulário inicial da Meta 1; sem transcrições | Manter negação |
| `src/App.tsx`: “O protótipo digital não comprova impacto social ou pedagógico” | Testes técnicos apenas | Manter limite |
| `README.md`: “não são atendimentos reais”; “não há teste com participantes” | Capturas e testes automatizados | Manter qualificações |
| `docs/03-meta-03-piloto/08_MODELO_RELATORIO_PILOTO.md`: campos reais em branco | Modelo sem dados | Preencher só após piloto autorizado |
| `docs/encerramento/GUIA_PREENCHIMENTO_SUAP.md`: “[PREENCHER APÓS ATIVIDADE REAL]” | Nenhuma contagem real | Manter pendente |
| `docs/05-meta-05-disseminacao/08_RELATORIO_META_05.md`: vídeo/artigo em negação | Roteiro e artigo-base, sem link/recibo | Manter negação |
| `docs/encerramento/02_MATRIZ_METAS_EVIDENCIAS.md`: divulgação sem comprovação | Materiais-base | Manter implementação parcial |
| `docs/encerramento/RELATORIO_FINAL_AURORA_BASE.md`: nenhuma alegação de impacto | Matrizes, QA e índice | Manter distinção técnica/social |

## Correções e resultado

Os relatórios das Metas 1, 2 e 5 agora identificam a origem do vocabulário, limitam a validação ao software e separam roteiro/artigo-base de divulgação efetiva. Os relatórios das Metas 3 e 4 declaram a ausência de piloto e formação reais. `/projeto`, `/creditos`, README e matrizes repetem esses limites. A varredura contextual não encontrou alegação positiva sem suporte nas expressões pesquisadas. Revisão humana permanece necessária antes de submissão institucional, sobretudo para registros futuros.

**Não comprovados nesta fase:** atendimentos, entrevistas, participantes, aplicação real de SUS, mentora formada, teste de hardware, artigo submetido, vídeo publicado, impacto social ou eficácia pedagógica. Dados sintéticos e automação são identificados.
