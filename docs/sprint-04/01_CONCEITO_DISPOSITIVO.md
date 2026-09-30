# Conceito do dispositivo vestível A.U.R.O.R.A.

**Natureza:** design conceitual para futura implementação física. Nenhum componente foi comprado, montado ou testado nesta sprint. O produto executável atual é o protótipo funcional digital.

## Propósito e forma

Concebe-se uma pulseira educacional compacta, de corpo arredondado, faixa ajustável e um botão principal grande. A forma busca uma interação discreta e simples, inclusive para pessoas com baixa escolaridade. Um LED indica estado; microfone e saída de áudio poderiam permitir diálogo curto; um motor vibratório poderia reforçar feedback sem depender apenas de som ou cor. A combinação de LED, áudio, tato e linguagem textual/sonora deve ser avaliada com o público antes de qualquer decisão final.

## Arquitetura prevista

O navegador já demonstra motor local de regras, dez trilhas, estados de interação, persistência e operação offline após cache inicial. Uma versão física futura precisaria de processamento embarcado e firmware, botão, microfone, áudio, vibração, LED e bateria. A lógica não pode ser considerada portada para firmware: a arquitetura é uma referência, e a integração ainda deve ser especificada e testada.

## Uso e manutenção previstos

O conceito prioriza poucos controles, superfícies simples de limpar, faixa substituível, acesso planejado à alimentação e proteção adequada ao uso cotidiano. Resistência, segurança elétrica, autonomia, acústica, peso, ajuste e manutenção são critérios de projeto futuro, não resultados alcançados. Conectividade poderia apoiar atualização ou sincronização sob governança institucional; a experiência pedagógica essencial deveria funcionar localmente quando viável.

## Representações

SVGs editáveis em `public/aurora-device/svg/`: `front.svg`, `side.svg`, `components.svg`, `flow.svg`, `architecture.svg`, `states.svg`. As imagens servem para comunicação e discussão técnica; proporções e posições não são desenho de fabricação. A legenda padrão está em `06_LEGENDAS_E_DISCLAIMERS.md`.
