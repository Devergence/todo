import React from 'react';
import {TodoItem} from "../TodoItem/TodoItem";
import style from './TodoList.module.scss';

export const TodoList = ({items = [], onDone, onEdit, onRemove, setError}) => {
  if (!items.length) return "Sorry, but there are no todos yet";

  return (
    <ul className={style.itemList}>
      {
        items.sort((a, b) => a.title < b.title ? 1: -1).map(el => {
          return <TodoItem key={el.id} todo={el} onDone={onDone} onEdit={onEdit} onRemove={onRemove} error={setError}/>
        })
      }
    </ul>
  )
};
