function extend(id) {
    let element = document.getElementById(id).children.item(1)
    let arrow = document.getElementById(id).children.item(0)

    let disp = "block"
    let ancle = 0
    if (element.style.display == "block") {
        ancle = 180
        disp = "none"
    }

    arrow.style.transform = `rotate(${ancle}deg)`
    element.style.display = disp
}