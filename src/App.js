import logo from './logo.svg';
import './App.css';
import React from 'react';
import './index.css'

function Card(props){
  return(
    <section>
        <h2> {props.icon} Title </h2>
        {props.children}
    </section>
  );
}

function Myicon(){
  return <i>🔥</i>;
}

function App() {
  return (
    <div className="App">
      <Card icon={<Myicon/>}>
        <p>The body of the card</p>
      </Card>
    </div>
  );
}

export default App;
