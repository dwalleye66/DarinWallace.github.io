
var loadHours = function(){
    tasks = JSON.parse(localStorage.getItem("hours"))
    if(!hours){
        hours={};
    }
    for (i=0; i<hours.length; i++){
        var index = i
               
        var firstHour = index + 9
        var hourD = $("div").addclass("description hour-" +firstHour).text(hours[i])

        $("#hour-" + firsthour).append(hourD)
    }
}
    
var today = moment().format("MMM Do YYYY");
    $("#currentDay").text(today);



     // localStorage.setItem("hours", JSON.stringify(hours));


var currentTime = moment().hour();
console.log(currentTime)

$(".textBox").each(function(){
    var blockTime = parseInt($(this).attr("id"))
    console.log(blockTime)

    //Compare currentTime to blockTime
    for(var i=9; i<18; i++)
      var textarea = $("#id"+i)
      if(currentTime>i){
          $(textarea).addClass("past");
     } 
})
