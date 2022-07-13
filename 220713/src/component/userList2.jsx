import React from "react";

function User({user, onRemove, onToggle}) { //user ->  배열요소 이면서 인덱스
    return(
        <div>
            <b  style={{cursor: "pointer", color: user.active ? "green" : "red"}} 
            onClick={() => onToggle(user.id)}>{user.username}</b><span>{user.email}</span>&nbsp;&nbsp;&nbsp;
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

function UserList2({users, onRemove, onToggle}) {
    return(
        <div>
            {users.map( user => (
                <User user={user} key={user.id} onRemove = {onRemove} onToggle = {onToggle}/>
            ))}
        </div>
    );
}

export default UserList2;