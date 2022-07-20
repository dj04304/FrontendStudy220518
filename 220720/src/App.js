import React from 'react';
import './App.css';
import ReactCarousel from "./carousel";
import ReactTabs from './reactTabs'
import Dropdown from './dropdown';

//yarn add bootstrap
//yarn add reactstrap
//index.js 에 import 'bootstrap/dist/css/bootstrap.css'
function App() {
  return (
    <div>
      <ReactCarousel/>
      <ReactTabs/>
      <Dropdown/>
    </div>
  );
}

export default App;
