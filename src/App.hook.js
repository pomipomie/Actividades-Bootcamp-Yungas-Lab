import { useEffect, useState } from 'react';
import './App.css';

function AppHook() {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    const [todo, setTodo] = useState();
    const fetchApi = async () => {
        const response = await fetch(url);
        console.log(response.status);
        const responseJSON = await response.json();
        setTodo(responseJSON);
        console.log(responseJSON);
    }
    useEffect(() => {
        fetchApi()
    }, []);
    return (
        <div>
            Lista de usuarios
            <ul>
                {!todo ? 'Cargando' :
                todo.map((todo, index) => {
                    return <li key={index}>{todo.title}</li>
                })
                }
            </ul>
        </div>
    );
}

export default AppHook;