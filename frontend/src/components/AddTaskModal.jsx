import React, { useState } from 'react';

function AddTaskModal({ onClose, onSave }) {
    const [title, setTitle] = useState(''); // Título da tarefa
    const [description, setDescription] = useState(''); // Descrição da tarefa

    const handleSave = () => {
        if (title && description) {
            // Passa as propriedades title e description corretamente
            onSave({ title, description, completed: false });
            onClose(); // Fecha o modal após salvar
        } else {
            alert("Preencha todos os campos");
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
                <h2 className="text-xl font-medium mb-4 text-center">Adicionar Tarefa</h2>
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
                        className="bg-gray-200 p-3 w-32 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleSave}
                        className="bg-[#6062FA] text-white p-3 w-32 rounded-lg hover:bg-[#575af3] transition-colors"
                    >
                        Adicionar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddTaskModal;
