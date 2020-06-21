import React, { createContext } from 'react';
import todosReducer from '../reducers/todos.reducer';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';

const defaultValues = [
  { id: '0', task: 'Wash the dishes', completed: false },
  { id: '1', task: 'Eat a lunch', completed: false },
  { id: '2', task: 'Make groceries', completed: true },
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer(
    'todos',
    todosReducer,
    defaultValues
  );

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
