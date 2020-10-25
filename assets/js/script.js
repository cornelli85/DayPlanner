$(document).ready(function () {

    // We write code here to display the current date and time in the element with id #current day
    $("#currentDay").text(moment().format('MMMM Do YYYY, HH:mm:ss a'));

    // We create a variable to store the items to be retrieved from local storage.
    var plans = JSON.parse(localStorage.getItem("plans")) || [];


    //We create a function to compare the various time blocks with the current hour of the day.
    function compareHours() {


        //We start by making a variable to store the current hour of the day.
        var currentHour = parseInt(moment().format('H'));



        // We loop through each time block using the .each method.
        $(".row").each(function () {


            //Make a variable to store the time for each time block by using jQuery to get the text in the target div.
            var hourRow = parseInt($(this).children(".hour").text());



            //Create conditionals to assign classes to time blocks by comparing the time of each time block to the current hour.
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

    // We add the click event listener to the save buttons.
    $(".saveBtn").on("click", function () {

        // Make variables to store user's input.
        var event = $(this).siblings(".description").val();

        var timeRow = $(this).siblings(".description").attr("id");

        console.log(timeRow);

        var savedPlans = {
            text: event,
            time: timeRow
        };

        // This line of code pushes the savedPlans object into the plans variable declared earlier.
        plans.push(savedPlans);


        // Here we set the items to be saved in the local storage.
        localStorage.setItem("plans", JSON.stringify(plans));

    });

    for (let i = 0; i < plans.length; i++) {
        let currentText = plans[i].text;
        let currentTime = plans[i].time;
        $(`#${currentTime}`).val(currentText);
        console.log(currentText);
    };


});
