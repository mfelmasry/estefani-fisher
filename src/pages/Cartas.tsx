import { Link } from "react-router-dom";
import { CARTAS, temaLabel } from "../data/content";

export default function Cartas() {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">Cartas</p>
        <h1>Cartas para leer despacio</h1>
        <p>No son artículos ni consejos. Son cartas escritas para alguien que quizá seas tú, en un día cualquiera.</p>
        <div className="cards" style={{ marginTop: 36 }}>
          {CARTAS.map((carta) => (
            <Link className="letter-row" key={carta.slug} to={`/cartas/${carta.slug}`}>
              <p className="meta">
                {temaLabel(carta.tema)} · {carta.minutes} min
              </p>
              <h2>{carta.title}</h2>
              <p className="muted">{carta.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
