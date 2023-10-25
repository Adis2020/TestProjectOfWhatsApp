import React, {useEffect, useState} from 'react';
import s from "./Chat.module.css";

const Message = () => {
    return (
        <div>
            тест
        </div>
    )
}

const Chat = () => {
    const array = [];
    const [messages, setMessages] = useState([]);

    return (
        <div>

            <button onClick={() => {
                array.push("Тест")
                console.log(array)
                setMessages(array)
            }}>Отправить</button>
        </div>
    );
};

export default Chat;