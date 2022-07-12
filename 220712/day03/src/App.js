import React from 'react';
import './App.css';
import Com from './component/com01';
import Com01_1 from './component/com01-1';
import Com02 from './component/com02';

function App() {
  
  const box = {
    width: "100%",
    height: "300px",
    backgroundColor: "skyblue"
  };

  const ttl = "리액트 시작 100000"
  

  return (
    <div className='wrapper'>
      {/* 내부 스타일 시트 */}
      <h1 style={{color: "red"}}>{ttl}</h1>
      <div style={box}>{ttl}</div>
        <div>
          <Com text = {ttl}/>
          <Com01_1 text = {ttl}/>
          <Com02 text = {ttl} color= "green"/>
        </div> 
    </div>
  );
}

export default App;
