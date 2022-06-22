const nav = document.querySelector("#navBar")


//ini merender menu navigasi
const navMenu = ["Home", "Aboutme", "Social"]
const navRender = () => {
    for( let menu of navMenu) {
        const li = document.createElement("li")
        const a = document.createElement("a")
        li.className = 'navmenu-button'
        a.textContent = menu
        a.href = `#${menu}`
        li.appendChild(a)
        nav.appendChild(li)
    }
}

navRender()