import React from 'react';
import useStyles from '../styles/AppStyles';
import TodoApp from './TodoApp';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <header className={classes.header}>
        <h1>
          To-Do <span className={classes.span}>App</span>
        </h1>
        <h2>A simple Todo app built with useReducer and useContext</h2>
      </header>
      <TodoApp />
    </div>
  );
}

export default App;
