const SIGNS = [
  "Llevas tiempo sintiendo lo mismo y ya no se va solo.",
  "Te cuesta poner límites sin sentir culpa.",
  "Repites patrones que reconoces pero no logras cambiar.",
  "Hay algo del pasado que sigue ocupando espacio hoy.",
  "Quieres entenderte mejor, aunque nada esté “mal”.",
];

const STEPS = [
  {
    title: "Primera conversación",
    text: "Una sesión para conocernos, contarme qué te trae y ver si tiene sentido seguir. Sin compromiso de continuar.",
  },
  {
    title: "Un ritmo tuyo",
    text: "Normalmente semanal o quincenal, 50 minutos. Lo acordamos según tu momento y tus posibilidades.",
  },
  {
    title: "Presencial o en línea",
    text: "Consultorio en Ciudad de México o videollamada privada, desde donde estés.",
  },
  {
    title: "Confidencial siempre",
    text: "Lo que se habla en sesión se queda en sesión. Nada de lo que escribes en esta plataforma se comenta ahí a menos que tú lo traigas.",
  },
];

export default function Terapia() {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">Terapia</p>
        <h1>Si algún día quieres acompañamiento más cercano</h1>
        <p>La terapia no es el único camino y no tiene prisa. Está aquí, disponible, para cuando tú lo decidas.</p>
        <img
          src="/images/terapia.jpg"
          alt="Dos sillones frente a una ventana con luz suave en un consultorio cálido"
          style={{ width: "100%", height: 420, objectFit: "cover", borderRadius: 24, margin: "2rem 0" }}
        />

        <div className="split">
          <div>
            <h2>Quizá sea un buen momento si…</h2>
            <ul className="rules" style={{ marginTop: 12 }}>
              {SIGNS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="muted" style={{ marginTop: 18 }}>
              Y también está bien si hoy solo quieres leer y escribir. Nadie tiene que empezar terapia para estar aquí.
            </p>
          </div>
          <div>
            <h2>Cómo es el proceso</h2>
            <div className="process" style={{ marginTop: 16 }}>
              {STEPS.map((step) => (
                <article className="paper card-pad" key={step.title}>
                  <h3>{step.title}</h3>
                  <p className="muted" style={{ marginTop: 8 }}>
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="paper card-pad" style={{ margin: "3rem 0 2rem" }}>
          <h2>Cuando estés lista o listo, escríbeme.</h2>
          <p className="muted" style={{ margin: "0.7rem 0 1.4rem" }}>
            Puedes agendar la primera conversación o simplemente preguntar. Respondo yo, no un equipo.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="https://calendly.com/psic-fisher/50min" target="_blank" rel="noreferrer">
              Agendar primera conversación
            </a>
            <a
              className="btn btn-outline"
              href="https://wa.me/522281982174?text=Hola%20Ivette%2C%20me%20gustar%C3%ADa%20agendar%20una%20sesi%C3%B3n%20de%20psicoterapia."
              target="_blank"
              rel="noreferrer"
            >
              Escribir por WhatsApp
            </a>
            <a className="btn btn-ghost" href="mailto:psic.fisher@gmail.com?subject=Consulta%20sobre%20psicoterapia">
              Enviar un correo
            </a>
          </div>
          <p className="muted" style={{ marginTop: 18 }}>
            ¿Prefieres contarlo por escrito primero? <a className="link-underline" href="/escribir">Escríbelo aquí</a>.
          </p>
        </div>
        <p className="disclaimer" style={{ border: 0, paddingTop: 0 }}>
          Esta plataforma no sustituye atención psicológica o médica. Si estás en una crisis o en riesgo, busca ayuda
          inmediata en servicios de emergencia de tu localidad.
        </p>
      </div>
    </section>
  );
}
