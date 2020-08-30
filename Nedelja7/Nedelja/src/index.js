import { PastLaunchList } from './components/LaunchList'
import { Header } from './components/Header'
import { LaunchYearList } from './components/Select'

const app = document.querySelector('#app')

app.appendChild(Header())

const select = document.querySelector('.container_select')

select.addEventListener('change', (e) => {
    if(e.target.value != 2011) {
        LaunchYearList(e.target.value)   
    } else {
    alert('There is no launches for 2011. year')
    }
})
app.appendChild(select)
app.appendChild(PastLaunchList())













 