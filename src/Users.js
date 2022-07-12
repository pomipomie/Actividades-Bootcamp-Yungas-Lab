import { useEffect, useState } from 'react';
import './App.css';

const userStyles = {backgroundColor: "#282c34", color: "white", height: "100vh", padding: "5vw"};

function Users() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const [user, setUser] = useState();
    const fetchApi = async () => {
        const response = await fetch(url);
        console.log(response.status);
        const responseJSON = await response.json();
        setUser(responseJSON);
        console.log(responseJSON);
    }
    useEffect(() => {
        fetchApi()
    }, []);
    return (
        <div style={userStyles}>
            Lista de usuarios
            <ul>
                {!user ? 'Cargando' :
                user.map((user, index) => {
                    return (
                        <>
                            <li key={index}>{user.username}</li>
                            <li key={index}>{user.email}</li>
                        </>
                    )
                })
                }
            </ul>
        </div>
    );
}

export default Users;