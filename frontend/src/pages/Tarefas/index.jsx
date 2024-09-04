import { useState, useEffect } from "react";
import api from "../../services/api.js";
import SideBar from "../../components/SideBar.jsx";
import BarradePesquisa from "../../components/BarraDePesquisa.jsx";
import Task from "../../components/Task.jsx";
import ButtonAddTarefa from "../../components/ButtonAddTarefa.jsx";
import AddTaskModal from "../../components/AddTaskModal.jsx"; // Importa o modal

function Tarefas() {
    const [tasksAFazer, setTasksAFazer] = useState([]);
    const [tasksFazendo, setTasksFazendo] = useState([]);
    const [tasksFeito, setTasksFeito] = useState([]);
    const [showModal, setShowModal] = useState(false); // Controle do modal

    // Função para buscar as tarefas do backend
    const fetchTasks = async () => {
        try {
            const response = await api.get('/tarefas'); // Ajuste para a rota correta
            const tarefas = response.data;
            setTasksAFazer(tarefas.filter(tarefa => tarefa.status === 'AFazer'));
            setTasksFazendo(tarefas.filter(tarefa => tarefa.status === 'Fazendo'));
            setTasksFeito(tarefas.filter(tarefa => tarefa.status === 'Feito'));
        } catch (error) {
            console.error("Erro ao buscar tarefas:", error);
        }
    };

    // Função para adicionar uma nova tarefa
    const addNewTask = async (newTask) => {
        try {
            await api.post('/tarefas', newTask); // Ajuste para a rota correta
            fetchTasks(); // Atualiza a lista de tarefas após adicionar
        } catch (error) {
            console.error("Erro ao adicionar tarefa:", error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div className="bg-[#F6F7F9] min-h-screen flex font-poppins">
            {/* Sidebar */}
            <SideBar />

            {/* Main content area */}
            <div className="flex-1">
                {/* Barra de Pesquisa */}
                <BarradePesquisa />

                {/* Kanban columns */}
                <div className="pl-10 grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    {/* A Fazer */}
                    <div className="pb-5 rounded-lg">
                        <div className="flex items-center space-x-2 mb-4">
                            <h2 className="text-2xl font-medium">A Fazer</h2>
                            <ButtonAddTarefa onClick={() => setShowModal(true)} />
                        </div>
                        {tasksAFazer.map((task, index) => (
                            <Task 
                                key={index} 
                                title={task.title} 
                                description={task.description} 
                                completed={task.completed} 
                            />
                        ))}
                    </div>

                    {/* Fazendo */}
                    <div className="pb-5 rounded-lg">
                        <div className="flex items-center space-x-2 mb-4">
                            <h2 className="text-2xl font-medium">Fazendo</h2>
                            <ButtonAddTarefa onClick={() => setShowModal(true)} />
                        </div>
                        {tasksFazendo.map((task, index) => (
                            <Task 
                                key={index} 
                                title={task.title} 
                                description={task.description} 
                                completed={task.completed} 
                            />
                        ))}
                    </div>

                    {/* Feito */}
                    <div className="pb-5 rounded-lg">
                        <div className="flex items-center space-x-2 mb-4">
                            <h2 className="text-2xl font-medium">Feito</h2>
                            <ButtonAddTarefa onClick={() => setShowModal(true)} />
                        </div>
                        {tasksFeito.map((task, index) => (
                            <Task 
                                key={index} 
                                title={task.title} 
                                description={task.description} 
                                completed={task.completed} 
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Exibe o modal se showModal for true */}
            {showModal && (
                <AddTaskModal 
                    onClose={() => setShowModal(false)}
                    onSave={addNewTask}
                />
            )}
        </div>
    );
}

export default Tarefas;
