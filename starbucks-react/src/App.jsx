import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import HomePage from "./routes/home";
import CafePage from "./routes/cafe.jsx";
import MenuPage from "./routes/menu";
import ExperienciaPage from "./routes/experiencia";
import NotFoundPage from "./routes/notFound";
import Wrapper from "./components/wrapper";
function App() {
  return (
    <Wrapper>
      <Router>
        {/* TODO LO QUE ESTE POR FUERA DE <ROUTES> FUNCIONA COMO LAYOUT */}
        <Header />
        <Routes>
          {/* DEFINIMOS LAS RUTAS QUE VAMOS A USAR EN ROUTES*/}
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/experiencia" element={<ExperienciaPage />} />
          <Route path="/cafe" element={<CafePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        {/* TODO LO QUE ESTE POR FUERA DE <ROUTES> FUNCIONA COMO LAYOUT */}
      </Router>
    </Wrapper>
  );
}

export default App;
