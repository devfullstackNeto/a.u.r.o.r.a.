# Alterações realizadas — Sprint 2.1

## Produto

- `src/core.ts`: modelo de sessão com ID interno e código de participante, status, datas, trilhas, notas de feedback e progresso; geração de código com aleatoriedade criptográfica quando disponível; seed sintético variado.
- `src/storage.ts`: `StorageAdapter`, IndexedDB v2, migração de leitura, criação exclusiva, busca por ID, exclusão seletiva e verificação de colisão.
- `src/Experience.tsx`: escolha direta das dez trilhas, interação e conclusão persistidas; recuperação de contexto de atividade ao retomar.
- `src/Pilot.tsx`: etapas controladas, consentimento, código copiável, tutorial, feedback separado do SUS, recuperação de sessão e rascunho local.
- `src/analytics.ts`: seletores e indicadores calculados; `src/export.ts`: CSV/JSON com origem do conjunto.
- `src/Dashboard.tsx`: filtros, estados vazio/erro/carregando, métricas adicionais, distribuição SUS e exportações.
- `src/Mentor.tsx`: módulos navegáveis, checklists antes/depois, materiais e acompanhamento local.
- `src/Privacy.tsx`: explicação de dados e exclusão seletiva neste navegador.
- `src/App.tsx`: preservadas páginas institucionais; integração dos módulos e rota `/privacidade`.

## Defeitos corrigidos

O fluxo anterior perdia a etapa após recarga; respostas parciais de feedback não eram mantidas; dez trilhas não podiam ser escolhidas diretamente; códigos não verificavam colisão; métricas de participantes eram aproximação por sessões; não havia exportação nem exclusão local de registros não sintéticos. A implementação atual resolve esses pontos tecnicamente, dentro do armazenamento do navegador.

## Limite da alteração

Não há backend, coleta central, hardware físico, formação institucional ou atendimento real. A geração e as capturas de dados demonstrativos usam `synthetic: true`.
