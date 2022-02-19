// display current day at the top
var currentDate = moment().format('dddd, MMMM Do');
$("#currentDay").html(currentDate);

// when 'save' is clicked, the text for the time block is saved in local storage
$(".saveBtn").click(function() {

    var time = $(this).parent().attr("id")
    var value = $(this).siblings(".description").val()

    localStorage.setItem(time, value)

})

// each block is color coded to indicate whether it is past, present, or future
var currentHour = moment().hours()
console.log(currentHour)

$(".time-block").each(function() {
    var blockHour = parseInt($(this).attr("id").split("-")[1])
    if(){
    $(this).addClass
    console.log(blockHour)
    }
})

    // get time
    
    // convert to moment object
    // remove old classes from the element
    // apply/remove class if time is in the past/future


// when page is refreshed, events persist
$("#time-9 .description").val(localStorage.getItem("time-9"));
$("#time-10 .description").val(localStorage.getItem("time-10"));
$("#time-11 .description").val(localStorage.getItem("time-11"));
$("#time-12 .description").val(localStorage.getItem("time-12"));
$("#time-13 .description").val(localStorage.getItem("time-13"));
$("#time-14 .description").val(localStorage.getItem("time-14"));
$("#time-15 .description").val(localStorage.getItem("time-15"));
$("#time-16 .description").val(localStorage.getItem("time-16"));
$("#time-17 .description").val(localStorage.getItem("time-17"));