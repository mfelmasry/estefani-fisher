import { useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { cartaBySlug, temaLabel } from "../data/content";
import { getSaved, toggleSaved } from "../lib/storage";

export default function Carta() {
  const { slug } = useParams();
  const carta = slug ? cartaBySlug(slug) : undefined;
  const [saved, setSaved] = useState(() => getSaved());
  const [toast, setToast] = useState("");
  const isSaved = useMemo(() => Boolean(slug && saved.includes(slug)), [saved, slug]);

  if (!carta || !slug) return <Navigate to="/cartas" replace />;
  const letter = carta;
  const letterSlug = slug;

  function onSave() {
    setSaved(toggleSaved(letterSlug));
    setToast(isSaved ? "Quitada de guardadas" : "Carta guardada en tu camino");
    setTimeout(() => setToast(""), 2200);
  }

  async function onShare() {
    const url = window.location.href;
    try {
      if (navigator.share) await navigator.share({ title: letter.title, url });
      else {
        await navigator.clipboard.writeText(url);
        setToast("Enlace copiado");
        setTimeout(() => setToast(""), 2200);
      }
    } catch {
      /* cancelled */
    }
  }

  return (
    <article className="page-hero">
      <div className="narrow">
        <p className="eyebrow">
          Carta · {temaLabel(letter.tema)}
        </p>
        <h1>{letter.title}</h1>
        <p className="meta" style={{ marginBottom: 28 }}>
          {letter.minutes} min de lectura
        </p>
        {letter.slug === "a-quien-necesita-respirar" && (
          <div className="breath">
            <div className="breath-circle" aria-hidden />
            <p className="muted">Inhala cuatro · sostén dos · exhala seis</p>
          </div>
        )}
        <div className="carta-body">
          {letter.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p className="signoff">
            Con cariño,
            <br />
            Estefani
          </p>
        </div>
        <div className="letter-actions">
          <button className="btn btn-outline" onClick={onSave}>
            {isSaved ? "Guardada" : "Guardar"}
          </button>
          <button className="btn btn-ghost" onClick={onShare}>
            Compartir
          </button>
        </div>
        <div className="paper card-pad">
          <h3>¿Esta carta te movió algo?</h3>
          <p className="muted" style={{ margin: "0.6rem 0 1.1rem" }}>
            Puedes escribirlo aquí, en privado. No tienes que enseñárselo a nadie.
          </p>
          <Link className="btn btn-primary" to="/escribir" state={{ prompt: `Sobre la carta: ${letter.title}` }}>
            Escribir sobre esto
          </Link>
        </div>
      </div>
      {toast && <div className="toast">{toast}</div>}
    </article>
  );
}
