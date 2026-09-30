# QA documental — Sprint 5

Data: 30/09/2026. Escopo: dossiê por Meta/Atividade e alteração mínima de identificador na seção de arquitetura para captura automatizada.

## Verificações executadas

| Critério | Método | Resultado |
| --- | --- | --- |
| Links locais e arquivos | `node scripts/check-dossie-links.mjs` | 38 documentos Markdown e 288 links locais verificados; nenhum quebrado ou vazio |
| Duplicidade e marcadores | SHA-256 dos 36 documentos do dossiê; busca por `TODO`, `TBD` e `A preencher` | Nenhum documento exatamente duplicado e nenhum marcador de preenchimento nos arquivos novos |
| Capturas novas | `npm run capture:dossie -- --base-url=http://127.0.0.1:4173/` com Vite local | 6 PNGs gerados em contexto Playwright isolado, com dados sintéticos |
| Capturas históricas | Comparação com inventário e mapas | Reutilizadas por referência; a suíte E2E regenerou algumas e os arquivos originais rastreados foram restaurados |
| TypeScript | `npm run typecheck` | Aprovado |
| Testes unitários | `npm run test` | 13 aprovados |
| Build | `npm run build` | Aprovado; aviso de bundle JavaScript acima de 500 kB |
| Testes E2E | `npm run test:e2e` | 48 aprovados; 4 capturas móveis intencionalmente ignoradas |
| Formatação Git | `git diff --check` | Sem erro de whitespace |
| Equipe | `src/team.ts`, testes E2E de footer/créditos | Seis nomes em ordem alfabética pelo primeiro nome; footer abreviado, créditos completos |
| Reivindicações | Busca e leitura dos registros, roteiros e matriz | Piloto, mentoria real, hardware, submissão, vídeo e release tratados como pendentes |

Os testes `npm run test` e `npm run build` falharam inicialmente dentro do sandbox porque o esbuild recebeu “Acesso negado” ao resolver `vite.config.ts`. Ambos foram repetidos com acesso local autorizado e concluíram com sucesso; a falha não indica defeito do projeto.

## Lacunas de comprovação

- `M2-EV-08`: não existe PNG confiável de resultado de teste. Usar [QA final](../../FINAL_QA_REPORT.md) e a saída da execução; produzir captura apenas se houver procedimento reprodutível e legível.
- Vídeos 1–5: roteiros completos, mas não gravados nem publicados.
- Piloto e formação: não há termos assinados, listas de presença, fotos ou resultados reais.
- Meta 5: artigo não submetido; repositório, tag e release não publicados remotamente.
- PDFs principais: pendentes por falta de conversor Markdown com renderização confiável; consultar [lista](../dossie-final/ARQUIVOS_PENDENTES_CONVERSAO_PDF.md).
- Licença pública: arquivo `LICENSE` ausente; decisão dos titulares pendente.

Nenhum dos cinco PDFs de pagamento de bolsa ou do JPEG não rastreados em `docs/` foi lido, alterado ou incluído. Os arquivos antigos e seus textos canônicos foram preservados.
