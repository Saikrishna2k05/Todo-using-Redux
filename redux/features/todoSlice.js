import { createSlice , nanoid} from '@reduxjs/toolkit'
const initialState={ 
    todos: []
}
const todoSlice=createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action)=>{
            const todo={
                id:nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
        },

        removeTodo: (state, action)=>{
            const todoId=action.payload;
            state.todos=state.todos.filter((todo)=> {
                return todo.id!==todoId
            })
        }

    }
})

export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer