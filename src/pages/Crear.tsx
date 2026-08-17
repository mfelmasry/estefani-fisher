import { FormEvent, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import SocialAuth from "../components/SocialAuth";
import { useAuth } from "../lib/auth";

export default function Crear() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const next = params.get("next") || "/diario";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function go(userName: string, mail: string, provider = "email") {
    login({ name: userName, email: mail, provider });
    navigate(next);
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    go(name.trim() || email.split("@")[0], email);
  }

  return (
    <section className="auth-shell">
      <aside className="auth-aside">
        <p className="eyebrow">Tu espacio</p>
        <h2>Un rincón privado para escribir y volver.</h2>
        <p>Crea tu espacio con Google, Microsoft u otra cuenta. Puedes empezar en un minuto.</p>
      </aside>
      <div className="paper auth-card">
        <p className="eyebrow">Crear</p>
        <h1>Crear tu espacio</h1>
        <p className="muted">Usa la cuenta que ya tienes, o un correo si lo prefieres.</p>
        <SocialAuth onContinue={(user) => go(user.name, user.email, user.provider)} />
        <div className="divider">o con tu correo</div>
        <form className="form" onSubmit={onSubmit}>
          <label>
            Cómo te gusta que te llamen
            <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
          </label>
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
              minLength={6}
              autoComplete="new-password"
            />
          </label>
          <button className="btn btn-primary" type="submit">
            Crear espacio
          </button>
        </form>
        <p className="auth-foot">
          ¿Ya tienes uno?{" "}
          <Link className="link-underline" to="/entrar">
            Entrar
          </Link>
        </p>
      </div>
    </section>
  );
}
