import React from 'react';
import s from "./Main.module.css";
import Header from "../registrationPage/header/Header";
import Chat from "./chat/Chat";

const Main = () => {
    return (
        <div className={s.main}>
            <Header/>
            <Chat/>
        </div>
    );
};

export default Main;