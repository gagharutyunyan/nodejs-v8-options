const searchBar = document.querySelector(".searchTerm")
const options = document.querySelectorAll("tbody > tr > td:first-child")

const filter = (e) => {
    options.forEach((value) => {
        if(!value.textContent.includes(e.target.value)){
            value.parentNode.style.display = "none"
        } else if(value.textContent.includes(e.target.value)) {
            value.parentNode.style.display = "table-row"
        }
    })
}

searchBar.addEventListener("input", filter)