import React, { useEffect, useState } from 'react'
import {getCompanyName} from '../services'

const Header = () => {
    const[name, setName] = useState('')

    useEffect(() => {
        getCompanyName().then(res =>{
            setName(res.data.name)
        })
    },[])

    return (
        <header className="header">{name}</header>
    )
}
export default Header;