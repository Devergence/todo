import React from 'react';
import { Checkbox } from 'antd';
import { DeleteFilled } from '@ant-design/icons';

export const TodoItem = ({todo, onDone, onEdit, onRemove}) => {
  const removeTodoHandler = () => onRemove(todo.id);
  const toggleDone = () => onDone(todo.id);
  const toggleEdit = (e) => {
    onEdit(todo.id, e.target.value);
  };
  const titleTodo = todo.title || '';

  return (
    <li>
      <Checkbox onChange={toggleDone}/>
      <input
        type="text"
        defaultValue={titleTodo}
        onChange={toggleEdit}
      />
      <DeleteFilled onClick={removeTodoHandler}/>
    </li>
  );
};
