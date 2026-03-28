let button = document.querySelector("#show_table")
button.addEventListener("click", () => {
    let exist = document.querySelector(".tablebox")
    if (exist) {
        button.innerHTML = "Show Table"
        exist.remove()
        return
    }
    let create = document.createElement("div")
    let take = document.querySelector("input").value
    create.className = "tablebox"
    create.style.width = "150px"
    create.style.height = "300px"
    create.style.border = "1px solid peru"
    create.style.borderRadius = "7px"
    create.style.display = "flex"
    create.style.flexDirection = "column"
    create.style.justifyContent = "space-evenly"
    create.style.alignItems = "center"
    create.style.fontWeight = "bolder"
    create.style.boxShadow = ""
    create.innerHTML = `Table Of ${take}`
    for (let i = 1; i <= 10; i++) {

        create.innerHTML += `<div>${take} x ${i} = ${take * i}</div>`
    }
    document.querySelector(".table").appendChild(create)
    button.innerText = "Hide Table"
})


let clear = document.querySelector("#clear_table")
clear.addEventListener("click", () => {
    let take_create = document.querySelector(".tablebox")
    let input = document.querySelector("input")
    if (take_create) {
        take_create.remove()
        input.value = ""
    }
})