import React from 'react'

export const UserList = ({ users }) => {

    return(
        <div>
            {users.map(user => <p key={user.id}>{user.first_name} {user.last_name}</p>)}
        </div>
    )
}