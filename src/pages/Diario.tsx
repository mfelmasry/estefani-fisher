import { Link } from "react-router-dom";
import { useAuth } from "../lib/auth";
import { getEntries } from "../lib/storage";

export default function Diario() {
  const { user } = useAuth();
  const entries = getEntries();

  if (!user) {
    return (
      <section className="page-hero">
        <div className="narrow" style={{ textAlign: "center" }}>
          <h1>Tu diario es privado.</h1>
          <p>Entra a tu espacio para escribir y volver a leerte cuando quieras.</p>
          <Link className="btn btn-primary" to="/entrar?next=/diario" style={{ marginTop: 20 }}>
            Entrar a mi espacio
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page-hero">
      <div className="narrow">
        <p className="eyebrow">Diario</p>
        <h1>Lo que has ido dejando aquí</h1>
        <p>Solo tú puedes leerlo. Vuelve las veces que quieras.</p>
        <Link className="btn btn-primary" to="/escribir" style={{ margin: "22px 0 28px" }}>
          Escribir ahora
        </Link>
        {entries.length === 0 ? (
          <div className="empty">Todavía no hay nada escrito. El primer renglón puede ser breve.</div>
        ) : (
          <div className="journal-list">
            {entries.map((entry) => (
              <article className="paper journal-item" key={entry.id}>
                <p className="meta">
                  {new Date(entry.createdAt).toLocaleDateString("es-MX", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                  {entry.forEstefani ? " · Para Estefani" : ""}
                </p>
                {entry.prompt && <p className="muted">{entry.prompt}</p>}
                <p>{entry.body}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
