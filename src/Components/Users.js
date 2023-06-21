import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from "../Features/posts/actionCreator"

const Users = () => {
    const dispatch = useDispatch()
    const users = useSelector((state)=>state.users.users);


    const handleClick = ()=> {
        if(users?.length === 0) {
            dispatch(fetchUsers())
        }
    }

    return (
        <>
            <h2>Users</h2>
            <button onClick={handleClick} >show users</button>

            {users?.map((user) => (
                <p key={user.id}> {user.name}</p>
            ))}
            <hr></hr>
        </>
    );
}

export default Users;