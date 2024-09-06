import React, { useState, useEffect } from 'react';

function EditTaskModal({ task, onClose, onSave, onDelete }) {
    const [title, setTitle] = useState(task.title || ''); // Inicializa com valor padrão
    const [description, setDescription] = useState(task.description || ''); // Inicializa com valor padrão

    useEffect(() => {
        if (task) {
            setTitle(task.title || ''); // Atualiza o título
            setDescription(task.description || ''); // Atualiza a descrição
        }
    }, [task]);

    const handleSave = () => {
        if (title && description) {
            console.log("Saving task:", { ...task, title, description }); // Log para depuração
            onSave({ ...task, title, description }); // Salva as alterações
            onClose(); // Fecha o modal
        } else {
            alert("Preencha todos os campos");
        }
    };
    

    const handleDelete = () => {
        if (window.confirm("Tem certeza que deseja excluir esta tarefa?")) {
            onDelete(task.id); // Deleta a tarefa
            onClose(); // Fecha o modal após deletar
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
                <h2 className="text-xl font-medium mb-4 text-center">Editar Tarefa</h2>
                <input
                    type="text"
                    placeholder="Título..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                    placeholder="Descrição..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex justify-between mt-4">
                    <button
                        onClick={onClose}
                        className="bg-gray-200 p-3 w-40 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleSave}
                        className="bg-[#6062FA] text-white p-3 w-40 rounded-lg hover:bg-[#575af3] transition-colors"
                    >
                        Salvar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditTaskModal;
