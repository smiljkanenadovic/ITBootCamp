import axios from 'axios'

export const getPastLaunches = () => {
    return axios.get('https://api.spacexdata.com/v3/launches/past')
}

export const getCompanyName = () => {
    return axios.get('https://api.spacexdata.com/v3/info')
}

export const getLaunchYear = (year) => {
    return axios.get(`https://api.spacexdata.com/v3/launches/past?launch_year=${year}`)
}