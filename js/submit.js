addEventListener("submit", (event) => {
    var name    = document.getElementById("pseudoname").value
    var gender  = document.getElementById("gender").value
    var age     = document.getElementById("age").value

    //Если одно из значений не заполнено
    if (name === "" || gender === "" || age === ""){
        console.log("some of values is null") //DEBUG STRING, DELETE
    }
    //иначе мы заносим все значения в localStorage и перебрасываем на страницу с игрой.
    else {
        console.log("all values given") //DEBUG STRING, DELETE
        localStorage.setItem("name",name)
        localStorage.setItem("gender",gender)
        localStorage.setItem("age",age)
        localStorage.setItem("picts_history", "")
        localStorage.setItem("clicks_history", "")
        localStorage.setItem("wins_history", "")
        event.preventDefault();
        window.location.replace("game.html");
    }
});