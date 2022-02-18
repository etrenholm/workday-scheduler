// display current day at the top
var currentDate = moment().format('dddd MMMM Do');
$("#currentDay").html(currentDate);

// present time blocks for standard business hours
var timeBlock = function() {

}

// each block is color coded to indicate whether it is past, present, or future
var checkTime = function() {
    // get date from task element

    // remove old classes from the element

    // apply new class if time is in the present

    // apply new class if time is in the future

}

// click into time block, an event can be entered
$(".description").on("click", "textarea", function() {
    var text = $(this)
    .text()
    .trim();
    console.log(text)

    // get current text of p element
    var textInput = $("<textarea>")
    .addClass("form-control")
    .val(text);

    $(this).replaceWith(textInput);

    // auto focus new element
    textInput.trigger("focus");
});

// replace textarea element with a newtext area
$(".description").on("blur", "textarea", function() {
    var text = $(this)
    .val()
    .trim();

    var newText = $(this)
    .closest(".description")
    .attr("class")
    .replace("textarea", "");

    var index = $(this)
    .closest(".description")
    .index();

    description[newText][index].text = text;
    saveBlock();

});

// when 'save' is clicked, the text for the event is saved in local storage

// when page is refreshed, events persist
var loadEvents = function(){
    events = JSON.parse(localStorage.getItem("events"));
}

loadEvents();