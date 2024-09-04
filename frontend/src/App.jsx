import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cadastro />} /> {/* Rota para a página de cadastro */}
        <Route path="/login" element={<Login />} /> {/* Rota para a página de login */}
      </Routes>
    </BrowserRouter>
  );
}

export default App; 
