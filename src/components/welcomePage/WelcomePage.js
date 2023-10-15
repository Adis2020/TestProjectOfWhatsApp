import React from 'react';
import s from './WelcomePage.module.css';
import Header from "./header/Header";
import Registration from "./registration/Registration";

const WelcomePage = () => {
    return (
        <div className={s.welcomePage}>
            <Header/>
            <Registration/>
        </div>
    );
};

export default WelcomePage;