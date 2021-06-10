import React from 'react';
import styled from 'styled-components';
import TodoAdd from './TodoAdd';
import { connect } from 'react-redux';

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .todo-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 20px;
    font-weight: bold;
  }
`;
// const undoneTasks = mapStateToProps.todos.filter(todo => !todo.done);

function TodoHeader(props) {
  return (
    <TodoHeadBlock>
      <h1>2019년 7월 10일</h1>
      <div className="todo-left">남은 할 일: {props.todos.length}</div>
      <TodoAdd />
    </TodoHeadBlock>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

export default connect(mapStateToProps)(TodoHeader);