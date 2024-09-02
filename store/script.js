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
        cancel.src = "../svg/cansel.png"
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

    const dropdowns = document.querySelectorAll(".dropdown")

    dropdowns.forEach((dropdown) => {
        const select = dropdown.querySelector(".select")
        const selected = dropdown.querySelector(".selected")
        const caret = select.querySelector(".caret")
        const dropdown_menu = dropdown.querySelector(".dropdown-menu")
        const options = dropdown.querySelectorAll(".dropdown-menu-item")

        select.addEventListener("click", () => {
            select.classList.toggle("select-clicked")
            caret.classList.toggle("caret-rotate")
            dropdown_menu.classList.toggle("menu-open")
        })

        options.forEach((option) => {
            option.addEventListener("click", () => {
                selected.innerText = option.innerText
                select.classList.remove("select-clicked")
                caret.classList.remove("caret-rotate")
                dropdown_menu.classList.remove("menu-open")
                options.forEach((option) => {
                    option.classList.remove("active")
                })
                option.classList.add("active")
            })
        })

        const car_block = document.querySelectorAll(".car-block")
        const parta_block = document.querySelectorAll(".parta-block")
        const shkaf_block = document.querySelectorAll(".shkaf-block")
        const komplekt_block = document.querySelectorAll(".komplekt-block")
        const car_option = document.querySelector(".kravat")
        const parta_option = document.querySelector(".parta")
        const shkaf_option = document.querySelector(".shkaf")
        const komplekt_option = document.querySelector(".komplekt")

        options.forEach((option) => {
            option.addEventListener("click", function () {
                selected.textContent = this.textContent

                car_block.forEach((block) => (block.style.display = "block"))
                parta_block.forEach((block) => (block.style.display = "block"))
                shkaf_block.forEach((block) => (block.style.display = "block"))
                komplekt_block.forEach((block) => (block.style.display = "block"))

                if (this === car_option) {
                    parta_block.forEach((block) => (block.style.display = "none"))
                    shkaf_block.forEach((block) => (block.style.display = "none"))
                    komplekt_block.forEach((block) => (block.style.display = "none"))
                    car_block.forEach((block) => (block.style.display = "block"))
                } else if (this === parta_option) {
                    car_block.forEach((block) => (block.style.display = "none"))
                    shkaf_block.forEach((block) => (block.style.display = "none"))
                    komplekt_block.forEach((block) => (block.style.display = "none"))
                    parta_block.forEach((block) => (block.style.display = "block"))
                } else if (this === shkaf_option) {
                    car_block.forEach((block) => (block.style.display = "none"))
                    parta_block.forEach((block) => (block.style.display = "none"))
                    komplekt_block.forEach((block) => (block.style.display = "none"))
                    shkaf_block.forEach((block) => (block.style.display = "block"))
                } else if (this === komplekt_option) {
                    car_block.forEach((block) => (block.style.display = "none"))
                    parta_block.forEach((block) => (block.style.display = "none"))
                    shkaf_block.forEach((block) => (block.style.display = "none"))
                    komplekt_block.forEach((block) => (block.style.display = "block"))
                }
            })
        })
    })
})
