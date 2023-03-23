import React, { useState, useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";

function Writers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="mt-28 flex flex-col w-full items-center grow">
            <ul className="flex flex-col p-5">
                {users.map((user) => (
                    <li
                        className="bg-stone-600 rounded-xl p-2 mb-2 shadow-stone-700 shadow-md"
                        key={user.id}
                    >
                        <p className="text-slate-300">{user.name}</p>                        
                        <p className="lowercase text-stone-400 flex gap-x-2 items-center">
                            <AiOutlineMail />
                            {user.email}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export { Writers };
