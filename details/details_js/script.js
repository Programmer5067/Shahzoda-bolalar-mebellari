document.addEventListener("DOMContentLoaded", () => {
    const menu_btn = document.querySelector(".menu-btn")
    const menu = document.querySelector(".user-menu")
    const header = document.querySelector(".header")
    const blue = document.querySelectorAll(".blue")

    menu_btn.addEventListener("click", () => {
        document.body.classList.add("dark-body")
        document.body.classList.add("no-scroll")
        header.classList.add("dark-header")
        menu_btn.classList.add("hidden")
        menu.classList.add("show")
        blue.forEach((item) => item.classList.add("dark-font"))
    })

    function getCancel_btn() {
        const cancel = document.createElement("img")
        cancel.src = "../../svg/cansel.png"
        cancel.alt = "rasm"

        menu.appendChild(cancel).classList.add("cancel")

        cancel.addEventListener("click", () => {
            document.body.classList.remove("dark-body")
            document.body.classList.remove("no-scroll")
            header.classList.remove("dark-header")
            menu_btn.classList.remove("hidden")
            menu.classList.remove("show")
            blue.forEach((item) => item.classList.remove("dark-font"))
        })
    }
    getCancel_btn()
})
