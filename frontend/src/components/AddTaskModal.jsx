import React, { useState } from 'react';

function AddTaskModal({ onClose, onSave }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');

    const handleSave = () => {
        if (title && description && status) {
            onSave({ title, description, status, completed: false });
            onClose(); // Fecha o modal após salvar
        } else {
            alert("Preencha todos os campos");
        }
    };

    return (
        <div className="font-poppins fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
                <h2 className="text-xl font-medium mb-4 text-center">Adicionar Tarefa</h2>
                <input
                    type="text"
                    placeholder="Título..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 mb-3 border rounded-md  focus: outline-none"
                />

                <textarea
                    placeholder="Descrição..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 mb-3 border rounded-md focus: outline-none "
                />

                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full p-2 mb-3 border rounded-md"
                >
                    <option value="">Status</option>
                    <option value="AFazer">A Fazer</option>
                    <option value="Fazendo">Fazendo</option>
                    <option value="Feito">Feito</option>
                </select>

                <div className="flex justify-between mt-4">
                    <button
                        onClick={onClose}
                        className="bg-gray-200 p-3 w-32 rounded-lg hover:bg-gray-300"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleSave}
                        className="bg-[#6062FA]  text-white p-3 w-32 rounded-lg hover:bg-[#575af3]"
                    >
                        Adicionar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddTaskModal;
