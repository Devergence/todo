import React from 'react';
import {List} from "antd";
import {TodoItem} from "./TodoItem";

export const TodoList = ({items, onDone, onEdit, onRemove}) => {
  return (
    <List
      locale={{
        emptyText: "There's nothing to do yet"
      }}
      itemLayout="horizontal"
      dataSource={items}
      renderItem={todo => <TodoItem todo={todo} onDone={onDone} onEdit={onEdit} onRemove={onRemove}/>}
    />
  );
};
