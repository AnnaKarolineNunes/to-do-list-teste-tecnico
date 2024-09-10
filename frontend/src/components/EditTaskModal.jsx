import React, { useState, useEffect } from 'react';

function EditTaskModal({ task, onClose, onSave, onDelete }) {
    const [title, setTitle] = useState(task.title || ''); // Inicializa com valor padrão
    const [description, setDescription] = useState(task.description || ''); // Inicializa com valor padrão
    const [createdAt, setCreatedAt] = useState(''); // Inicializa com valor vazio

    useEffect(() => {
        if (task) {
            setTitle(task.title || ''); // Atualiza o título
            setDescription(task.description || ''); // Atualiza a descrição
            if (task.createdAt) {
                // Converte a data UTC para o formato local (sem alterar o fuso)
                const localDate = new Date(task.createdAt);
                const isoDateTimeLocal = new Date(localDate.getTime() - localDate.getTimezoneOffset() * 60000)
                    .toISOString()
                    .slice(0, 16);
                setCreatedAt(isoDateTimeLocal); // Ajusta a data para exibição no campo datetime-local
            } else {
                setCreatedAt('');
            }
        }
    }, [task]);

    const handleSave = () => {
        if (title && description && createdAt) {
            const updatedTask = {
                ...task,
                title,
                description,
                createdAt: new Date(createdAt).toISOString(), // Salva a data em UTC para o backend
            };

            console.log("Tarefa atualizada enviada para o backend:", updatedTask);

            onSave(updatedTask); // Salva as alterações
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

                {/* Campo para título da tarefa */}
                <input
                    type="text"
                    placeholder="Título..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none "
                />

                {/* Campo para descrição da tarefa */}
                <textarea
                    placeholder="Descrição..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none "
                />

                {/* Campo para selecionar a data e hora de criação */}
                <input
                    type="datetime-local"
                    value={createdAt}
                    onChange={(e) => setCreatedAt(e.target.value)}
                    className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none"
                />

                {/* Botões de ação */}
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

                <button
                    onClick={handleDelete}
                    className="bg-red-500 text-white p-2 mt-4 rounded-lg w-full hover:bg-red-600 transition-colors"
                >
                    Excluir Tarefa
                </button>
            </div>
        </div>
    );
}

export default EditTaskModal;
