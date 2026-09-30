# Formato das exportações

O painel permite selecionar filtro (`TODOS`, `REAIS`, `SINTÉTICOS`), conteúdo e formato. Conteúdos: sessões, atividades/interações, feedback, SUS e indicadores agregados. Os arquivos são gerados **localmente no navegador**; nenhum envio ocorre.

## Identificação do conjunto

Cada exportação recebe `dataset`: `REAL`, `SINTÉTICO`, `MISTO` ou `VAZIO`. `REAL` significa registro local com `synthetic: false`; não comprova atendimento institucional. O nome do arquivo também contém a origem. O JSON contém `metadata` e `data`. No CSV, a primeira linha de dados inclui os campos de metadados, seguida das linhas do conteúdo selecionado. O CSV usa UTF-8 com BOM, aspas em todos os campos e CRLF.

## Campos

Sessões: IDs anônimos, `synthetic`, status, datas, trilhas e totais. Atividades: sessão, trilha, horário, modo, entrada, resposta, intent e acerto. Feedback: quatro notas e comentário opcional. SUS: dez respostas e escore calculado. Indicadores: agregações do filtro escolhido, inclusive distribuição por trilha e SUS.

Campos livres podem conter informação escrita pela pessoa apesar das orientações para evitar dados pessoais. Revise qualquer arquivo antes de compartilhar. A exportação não inclui nome, CPF, e-mail, telefone ou endereço como campos estruturados.
