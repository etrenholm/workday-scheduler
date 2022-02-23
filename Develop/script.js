// display current day at the top
var currentDate = moment().format('dddd, MMMM Do');
$("#currentDay").html(currentDate);

// when 'save' is clicked, the text for the time block is saved in local storage
$(".saveBtn").click(function() {
    var time = $(this).parent().attr("id")
    var value = $(this).siblings(".description").val()
    localStorage.setItem(time, value)
})

// get time using moment
var currentHour = moment().hours()

// each block is color coded to indicate whether it is past, present, or future
$(".time-block").each(function(){
    var blockHour = parseInt($(this).attr("id").split("-")[1])

    // if the block hour is less than the current hour - past
    if(blockHour < currentHour){
        $(this)
        .removeClass("present", "future") // remove other classes
        .addClass("past") // add new class
    }
    // if the block hour is equal to the current hour - present
    else if(blockHour === currentHour){
        $(this)
        .removeClass("past", "future") // remove other classes
        .addClass("present") // add new class
    }
    // if the block hour is greater than the current hour - future
    else if(blockHour > currentHour){
        $(this)
        .removeClass("past", "present") // remove other classes
        .addClass("future") // add new class
    }
})

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