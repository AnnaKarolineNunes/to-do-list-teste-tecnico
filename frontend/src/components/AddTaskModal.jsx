import React, { useState } from 'react';

function AddTaskModal({ onClose, onSave }) {
    // Inicializa a data local, não em UTC
    const getLocalDate = () => {
        const now = new Date();
        now.setMinutes(now.getMinutes() - now.getTimezoneOffset()); // Ajusta pelo fuso horário local
        return now.toISOString().split('T')[0];
    };

    const [title, setTitle] = useState(''); // Título da tarefa
    const [description, setDescription] = useState(''); // Descrição da tarefa
    const [createdAt, setCreatedAt] = useState(getLocalDate()); // Data de criação da tarefa

    const handleSave = () => {
        console.log("Data enviada para o backend:", createdAt);  // Verifique como está a data enviada
        if (title && description && createdAt) {
            onSave({ title, description, completed: false, createdAt });
            onClose();
        } else {
            alert("Preencha todos os campos");
        }
    };


    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
                <h2 className="text-xl font-medium mb-4 text-center">Adicionar Tarefa</h2>

                {/* Campo para título da tarefa */}
                <input
                    type="text"
                    placeholder="Título..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 mb-3 border border-gray-300 rounded-md focus: outline-none "
                />

                {/* Campo para descrição da tarefa */}
                <textarea
                    placeholder="Descrição..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 mb-3 border border-gray-300 rounded-md focus: outline-none"
                />

                {/* Campo para selecionar a data de criação */}
                <input
                    type="datetime-local"  // Troca de "date" para "datetime-local"
                    value={createdAt}
                    onChange={(e) => setCreatedAt(e.target.value)}
                    className="w-full p-2 mb-3 border border-gray-300 rounded-md focus: outline-none"
                />

                {/* Botões de salvar e cancelar */}
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
                        Adicionar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddTaskModal;
