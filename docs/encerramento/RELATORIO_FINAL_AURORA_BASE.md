# Relatório final base — A.U.R.O.R.A.

**Natureza:** base técnica para revisão e preenchimento institucional. **Data de referência:** 30/09/2026. Campos de atividade real permanecem pendentes de documentação. A autoria institucional e assinaturas devem ser confirmadas no sistema oficial.

## 1. Identificação

**Projeto:** A.U.R.O.R.A. — Unidade Autônoma para Reforço Oral Regional e Assistência. **Produto desta fase:** Protótipo Funcional Digital para Alfabetização, Cidadania e Inclusão. **Instituição:** Instituto Federal de Educação, Ciência e Tecnologia de Mato Grosso — IFMT, Campus Várzea Grande. **Coordenação:** Prof. Carlos Gracioli Neto. **Equipe discente:** Emanuelli Prado Sales; Jenniffer Karla da Silva Araujo; Juliana Silva de Jesus; Maria Isabel Borba Dranka; Nathalia de Souza Leite; Thayanne Melgueiro da Silva Bezerra Pinheiro. Responsabilidades constam da matriz de metas, sem atribuição específica a Maria Isabel.

## 2. Resumo

O projeto evoluiu da concepção de um dispositivo vestível para um protótipo funcional digital. A camada de software implementa interação local, trilhas de alfabetização funcional, persistência, operação offline, fluxo de participação, instrumentos de avaliação e ambiente da mentora. Testes automatizados e capturas registram o funcionamento técnico. A implementação física do vestível, o piloto com participantes e a formação presencial/remota de mentora não ocorreram nesta fase. Dados sintéticos servem apenas para demonstração.

## 3. Palavras-chave

Alfabetização funcional; tecnologia educacional; PWA; interação local; acessibilidade; protótipo digital.

## 4. Contextualização

A proposta busca apoiar a prática de leitura, linguagem e cidadania em tarefas cotidianas. A concepção original incluía um wearable. A impossibilidade de executar tempestivamente a aquisição de hardware levou à priorização do software e da validação digital, permitindo reduzir riscos e amadurecer requisitos antes de uma futura implementação embarcada. Essa decisão não substitui a validação com público-alvo.

## 5. Objetivos

**Geral:** desenvolver e documentar uma solução de apoio à alfabetização funcional. **Específicos:** estruturar requisitos e vocabulário inicial; construir o protótipo funcional digital; preparar fluxo e instrumentos de piloto; disponibilizar ambiente de mentoria; organizar relatório, evidências e materiais-base de divulgação. A relação detalhada objetivo–meta–atividade está em `01_MATRIZ_RASTREABILIDADE.md`.

## 6. Metodologia

Foram adotados design de interação, conteúdo inicial de desenvolvimento, implementação modular em React/TypeScript, motor local de regras, persistência IndexedDB, PWA e testes automatizados. Capturas Playwright documentam telas em navegador. Instrumentos de campo são modelos para uso posterior. Não há alegação de entrevistas, sessões com participantes ou avaliação longitudinal nesta documentação.

## 7. Execução das Metas

**Meta 1:** requisitos, vocabulário inicial, fluxos, arquiteturas e decisões documentados; validação participativa pendente. **Meta 2:** desenvolvimento e testes técnicos do protótipo digital; hardware físico não construído. **Meta 3:** consentimento, sessão, feedback, SUS, painel e modelos preparados; piloto real não executado. **Meta 4:** sete módulos e materiais digitais implementados; formação real não executada. **Meta 5:** sistema, relatórios, roteiros, artigo-base, resumo e evidências preparados; publicação externa depende de comprovante. Ver `02_MATRIZ_METAS_EVIDENCIAS.md`.

## 8. Desenvolvimento Técnico

O motor responde a entradas por regras e vocabulário local. Dez trilhas oferecem atividades curtas. O texto funciona como alternativa à voz, que depende de suporte do navegador. O aplicativo registra sessões locais com código anônimo, feedback separado do SUS e opção de exportação. Dados sintéticos de demonstração recebem identificação e filtros próprios.

