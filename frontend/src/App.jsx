import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Tarefas from "./pages/Tarefas";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cadastro />} /> {/* Rota para a página de cadastro */}
        <Route path="/login" element={<Login />} /> {/* Rota para a página de login */}
        <Route path="/Tarefas" element={<Tarefas />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App; 
