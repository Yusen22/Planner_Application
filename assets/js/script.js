// variable for current date and time

var currentDay = moment().format("LL")

// Sets currentDay div to display current day 

$('#currentDay').text(currentDay)

var currTime = parseInt(moment().format("HH"));

var rows = $('.row')

$(function () {

    var textArea = $('<textarea class ="description" name ="description" cols = "3" wrap="hard">');
        textArea.insertBefore(".saveBtn");

    var currentTime = parseInt(moment().format("HH"));
    console.log(currentTime);

    for (var i = 0; i < 10; i++) {

        var currentRow = rows.eq(i)
        currentRow.attr('data-number', rows[i].i = i + 9);

        var dataNum = parseInt(currentRow.attr("data-number"));
        console.log(dataNum);

        if (dataNum < currentTime) {
            currentRow.addClass("past")
        } else if (dataNum == currentTime) {
            currentRow.addClass("present")

        } else if (dataNum > currentTime) {
            currentRow.addClass("future")
        }

    
        
    }

   





})

