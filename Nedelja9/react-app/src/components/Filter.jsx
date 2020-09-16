import React, { useState } from 'react'
import {User} from './User'

export const Filter = ({ users, setUsers }) => {

    const [filter, setFilter] = useState('')

    let filterArr = users.filter(user => 
        user.first_name.toLowerCase().includes(filter.toLowerCase())
        ||
        user.last_name.toLowerCase().includes(filter.toLowerCase())
    )

    return(
        <>
            <input
                placeholder = 'Search...'
                onChange = {(e) => setFilter(e.target.value)}
            />
            {filterArr.map(user =>
                <User user = {user}
                key = {user.id}
                users = {users}
                setUsers = {setUsers}/>)
            }
        </>
    )
}
