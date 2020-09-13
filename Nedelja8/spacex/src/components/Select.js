import React, { useEffect, useState } from 'react'
import { getLaunchYear } from '../services'

const Select = ({setLaunchList}) => {

    const [value, setValue] = useState(0)

    const yearArr = () => {
        let years = []
        for(let i = 2006; i < 2021; i++){
            if( i !== 2011){
                years.push(i)
            }
        }
        return years
    }

    useEffect(() => {
        getLaunchYear(value).then(res => {
            setLaunchList(res.data)
        })
    },[value])

    return (
        <div className = 'container_select'>
            <select value = {value} onChange = {(e) =>{
                setValue(e.target.value)
            }}>
                <option>Year</option>
                {yearArr().map(year => <option key={year} value={year +''}>{year}</option>)}   
            </select>
        </div>
    )
}
export default Select;