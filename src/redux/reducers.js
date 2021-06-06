const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';

const initialState = {
  todos: [
    {
      id: 1,
      text: '첫번째 할 일',
      done: true
    },
  ]
}

const todoReducer = (state=initialState, action)=>{
  switch(action.type){
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.todo]
      }
    case REMOVE_TODO:
      return {

      }
    default:
      return state
  }
}
export default todoReducer;