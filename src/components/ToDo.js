import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import {AiOutlineDelete } from "@react-icons/all-files/ai/AiOutlineDelete";
import {AiOutlineEdit} from "@react-icons/all-files/ai/AiOutlineEdit";

function ToDo({todos, completeTodo, removeTodo, updatedTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = value => {
    updatedTodo(edit.id, value)
    setEdit({
      id: null,
      value: ''
    })
  }

  if (edit.id) {
    return <ToDoForm edit={edit} onSubmit={submitUpdate} />
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row "}
      key={index}
    >
      <div className="todo-text" key={todo.id} onClick={() => 
        completeTodo(todo.id)}>
        {todo.text}
      </div>

      <div className="icons">
        <AiOutlineDelete size={20} className="delete-icon" onClick={() => removeTodo(todo.id)} />
        <AiOutlineEdit size={20}  className="edit-icon" onClick={() => setEdit({id: todo.id, value: todo.text})}/>
      </div>
    </div>
  ));

}

export default ToDo;
