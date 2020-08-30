import { getCompanyName } from '../services'

export const Header = () => {
    const divHeader = document.createElement('div') 
    const x = document.querySelector('#app')
    x.appendChild(divHeader)

    getCompanyName().then(res => {
        const header = document.createElement('header')
        header.className = 'header'
        header.textContent = res.data.name
        divHeader.appendChild(header)
    })
    return divHeader
} 