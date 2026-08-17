import { Link, Navigate, useParams } from "react-router-dom";
import { TEMAS, cartasByTema, ejerciciosByTema, type Tema } from "../data/content";
import { getStories } from "../lib/storage";

export default function BibliotecaTema() {
  const { slug } = useParams();
  const tema = TEMAS.find((t) => t.slug === slug);
  if (!tema) return <Navigate to="/biblioteca" replace />;

  const cartas = cartasByTema(tema.slug as Tema);
  const ejercicios = ejerciciosByTema(tema.slug as Tema);
  const stories = getStories().filter((s) => s.tema === tema.slug);

  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">Biblioteca</p>
        <h1>{tema.label}</h1>
        <p>{tema.blurb}</p>

        <div style={{ marginTop: 48 }}>
          <h2>Cartas</h2>
          {cartas.length === 0 ? (
            <p className="muted" style={{ marginTop: 12 }}>
              Todavía no hay cartas sobre esto. Pronto las habrá.
            </p>
          ) : (
            <div className="cards" style={{ marginTop: 16 }}>
              {cartas.map((carta) => (
                <Link className="letter-row" key={carta.slug} to={`/cartas/${carta.slug}`}>
                  <h2>{carta.title}</h2>
                  <p className="muted">{carta.excerpt}</p>
                  <p className="meta">{carta.minutes} min</p>
                </Link>
              ))}
            </div>
          )}
        </div>

        <div style={{ marginTop: 48 }}>
          <h2>Historias de otras personas</h2>
          {stories.length === 0 ? (
            <p className="muted" style={{ marginTop: 12 }}>
              Aún nadie ha compartido su historia aquí.
            </p>
          ) : (
            <div className="cards" style={{ marginTop: 16 }}>
              {stories.map((story) => (
                <article className="letter-row" key={story.id}>
                  <h2>{story.title}</h2>
                  <p className="muted">{story.body}</p>
                </article>
              ))}
            </div>
          )}
        </div>

        <div style={{ marginTop: 48, marginBottom: 40 }}>
          <h2>Ejercicios para hacer en casa</h2>
          {ejercicios.length === 0 ? (
            <p className="muted" style={{ marginTop: 12 }}>
              Estamos preparando ejercicios para este momento.
            </p>
          ) : (
            <div className="cards" style={{ marginTop: 16 }}>
              {ejercicios.map((ej) => (
                <article className="paper card-pad" key={ej.slug}>
                  <p className="meta">{ej.minutes} min</p>
                  <h3>{ej.title}</h3>
                  <p className="muted" style={{ margin: "8px 0 16px" }}>
                    {ej.blurb}
                  </p>
                  <Link className="btn btn-outline" to="/escribir" state={{ prompt: ej.prompt, exercise: ej.title }}>
                    Hacerlo escribiendo
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
