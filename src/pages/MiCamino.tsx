import { Link } from "react-router-dom";
import { CARTAS } from "../data/content";
import { useAuth } from "../lib/auth";
import { getEntries, getSaved, getStories } from "../lib/storage";

export default function MiCamino() {
  const { user, logout } = useAuth();
  const saved = getSaved();
  const entries = getEntries();
  const stories = getStories();
  const savedCartas = CARTAS.filter((c) => saved.includes(c.slug));

  if (!user) {
    return (
      <section className="page-hero">
        <div className="narrow" style={{ textAlign: "center" }}>
          <h1>Aquí vive tu camino.</h1>
          <p>Entra para ver lo que has escrito, guardado y compartido.</p>
          <Link className="btn btn-primary" to="/entrar?next=/mi-camino" style={{ marginTop: 20 }}>
            Entrar a mi espacio
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">Mi camino</p>
        <h1>Hola, {user.name}.</h1>
        <p>Esto es lo que has ido tejiendo aquí: lo escrito, lo guardado y lo compartido.</p>
        <div className="hero-actions" style={{ margin: "22px 0 36px" }}>
          <Link className="btn btn-primary" to="/escribir">
            Escribir
          </Link>
          <button className="btn btn-ghost" onClick={logout}>
            Salir
          </button>
        </div>
        <div className="library-grid">
          <article className="library-card">
            <div>
              <p className="meta">Diario</p>
              <h2>{entries.length}</h2>
              <p className="muted">notas guardadas</p>
            </div>
            <Link className="enter-arrow" to="/diario">
              Abrir →
            </Link>
          </article>
          <article className="library-card">
            <div>
              <p className="meta">Cartas</p>
              <h2>{savedCartas.length}</h2>
              <p className="muted">guardadas para volver</p>
            </div>
            <Link className="enter-arrow" to="/cartas">
              Leer →
            </Link>
          </article>
          <article className="library-card">
            <div>
              <p className="meta">Historias</p>
              <h2>{stories.length}</h2>
              <p className="muted">compartidas con cuidado</p>
            </div>
            <Link className="enter-arrow" to="/historias">
              Ver →
            </Link>
          </article>
        </div>
        {savedCartas.length > 0 && (
          <div style={{ marginTop: 48 }}>
            <h2>Cartas que quisiste conservar</h2>
            <div className="cards" style={{ marginTop: 16 }}>
              {savedCartas.map((carta) => (
                <Link className="letter-row" key={carta.slug} to={`/cartas/${carta.slug}`}>
                  <h2>{carta.title}</h2>
                  <p className="muted">{carta.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
