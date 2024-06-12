const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const cors = require("cors")

app.use(express.json());
app.use(cors())

app.get('/todos', async (req, res) => {
    const todos = await todo.find({});
    res.json({
        todos
    })
})

app.post('/todos', async (req, res) => {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload) {
        res.status(411).json({
            msg: "You sent wrong inputs"
        });
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })
})

app.put('/completed', async (req, res) => {
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload) {
        res.status(411).json({
            msg: "You sent wrong inputs"
        });
        return;
    }

    const todos = await todo.updateOne({
        _id: req.body.id
    }, {
        completed: true
    })

    res.json({ 
        msg: "Todo marked as completed"
    })
})

app.listen(3000);