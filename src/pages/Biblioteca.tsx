import { Link } from "react-router-dom";
import { TEMAS } from "../data/content";

export default function Biblioteca() {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">Biblioteca</p>
        <h1>Organizada por momentos de vida</h1>
        <p>Aquí no hay diagnósticos ni etiquetas clínicas. Solo momentos por los que casi todas las personas pasamos alguna vez.</p>
        <figure className="hero-photo" style={{ margin: "2.2rem 0 2.4rem" }}>
          <img
            src="/images/biblioteca.jpg"
            alt="Libros apilados junto a una cortina de lino con luz natural"
            style={{ height: 380, borderRadius: 24 }}
          />
        </figure>
        <div className="library-grid">
          {TEMAS.map((tema) => (
            <Link className="library-card" key={tema.slug} to={`/biblioteca/${tema.slug}`}>
              <div>
                <h2>{tema.label}</h2>
                <p className="muted" style={{ marginTop: 8 }}>
                  {tema.blurb}
                </p>
              </div>
              <span className="enter-arrow">Entrar →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
