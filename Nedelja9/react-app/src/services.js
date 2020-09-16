import Axios from 'axios'

export const getFirst = () => {
    return Axios.get('https://reqres.in/api/users?page=1')
}

export const getSecond = () => {
    return Axios.get('https://reqres.in/api/users?page=2')
}