$(document).ready(() => {
    
    let form = document.querySelector("#searchForm").addEventListener("submit", (f) => {
        f.preventDefault();
        let minPrice = f.target[0].value;
        let maxPrice = f.target[1].value;
        let name = f.target[2].value;
        console.log(minPrice + " - " + maxPrice + " - " + name);
        let elements = [...document.getElementsByClassName("good")];
        elements.forEach(e => e.style.display = "block");
        console.log();
        
        if(minPrice)
           elements.filter(g => parseInt(g.children[0].children[2].innerHTML) < parseInt(minPrice)).forEach(el => el.style.display = "none");
        if(maxPrice)
            elements.filter(g => parseInt(g.children[0].children[2].innerHTML) > parseInt(maxPrice)).forEach(el => el.style.display = "none")

        if(name)
            elements.filter(el => !el.children[0].children[0].innerHTML.toUpperCase().includes(name.toUpperCase())).forEach(el => el.style.display = "none")
        
    })


})