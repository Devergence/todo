import React, {useState} from "react";

export const TodoForm = ({ onAddTodo }) => {
  const [text, setText] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    onAddTodo(text);
    setText('');
  }

  return (
    <form onSubmit={submitHandler}>
      <input type="text"
             placeholder='Add todo'
             onChange={e => setText(e.target.value)} value={text}
      />
      <button type="submit">Add</button>
    </form>
  )
}