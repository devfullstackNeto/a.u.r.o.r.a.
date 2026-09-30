# Relatório da Meta 1

> **Estado documental:** protótipo funcional digital. A pulseira física não foi construída nem testada. Dados da demonstração são sintéticos; registros de piloto nesta versão permanecem apenas no navegador e não constituem, por si, avaliação institucional realizada.

## Desenvolvimento e decisões

O acervo desta meta reúne plano de execução (`01`), banco de vocabulário (`02`), fluxo de interação (`03`), requisitos funcionais (`04`) e não funcionais (`05`), arquitetura pedagógica (`06`), arquitetura técnica (`07`) e diário de bordo (`08`). Essas peças orientaram as dez trilhas em `src/data.ts`, a experiência em `src/Experience.tsx` e o motor de regras em `src/core.ts`.

O vocabulário é **inicial de desenvolvimento**, escolhido para prototipagem e revisão pedagógica posterior. Não é vocabulário coletado de participantes reais; não há entrevista comprovada neste pacote. Os fluxos priorizam frases curtas, entrada por texto sempre disponível, voz opcional e feedback progressivo. A arquitetura técnica separa conteúdo, motor, persistência e apresentação; a abordagem não depende de um modelo de linguagem.

## Evidência e limite

AUR-M1-EV-001 documenta requisitos e decisões. AUR-FIN-02/07 mostram a apresentação e as trilhas no produto. Os testes de `src/core.test.ts` e E2E verificam comportamento digital; não medem adequação cultural, acessibilidade com público-alvo ou efeito pedagógico. Responsabilidade oficialmente vinculada: Jenniffer Karla da Silva Araujo.
