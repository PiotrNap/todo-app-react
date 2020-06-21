import React, { useContext } from 'react';
import { TodosContext } from '../context/todos.context';
import Todo from './Todo';
import useStyles from '../styles/ListStyles';

function TodoList() {
  const todos = useContext(TodosContext);
  const classes = useStyles();

  return (
    <ul className={classes.ListStyles}>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  );
}

export default TodoList;
