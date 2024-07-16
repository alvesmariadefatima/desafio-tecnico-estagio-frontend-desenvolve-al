import React from 'react';

function Navbar() {
    return (
        <nav className="bg-white">
            <div className="flex justify-center items-center space-x-4">
                <a href="#home" className="text-purple-700 px-3 py-2 rounded-md text-lg font-medium">Home</a>
                <a href="#projetos" className="text-purple-700 px-3 py-2 rounded-md text-lg font-medium">Projetos</a>
                <a href="#experiencias" className="text-purple-700 px-3 py-2 rounded-md text-lg font-medium">Experiências</a>
                <a href="#contato" className="text-purple-700 px-3 py-2 rounded-md text-lg font-medium">Contato</a>
            </div>
        </nav>
    );
}

export default Navbar;
