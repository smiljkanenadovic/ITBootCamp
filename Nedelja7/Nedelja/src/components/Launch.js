
export const Launch = (obj) => {
    const container = document.createElement('div')
    container.className = 'launch'

    container.innerHTML = `
        <div class="inner-div-0">
            <img src=${obj.links.mission_patch} alt="photo">
        </div>
        <div class="inner-div-1">
            <span>${obj.rocket.rocket_name}</span>
        </div>
        <div class="inner-div-2">
            <span>${obj.launch_year}</span>
        </div>`

    return container
}

