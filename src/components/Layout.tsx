import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { NAV } from "../data/content";
import { useAuth } from "../lib/auth";

export default function Layout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="site">
      <header className="header">
        <div className="header-inner">
          <Link to="/" className="brand" aria-label="Estefani Fisher, inicio">
            <strong>Estefani Fisher</strong>
            <span>Bienestar emocional</span>
          </Link>
          <nav className="nav-desktop" aria-label="Principal">
            {NAV.map((item) => (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? "active" : "")}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="header-actions">
            {user ? (
              <Link className="btn btn-ghost user-chip" to="/mi-camino">
                {user.name}
              </Link>
            ) : (
              <Link className="btn btn-ghost" to="/entrar">
                Entrar
              </Link>
            )}
            <Link className="btn btn-primary" to="/escribir">
              Escribir
            </Link>
            <button className="menu-btn" aria-label="Abrir menú" onClick={() => setOpen(true)}>
              <span />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="overlay-nav">
          <header>
            <Link to="/" className="brand" onClick={() => setOpen(false)}>
              <strong>Estefani Fisher</strong>
              <span>Bienestar emocional</span>
            </Link>
            <button className="menu-btn" aria-label="Cerrar menú" onClick={() => setOpen(false)}>
              ×
            </button>
          </header>
          <nav>
            {NAV.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </nav>
          <footer>
            <Link className="btn btn-outline" to="/entrar">
              Entrar
            </Link>
            <Link className="btn btn-primary" to="/escribir">
              Escribir
            </Link>
          </footer>
        </div>
      )}

      <main className="fade-in" key={location.pathname}>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <h4>Estefani Fisher</h4>
            <p className="muted">
              Un lugar para escribir, leer y hacer una pausa. Aquí no hay prisa: puedes volver las veces que lo
              necesites.
            </p>
          </div>
          <div>
            <p className="eyebrow">Explorar</p>
            <nav>
              {NAV.map((item) => (
                <Link key={item.to} to={item.to}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="eyebrow">Tu espacio</p>
            <nav>
              <Link to="/escribir">Escribir</Link>
              <Link to="/diario">Diario</Link>
              <Link to="/mi-camino">Mi camino</Link>
              <Link to="/terapia">Comenzar terapia</Link>
            </nav>
          </div>
        </div>
        <div className="footer-legal">
          <p className="disclaimer">
            <span className="legal-label">Aviso</span>
            Este espacio no sustituye la atención psicológica ni médica. Si estás en riesgo, llama a la Línea de la
            Vida:{" "}
            <a href="tel:8009112000">800 911 2000</a>
            <span className="legal-meta">México · 24 h</span>
          </p>
        </div>
        <div className="container">
          <small className="copyright">© {new Date().getFullYear()} Estefani Fisher</small>
        </div>
      </footer>
    </div>
  );
}
