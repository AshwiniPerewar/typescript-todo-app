import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Button, ListGroup } from 'react-bootstrap';
import "./todo.css"
interface TodoListProps {
  todos: { id: number; title: string, completed:boolean }[];
  handleTodoDelete: (id: number) => void;
  handleToggleStatus: (id: number) => void;
}

const TodoList= ({ todos, handleTodoDelete,handleToggleStatus }:TodoListProps) => {
  return (
    <ListGroup className="mt-4">
    {todos.map(todo => (
      <ListGroup.Item
        key={todo.id}
        className="d-flex justify-content-between align-items-start"
       >
       <span className={todo.completed ? "completed":""}> {todo.title}</span>
        <Button
          variant="danger"
          size="sm"
          className="ml-2 float-right"
          onClick={() => handleTodoDelete(todo.id)}
        >
          Delete
        </Button>
        <Button
          variant="primary"
          size="sm"
          className="ml-2 float-right"
          onClick={() => handleToggleStatus(todo.id)}
        >
          Toggle
        </Button>
      </ListGroup.Item>
    ))}
  </ListGroup>
  );
};

export default TodoList;
