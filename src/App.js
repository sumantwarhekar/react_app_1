import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import './index.css'

const LoadingButton = (props) => {
  return(
    <button onClick={props.onClick} type="button">
      {props.loading? <div className="loader"/> : props.label}
    </button>
  );
};

// Alternative
// const LoadingButton = (props) => {
//   const { onClick, loading, label } = props;
//   return (
//     <button onClick={onClick} type="button">
//       {loading ? <div className="loader" /> : label}
//     </button>
//   );
// };

// Alternative
// const LoadingButton = ({ onClick, loading, label }) => {
//   return (
//     <button onClick={onClick} type="button">
//       {loading ? <div className="loader" /> : label}
//     </button>
//   );
// };

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <LoadingButton 
        label="Press Me"
        loading={isLoading}
        onClick={() => setIsLoading(!isLoading)}
      />
    </>
  );
}

export default App;
