function changeChar(source,pos,newchar){
    var str = source.split('');
    str[pos] = newchar;
    str = str.join('');
    return str
}

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

    var game_image = document.getElementById('gi_front')
    var game_image_back = document.getElementById('gi_back')

    var game_image_source = game_image.src.substring(game_image.src.length-11)
    var source_color = game_image.alt
    var winhis = document.getElementById("wins_history")

    document.getElementById("picts_history").innerText += "|"+source_color //Прибавляет значение к строке, которая в будущем отправится в базу данных как хранилище истории картинок
    document.getElementById("clicks_history").innerText += "|red" //Прибавляет значение к строке, которая в будущем отправится в базу данных как хранилище истории кликов

    var random = getRandomInt(3)

    //При 0 или 1 волосы будут того же цвета, что и ведро.
    if (random === 0 || random === 1){

        //game_image.src = "images/"+changeChar(game_image_source,3,'w')
        if (source_color === "r"){

        }

        if (source_color === "b"){

        }
        game_image.src
    }
    //При 2 волосы будут другого цвета, нежели ведро.
    else {
        winhis.innerText += "|LOSS"

    }

    game_image.style.transform = "rotateY(180deg)";
    game_image_back.style.transform = "rotateY(360deg)";
    //показать другой набор кнопок.
    document.getElementById("button_red").style.display = "none"
    document.getElementById("button_blue").style.display = "none"
    document.getElementById("button_next").style.display = "inline"

}

function blue(){
}

function next(){

}