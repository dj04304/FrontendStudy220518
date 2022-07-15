import React from 'react';
import './App.css';

import Contents from './component/contents';
import Footer from './component/footer';
import Header from './component/header';
import Main from './component/main';

function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <Contents/>
      <Footer/>
    </div>
  );
}

export default App;
