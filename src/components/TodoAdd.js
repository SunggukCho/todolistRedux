import React from 'react';
import styled from 'styled-components';
import { RiAddFill } from 'react-icons/ri';

const TodoInputBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TodoInputGetData = styled.input`
  display: flex;
  margin: 20px auto;
  width: 100%;
  height: 25px;
  border-radius: 4px;
  ::placeholder {
    color: #868e96;
  }
`;

const TodoInputButton = styled.button`
  margin: 0 10px;
  text-align: center;
  background-color: white;
  width: 32px;
  height: 32px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #38d9a9;
  border: 1px solid #38d9a9;
  border-radius: 16px;
  cursor: pointer;
  &:hover {
    background-color: #38d9a9;
    color: white;
  }
`;

function TodoAdd() {
  return (
    <TodoInputBlock>
      <TodoInputGetData 
        autoFocus 
        placeholder="할 일을 입력하세요. "/>
      <TodoInputButton><RiAddFill /> </TodoInputButton>
    </TodoInputBlock>
  );
}

export default TodoAdd;