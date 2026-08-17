import { FormEvent, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import SocialAuth from "../components/SocialAuth";
import { useAuth } from "../lib/auth";

export default function Entrar() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const next = params.get("next") || "/mi-camino";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function go(name: string, mail: string, provider = "email") {
    login({ name, email: mail, provider });
    navigate(next);
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    go(email.split("@")[0] || "Tú", email);
  }

  return (
    <section className="auth-shell">
      <aside className="auth-aside">
        <p className="eyebrow">Tu espacio</p>
        <h2>Vuelve cuando quieras. Aquí te esperamos.</h2>
        <p>Tu diario, tus cartas y lo que escribes quedan en privado. Entra con la cuenta que ya usas.</p>
      </aside>
      <div className="paper auth-card">
        <p className="eyebrow">Entrar</p>
        <h1>Volver a entrar</h1>
        <p className="muted">Elige un servicio o usa tu correo. Nadie más ve lo que escribes.</p>
        <SocialAuth onContinue={(user) => go(user.name, user.email, user.provider)} />
        <div className="divider">o con tu correo</div>
        <form className="form" onSubmit={onSubmit}>
          <label>
            Correo
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" />
          </label>
          <label>
            Contraseña
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </label>
          <button className="btn btn-primary" type="submit">
            Entrar
          </button>
        </form>
        <p className="auth-foot">
          ¿Es tu primera vez aquí?{" "}
          <Link className="link-underline" to={`/crear?next=${encodeURIComponent(next)}`}>
            Crear tu espacio
          </Link>
        </p>
        <p className="muted auth-note">
          Al continuar aceptas que este espacio no sustituye la atención psicológica.{" "}
          <Link className="link-underline" to="/terapia">
            Conocer la terapia
          </Link>
        </p>
      </div>
    </section>
  );
}
