const zod = require('zod');

const createTodo = zod.object({
    title: zod.string().min(0),
    description: zod.string().min(0)
})

const updateTodo = zod.object({
    id: zod.string()
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}