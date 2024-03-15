
//Порядок предъявления стимулов
order = ['4mrh322.png','18frh663.png','4fbh312.png','23fbh653.png','18mbh363.png','17mbh612.png','15fbh124.png','18fbh663.png','13fbh454.png','8mrh253.png','20fbh364.png','12fbh534.png','20mrh141.png','6fbh343.png','17mrh612.png','20mbh141.png','15frh124.png','21frh262.png','22mbh611.png','11mbh441.png','22mrh611.png','24frh631.png','11frh154.png','3fbh333.png','5fbh422.png','2mbh211.png','12mbh331.png','10frh513.png','17fbh251.png','23mbh472.png','25mbh572.png','24mbh144.png','7mbh222.png','14frh132.png','16fbh541.png','10mbh251.png','11mrh441.png','25mrh572.png','13mbh511.png','23frh653.png','22frh564.png','17frh251.png','21mrh444.png','4mbh322.png','4frh312.png','3mbh321.png','2frh222.png','13mrh511.png','1mbh111.png','8frh242.png','14mbh263.png','16mrh631.png','2fbh222.png','7frh411.png','6mrh341.png','1mrh111.png','6frh343.png','9mrh533.png','7mrh222.png','11fbh154.png','3frh333.png','19fbh623.png','5mbh431.png','24mrh144.png','3mrh321.png','21mbh444.png','12frh534.png','25frh631.png','15mbh374.png','7fbh411.png','18mrh363.png','15mrh374.png','21fbh262.png','9mbh533.png','24fbh631.png','14fbh132.png','25fbh631.png','10fbh513.png','1fbh111.png','6mbh341.png','8fbh242.png','16frh541.png','20frh364.png','16mbh631.png','13frh454.png','5frh422.png','10mrh251.png','5mrh431.png','8mbh253.png','1frh111.png','12mrh331.png','9frh431.png','19frh623.png','19mrh241.png','22fbh564.png','19mbh241.png','23mrh472.png','9fbh431.png','14mrh263.png','2mrh211.png']

function changeCharFromBack(source,pos,newchar){
    var str = source.split('');
    str[str.length-pos] = newchar;
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

    var points_int = parseInt(document.getElementById("points").innerText)

    var game_image = document.getElementById('gi_front')
    var game_image_back = document.getElementById('gi_back')

    var game_image_source = game_image.src.split('/')[5]
    var source_color = game_image.alt
    var winhis = document.getElementById("wins_history")

    document.getElementById("picts_history").innerText += "|"+source_color //Прибавляет значение к строке, которая в будущем отправится в базу данных как хранилище истории картинок
    document.getElementById("clicks_history").innerText += "|red" //Прибавляет значение к строке, которая в будущем отправится в базу данных как хранилище истории кликов

    var random = getRandomInt(3)

    //При 0 или 1 волосы будут того же цвета, что и ведро.
    if (random === 0 || random === 1){

        game_image_back.src = "../images/"+changeCharFromBack(game_image_source,8,'w')

        //Нажат красный, исходный цвет красный, открытый цвет красный
        if (source_color === "r"){
            document.getElementById("points").innerText = points_int+1
            winhis.innerText += "|WIN"
        }

        //Нажат красный, исходный цвет синий, открытый цвет синий
        if (source_color === "b"){
            winhis.innerText += "|LOSE"
        }

    }

    //При 2 волосы будут другого цвета, нежели ведро.
    else {
        game_image_source = changeCharFromBack(game_image_source,8,'w')

        //Нажат красный, исходный цвет красный, открытый цвет синий
        if (source_color === "r"){
            game_image_back.src = "../images/"+changeCharFromBack(game_image_source,9,'b')
            winhis.innerText += "|LOSE"
        }

        //Нажат красный, исходный цвет синий, открытый цвет красный
        if (source_color === "b"){
            game_image_back.src = "../images/"+changeCharFromBack(game_image_source,9,'r')
            winhis.innerText += "|WIN"
            document.getElementById("points").innerText = points_int+1
        }


    }

    game_image.style.transform = "rotateY(180deg)";
    game_image_back.style.transform = "rotateY(360deg)";

    //показать другой набор кнопок.
    document.getElementById("button_red").style.display = "none"
    document.getElementById("button_blue").style.display = "none"
    document.getElementById("button_next").style.display = "inline"
}

