export const getItemsFromLocalStorage = key => {
  const localValue = localStorage.getItem(key);
  let todoItemList = null;

  try {
    const parsedJSON = JSON.parse(localValue);
    if (Array.isArray(parsedJSON)) {
      todoItemList = parsedJSON;
    }
  } catch(e) {
    todoItemList = [];
  }

  return todoItemList;
}

export const saveToLocalStorage = (key, text) => localStorage.setItem(key, JSON.stringify(text));