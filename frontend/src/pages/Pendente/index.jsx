import { useState, useEffect } from "react";
import api from "../../services/api.js";
import SideBar from "../../components/SideBar.jsx";
import BarradePesquisa from "../../components/BarraDePesquisa.jsx";
import TaskRow from "../../components/TaskRow.jsx";
import EditTaskModal from "../../components/EditTaskModal.jsx";

function TarefasPendentes() {
    const [tasks, setTasks] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [showEditModal, setShowEditModal] = useState(false);
    const [taskToEdit, setTaskToEdit] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const clearErrorMessage = () => {
        setTimeout(() => {
            setErrorMessage(null);
        }, 3000);
    };

    const handleError = (error) => {
        if (error.response && error.response.status === 401) {
            setErrorMessage("Token expirado, faça login novamente.");
        } else if (error.response && error.response.status === 403) {
            setErrorMessage("Permissão negada. Verifique suas credenciais.");
        } else {
            setErrorMessage("Ocorreu um erro. Tente novamente.");
        }
        console.error("Erro:", error);
        clearErrorMessage();
    };

    const fetchPendingTasks = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await api.get('/tarefas', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const pendingTasks = response.data.filter(task => !task.completed);
            setTasks(pendingTasks);
        } catch (error) {
            handleError(error);
        }
    };

    const toggleCompleteTask = async (task) => {
        try {
            const token = localStorage.getItem('token');
            await api.patch(`/tarefas/${task.id}/completar`, { completed: !task.completed }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            // Atualiza a lista removendo a tarefa concluída
            fetchPendingTasks();
        } catch (error) {
            handleError(error);
        }
    };

    const deleteTask = async (taskId) => {
        try {
            const token = localStorage.getItem('token');
            await api.delete(`/tarefas/${taskId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            fetchPendingTasks(); // Atualiza a lista após a exclusão
        } catch (error) {
            handleError(error);
        }
    };

    const editTask = async (updatedTask) => {
        try {
            const token = localStorage.getItem('token');
            const response = await api.put(`/tarefas/${updatedTask.id}`, updatedTask, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            // Atualiza a tarefa no estado após a resposta do backend
            setTasks((prevTasks) =>
                prevTasks.map((task) =>
                    task.id === updatedTask.id ? { ...updatedTask, ...response.data } : task
                )
            );

            console.log("Tarefa atualizada no backend", response.data);
        } catch (error) {
            console.error("Erro ao atualizar a tarefa", error);
        }
    };


    const handleEditTask = (task) => {
        setTaskToEdit(task);
        setShowEditModal(true);
    };

    useEffect(() => {
        fetchPendingTasks();
    }, []);

    const filteredTasks = tasks.filter(task =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="bg-[#F6F7F9] min-h-screen flex font-poppins">
            <SideBar />
            <div className="flex-1 relative">
                <BarradePesquisa searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

                {/* Notificação de erro */}
                {errorMessage && (
                    <div className="bg-red-500 text-white p-3 rounded-md text-center m-4">
                        {errorMessage}
                    </div>
                )}

                <div className="flex items-center pl-10 pt-10">
                    <h2 className="text-2xl font-medium">Tarefas Pendentes</h2>
                </div>
                <div className="pl-10 pr-10 pt-5">
                    <table className="table-auto w-full">
                        <thead className="text-black">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Título
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                    Criado em
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Atualizado em
                                </th>
                                <th scope="col" className="px-6 py-3"></th>
                            </tr>
                        </thead>
                        <tbody className="space-y-10">
                            {filteredTasks.map((task) => (
                                <TaskRow
                                    key={task.id}
                                    task={task}
                                    onToggleComplete={() => toggleCompleteTask(task)} // Marca a tarefa como completa
                                    onEdit={() => handleEditTask(task)} // Abre o modal de edição
                                    onDelete={() => deleteTask(task.id)} // Deleta a tarefa
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {showEditModal && taskToEdit && (
                <EditTaskModal
                    task={taskToEdit}
                    onClose={() => setShowEditModal(false)}
                    onSave={editTask}
                    onDelete={deleteTask}
                />
            )}
        </div>
    );
}

export default TarefasPendentes;
