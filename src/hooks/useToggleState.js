import { useState } from 'react';

export default (initialValue = false) => {
  const [state, setState] = useState(initialValue);
  const handleToggle = () => setState(!state);

  return [state, handleToggle];
};
