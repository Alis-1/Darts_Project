import React, { useContext } from 'react';
import { MyContext } from './MyProvider';

const MyComponent = () => {
  const { state, setState } = useContext(MyContext);

  return (
    <div>
      <p>{state.someValue}</p>
      <button onClick={() => setState({ ...state, someValue: 'New Value' })}>
        Päivitä arvo
      </button>
    </div>
  );
};

export default MyComponent;