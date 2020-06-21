import React, { useContext } from 'react';
import { EDIT_TODO } from '../constants/actions';
import { DispatchContext } from '../context/todos.context';
import useInputState from '../hooks/useInputState';
import useStyles from '../styles/EditFormStyles';

function EditTodo({ id, task, toggle }) {
  const classes = useStyles();
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, clearValue] = useInputState();

  return (
    <form
      className={classes.EditForm}
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: EDIT_TODO, id, task: value });
        toggle();
        clearValue();
      }}
    >
      <input
        autoFocus
        onClick={(e) => {
          e.stopPropagation();
        }}
        onChange={handleChange}
        className={classes.input}
        value={value || ''}
        type='text'
        placeholder='Edit your todo...'
      />
    </form>
  );
}

export default EditTodo;
