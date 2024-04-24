import React from 'react';
import './Header.css';
import Menu from '../Assets/Menu.svg';

const Header = () => {
    return (
        <div>
            <header>
                <div>
                    <img src={Menu} alt=""/>
                    <p className="companyName">PIP</p>
                </div>
            </header>
        </div>
    );
};

export default Header;