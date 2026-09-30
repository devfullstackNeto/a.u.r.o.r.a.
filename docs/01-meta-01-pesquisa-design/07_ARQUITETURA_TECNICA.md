# Arquitetura técnica

> **Estado documental:** protótipo funcional digital. A pulseira física não foi construída nem testada. Dados da demonstração são sintéticos; registros de piloto nesta versão permanecem apenas no navegador e não constituem, por si, avaliação institucional realizada.

React e TypeScript apresentam os fluxos; `src/core.ts` contém o motor determinístico; `src/data.ts` fornece conteúdo; `src/storage.ts` define adapter IndexedDB; service worker armazena assets locais. A interface `PersistenceAdapter` permite substituição futura por armazenamento remoto.
