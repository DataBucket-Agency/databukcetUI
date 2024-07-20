import React from 'react';
// import Logo from './assets/Logo.svg';

const Header = () => {
  return (
    <header className="bg-white shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold flex items-center">
            {/* <Logo/> */}
        <img src="./assets/Logo.svg" alt="..." />
            <span>Insurance Cover application</span></div>
        
      </div>
    </header>
  );
};

export default Header;
