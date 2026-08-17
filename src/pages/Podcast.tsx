import { PODCAST, temaLabel } from "../data/content";

export default function Podcast() {
  const featured = PODCAST.find((p) => p.featured) ?? PODCAST[0];
  const rest = PODCAST.filter((p) => p.slug !== featured.slug);

  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">Podcast</p>
        <h1>Para escuchar mientras haces otra cosa</h1>
        <p>Episodios breves para caminar, cocinar o esperar. Voz baja, sin fórmulas y sin prisa.</p>

        <article className="paper card-pad featured-episode" style={{ marginTop: 36 }}>
          <p className="meta">
            Episodio destacado · {featured.kind === "conversacion" ? "conversación" : "reflexión"} · {featured.minutes} min
          </p>
          <h2 style={{ fontSize: "2.4rem", margin: "0.5rem 0 0.7rem" }}>{featured.title}</h2>
          <p className="muted">{featured.blurb}</p>
          <p className="meta" style={{ marginTop: 18 }}>
            Disponible muy pronto.
          </p>
        </article>

        {rest.map((ep) => (
          <article className="episode" key={ep.slug}>
            <p className="meta">
              {ep.tema ? `${temaLabel(ep.tema)} · ` : ""}
              {ep.kind === "conversacion" ? "conversación" : "reflexión"} · {ep.minutes} min
            </p>
            <h3>{ep.title}</h3>
            <p className="muted">{ep.blurb}</p>
            <p className="meta">Próximamente</p>
          </article>
        ))}
      </div>
    </section>
  );
}
