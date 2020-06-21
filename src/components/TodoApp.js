import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { TodosProvider } from '../context/todos.context';

function TodoApp() {
  return (
    <TodosProvider>
      <TodoForm />
      <TodoList />
    </TodosProvider>
  );
}

export default TodoApp;
