import {} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../redux/features/todoSlice'
const Todos = () => {
    const todos=useSelector((state)=>state.todo.todos)
    const dispatch=useDispatch();
    function deleteTodo(id)
    {
        dispatch(removeTodo(id))
    }
  return (
    <>  
        <div>All todos</div>
        {todos.map((todo)=>(
            <div key={todo.id}>    
                {todo.text}
                <button onClick={()=>deleteTodo(todo.id)}>x</button>
            </div>
        ))}
    </>
  )
}

export default Todos