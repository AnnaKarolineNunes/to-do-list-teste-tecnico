import React from 'react';
function ButtonAddTarefa({ onClick }) {
    return (
        <button 
            onClick={onClick}
            className='flex items-center rounded-2xl font-medium shadow p-2 bg-gray-100 hover:bg-gray-200'
            style={{ fontSize: "14px" }}
        > 
            <img 
                src="./icon-add.png" 
                alt="Add" 
                className="w-4 h-4 mr-2"
            />
            Nova Tarefa
        </button>
    )
}
export default ButtonAddTarefa;
