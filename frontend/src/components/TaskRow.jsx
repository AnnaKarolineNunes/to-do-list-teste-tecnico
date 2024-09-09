import React from 'react';
import { format } from 'date-fns';

function TaskRow({ task, onToggleComplete, onEdit, onDelete }) {
    // Formata a data e a hora para 'dd/MM/yyyy HH:mm'
    const formattedCreatedAt = format(new Date(task.createdAt), 'dd/MM/yyyy HH:mm');
    const formattedUpdatedAt = format(new Date(task.updatedAt), 'dd/MM/yyyy HH:mm');

    return (
        <tr className="mb-3 shadow-sm">
            <td className="px-6 py-6 whitespace-nowrap">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => onToggleComplete(task)}
                            className="h-5 w-5"
                        />
                        <span className={`pl-3 text-md ${task.completed ? 'line-through text-gray-400' : ''}`}>
                            {task.title}
                        </span>
                    </div>
                    <div className="ml-6 text-sm text-gray-600 truncate max-w-xs overflow-hidden">
                        {task.description}
                    </div>
                </div>
            </td>
            <td className="px-6 py-6 whitespace-nowrap">
                <span className="text-sm bg-green-100 text-green-600 rounded-md px-2 py-1">
                    {formattedCreatedAt}
                </span>
            </td>
            <td className="px-6 py-6 whitespace-nowrap">
                <span className="text-sm bg-[#ebebeb] text-black rounded-md px-2 py-1">
                    {formattedUpdatedAt}
                </span>
            </td>
            <td className="px-6 py-6 whitespace-nowrap text-right text-sm font-medium">
                <button onClick={() => onDelete(task.id)}>
                    <img src="/frontend/assets/lixeira.png" alt="Deletar Tarefa" className="w-5 h-5 inline" />
                </button>
                <button onClick={() => onEdit(task)} className="ml-4">
                    <img src="/frontend/assets/more-info.png" alt="Opções" className="w-5 h-5 inline" />
                </button>
            </td>
        </tr>
    );
}

export default TaskRow;
