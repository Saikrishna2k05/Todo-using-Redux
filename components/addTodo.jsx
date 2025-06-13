import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import {addTodo} from '../redux/features/todoSlice.js'

const AddTodo= ()=>
{
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  function addTodos(){
    dispatch(addTodo(inputValue));
    setInputValue('');
  }
  function updateVal(e){
    setInputValue(e.target.value)
  }
  return (
    <>
      <input type="text" placeholder='Enter your todo' value={inputValue} onChange={updateVal}/>
      <button onClick={addTodos}>Add todo</button>
    </>
  )
}

export default AddTodo;