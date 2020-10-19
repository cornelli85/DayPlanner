$(document).ready(function () {

    // We write code here to display the current date and time to the element with id #current day
    $("#currentDay").text(moment().format('MMMM Do YYYY, HH:mm:ss a'));

    //We create a function to compare the various time blocks with the current hour of the day.
    function compareHours() {


        //We start by making a variable to store the current hour of the day.
        var currentHour = parseInt(moment().format('H'));



        // We loop through each time block using the .each method.
        $(".row").each(function () {


            //Make a variable to store the time for each time block by using jQuery to get the text in the target div.
            var hourRow = parseInt($(this).children(".hour").text());



            //Create conditionals to assign classes to each time block by comparing the time of each time block to the current hour.
            if (hourRow < currentHour) {
                $(this).addClass("past");
            }

            else if (hourRow === currentHour) {
                $(this).addClass("present");
            }

            else {
                $(this).addClass("future");
            }

        });

    }

    compareHours();

    $(".saveBtn").on("click", function() {
        var event = $(this).siblings(".description").val();

        var timeRow = $(this).parent().attr("id");

        localStorage.setItem(timeRow, event);

        
    });

    var display = localStorage.getItem(timeRow);

    $(".description").val(display);

})
