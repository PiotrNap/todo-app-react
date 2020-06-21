import React, { useContext, memo } from 'react';
import { DispatchContext } from '../context/todos.context';
import useToggleState from '../hooks/useToggleState';
import { DELETE_TODO, TOGGLE_TODO } from '../constants/actions';
import useStyles from '../styles/TodoStyles';
import EditTodoForm from './EditTodoForm';

function Todo({ id, task, completed }) {
  const dispatch = useContext(DispatchContext);
  const [isEditing, handleToggle] = useToggleState(false);
  const classes = useStyles();

  if (isEditing) {
    return (
      <li
        className={classes.Todo}
        onClick={() => handleToggle()}
        style={{ overflowY: 'hidden' }}
      >
        <EditTodoForm id={id} task={task} toggle={handleToggle} />
      </li>
    );
  }

  return (
    <li
      className={classes.Todo}
      onClick={() => dispatch({ type: TOGGLE_TODO, id })}
    >
      <span
        style={{
          textDecoration: completed ? 'line-through' : '',
          color: completed ? '#ccc' : '#202021',
        }}
      >
        {task}
      </span>
      <div className={classes.icons}>
        <i
          style={{ color: '#c4321b', marginRight: '5px' }}
          className='fas fa-trash'
          onClick={(e) => {
            dispatch({ type: DELETE_TODO, id });
            e.stopPropagation();
          }}
        ></i>
        <i
          className='fas fa-pencil-alt'
          onClick={(e) => {
            handleToggle();
            e.stopPropagation();
          }}
        ></i>
      </div>
    </li>
  );
}

export default memo(Todo);
