import { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import api from "../../services/api";
import SideBar from "../../components/SideBar.jsx";
import EditTaskModal from "../../components/EditTaskModal.jsx";

// Configuração do localizador de datas do calendário
const localizer = momentLocalizer(moment);

function TarefasCalendario() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const events = tasks.map((task) => ({
    id: task.id,
    title: task.title,
    start: new Date(task.startDate || task.createdAt),  // Use o campo correto para a data de início
    end: new Date(task.endDate || task.createdAt),      // Use o campo correto para a data de término
    allDay: false,                                     // Defina como false para horários específicos
    status: task.status,
  }));

  const handleSelectEvent = (event) => {
    const task = tasks.find((task) => task.id === event.id);
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTask(null);
  };

  const handleSaveEdit = async (updatedTask) => {
    try {
      const token = localStorage.getItem("token");
      await api.put(`/tarefas/${updatedTask.id}`, updatedTask, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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

  const eventStyleGetter = (event) => {
    let backgroundColor = "#6062FA"; 

    if (event.status === "completed") {
      backgroundColor = "#10B981";
    } else if (event.status === "overdue") {
      backgroundColor = "#EF4444";
    }

    return {
      style: {
        backgroundColor,
        color: "white",
        borderRadius: "0.5rem",
        padding: "0.5rem",
      },
    };
  };

  return (
    <div className="bg-gray-100 min-h-screen flex font-poppins">
      <SideBar />
      <div className="flex-1 p-10">
        <h2 className="text-2xl font-medium mb-4">Tarefas no Calendário</h2>
        <div className="bg-white shadow rounded-lg p-4">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 600 }}
            views={["month", "week", "day"]}
            onSelectEvent={handleSelectEvent}
            eventPropGetter={eventStyleGetter}
            className="custom-calendar"
          />
          <style jsx>{`
            .custom-calendar .rbc-today {
              background-color: transparent;
              color: inherit;
            }
          `}</style>
        </div>
      </div>

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
