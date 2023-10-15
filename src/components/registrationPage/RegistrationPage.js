import React from 'react';
import s from './RegistrationPage.module.css';
import Header from "./header/Header";
import Registration from "./registration/Registration";

const RegistrationPage = () => {
    return (
        <div className={s.welcomePage}>
            <Header/>
            <Registration/>
        </div>
    );
};

export default RegistrationPage;