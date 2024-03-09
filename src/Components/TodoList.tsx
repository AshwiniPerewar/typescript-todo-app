import React from 'react';
import TodoItem from './TodoItem';
import  "./todo.css"

interface TodoListProps {
  todos: { id: number; title: string }[];
  onDelete: (id: number) => void;
}

const TodoList= ({ todos, onDelete }:TodoListProps) => {
  return (
    <div className='todolist'>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TodoList;
