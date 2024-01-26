import { useState } from "react";

export function CreateTodo() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div className="flex flex-col gap-5 border-r-2 justify-center items-center h-screen w-1/3">

        <input
            type="text"
            placeholder="title"
            className="border-gray-500 
                border-2 
                h-10 
                rounded-lg 
                text-center"
            id="title"
            onChange={function (e) {
                const value = e.target.value;
                setTitle(e.target.value);
            }}
        ></input><br />

        <input 
            type="text" 
            placeholder="description" 
            className="border-gray-500 
                border-2 
                h-10 
                rounded-lg 
                text-center" 
                id="description" 
            onChange={function (e) {
                const value = e.target.value;
                setDescription(e.target.value);
            }}
        ></input><br />

        <button className="bg-blue-500 text-white h-10 rounded-lg px-10" onClick={() => {
            fetch('http://localhost:3000/todo', {
                method: 'POST',
                body: JSON.stringify({
                    title: title,
                    description: description
                }), 
                headers: {
                    "content-type": "application/json"
                }
            })
                .then(async function (res) {
                    const json = await res.json();
                    alert('Todo Added')
                })
        }}>Add a todo</button>
    </div>
}