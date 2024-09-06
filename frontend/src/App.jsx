import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Tarefas from "./pages/Tarefas";
import TarefasPendentes from "./pages/Pendente";
import TarefasConcluidas from "./pages/Concluida";
import TarefasCalendario from "./pages/Calendario";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Cadastro" element={<Cadastro />} /> {/* Rota para a página de cadastro */}
        <Route path="/login" element={<Login />} /> {/* Rota para a página de login */}
        <Route path="/Tarefas" element={<Tarefas />} /> 
        <Route path="/Pendentes" element={<TarefasPendentes />} /> 
        <Route path="/Concluidas" element={<TarefasConcluidas />} /> 
        <Route path="/Calendario" element={<TarefasCalendario />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App; 
