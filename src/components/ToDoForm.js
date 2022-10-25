import React, { useState, useEffect, useRef } from "react";



  function ToDoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleChange = e => {
      setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input
    });
  };
 
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <> <input
      className="todo-input"
      value={input}
      type="text"
      placeholder="Update your item"
      onChange={handleChange}
      ref={inputRef}
      />
      <button className="todo-button">Update</button>
      </>) :
      (<>
      <input
        className="todo-input"
        value={input}
        type="text"
        placeholder="Add todo..."
        onChange={handleChange}
        ref={inputRef}
        />
        <button className="todo-button">Add todo</button>
        </>)}
   
    </form>
  )
}



export default ToDoForm;