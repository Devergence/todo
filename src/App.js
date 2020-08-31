import React, {useCallback, useState} from 'react';
import {TodoForm} from "./components/TodoForm";
import {TodoList} from "./components/TodoList";
import {getItemsFromLocalStorage, saveToLocalStorage} from "./lib/helpers";
import style from './App.module.scss';

export const App = () => {
  const [todoItems, setTodoItems] = useState(getItemsFromLocalStorage('todo') || []);
  const [error, setError] = useState(null);

  const addTodoHandler = todo => {
    const newTodoItems = [
      {
        id: Math.random() * 100,
        title: todo,
        isDone: false
      },
      ...todoItems,
    ]

    setTodoItems(newTodoItems)
    saveToLocalStorage('todo', newTodoItems)
  }

  const removeHandler = id => {
    const unionTodoItems = todoItems.filter(item => item.id !== id);
    setTodoItems(unionTodoItems);
    saveToLocalStorage('todo', unionTodoItems);
  };

  const doneHandler = id => {
    const todo = todoItems.find(todoItem => todoItem.id === id);
    todo.isDone = !todo.isDone;
    setTodoItems([...todoItems]);
    saveToLocalStorage('todo', todoItems);
  }

  const editHandler = useCallback((id, title) => {
    const editingTitle = todoItems.find(todoItem => todoItem.id === id);
    editingTitle.title = title;
    setTodoItems([...todoItems])
    saveToLocalStorage('todo', todoItems)
  }, [todoItems]);

  return (
    <div className="App">
      <h1>Todo Application</h1>
      <TodoForm onAddTodo={addTodoHandler}  error={error}/>
      <TodoList
        items={todoItems}
        onRemove={removeHandler}
        onDone={doneHandler}
        onEdit={editHandler}
        setError={setError}/>
    </div>
  );
}
