import React from 'react';
import { DeleteFilled } from '@ant-design/icons';

export const TodoItem = ({todo, onDone, onEdit, onRemove, error}) => {
  const { title, isDone } = todo;

  const removeTodoHandler = () => onRemove(todo.id);

  const toggleDone = () => onDone(todo.id);

  const toggleEdit = (e) => {
    e.preventDefault();
    const { value } = e.target;
    onEdit(todo.id, e.target.value);

    if(value.length < 1) {
      error('Too short');
    }
    if(value.length > 2) {
      error(null);
    }
  };

  return (
    <li>
      <input type="checkbox" onChange={toggleDone} checked={isDone}/>
      <input
        type="text"
        defaultValue={title}
        onChange={toggleEdit}
        style={{textDecoration: isDone ? 'line-through' : 'none'}}
        disabled={isDone}
      />
      <DeleteFilled onClick={removeTodoHandler}/>
    </li>
  );
};
