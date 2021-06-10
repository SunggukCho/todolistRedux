import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import { Provider } from 'react-redux'
import store from './redux/store'

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;


function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHeader />
        <TodoList />
      </TodoTemplate>
    </Provider>
  );
}

export default App;
