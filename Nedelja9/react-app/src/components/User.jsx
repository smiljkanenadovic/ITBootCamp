import React from 'react'

export const User = ({ user, users, setUsers }) => {

    const btnDelete = () => {
        let tmp = [...users]
        tmp.splice(users.findIndex(el => el.first_name === user.first_name), 1)
        setUsers(tmp)
    }
    return(
        <>
            <p>{user.first_name} {user.last_name}</p>
            <button onClick={btnDelete}>DELETE</button>
        </>
    )
}