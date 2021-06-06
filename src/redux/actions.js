const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';

const addTodo = () => {
  return {
    type: ADD_TODO
  }
}

const removeTodo = () => {
  return {
    type: REMOVE_TODO
  }
}