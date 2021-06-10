const ADD = 'ADD';
const TOGGLE = 'TOGGLE';
const REMOVE = 'REMOVE';

const addTodo = () => {
  return {
    type: ADD
  }
}

const toggleTodo = () => {
  return {
    type: TOGGLE
  }
}

const removeTodo = () => {
  return {
    type: REMOVE
  }
}