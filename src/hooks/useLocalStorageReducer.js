import { useEffect, useReducer } from 'react';

export default function useLocalStorageReducer(key, reducer, defaultValues) {
  const [state, dispatch] = useReducer(reducer, defaultValues, () => {
    let value;
    try {
      value = JSON.parse(
        window.localStorage.getItem(key) || String(defaultValues)
      );
    } catch (error) {
      value = defaultValues;
    }
    return value;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, dispatch];
}
