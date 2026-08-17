import { FormEvent, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TEMAS, temaLabel, type Tema } from "../data/content";
import { useAuth } from "../lib/auth";
import { addStory, getStories } from "../lib/storage";

export default function Historias() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [filter, setFilter] = useState<Tema | "todas">("todas");
  const [stories, setStories] = useState(() => getStories());
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ title: "", body: "", tema: "relaciones" as Tema, anonymous: true });

  const visible = useMemo(
    () => stories.filter((s) => filter === "todas" || s.tema === filter),
    [stories, filter],
  );

  function onShareClick() {
    if (!user) {
      navigate("/entrar?next=/historias");
      return;
    }
    setOpen(true);
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.title.trim() || !form.body.trim()) return;
    const next = addStory({
      title: form.title.trim(),
      body: form.body.trim(),
      tema: form.tema,
      anonymous: form.anonymous,
      author: form.anonymous ? "Anónima" : user?.name || "Alguien de aquí",
    });
    setStories((prev) => [next, ...prev]);
    setForm({ title: "", body: "", tema: "relaciones", anonymous: true });
    setOpen(false);
  }

  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">Historias</p>
        <h1>Lo que otras personas han vivido</h1>
        <p>
          No es un foro. Es una colección de experiencias reales, compartidas con cuidado. Puedes leer en silencio o
          compartir la tuya, con tu nombre o de forma anónima.
        </p>
        <div style={{ marginTop: 22 }}>
          <button className="btn btn-primary" onClick={onShareClick}>
            {user ? "Compartir una historia" : "Entrar para compartir"}
          </button>
        </div>

        <div className="filters">
          <button className={`filter ${filter === "todas" ? "active" : ""}`} onClick={() => setFilter("todas")}>
            Todas
          </button>
          {TEMAS.map((tema) => (
            <button
              key={tema.slug}
              className={`filter ${filter === tema.slug ? "active" : ""}`}
              onClick={() => setFilter(tema.slug)}
            >
              {tema.label}
            </button>
          ))}
        </div>

        {open && (
          <form className="paper card-pad form" onSubmit={onSubmit} style={{ marginBottom: 24 }}>
            <h3>Tu historia</h3>
            <label>
              Título
              <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
            </label>
            <label>
              Momento
              <select value={form.tema} onChange={(e) => setForm({ ...form, tema: e.target.value as Tema })}>
                {TEMAS.map((tema) => (
                  <option key={tema.slug} value={tema.slug}>
                    {tema.label}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Lo que quieres contar
              <textarea value={form.body} onChange={(e) => setForm({ ...form, body: e.target.value })} required />
            </label>
            <label className="check">
              <input
                type="checkbox"
                checked={form.anonymous}
                onChange={(e) => setForm({ ...form, anonymous: e.target.checked })}
              />
              Publicar de forma anónima
            </label>
            <button className="btn btn-primary" type="submit">
              Compartir con cuidado
            </button>
          </form>
        )}

        {visible.length === 0 ? (
          <div className="empty">Aún no hay historias aquí. Si te animas, la tuya puede abrir la conversación.</div>
        ) : (
          <div className="cards">
            {visible.map((story) => (
              <article className="letter-row" key={story.id}>
                <p className="meta">
                  {temaLabel(story.tema as Tema)} · {story.author}
                </p>
                <h2>{story.title}</h2>
                <p className="muted">{story.body}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
