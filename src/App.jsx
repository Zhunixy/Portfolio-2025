//Utilizando um novo hook que é o Router, pra navegar entre componentes
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./Components/Layout/Header.jsx";
import Footer from "./Components/Layout/Footer.jsx";
import Home from "./Components/Home/Home.jsx";
import Sobre from "./Components/Sobre/Sobre.jsx";
import Projetos from "./Components/Projetos/Projetos.jsx";

function AppContent() {
  const location = useLocation(); // pega a rota atual (ex: "/", "/projetos")

  return (
    <div className="main-content">
      <Header />

      <main>
        {/* Se estiver na rota "/", mostra Home e Sobre */}
        {location.pathname === "/" && (
          <>
            <Home />
            <Sobre />
          </>
        )}

        {/* Se estiver na rota "/projetos", mostra apenas Projetos */}
        {location.pathname === "/Projetos" && <Projetos />}
        {location.pathname === "/Sobre" && (
          <div className="sobre-solo">
            <Sobre />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

//To exportando o app pra poder pegar as rotas no componente do header
export default function App() {
  return (
    <Router>
      <Routes>
        {/* Rota genérica — todas as telas são controladas dentro de AppContent */}
        <Route path="*" element={<AppContent />} />
      </Routes>
    </Router>
  );
}
