import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import HomePage from "./routes/home";
import CafePage from "./routes/cafe.jsx";
import NotFoundPage from "./routes/notFound";

function App() {
  return (
    <Router>
      {/* TODO LO QUE ESTE POR FUERA DE <ROUTES> FUNCIONA COMO LAYOUT */}
      <Header />

      <Routes>
        {/* DEFINIMOS LAS RUTAS QUE VAMOS A USAR EN ROUTES*/}
        <Route path="/" element={<HomePage />} />
        <Route path="/cafe" element={<CafePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* TODO LO QUE ESTE POR FUERA DE <ROUTES> FUNCIONA COMO LAYOUT */}
    </Router>
  );
}

export default App;
