# Arquitetura de software

> **Estado documental:** protótipo funcional digital. A pulseira física não foi construída nem testada. Dados da demonstração são sintéticos; registros de piloto nesta versão permanecem apenas no navegador e não constituem, por si, avaliação institucional realizada.

Camadas: interface React → motor local `src/core.ts` → catálogo `src/data.ts` e persistência `src/storage.ts`. O motor não consulta serviços externos. O PWA armazena assets do mesmo domínio via service worker.
