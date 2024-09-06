import { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import api from "../../services/api";
import SideBar from "../../components/SideBar.jsx";
import EditTaskModal from "../../components/EditTaskModal.jsx"; // Importar o modal de edição

// Configuração do localizador de datas do calendário
const localizer = momentLocalizer(moment);

function TarefasCalendario() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null); // Estado para armazenar a tarefa selecionada
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar o modal

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await api.get("/tarefas", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTasks(response.data);
    } catch (error) {
      console.error("Erro ao buscar tarefas", error);
    }
  };

  // Mapeando as tarefas para os eventos do calendário
  const events = tasks.map((task) => ({
    id: task.id, // Armazenar o ID da tarefa para edição
    title: task.title,
    start: new Date(task.createdAt), // Usando a data de criação
    end: new Date(task.createdAt), // Para simplificar, o início e o fim são no mesmo dia
    allDay: true,
  }));

  // Função para abrir o modal com a tarefa selecionada
  const handleSelectEvent = (event) => {
    const task = tasks.find((task) => task.id === event.id);
    setSelectedTask(task);
    setIsModalOpen(true); // Abrir o modal
  };

  // Função para fechar o modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTask(null);
  };

  // Função para salvar a edição
  const handleSaveEdit = async (updatedTask) => {
    try {
      const token = localStorage.getItem("token");
      await api.put(`/tarefas/${updatedTask.id}`, updatedTask, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Atualizar a lista de tarefas localmente
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        )
      );
      handleCloseModal();
    } catch (error) {
      console.error("Erro ao salvar edição da tarefa", error);
    }
  };

  return (
    <div className="bg-[#F6F7F9] min-h-screen flex font-poppins">
      <SideBar />
      <div className="flex-1 relative p-10">
        <h2 className="text-2xl font-medium mb-4">Tarefas no Calendário</h2>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          views={["month", "week", "day"]}
          onSelectEvent={handleSelectEvent} // Permitir seleção de evento
        />
      </div>

      {/* Modal de Edição */}
      {isModalOpen && (
        <EditTaskModal
          task={selectedTask}
          onClose={handleCloseModal}
          onSave={handleSaveEdit}
        />
      )}
    </div>
  );
}

export default TarefasCalendario;
