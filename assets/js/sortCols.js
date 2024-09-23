const moveable = document.querySelector("#moveable")
const inMobile = document.querySelector("#in-mobile")
const inDesktop = document.querySelector("#in-desktop")

function updateMode() {
    const moveable = document.querySelector("#moveable")
    const inMobile = document.querySelector("#in-mobile")
    const inDesktop = document.querySelector("#in-desktop")

    if (Number(window.innerWidth) < 768) {
        inMobile.append(moveable)
        moveable.style.marginBottom = "2rem"
    }else{
        inDesktop.append(moveable)
        const first = inDesktop.children[0]
        inDesktop.insertBefore(moveable, first)
        moveable.style.marginBottom = "initial"
    }
}

updateMode()

window.addEventListener("resize", updateMode)