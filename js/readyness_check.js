function next(){
    window.location.replace("exam.html");
}
function retest(){
    localStorage.setItem("picts_history", localStorage.getItem("picts_history")   + "!")
    localStorage.setItem("clicks_history",localStorage.getItem("clicks_history")  + "!")
    localStorage.setItem("wins_history",  localStorage.getItem("wins_history")    + "!")
    window.location.replace("game.html");
}