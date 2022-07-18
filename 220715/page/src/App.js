import React from 'react';
import './App.css';

import Contents from './component/contents';
import Who from './component/contentsWho';
import Footer from './component/footer';
import Header from './component/header';
import Main from './component/main';

function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <Contents/>
      <Who/>
      <Footer/>
    </div>
  );
}

export default App;
