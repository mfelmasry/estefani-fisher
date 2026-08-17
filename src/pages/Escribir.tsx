import { FormEvent, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { addEntry } from "../lib/storage";
import { useAuth } from "../lib/auth";

type LocationState = { prompt?: string; exercise?: string } | null;

export default function Escribir() {
  const { user } = useAuth();
  const location = useLocation();
  const state = (location.state as LocationState) || null;
  const [body, setBody] = useState("");
  const [forEstefani, setForEstefani] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (state?.prompt) setBody((prev) => prev || `${state.prompt}\n\n`);
  }, [state]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!body.trim()) return;
    addEntry({
      body: body.trim(),
      forEstefani,
      prompt: state?.exercise || state?.prompt,
    });
    setBody("");
    setSaved(true);
  }

  if (saved) {
    return (
      <section className="page-hero">
        <div className="narrow">
          <p className="eyebrow">Escribir</p>
          <h1>Ya quedó guardado.</h1>
          <p>
            {forEstefani
              ? "Si pediste que Estefani lo lea, esto queda en privado. En esta versión local se guarda en tu diario."
              : "Puedes volver a leerte cuando quieras, en tu diario."}
          </p>
          <div className="hero-actions" style={{ marginTop: 24 }}>
            <Link className="btn btn-primary" to="/diario">
              Ir al diario
            </Link>
            <button className="btn btn-ghost" onClick={() => setSaved(false)}>
              Escribir otra cosa
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="page-hero">
      <div className="narrow">
        <h1>¿Qué te gustaría compartir hoy?</h1>
        {state?.exercise && <p className="muted">{state.exercise}</p>}
        <form className="form" onSubmit={onSubmit} style={{ marginTop: 24 }}>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Escribe con calma. Nadie más tiene que ver esto."
            required
          />
          <label className="check">
            <input type="checkbox" checked={forEstefani} onChange={(e) => setForEstefani(e.target.checked)} />
            Me gustaría que Estefani lo lea y me responda
          </label>
          <button className="btn btn-primary" type="submit">
            Enviar
          </button>
        </form>
        <p className="write-note">
          Esto es privado. No se publica ni aparece en la comunidad.
          {!user && (
            <Link className="write-note-action" to="/entrar?next=/escribir">
              Entra para guardarlo
            </Link>
          )}
        </p>
      </div>
    </section>
  );
}
