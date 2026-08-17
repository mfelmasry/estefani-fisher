import { Link } from "react-router-dom";
import {
  CARTA_DE_HOY,
  CARTAS,
  EJERCICIOS,
  PREGUNTA_DEL_DIA,
  TEMAS,
  cartaBySlug,
  temaLabel,
} from "../data/content";

export default function Home() {
  const carta = cartaBySlug(CARTA_DE_HOY)!;
  const ejercicio = EJERCICIOS[0];
  const recientes = CARTAS.slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Qué gusto que estés aquí</p>
            <h1>
              Un lugar para escribir,
              <br />
              <em>leer y respirar.</em>
            </h1>
            <p className="lede">
              Este no es un consultorio ni una red social. Es un espacio para dedicarte unos minutos: leer una carta,
              escuchar algo tranquilo, escribir lo que llevas contigo. Vuelve cuando quieras.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/escribir">
                Escribir algo hoy
              </Link>
              <Link className="btn btn-ghost link-underline" to="/cartas">
                Leer las cartas
              </Link>
            </div>
          </div>
          <figure className="hero-photo">
            <img
              src="/images/hero.jpg"
              alt="Cuaderno abierto, una taza de café y una rama de salvia sobre una mesa con luz natural"
            />
            <figcaption className="hero-caption">Un rincón para volver a ti, sin prisa.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="container panel-grid">
          <article className="paper card-pad question-card">
            <p className="eyebrow">Pregunta del día</p>
            <h3>{PREGUNTA_DEL_DIA}</h3>
            <Link className="btn btn-outline" to="/escribir" state={{ prompt: PREGUNTA_DEL_DIA }}>
              Responder en privado
            </Link>
          </article>
          <article className="paper card-pad letter-card">
            <p className="eyebrow">Carta de hoy</p>
            <p className="meta">
              {temaLabel(carta.tema)} · {carta.minutes} min de lectura
            </p>
            <h3>{carta.title}</h3>
            <p className="muted">{carta.excerpt}</p>
            <Link className="btn btn-ghost link-underline" to={`/cartas/${carta.slug}`} style={{ marginTop: 12 }}>
              Leer la carta completa
            </Link>
          </article>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <h2>Historias recientes</h2>
            <Link className="link-underline" to="/historias">
              Ver todas
            </Link>
          </div>
          <div className="empty">
            <p>Todavía no hay historias publicadas. Si te animas, la primera puede ser la tuya.</p>
            <Link className="btn btn-primary" to="/historias" style={{ marginTop: 16 }}>
              Compartir una historia
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container panel-grid">
          <article className="paper card-pad feature-card">
            <p className="eyebrow">Podcast destacado</p>
            <h3>Lo que no dijimos en casa</h3>
            <p className="muted">
              Sobre las conversaciones pendientes con la familia y lo que heredamos sin darnos cuenta.
            </p>
            <p className="meta" style={{ margin: "12px 0 16px" }}>
              Conversación · 52 min
            </p>
            <Link className="btn btn-outline" to="/podcast">
              Escuchar
            </Link>
          </article>
          <article className="paper card-pad feature-card">
            <p className="eyebrow">Ejercicio recomendado</p>
            <h3>{ejercicio.title}</h3>
            <p className="muted">{ejercicio.blurb}</p>
            <p className="meta" style={{ margin: "12px 0 16px" }}>
              {temaLabel(ejercicio.tema)} · {ejercicio.minutes} min
            </p>
            <Link className="btn btn-outline" to="/biblioteca">
              Hacerlo ahora
            </Link>
          </article>
        </div>
      </section>

      <section className="quote-block">
        <blockquote>“No tienes que estar bien para merecer compañía.”</blockquote>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: 16 }}>
            Por momento de vida
          </p>
          <div className="topics">
            {TEMAS.map((tema) => (
              <Link className="topic" key={tema.slug} to={`/biblioteca/${tema.slug}`}>
                {tema.label}
              </Link>
            ))}
          </div>
          <div className="cards two" style={{ marginTop: 28 }}>
            {recientes.map((cartaItem) => (
              <Link className="letter-row" key={cartaItem.slug} to={`/cartas/${cartaItem.slug}`}>
                <p className="meta">
                  {temaLabel(cartaItem.tema)} · {cartaItem.minutes} min
                </p>
                <h2>{cartaItem.title}</h2>
                <p className="muted">{cartaItem.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section therapy">
        <div className="container split">
          <div>
            <h2>Y si algún día quieres acompañamiento</h2>
            <p className="muted" style={{ margin: "1rem 0 1.6rem", maxWidth: "46ch" }}>
              La terapia no es el único camino ni tiene prisa. Está aquí, disponible, para cuando tú lo decidas.
            </p>
            <Link className="btn btn-dark" to="/terapia">
              Conocer el proceso
            </Link>
          </div>
          <img src="/images/terapia.jpg" alt="Dos sillones frente a una ventana con luz suave en un consultorio cálido" />
        </div>
      </section>
    </>
  );
}
