import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState, useContext, createContext } from 'react';
import './index.css'

const CountContext = new createContext();

function CountProvider ({children}){
  const[count,setCount] = useState(0);

  return(
    <CountContext.Provider value={{count,setCount}}>
      {children}
    </CountContext.Provider>
  )
}

function Count(){
  const {count} = useContext(CountContext);
  return <h3>{`Current Count: ${count}`}</h3>
}

function CountButton(){
  const {setCount} = useContext(CountContext);
  return(
    <button onClick={() => setCount(count => count + 1)}>
      Increment
    </button>
  )
}

function App() {
  return(
    <CountProvider>
      <Count/>
      <CountButton/>
    </CountProvider>
  );
}

export default App;
