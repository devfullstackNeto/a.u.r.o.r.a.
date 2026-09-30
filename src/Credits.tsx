import {Link} from 'react-router-dom';
import {coordinator,institution,students} from './team';

export default function Credits(){return <div className="page credits-page">
  <span className="eyebrow">CRÉDITOS INSTITUCIONAIS</span>
  <h1>A.U.R.O.R.A.</h1>
  <p className="lead">Unidade Autônoma para Reforço Oral Regional e Assistência — Protótipo Funcional Digital para Alfabetização, Cidadania e Inclusão.</p>
  <div className="credits-intro"><div className="card"><h2>Instituição e coordenação</h2><p>{institution}</p><p><strong>Coordenação:</strong> {coordinator}</p></div><div className="card"><h2>O produto desta fase</h2><p>O aplicativo implementa uma experiência educacional digital com motor local, trilhas, participação, instrumentos de avaliação e ambiente de mentoria. O dispositivo vestível físico não foi construído nesta fase.</p></div></div>
  <h2>Equipe discente</h2>
  <p>As vinculações abaixo seguem as responsabilidades oficialmente documentadas. A presença na equipe não implica atribuição de uma atividade específica sem registro.</p>
  <div className="credits-grid">{students.map(student=><article className="card" key={student.name}><h3>{student.name}</h3><p>{student.responsibility??'Integrante da equipe; atividade específica não documentada nesta fase.'}</p></article>)}</div>
  <p className="credits-note">As Metas 3 e 4 têm instrumentos e ambientes preparados. Piloto e formação com pessoas reais dependem de execução e registro posteriores. <Link to="/projeto">Conheça o projeto</Link>.</p>
</div>}
