import { getLaunchYear } from '../services';
import { Launch } from './Launch'

export const LaunchYearList = (year) => {
    const launchList = document.querySelector('.launch-list')
    launchList.innerHTML = '';
   
    getLaunchYear(year).then(res => {
        const launchYear = document.createElement('div')
        launchYear.className = 'launch-list'
        launchList.appendChild(launchYear)
       
        res.data.forEach(obj => {
            launchYear.appendChild(Launch(obj))
        })
        return launchYear
    })
}
