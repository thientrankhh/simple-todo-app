import './App.css';
import React, { useState } from 'react';
import AddToDo from './components/AddToDo';
import Header from './components/Header';
import ToDo from './components/ToDo';
//khai báo thư viện axios
// import axios from "axios";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Setup development environment",
      completed: false
    },
    {
      id: 2,
      title: "Develop website and add content",
      completed: false
    },
    {
      id: 3,
      title: "Deploy to live server",
      completed: false
    }
  ]);

  const addToDo = (title) => {
      const newTodo = {
        id : (todos.length + 1),
        title: title,
        completed : false
      };
      
      setTodos([...todos, newTodo]);
  }

  const deleleToDo = (id) => { 
     setTodos([...todos.filter((todo) => {
        return todo.id !== id;
     })])
  };

  const handleCheckBoxChange = (id) => { 
    setTodos(todos.map((todo) => {
      if (todo.id == id) {
       todo.completed = !todo.completed;
      }    
      
      return todo;
    }))
  };

  return (
    <div className="container">
        <Header />
        <AddToDo  addToDo={addToDo}/>
        <ToDo 
          todos={todos} 
          handleChange ={handleCheckBoxChange}
          deleleToDo = {deleleToDo}
        />
    </div>
  );
}

export default App;
