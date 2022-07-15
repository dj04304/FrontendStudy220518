import React from "react";
import './App.css';

import Header from "./component/header";
import Main from "./component/main";
import Contents from "./component/contents";
import Footer from "./component/footer";

/*
CSS Module
리액트 프로젝트에서 컴포넌트 스타일링 할 때
CSS Module 기술을 사용하면 CSS 클래스가 중첩되는 것을 완벽히 방지할 수 있습니다.
CSS 파일 확장자를 .module.css로 해야함
파일 경로, 파일이름, 클래스이름, 해쉬값 등 사용
*/

/*
styled-components
JS안에 CSS를 작성하는 라이브러리 입니다.
yarn add styled-components
*/

function App() {
  return (
    <>
      <Header/>
      <Main/>
      <Contents/>
      <Footer/>
    </>
  );
}

export default App;
