import React, {useState} from "react";

export const TodoForm = ({ onAddTodo, error }) => {
  const [text, setText] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if(!text.length || text.match(/^[ ]+$/)) return;
    onAddTodo(text);
    setText('');
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text"
               placeholder='Add todo'
               onChange={e => setText(e.target.value)} value={text}/>
        <button type="submit" disabled={error}>Add</button>
      </form>
      {error && <span>{error}</span>}
      </>
  )
}