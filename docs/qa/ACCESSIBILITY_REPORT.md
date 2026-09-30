# Verificação técnica de acessibilidade — Sprint 2.1

Data: 2026-09-30. Escopo: interface web digital, desktop Chromium e viewports móveis. Esta verificação técnica não substitui avaliação com pessoas que utilizam tecnologias assistivas.

| Critério | Verificação | Resultado |
|---|---|---|
| Navegação por teclado | `E2E-14`: Tab alcança link inicial; foco visível; menu abre e navega | Passou |
| Labels de formulário | Consentimento, comentário, escalas, SUS e selects acessíveis por label/legend nos testes Playwright | Passou nos fluxos testados |
| Mensagens de erro | Consentimento e SUS incompleto impedem avanço; erros usam `role="alert"` | Passou tecnicamente |
| Estados | Estado da interação usa `aria-live`; progresso e etapas são textuais | Implementado; leitor de tela real pendente |
| Controles | Foco visível e altura mínima de 44 px para ações principais e opções de escala | Implementado no CSS |
| Mobile | 375×667, 390×844 e 412×915 sem overflow horizontal em `/participar`, `/mentora`, `/dashboard` (`E2E-09`) | Passou |
| Contraste | Paleta institucional revisada visualmente nas capturas | Medição formal por ferramenta especializada pendente |
| Leitor de tela | Uso com NVDA/VoiceOver e compreensão de atividades | Não testado nesta sprint |

**Próximos passos antes de afirmar conformidade WCAG:** auditoria automática de contraste/semântica, teste completo apenas por teclado, teste com leitor de tela e avaliação com participantes mediante procedimento institucional. Não se declara certificação de acessibilidade.
