import React from 'react'

const TodoList = (props) => {
  return (
    <div>
    <ul>
    <li >
    {props.isDone?(
        <del>
        {props.work}
        </del>):(props.work)}
    </li>
    </ul>
    </div>
  )
}

export default TodoList