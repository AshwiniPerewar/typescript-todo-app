import React, { useState } from 'react';
import TodoList from './Components/TodoList';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const App= () => {
  const [todos, setTodos] = useState<{ id: number; title: string, completed:boolean }[]>([]);
  const [inputText, setInputText] = useState('');

  interface Todo{
    id: number;
    title: string;
    completed:boolean;
}

// add text
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  // form submit handler
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputText.trim() !== '') {
      const newTodo: Todo = {
        id: Date.now(),
        title: inputText,
        completed:false
      };
      setTodos([...todos, newTodo]);
      setInputText('');
    }
  };

  // delete todo
  const handleTodoDelete = (id: number) => {
    setTodos(todos.filter(el=>el.id!==id));
  };

  // toggle todo
  const handleToggleStatus = (id: number) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <Container className="mt-5">
    <Row className="justify-content-center">
      <Col md={6}>
        <h1 className="text-center mb-4">Todo App</h1>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Enter todo"
              value={inputText}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" >
            Add Todo
          </Button>
        </Form>
          <TodoList todos={todos} handleTodoDelete={handleTodoDelete} handleToggleStatus={handleToggleStatus}/>
          </Col>
      </Row>
    </Container>
  );
};

export default App;
