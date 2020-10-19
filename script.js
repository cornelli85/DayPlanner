$(document).ready(function() {

    // We write code here to display the current date and time to the element with id #current day
    $("#currentDay").text(moment().format('MMMM Do YYYY, HH:mm:ss a'));


    //We create a variable to store the current hour of the day.
    var currentHour = moment().format('MMMM Do YYYY, HH:mm:ss a');

    

    $(".row").each(function() {

        var hourRow = $(this).child(".hour").text()
    }) 
    
    

})
