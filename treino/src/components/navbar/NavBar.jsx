import React from "react";
import '../../styles/NavBar.scss'
import {GiH2O} from 'react-icons/gi'
import {GiHamburgerMenu} from 'react-icons/gi'

export const NavBar = () => {
  return (
    <header className="Header">
      <nav className="Nav">
        <div >
            <GiH2O className="Logo"/>
        </div>
        <div>
            <h1 className="Title">Controle financeiro</h1>
        </div>
        <div >
            <GiHamburgerMenu className="Menu"/>
        </div>
      </nav>
    </header>
  );
};
