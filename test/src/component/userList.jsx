import React from "react";

function User({user}) { //user ->  배열요소 이면서 인덱스
    return(
        <div>
            <b>{user.username}</b><span>{user.email}</span>
        </div>
    );
}

function UserList() {
    const users = [
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

    ]

    return(
        <div>
            {/* <User user = {users[0]}/>
            <User user = {users[1]}/>
            <User user = {users[2]}/>
            <User user = {users[3]}/>
            <User user = {users[4]}/> */}
            {/* map()은 (매개변수) => (화면에 출력할 내용)  */}
            {users.map((user, index) => (
                <User user={user} key={index}/>
            ))}
        </div>
    );
}

export default UserList;