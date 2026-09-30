# Checklist para publicação futura no GitHub

Estado em 30/09/2026: **preparado para revisão, sem publicação remota**. A release `v1.0.0` e a tag abaixo são propostas; só criar após validação institucional e conferência do repositório de destino.

## Conteúdo a incluir após revisão

- [ ] Código-fonte, testes, configuração de build e scripts necessários para reprodução do protótipo digital.
- [ ] [README](../../README.md) com objetivo, instalação, comandos, limites e natureza conceitual do wearable.
- [ ] [CHANGELOG](../../CHANGELOG.md), [QA](../../FINAL_QA_REPORT.md), documentação canônica e [dossiê por atividade](README.md).
- [ ] Screenshots técnicos revisados em `evidence/final/`, `evidence/sprint-02-1/`, `evidence/sprint-04/` e `evidence/dossie/`, identificados como capturas do software. Evitar cópias redundantes.
- [ ] Criar um arquivo de licença escolhido e autorizado pelos titulares: `LICENSE` ainda não existe. Conferir se textos, imagens e materiais de terceiros admitem a mesma licença.
- [ ] Descrição pública coerente com [rascunho](META_05_ATIVIDADE_02/DESCRICAO_REPOSITORIO_GITHUB.md) e links válidos.

## Conteúdo a excluir ou revisar antes de qualquer envio

- [ ] Excluir da seleção de commit e publicação os cinco PDFs **não rastreados** `docs/Pagamento bolsa 01_06_Neto.pdf` a `05_06_Neto.pdf` e o JPEG **não rastreado** `docs/cpvt_6.jpeg`. Eles não integram o dossiê e podem conter dados pessoais.
- [ ] Inspecionar histórico e árvore por nomes, contatos, consentimentos, dados de participantes, chaves, tokens, logs e exportações locais. Não publicar dados sensíveis ou resultados de participantes.
- [ ] Confirmar que `node_modules/`, `dist/`, caches, relatórios temporários e arquivos de ambiente não entram na release.
- [ ] Verificar origem, autorização e contexto de cada screenshot; dados sintéticos devem estar indicados. Não incluir fotos de pessoas sem autorização.
- [ ] Não publicar PDFs gerados sem conferência visual, versão institucional e direitos de uso.

## Release e evidências

- [ ] Executar `npm run typecheck`, `npm run test`, `npm run build` e os E2E relevantes; anexar somente resultados desta execução com ambiente e data.
- [ ] Rodar o QA documental do dossiê, resolver links e pendências que bloqueiem a versão pública.
- [ ] Registrar commit de origem, notas de release, descrição de funcionalidades e limitações, licença e hashes dos anexos.
- [ ] Criar tag `v1.0.0` **após** a revisão; publicar release no repositório de destino aprovado.
- [ ] Arquivar URL, data, autor e captura da release como evidência; atualizar índice mestre e matriz SUAP somente após a publicação efetiva.

Publicação de artigo, vídeo e piloto real exige evidências próprias. O Git local comprova versionamento, mas não prova publicação no GitHub.
