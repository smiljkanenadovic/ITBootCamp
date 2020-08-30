import { getPastLaunches } from '../services'
import { Launch } from './Launch'

export const PastLaunchList = () => {
    const pastLaunchList = document.createElement('div')
    pastLaunchList.className = 'launch-list'

    getPastLaunches().then(res => {        
        res.data.forEach(obj => {
            pastLaunchList.appendChild(Launch(obj))
        })
    })
    return pastLaunchList
}