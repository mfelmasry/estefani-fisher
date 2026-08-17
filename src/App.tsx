import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Biblioteca from "./pages/Biblioteca";
import BibliotecaTema from "./pages/BibliotecaTema";
import Carta from "./pages/Carta";
import Cartas from "./pages/Cartas";
import Comunidad from "./pages/Comunidad";
import Crear from "./pages/Crear";
import Diario from "./pages/Diario";
import Entrar from "./pages/Entrar";
import Escribir from "./pages/Escribir";
import Historias from "./pages/Historias";
import Home from "./pages/Home";
import MiCamino from "./pages/MiCamino";
import Podcast from "./pages/Podcast";
import Terapia from "./pages/Terapia";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cartas" element={<Cartas />} />
        <Route path="/cartas/:slug" element={<Carta />} />
        <Route path="/historias" element={<Historias />} />
        <Route path="/biblioteca" element={<Biblioteca />} />
        <Route path="/biblioteca/:slug" element={<BibliotecaTema />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/comunidad" element={<Comunidad />} />
        <Route path="/terapia" element={<Terapia />} />
        <Route path="/escribir" element={<Escribir />} />
        <Route path="/entrar" element={<Entrar />} />
        <Route path="/crear" element={<Crear />} />
        <Route path="/diario" element={<Diario />} />
        <Route path="/mi-camino" element={<MiCamino />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
