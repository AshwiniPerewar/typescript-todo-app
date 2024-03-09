import React, { useState } from 'react';
import TodoList from './Components/TodoList';
import  "./Components/todo.css"

const App= () => {
  const [todos, setTodos] = useState<{ id: number; title: string }[]>([]);
  const [inputText, setInputText] = useState('');

  const handleDeleteTodo = (id: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  return (
    <div className='outer'>
      <h1 style={{}}>Todo App</h1>
      <div className='addtodo'>
      <input
        type="text"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
      />
      <button onClick={() => {
        if (inputText.trim() !== '') {
          setTodos(prevTodos => [
            ...prevTodos,
            { id: Date.now(), title: inputText }
          ]);
          setInputText('');
        }
        }}>Add Todo</button>
        </div>
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
    </div>
  );
};

export default App;
