import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import './index.css'

function App() {

  const[value, setValue] = useState('');

  const eventHandler = (e) => {
    setValue(e.target.value);
    console.log(e.target);
  };

  return(
    <>
      <input 
        value={value}
        placeholder='Enter some text'
        onChange={eventHandler}
      />
    </>
  );
}

export default App;
