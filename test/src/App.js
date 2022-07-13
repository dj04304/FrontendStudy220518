import React,{useState} from 'react';
import './App.css';

// import UserList from './component/userList';
import UserList2 from './component/userList2';

function App() {
  const [users, setUsers] = useState([
    {
        id: 1,
        username: "사과",
        email: "apple@apple.com"
    },
    {
        id: 2,
        username: "오렌지",
        email: "orange@orange.com"
    },
    {
        id: 3,
        username: "바나나",
        email: "banana@banana.com"
    },
    {
        id: 4,
        username: "멜론",
        email: "melone@melone.com"
    },
    {
        id: 5,
        username: "수박",
        email: "Wmelone@Wmelone.com"
    }

])

//삭제 함수
const onRemove = (id) => {
  //filter(): filter(조건) 배열에서 해당 조건이 만족되는 요소를 찾아주는 메소드
  setUsers(users.filter(user => user.id !== id))
}

//선택 함수
const onToggle = (id) => {
  setUsers(
    users.map(user => user.id === id ? {...user, active: !user.active} : user)
  )
}

  return (
    <div>
     {/* <UserList/> */}
     <UserList2 users = {users} onRemove={onRemove} onToggle={onToggle}/>
    </div>
  );
}

export default App;
