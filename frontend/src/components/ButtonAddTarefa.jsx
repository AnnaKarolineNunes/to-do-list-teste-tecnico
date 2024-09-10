import React from 'react';
function ButtonAddTarefa({ onClick }) {
    return (
        <button 
            onClick={onClick}
            className='flex items-center rounded-lg w-full font-medium shadow p-2   bg-[#EFF0F3] hover:bg-gray-200'
            style={{ fontSize: "14px"  }}
        > 
            <img 
                src="/assets/icon-add.png" 
                alt="Add" 
                className="w-4 h-4 mr-2"
            />
            Nova Tarefa
        </button>
    )
}
export default ButtonAddTarefa;
