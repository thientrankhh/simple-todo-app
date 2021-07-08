import './App.css';
import React, { useState } from "react";
import AddToDo from './components/AddToDo';
import Header from './components/Header';
import ToDo from './components/ToDo';

function App() {
  const todos = useState(
    {
      id: 1,
      title: "Setup development environment",
      completed: false
      },
      {
      id: 2,
      title: "Develop website and add content",
      completed: true
      },
      {
      id: 3,
      title: "Deploy to live server",
      completed: true
      }
    );
      console.log(todos);
  return (
    <div className="container">
        <Header />
        <AddToDo />
        <ToDo todos={todos} />
    </div>
  );
}

export default App;
