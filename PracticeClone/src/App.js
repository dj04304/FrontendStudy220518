import React from 'react';
import { Link, Route } from 'react-router-dom';
//CSS
import './App.css';
//JSX
import MainCom from './components/main';
import NexonGames from './components/nexonGames';
import Games from './components/games';
import Employment from './components/employment';
import Investment from './components/investment';


//import '../static/css/header.css'

//yarn add react-router-dom@5
//yarn add styled-components

function App() {
  return (
    <div>
      {/* 상단 부분 */}
      <div className='header'>
        <div className='header_in'>
          <div className='logo'>
           <Link to='/'><img src='/img/footer_logo.png'/></Link>
          </div>
          <ul className='nav'>
            <li><Link to='/components/nexonGames'>넥슨게임즈</Link></li>
            <li><Link to='/components/games'>게임</Link></li>
            <li><Link to='/components/employment'>인재채용</Link></li>
            <li><Link to='/components/investment'>투자정보</Link></li>
          </ul>
          <div className='language'>
              <p>KOR</p>
              <span></span>
              <p>ENG</p>
          </div>
        </div>
      </div>

      {/* 메인 부분 */}
      <div>
        <Route path='/' exact={true} component={MainCom} />
        <Route path='/components/nexonGames' component={NexonGames} />
        <Route path='/components/games' component={Games} />
        <Route path='/components/employment' component={Employment} />
        <Route path='/components/investment' component={Investment} />
      </div>
    </div>
    
   
  );
}

export default App;
