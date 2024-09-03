import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Tarefas from "./pages/Tarefas";

function App() {
  return (
    <BrowserRouter>
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold text-center">Sistema de Cadastro de Usuários</h1>
        {/* Cabeçalho com o título do sistema */}
      </header>
      <Routes>
        <Route path="/" element={<Cadastro />} /> {/* Rota para a página de cadastro */}
        <Route path="/login" element={<Login />} /> {/* Rota para a página de login */}
        <Route path="/tarefas" element={<Tarefas />} /> {/* Rota para a página de to-do */}
      </Routes>
    </BrowserRouter>
  );
}

export default App; 
