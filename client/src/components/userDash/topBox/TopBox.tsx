import { Button } from "@mui/material";
import "./topBox.scss"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProjType = Object.freeze({ 
  NETWORKINFRASTRUCTURE: 0, 
  WEBDEV: 1, 
  SOFTDEV: 2, 
  APPDEV: 3, 
  UIUXDEV: 4, 
  CUSTOM:5 
});

interface Todo {
  id: number;
  todo: string;

}

const TopBox = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    axios.get('/api/dashboard/todo')
      .then(response => setTodos(response.data))
      .catch(error => console.error('Error fetching todos:', error));
  }, []);

  return (
    <div className="topBox">
      <h1>To Do</h1>
      <textarea name="to-do-textbox" color="neutral" defaultValue="Enter task here" cols={40} rows={5} />
        
      <br />
      <div className="list">
        <p></p>
        {todos.map(todo => (
          <li key={todo.id}>{todo.todo}</li>
        ))}
        <li>Task 1</li>
        <li>Task 2</li>
        <li>Task 3</li>
      </div>
    </div>
  );
}

export default TopBox;
