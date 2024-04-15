window.onload = create_rating()
function create_rating(){
   var pts = localStorage.getItem("pts")
   var lower = 0
   var higher = 0
   var same = 0
   var total = 0
   fetch("../js/localrating.txt")
       .then((res) => res.text())
       .then((text) => {
          var lines = text.split('\n')
          total = lines.length
          for(var i = 0;i < lines.length;i++){
             if (parseInt(lines[i]) > parseInt(pts)){
                higher+=1
             }
             else if (parseInt(lines[i]) < parseInt(pts)){
                lower+=1
             } else {
                same = 0
             }
          }

          document.getElementById("rating_place").innerText = "У " + parseInt(lower/total*100).toFixed(2) +"% игроков меньше очков, чем у вас"
       })
       .catch((e) => console.error(e));
}
addEventListener("submit", (event) => {

   var cas                 = localStorage.getItem("case")
   var name                = localStorage.getItem("name")
   var gender              = localStorage.getItem("gender")
   var age                 = localStorage.getItem("age")
   var picts_history       = localStorage.getItem("picts_history")
   var clicks_history      = localStorage.getItem("clicks_history")
   var wins_history        = localStorage.getItem("wins_history")
   var exam_picts_history  = localStorage.getItem("exam_picts_history")
   var exam_clicks_history = localStorage.getItem("exam_clicks_history")
   var exam_wins_history   = localStorage.getItem("exam_wins_history")
   var podskaz             = document.querySelector('input[name="podskaz"]:checked').value
   var podskaz_use         = document.getElementById("podskaz_use").value
   var fake                = document.getElementById("fake").value
   var other_strat         = document.getElementById("other_strat").value
   var which_strat         = document.getElementById("which_strat").value
   var use_strat           = document.getElementById("use_strat").value

   var siren_obuv          = document.querySelector('input[name="color"]:checked').value
   var half                = document.querySelector('input[name="half"]:checked').value;
   var percent_sovpad      = document.getElementById("freq").value
   event.preventDefault();
   var link = "https://script.google.com/macros/s/AKfycbx0gzg0Io5SR63WFKw5VB5fvjIYb37-k2y9wVAXE4KehEAYpS9sDK_Pd_IWlY524OIp/exec?SSID=1fraAyItUjIWh4tfYdCDeyIMu4N4rMFe6ERoxVQjo-v0&DATA="+
       cas+","+name+","+gender+","+age+","+picts_history+","+clicks_history+","+wins_history+","+exam_picts_history+","+exam_clicks_history+","+exam_wins_history+
       podskaz+","+podskaz_use+","+fake+","+other_strat+","+which_strat+","+use_strat+","+siren_obuv+","+half+","+percent_sovpad

   fetch("../js/updater.php", {
      method: "POST",
      body: JSON.stringify({
         'data' : localStorage.getItem("pts")
      }),
      headers: {
         "Content-type": "application/json; charset=UTF-8"
      }
   });

   window.location.replace(link)
});

addEventListener("change", (event) => {
   try{
      document.querySelectorAll("fieldset").forEach(function(elem){
         console.log(elem.querySelector('input:checked').value);
      });
      document.getElementById("placeholder").style.display = "none"
      document.getElementById("rating_place").style.display = "block"

   }
   catch{}
});

function change_instruction(){
   var button = document.getElementById("change_instruction_state")
   var instruction = document.getElementById("instruction_container")

   if (button.innerText === "Скрыть рейтинг"){
      //Если на кнопке написано "Скрыть инструкцию" - то скрывает инструкцию и меняет кнопку на "Показать инструкцию"
      button.innerText = "Показать рейтинг"
      instruction.style.display = "none";
   } else {
      //Если на кнопке написано "Показать инструкцию" - то показывает инструкцию и меняет кнопку на "Скрыть инструкцию"
      button.innerText = "Скрыть рейтинг"
      instruction.style.display = "flex";
   }
}