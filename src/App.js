import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state)

  return (
    
    <div>
      {state}
      <br />
      <button onClick ={() => dispatch({type:"ADICIONAR"})}>
        Adicionar
      </button>
    </div>
  );
}

export default App;
