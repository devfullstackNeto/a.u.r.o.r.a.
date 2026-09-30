# Privacidade e dados

O protótipo digital usa IndexedDB (`aurora-digital`, versão 2) para sessões. A abertura atualiza o esquema com índices `synthetic` e `participantId` sem apagar registros anteriores. A leitura normaliza registros da versão inicial, preenchendo campos novos a partir de dados existentes quando possível. Checklists e rascunhos de avaliação usam armazenamento local do navegador.

Cada sessão possui `synthetic: boolean` explícito. Sessões de demonstração usam `true`; o fluxo `/participar` cria `false` após consentimento. O painel mantém filtros separados. A exclusão de dados sintéticos não remove registros não sintéticos. A página `/privacidade` oferece exclusão local seletiva; arquivos exportados anteriormente não são afetados.

O código `AUR-XXXXXX` não incorpora informação pessoal. A criação usa aleatoriedade criptográfica do navegador quando disponível e verifica colisão com códigos já armazenados. O identificador interno da sessão é independente. A interface não solicita nome, CPF, e-mail, telefone ou endereço. Respostas e comentários livres podem, contudo, conter dados inseridos espontaneamente; a interface orienta a evitá-los.

Não há servidor, transmissão automática, autenticação ou sincronização. Logo, a equipe não recebe os registros por esta versão. Antes de um piloto institucional real, definir responsáveis, retenção, procedimento de coleta/exportação, ambiente de uso, proteção dos arquivos, exclusão, contatos e aprovações pertinentes. A interface de `StorageAdapter` permite futuro adapter remoto sem declarar que tal adapter existe hoje.
