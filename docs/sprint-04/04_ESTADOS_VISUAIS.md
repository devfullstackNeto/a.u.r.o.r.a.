# Estados visuais conceituais

As cores são propostas de comunicação; cada estado deve ter texto e, se apropriado, áudio/tato equivalentes. O aplicativo digital já mostra estados textuais; o LED e a vibração físicos não foram implementados. `public/aurora-device/svg/states.svg` é o diagrama editável.

| Estado | Sinal visual proposto | Significado e resposta prevista | Situação atual |
| --- | --- | --- | --- |
| AGUARDANDO | Neutro, discreto | Pronta para escolha; sem estímulo contínuo | Texto no software |
| OUVINDO | Âmbar suave | Entrada de voz em curso; permitir interrupção | Estado da voz do navegador |
| PROCESSANDO | Azul-esverdeado | Pedido recebido, motor local interpretando | Estado no software |
| RESPONDENDO | Azul | Resposta textual/falada em andamento | Texto e voz opcional no navegador |
| ATIVIDADE CONCLUÍDA | Verde | Resposta aceita; confirmação curta | Mensagem de sucesso no software |
| ERRO | Coral | Falha recuperável; orientação para repetir ou digitar | Mensagem de erro no software |
| OFFLINE | Azul-acinzentado | Recursos locais disponíveis; voz pode variar | PWA offline após cache inicial |

Os sinais físicos, duração de vibração, intensidade do LED, contraste em ambiente externo e volume exigem validação de acessibilidade e ensaios posteriores. Não depender apenas da cor para comunicar significado.
