import React, {useState} from "react";
import style from './TodoForm.module.scss';

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
      <form onSubmit={submitHandler} className={style.form}>
        <input type="text"
               placeholder='Add todo'
               onChange={e => setText(e.target.value)} value={text}/>
        <button type="submit" disabled={error}>Add</button>
      </form>
      {error && <span>{error}</span>}
      </>
  )
}