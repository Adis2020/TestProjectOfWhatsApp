import React from 'react';
import s from './Header.module.css';
import menu from '../../../images/menu.png'

const Header = () => {
    return (
        <div className={s.header}>
            avatar
            <button className={s.menu}><img src={menu} alt="menu" className={s.menuImg}/></button>
        </div>
    );
};

export default Header;