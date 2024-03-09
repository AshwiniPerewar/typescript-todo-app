import React from 'react';
import  "./todo.css"

interface TodoItemProps {
  todo: { id: number; title: string };
  onDelete: (id: number) => void;
}

const TodoItem = ({ todo, onDelete }:TodoItemProps) => {
  return (
    <div key={todo.id} className="todoitem">
        <div>{todo.title}</div>
        {/* <div>{status ? "DONE" : "NOT DONE"}</div> */}
        {/* <button onClick={()=>handleToggle(id)}>Toggle</button> */}
        <button onClick={()=>onDelete(todo.id)}>Delete</button>
      </div>
  );
};

export default TodoItem;
