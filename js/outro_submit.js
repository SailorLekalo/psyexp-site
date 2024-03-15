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
   var podskaz             = document.getElementById("podskaz").value
   var podskaz_use         = document.getElementById("podskaz_use").value
   var fake                = document.getElementById("fake").value
   var other_strat         = document.getElementById("other_strat").value
   var which_strat         = document.getElementById("which_strat").value
   var use_strat           = document.getElementById("use_strat").value
   event.preventDefault();
   var link = "https://script.google.com/macros/s/AKfycbx0gzg0Io5SR63WFKw5VB5fvjIYb37-k2y9wVAXE4KehEAYpS9sDK_Pd_IWlY524OIp/exec?SSID=1fraAyItUjIWh4tfYdCDeyIMu4N4rMFe6ERoxVQjo-v0&DATA="+
       cas+","+name+","+gender+","+age+","+picts_history+","+clicks_history+","+wins_history+","+exam_picts_history+","+exam_clicks_history+","+exam_wins_history+
       podskaz+","+podskaz_use+","+fake+","+other_strat+","+which_strat+","+use_strat

   window.location.replace(link)
});