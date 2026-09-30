# Mapa de componentes e relação com o software

```text
USUÁRIA
   ↓ escolha / intenção
BOTÃO PRINCIPAL OU VOZ
   ↓ voz prevista via MICROFONE
MOTOR LOCAL
   ↓ seleção de intenção
MÓDULO PEDAGÓGICO
   ↓ atividade e feedback
RESPOSTA
   ↓ ÁUDIO + FEEDBACK TÁTIL + LED previstos
USUÁRIA
```

O diagrama editável correspondente está em `public/aurora-device/svg/flow.svg`; a divisão de camadas está em `architecture.svg` e os grupos físicos em `components.svg`.

| Bloco | Protótipo digital implementado | Possível equivalente físico futuro |
| --- | --- | --- |
| Entrada | Clique/toque, texto e voz opcional do navegador | Botão e microfone integrados |
| Motor | `src/core.ts` com regras locais | Processador e firmware ainda não selecionados |
| Conteúdo | `src/data.ts` e dez trilhas | Conteúdo embarcado, atualização a definir |
| Estado | `src/Experience.tsx` mostra aguardando, ouvindo, processando, respondendo, conclusão e erro | LED, áudio e vibração a projetar e testar |
| Persistência | `src/storage.ts` em IndexedDB | Memória e política de sincronização a definir |
| Offline | Cache PWA após primeiro carregamento | Execução embarcada sem rede a verificar |

O software desta fase representa a **camada lógica e pedagógica** que poderá informar a implementação física. Um teste no navegador não valida microfone, vibração, áudio, energia, ergonomia ou segurança de uma pulseira.
