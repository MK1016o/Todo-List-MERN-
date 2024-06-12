import { useState } from "react";
import '../App.css'

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div className="input-main">
        <h1 className="heading">Todo List</h1>
        <input type="text" placeholder="Enter title" className="title" onChange={(e) => {
            setTitle(e.target.value);
        }} value={title} required/> <br />
        <input type="text" className="description" placeholder="Enter description" onChange={(e) => {
            setDescription(e.target.value);
        }} value={description} required/> <br />

        <button className="add-task" onClick={() => {
            if(title != "" && description != "") {
                fetch("http://localhost:3000/todos",{
                    method:"POST",
                    body: JSON.stringify({
                        title: title,
                        description: description
                    }),
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                .then(async (res) => {
                    const json = await res.json();
                    alert("Todo added")
                    setTitle("")
                    setDescription("")
                })
            } else {
                alert("Please enter details");
            }
        }}>Add a Todo</button>
    </div>
}