function blue(){
    var points_int = parseInt(document.getElementById("points").innerText)

    var game_image = document.getElementById('gi_front')
    var game_image_back = document.getElementById('gi_back')

    var game_image_source = game_image.src.split('/')[5]
    var source_color = game_image.alt
    var winhis = document.getElementById("wins_history")

    document.getElementById("picts_history").innerText += "|"+source_color //Прибавляет значение к строке, которая в будущем отправится в базу данных как хранилище истории картинок
    document.getElementById("clicks_history").innerText += "|blue" //Прибавляет значение к строке, которая в будущем отправится в базу данных как хранилище истории кликов

    var random = getRandomInt(3)

    //При 0 или 1 волосы будут того же цвета, что и ведро.
    if (random === 0 || random === 1){

        game_image_back.src = "../images/"+changeCharFromBack(game_image_source,8,'w')

        //Нажат синий, исходный цвет красный, открытый цвет красный
        if (source_color === "r"){

            winhis.innerText += "|LOSE"
        }

        //Нажат синий, исходный цвет синий, открытый цвет синий
        if (source_color === "b"){
            document.getElementById("points").innerText = points_int+1
            winhis.innerText += "|WIN"
        }

    }

    //При 2 волосы будут другого цвета, нежели ведро.
    else {
        game_image_source = changeCharFromBack(game_image_source,8,'w')

        //Нажат синий, исходный цвет красный, открытый цвет синий
        if (source_color === "r"){
            game_image_back.src = "../images/"+changeCharFromBack(game_image_source,9,'b')
            winhis.innerText += "|WIN"
            document.getElementById("points").innerText = points_int+1
        }

        //Нажат синий, исходный цвет синий, открытый цвет красный
        if (source_color === "b"){
            game_image_back.src = "../images/"+changeCharFromBack(game_image_source,9,'r')
            winhis.innerText += "|LOSE"
        }


    }

    game_image.style.transform = "rotateY(180deg)";
    game_image_back.style.transform = "rotateY(360deg)";

    //показать другой набор кнопок.
    document.getElementById("button_red").style.display = "none"
    document.getElementById("button_blue").style.display = "none"
    document.getElementById("button_next").style.display = "inline"
}

function next(){

    if (document.getElementById('rounds').innerText==='0'){
        if (document.getElementById('stance').innerText==='exam'){
            localStorage.setItem("exam_picts_history", document.getElementById("picts_history").innerText)
            localStorage.setItem("exam_clicks_history", document.getElementById("clicks_history").innerText)
            localStorage.setItem("exam_wins_history", document.getElementById("wins_history").innerText)
            event.preventDefault();
            window.location.replace("outro.html");
        }
        else {
            localStorage.setItem("picts_history", localStorage.getItem("picts_history")   +  document.getElementById("picts_history").innerText)
            localStorage.setItem("clicks_history",localStorage.getItem("clicks_history")  +  document.getElementById("clicks_history").innerText)
            localStorage.setItem("wins_history",  localStorage.getItem("wins_history")    +  document.getElementById("wins_history").innerText)
            event.preventDefault();
            window.location.replace("ready.html");
        }
    }

    else {
        var rounds_total = parseInt(document.getElementById('rounds_total').innerText)
        var rounds = parseInt(document.getElementById('rounds').innerText)

        document.getElementById('progress_filler').style = 'width: ' + (rounds_total-rounds)/rounds_total*100 + '%'
        //Отнимает 1 от счётчика раундов и выбирает следующее из order значение.
        document.getElementById('rounds').innerText = rounds-1
        document.getElementById('gi_front').src = "../images/" + order[rounds]
        document.getElementById('gi_front').alt = document.getElementById('gi_front').src[document.getElementById('gi_front').src.length-9]
        //"Крутит" карточку назад, скрытой стороной вверх
        document.getElementById('gi_front').style.transform = "rotateY(0deg)";
        document.getElementById('gi_back').style.transform = "rotateY(180deg)";

        //Показывает игровые кнопки.
        document.getElementById("button_red").style.display = "inline"
        document.getElementById("button_blue").style.display = "inline"
        document.getElementById("button_next").style.display = "none"
    }
}