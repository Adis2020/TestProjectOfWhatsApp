import React from 'react';
import s from './Registration.module.css';
import {NavLink} from "react-router-dom";

const Registration = () => {
    const getInfo = (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            secondName: e.target.secondName.value,
            password: e.target.password.value
        }
        console.log(data)
    }

    return (
        <form className={s.registration} onSubmit={getInfo}>
            <div className={s.mainText}>Регистрация</div>
            <div>Имя: <input type="text" id="name"/></div>
            <div>Фамилия: <input type="text" id="secondName"/></div>
            <div>Пароль: <input type="text" id="password"/></div>
            <NavLink to={"/main"}>
                <button type="submit" className={s.submit}>Зарегистрироваться</button>
            </NavLink>
        </form>
    );
};

export default Registration;