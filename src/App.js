
import React, { useState } from "react";
import ToDoList from "./ToDoList.js";


function App() {
   const [todos, setTodos] = useState([])

  
    return (
      <div className="todoApp">
      <ToDoList />
      </div>
    )
  }


export default App;
