import React, { useContext } from 'react';
import useStyles from '../styles/FormStyles';
import useInputState from '../hooks/useInputState';
import { ADD_TODO } from '../constants/actions';
import { DispatchContext } from '../context/todos.context';

function TodoForm() {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, clearValue] = useInputState();
  const classes = useStyles();

  return (
    <form
      className={classes.FormStyles}
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: ADD_TODO, task: value });
        clearValue();
      }}
    >
      <input
        onChange={(e) => handleChange(e)}
        className={classes.input}
        value={value || ''}
        type='text'
        placeholder='Enter a new todo...'
      />
    </form>
  );
}

export default TodoForm;
