//create current day id with moment js logic.
// create identifiy time & description. apply to local strorage.
//in jq ${'#currentDay'}.text.moment().format('') 
//update hour
// apply setInterval

//var currentTime = newDate();
//console.log(newDate); 
//moment().format();
//moment().format("dddd, MMMM Do");

// Display todays day and date
var today = moment().format("dddd, MMMM Do");
consolelog(today);
$("#currentDay").text(today);

$(document).ready(function () {

//saveBtn Click Listener
$(".button").on("click", function() {
// description in Jquery
var text = $(this).sibling("description").val();
var time = $(this).parent().attr("id");

//save text in local storage
localStorage.setItem(text, time);

}
},
)


function timeTracker (){
// get current numbr of hours
var timeNow = moment().hour();

// loop over time block
$(".time-block").each (function () {
var blockTime = parseInt($(this).attr("id").split("hour") [1]);

// to check the time and add the classes for indicators in the background
if (blockTime < timeNow) {
    $(this).removeClass("future");
    $(this).removeClass("present");
    $(this).addClass("past");
}
 else if (blockTime === timeNow) {
    $(this).removeClass("past");
    $(this).removeClass("future");
    $(this).addClass("present");
 }
 else {
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");
 }
},
 )
}

  // Get item from local storage if any

  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
 

  timeTracker();

