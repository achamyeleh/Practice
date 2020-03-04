import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Icon } from 'semantic-ui-react';
import '../App.css';

export default function Todo() {
  const [field, setField] = useState('')
  const [todos, setTodos] = useState<string[]>([])

 const handleChange = (event: any) => {
   setField(event.target.value)
 }

 const handleClick = () => {
   setTodos([ ...todos, field])
 }

 const removeTodo = (name: any) => {
   const filte = todos.filter(n => n !== name)
   setTodos(filte)
 }
 
  return (
    <div className="todos">
      <input name="todo" placeholder="todo item" value={field} onChange={handleChange} />
      <Button onClick={handleClick}>Add Todo</Button>
      <div>
        {
          todos.map((todo,index)=> <li key={index}>{todo} <span onClick={()=>removeTodo(todo)}><Icon name="times" /></span></li>)
        }
      </div>
    </div>
  )
}
