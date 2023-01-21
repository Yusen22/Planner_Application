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

        stringedNum = (9 + i).toString();
        localPull = localStorage.getItem(stringedNum)

        currentRow.children('textarea').text(localPull);
    }
})



$('.saveBtn').on('click', function() {

    

    rowToSave = $(this).closest('.row');
    console.log("Row to save is " + rowToSave.attr('data-number'));
    saveText = rowToSave.children('.description').val();
    if (saveText == "") {
        alert("This timeblock is empty!")
    } else {
        alert("You've saved the task " + "'" + saveText + "'" + " at " + rowToSave.attr('id'))
    }
    var storageBlock = rowToSave.attr('data-number')
    localStorage.setItem(storageBlock, saveText)
})

var localPull 
var stringedNum

var saveText
var rowToSave

