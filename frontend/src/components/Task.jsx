import React from 'react';

function Task({ title, description, completed }) {
    return (
        <div className="font-poppins max-w-md mx-auto mt-10 bg p-8 border border-gray-200 rounded-lg shadow-lg ">
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
            <p className="text-sm text-gray-600">
                Status: {completed ? 'Concluída' : 'Pendente'}
            </p>
        </div>
    );
}

export default Task;
