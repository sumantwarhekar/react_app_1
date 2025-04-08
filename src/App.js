import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import './index.css'

function App() {

  const[count,setCount] = useState(0);
  const[prevCount, setPrevCount] = useState(0);

  const handlelick = () => {
    setCount((prev) => {
      setPrevCount(prev);
    })
    setCount(count + 1);
  }

  return(
    <>
      <h3> Current Count : {count} </h3>
      <h3> Previous Count : {prevCount} </h3>
      <button onClick={handlelick}>Increment</button>
    </>
  );
}

export default App;