## 9. Arquitetura

`src/data.ts` define conteúdo; `src/core.ts` processa interações; `src/Experience.tsx` apresenta a experiência; `src/Pilot.tsx` conduz participação; `src/storage.ts` persiste dados; `src/analytics.ts` calcula métricas; `src/export.ts` exporta; `src/Dashboard.tsx` e `src/Mentor.tsx` apresentam painel e mentoria. O service worker gerado pelo Vite fornece cache após primeiro acesso. Não há backend central nesta versão.

## 10. Resultados Técnicos

Há rotas navegáveis, dez trilhas, fluxo de consentimento, retomada de sessão, feedback, SUS, painel com segregação real/sintético, exportações, privacidade, mentoria, diagnóstico e créditos. Os resultados são funcionalidades observáveis do software, não resultados sociais. As telas finais estão em `evidence/final/` e catalogadas no índice.

## 11. Testes e QA

`FINAL_QA_REPORT.md` contém comandos, contagens, falhas corrigidas e limites da execução final. Testes unitários verificam motor, métricas e persistência/exportação; E2E verificam fluxos e navegação; build executa TypeScript; script PWA verifica cache/offline. A validação de acessibilidade é técnica e não substitui teste com usuários.

## 12. Produto Gerado

Protótipo funcional digital instalável como PWA, com documentação, testes automatizados, capturas e materiais-base de extensão. A página `/creditos` registra a equipe oficial. A representação da pulseira é conceitual.

## 13. Limitações

### Materialização Conceitual do Dispositivo Vestível

A Sprint 4 acrescentou um design vetorial editável para a futura pulseira: vista frontal e lateral, mapa de componentes, fluxo de interação, divisão entre software atual e hardware futuro e estados de operação. As rotas `/device`, `/device-report`, `/device-presentation` e `/device-poster` apresentam o conceito para exploração, relatório e comunicação. O desenho prevê corpo arredondado, botão principal, microfone, áudio, LED, vibração, bateria e processamento embarcado. O motor pedagógico e as trilhas funcionam hoje no navegador; não houve portabilidade para firmware, seleção de componentes, aquisição, montagem nem ensaio físico. Dimensões e autonomia descritas na Sprint 4 são requisitos conceituais ou metas futuras. A implementação física continua condicionada ao plano em `docs/sprint-04/08_PLANO_PROTOTIPAGEM_FISICA_FUTURA.md`.

Wearable físico inexistente nesta fase; nenhum backend central; dados locais ao navegador; piloto e formação real não realizados; voz variável entre navegadores; acessibilidade e conteúdo dependem de validação com o público; ausência de estudo longitudinal. Ver `LIMITACOES_E_TRABALHOS_FUTUROS.md`.

## 14. Lições Aprendidas

Planejar aquisições cedo, separar camadas de software e hardware, testar offline e persistência, identificar dados sintéticos e preservar registros verificáveis. Ver `LICOES_APRENDIDAS.md`.

## 15. Trabalhos Futuros

Aquisição e montagem do wearable, processamento embarcado, microfone/áudio/retorno tátil, revisão pedagógica, piloto real, formação da mentora, possível sincronização institucional e avaliação longitudinal.

## 16. Conclusões

O produto digital e sua arquitetura estão documentados e testados tecnicamente. O pacote prepara validação posterior com pessoas e evolução física. Nenhum impacto social, número de pessoas atendidas ou eficácia pedagógica é inferido dos testes de software. Ver versões em `CONCLUSAO_PROJETO.md`.

## 17. Evidências

Índice mestre: `evidence/EVIDENCE_INDEX.md`. Matrizes: `01_MATRIZ_RASTREABILIDADE.md` e `02_MATRIZ_METAS_EVIDENCIAS.md`. As capturas são evidência de interface em navegador. Registros futuros de atividades reais devem incluir data, contexto, autorização e arquivo verificável.

## 18. Anexos

Relação organizada em `ANEXOS.md`. Fotos reais futuras devem seguir `PLANO_CAPTURA_FOTOS.md`; nenhuma foto de atividade foi gerada para preencher lacunas.
