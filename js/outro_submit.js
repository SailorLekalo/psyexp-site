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
   event.preventDefault();
   var link = "https://script.google.com/macros/s/AKfycbx0gzg0Io5SR63WFKw5VB5fvjIYb37-k2y9wVAXE4KehEAYpS9sDK_Pd_IWlY524OIp/exec?SSID=1fraAyItUjIWh4tfYdCDeyIMu4N4rMFe6ERoxVQjo-v0&DATA="+
       cas+","+name+","+gender+","+age+","+picts_history+","+clicks_history+","+wins_history+","+exam_picts_history+","+exam_clicks_history+","+exam_wins_history+

   window.location.replace(link)
});