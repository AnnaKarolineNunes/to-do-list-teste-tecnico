import React from 'react';

function BarradePesquisa({ searchQuery, setSearchQuery }) {
    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="pl-10 pt-5 relative">
            <div className="font-poppins w-[408px] h-[48px] bg-white rounded-[10px] shadow-md flex items-center pl-5">
                {/* Ícone de lupa como imagem */}
                <img src="/frontend/assets/search.png" alt="Search Icon" className="w-5 h-5 mr-3" />
                {/* Input de pesquisa */}
                <input
                    type="text"
                    placeholder="Pesquisar tarefa..."
                    value={searchQuery}
                    onChange={handleInputChange}
                    className="w-full h-full bg-transparent outline-none text-gray-700"
                />
            </div>
        </div>
    );
}

export default BarradePesquisa;
