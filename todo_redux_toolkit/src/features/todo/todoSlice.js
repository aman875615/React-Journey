import { createSlice ,nanoid} from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [{id: 1, text: 'Learn Redux Toolkit', completed: false}],

    },
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false,
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload)
            if (todo) {
                todo.completed = !todo.completed
            }

        },
        updateTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id)
            if (todo) {
                todo.text = action.payload.text
            }
        }
    },
})

export const { addTodo, removeTodo, toggleTodo, updateTodo } = todoSlice.actions
export default todoSlice.reducer
