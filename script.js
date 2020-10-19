$(document).ready(function () {

    // We write code here to display the current date and time to the element with id #current day
    $("#currentDay").text(moment().format('MMMM Do YYYY, HH:mm:ss a'));

    function compareHours() {


        //We create a variable to store the current hour of the day.
        var currentHour = parseInt(moment().format('H'));



        $(".row").each(function () {

            var hourRow = parseInt($(this).children(".hour").text());


            
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

    compareHours ();

    

})
