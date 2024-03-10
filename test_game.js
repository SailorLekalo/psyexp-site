function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function change_instruction(){
    var button = document.getElementById("change_instruction_state")
    var instruction = document.getElementById("instruction_container")

    if (button.innerText === "Скрыть инструкцию"){
        //Если на кнопке написано "Скрыть инструкцию" - то скрывает инструкцию и меняет кнопку на "Показать инструкцию"
        button.innerText = "Показать инструкцию"
        instruction.style.display = "none";
    } else {
        //Если на кнопке написано "Показать инструкцию" - то показывает инструкцию и меняет кнопку на "Скрыть инструкцию"
        button.innerText = "Скрыть инструкцию"
        instruction.style.display = "flex";
    }
}
function red(){

    var points = document.getElementById("points")
    var source_color = document.getElementById("game_image").alt

    document.getElementById("picts_history").innerText += "|"+source_color //Прибавляет значение к строке, которая в будущем отправится в базу данных как хранилище истории картинок
    document.getElementById("clicks_history").innerText += "|red" //Прибавляет значение к строке, которая в будущем отправится в базу данных как хранилище истории кликов

    if (source_color==="red"){points.innerText+=1}

    var random = getRandomInt(3)

    //При 0 или 1 волосы будут того же цвета, что и ведро.
    //При 2 волосы будут другого цвета, нежели ведро.
    if (random === 0 || random === 1){
    }
    else {}
    console.log(random)

}

function blue(){
}

function next(){

}