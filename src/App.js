import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import './index.css'

const CountDown = ({hr,min,sec}) => {
  const [over,setOver] = useState(false);
  const [paused, setPaused] = useState(true);
  const [[h,m,s], setTime] = useState([hr,min,sec]);

  const tick = () => {
    if( paused || over){
        return;
    }
    if(h===0 && m===0 && s===0){
      setOver(true);
    }
    else if(m===0 && s===0){
      setTime([h-1,59,59]);
    }
    else if(s===0){
      setTime([h,m-1,59]);
    }
    else{
      setTime([h,m,s-1]);
    }
  }
  
  const handleReset = () => {
    setTime([hr,min,sec]);
    setPaused(true);
    setOver(false);
  }
  
  const handlePause = () => {
    setPaused(!paused);
  }
  
  const fmt = (val) => {
    return val.toString().padStart(2,'0');
  }

  useEffect (() => {
    let ticker = setInterval(() => tick(),1000);
    return () => {
      clearInterval(ticker);
    }
  });

  return (
    <>
    <h3 className='countdown'>{`${fmt(h)}:${fmt(m)}:${fmt(s)}`}</h3>
    <button onClick={handlePause}>{paused?'Start':'Pause'}</button>
    <button onClick={handleReset}>Reset</button>
    </>
  )
};

function App() {
  return(
    <div>
      <CountDown hr={0} min={0} sec={10} />
    </div>
  );
}

export default App;
