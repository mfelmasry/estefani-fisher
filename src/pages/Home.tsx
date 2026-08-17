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

const HALLAZGOS = [
  {
    icon: "💬",
    title: "Comunidad",
    to: "/comunidad",
    text: "Comparte experiencias, conecta con otras personas y descubre diferentes perspectivas en un espacio seguro y respetuoso.",
  },
  {
    icon: "💌",
    title: "Cartas",
    to: "/cartas",
    text: "Lee cartas escritas por Estefani y por la comunidad. También podrás escribir las tuyas, guardarlas en privado o compartirlas cuando lo desees.",
  },
  {
    icon: "🌿",
    title: "Conócete",
    to: "/escribir",
    text: "Ejercicios de reflexión, journaling, herramientas de autoconocimiento y tests orientativos para comprenderte mejor.",
  },
  {
    icon: "🤍",
    title: "Bienestar",
    to: "/biblioteca",
    text: "Meditaciones, respiraciones guiadas, hábitos saludables, ejercicios prácticos y recursos para cuidar de ti día a día.",
  },
  {
    icon: "📚",
    title: "Biblioteca",
    to: "/biblioteca",
    text: "Una selección curada de libros, películas, documentales, podcasts y otros recursos recomendados por Estefani, acompañados de una reseña personal.",
  },
  {
    icon: "🌸",
    title: "Acompañamiento",
    to: "/terapia",
    text: "Si en algún momento deseas profundizar en tu proceso personal, podrás conocer mi forma de trabajar y comenzar terapia cuando tú lo decidas.",
  },
];

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
              Todos necesitamos un lugar donde
              <br />
              <em>sentirnos comprendidos.</em>
            </h1>
            <p className="lede">
              Hay momentos en los que buscamos respuestas. Otros en los que solo necesitamos un poco de calma. Y
              algunos en los que simplemente queremos seguir creciendo.
            </p>
            <p className="lede">
              Sea cual sea el motivo que te trajo hasta aquí, este es un espacio donde puedes compartir tu historia,
              descubrir nuevas perspectivas, encontrar herramientas para cuidar de tu bienestar emocional y formar
              parte de una comunidad que cree en escuchar, comprender y crecer juntos.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/comunidad">
                Explorar la comunidad
              </Link>
              <Link className="btn btn-ghost link-underline" to="/historias">
                Compartir mi historia
              </Link>
            </div>
          </div>
          <figure className="hero-photo">
            <img
              src="/images/hero.jpg"
              alt="Un grupo pequeño conversando alrededor de una mesa, con café y luz natural"
            />
            <figcaption className="hero-caption">Qué bien se siente estar aquí.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="filosofia-copy">
            <p className="eyebrow">Nuestra filosofía</p>
            <h2>Creemos que cuidar de nuestra salud emocional debería formar parte de la vida, no solo de los momentos difíciles.</h2>
            <p>
              Hay días en los que necesitamos respuestas. Otros en los que buscamos un poco de calma. Y también hay
              momentos en los que simplemente queremos conocernos mejor, crecer o dedicar tiempo a nosotros mismos.
            </p>
            <p>Por eso nació este espacio.</p>
            <p>
              Una comunidad donde puedes compartir lo que estás viviendo, descubrir historias con las que puedas
              identificarte y encontrar herramientas que te acompañen en tu bienestar.
            </p>
            <p>Aquí creemos que cada historia tiene valor.</p>
            <p>Que escuchar también transforma.</p>
            <p>Y que, muchas veces, una nueva perspectiva puede cambiar la forma en que entendemos nuestra propia vida.</p>
            <p>Este no es un lugar para tener todas las respuestas.</p>
            <p>
              Es un lugar para hacer una pausa, sentirte comprendido y recordar que cuidar de ti también es una forma de
              crecer.
            </p>
          </div>
          <img
            src="/images/filosofia.jpg"
            alt="Luz natural entre árboles, un paisaje cotidiano que invita a detenerse"
          />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <h2>¿Qué encontrarás aquí?</h2>
          </div>
          <div className="hallazgos-grid">
            {HALLAZGOS.map((item) => (
              <Link className="paper card-pad hallazgo-card" key={item.title} to={item.to}>
                <p className="hallazgo-icon" aria-hidden="true">
                  {item.icon}
                </p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
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
          <img
            src="/images/terapia.jpg"
            alt="Un grupo de personas sentadas juntas, abrazadas, mirando el horizonte"
          />
        </div>
      </section>
    </>
  );
}
