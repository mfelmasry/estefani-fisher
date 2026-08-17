import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { PREGUNTA_DEL_DIA } from "../data/content";
import { addCommunity, getCommunity } from "../lib/storage";
import { useAuth } from "../lib/auth";

const RULES = [
  "Comparte desde tu experiencia, no desde el consejo.",
  "Aquí no se dan diagnósticos ni indicaciones médicas.",
  "No se permiten ataques, burlas ni discusiones.",
  "Puedes acompañar sin tener que resolver.",
];

export default function Comunidad() {
  const { user } = useAuth();
  const [posts, setPosts] = useState(() => getCommunity());
  const [body, setBody] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!body.trim()) return;
    const next = addCommunity({
      title: "En comunidad",
      body: body.trim(),
      tema: "comunidad",
      anonymous: true,
      author: user?.name || "Alguien de aquí",
    });
    setPosts((p) => [next, ...p]);
    setBody("");
  }

  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">Comunidad</p>
        <h1>Un lugar donde nadie tiene que estar bien</h1>
        <p>Sin likes, sin seguidores, sin competencia. Solo personas leyéndose con respeto.</p>

        <article className="paper card-pad" style={{ marginTop: 36 }}>
          <p className="eyebrow">Pregunta de hoy</p>
          <h3>{PREGUNTA_DEL_DIA}</h3>
          <Link className="btn btn-outline" to="/escribir" state={{ prompt: PREGUNTA_DEL_DIA }} style={{ marginTop: 12 }}>
            Responder en privado
          </Link>
        </article>

        <div style={{ marginTop: 48 }}>
          <h2>Cómo nos cuidamos aquí</h2>
          <ul className="rules" style={{ marginTop: 12 }}>
            {RULES.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
        </div>

        <div style={{ marginTop: 48, marginBottom: 40 }}>
          <h2>Lo que se está compartiendo</h2>
          {user && (
            <form className="form" onSubmit={onSubmit} style={{ margin: "18px 0 24px" }}>
              <textarea
                placeholder="Si quieres, deja algo breve para quien llegue después."
                value={body}
                onChange={(e) => setBody(e.target.value)}
                style={{ minHeight: 140 }}
              />
              <button className="btn btn-primary" type="submit">
                Dejar una nota
              </button>
            </form>
          )}
          {posts.length === 0 ? (
            <div className="empty">Todavía en silencio. Puedes ser quien empiece.</div>
          ) : (
            <div className="cards" style={{ marginTop: 16 }}>
              {posts.map((post) => (
                <article className="letter-row" key={post.id}>
                  <p className="meta">{post.author}</p>
                  <p>{post.body}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
