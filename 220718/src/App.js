import React from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';

import MainCom from './components/mainCom';
import Best from './components/best';
import Brand from './components/brand';
import Coupon from './components/coupon';
import MainEvent from './components/mainEvent';


//import '../static/css/header.css'

//yarn add react-router-dom@5
//yarn add styled-components

function App() {
  return (
    <div>
      {/* 상단 부분 */}
      <div className='header'>
        <div className='header_in'>
          <div className='logo'>logo</div>
          <ul className='nav'>
            <li><Link to='/'>처음으로</Link></li>
            <li><Link to='/components/best'>BEST</Link></li>
            <li><Link to='/components/brand'>브랜드</Link></li>
            <li><Link to='/components/coupon'>쿠폰/혜택</Link></li>
            <li><Link to='/components/mainEvent'>이벤트</Link></li>
          </ul>
        </div>
      </div>

      {/* 메인 부분 */}
      <div>
        <Route path='/' exact={true} component={MainCom} />
        <Route path='/components/best' component={Best} />
        <Route path='/components/brand' component={Brand} />
        <Route path='/components/coupon' component={Coupon} />
        <Route path='/components/mainEvent' component={MainEvent} />
      </div>
    </div>
    
   
  );
}

export default App;
