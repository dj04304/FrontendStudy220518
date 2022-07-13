import React,{useMemo, useRef, useState} from 'react';
import './App.css';

// import UserList from './component/userList';
import UserList2 from './component/userList2';
import CreateUser from './component/createUser';


function countActiveUser (users) {
  return users.filter(user => user.active).length; 
}


function App() {
  const[inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const {username, email} = inputs;

  const onChange = (e) => {
    const{name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }

  
  //배열
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
    
  const nextId = useRef(6)


  //리스트 항목 추가
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    }

    setUsers(users.concat(user))// user 추가

    setInputs({ //추가되었으므로 user자리를 다시 공백으로 채워줌
      username: '',
      email: ''
    });

    //추가될 배열요소의 인덱스값을 1 증가시킴-
    nextId.current += 1;

  }
    
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

  //사용자 수를 나타내주는 함수
  const count = useMemo(()=> countActiveUser(users), [users]);

  return (
    <div>
     {/* <UserList/> */}
     <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
     <UserList2 users = {users} onRemove={onRemove} onToggle={onToggle}/>
      <div>선택된 사용자 수: {count}</div>
    </div>
  );
}




export default App;
