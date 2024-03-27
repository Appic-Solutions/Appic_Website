import React from "react";

const Header = () => {
    return (
      <header className=" bg-transparent text-black py-4">
        <div className="container mx-auto">
          <nav className="flex justify-end">
            <a href="#proposal" className="px-4 py-2 hover:bg-gray-800">Proposal</a>
            <a href="#milestones" className="px-4 py-2 hover:bg-gray-800">Milestones</a>
            <a href="#team" className="px-4 py-2 hover:bg-gray-800">Team</a>
            <a href="#contact" className="px-4 py-2 hover:bg-gray-800">Contact</a>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;