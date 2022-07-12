import React from 'react';
import './App.css';
import Com from './component/com01';
import Com02 from './component/com02';

function App() {
  
  const box = {
    width: "100%",
    height: "300px",
    backgroundColor: "skyblue"
  };


  return (
    <div className='wrapper'>
      {/* 내부 스타일 시트 */}
      <h1 style={{color: "red"}}>리액트 시작 1000</h1>
      <div style={box}></div>
        <div>
          <Com/>
          <Com02/>
        </div> 
    </div>
  );
}

export default App;
