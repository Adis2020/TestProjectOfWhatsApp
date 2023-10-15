import React from 'react';
import s from './Registration.module.css';

const Registration = () => {
    return (
        <div className={s.registration}>
            <div className={s.mainText}>Регистрация</div>
            <div>Имя: <input type="text"/></div>
            <div>Фамилия: <input type="text"/></div>
            <div>Пароль: <input type="text"/></div>
            <button className={s.submit}>Зарегистрироваться</button>
        </div>
    );
};

export default Registration;