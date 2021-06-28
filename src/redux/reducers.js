const ADD = 'ADD';
const TOGGLE = 'TOGGLE';
const REMOVE = 'REMOVE';

const initialState = [
  {
    id: 1,
    text: '프로젝트 생성',
    done: true
  },
  {
    id: 2,
    text: '컴포넌트 스타일링',
    done: true
  },
  {
    id: 3,
    text: 'Context 만들기',
    done: false
  },
  {
    id: 4,
    text: '기능 구현하기',
    done: false
  }
]

const todoReducer = (state=initialState, action)=>{
  switch(action.type){
    case ADD:
      return state.concat(action.todo);
    case TOGGLE:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case REMOVE:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state
  }
}
export default todoReducer;