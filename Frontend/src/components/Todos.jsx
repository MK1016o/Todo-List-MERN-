export function Todos({todos}) {
    return <div className="center">
        <h1 className="heading">{ todos == [] ? "ALL TODOS" : ""}</h1>
        {todos.map((todo) => {
            return <div style={{
                width: 350
            }}>
                <h1 className="title-display">{todo.title}</h1>
                <div className="btns">
                    <h3 className="description-display">{todo.description}</h3>
                    <button className="mark" onClick={() => {
                        if(!todo.completed) {
                            fetch("http://localhost:3000/completed",{
                                method:"PUT",
                                body: JSON.stringify({
                                    id: todo._id
                                }),
                                headers: {
                                    "Content-type": "application/json"
                                }
                            })
                            .then(async (res) => {
                                const json = await res.json();
                                alert("Updating")
                            })
                        }
                        else {
                            alert("Already completed")
                        }
                    }
        }>{todo.completed == true ? "Y" : "X"}</button>
                </div>
            </div>
        })}
    </div>
}