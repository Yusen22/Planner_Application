// variable for current date and time

var currentDay = moment().format("LL");
console.log("The current day is " + currentDay);

// Sets currentDay div to display current day 

$('#currentDay').text(currentDay)


// JQuery selector for each time block
var rows = $('.row')


// Ready function executes once DOM elements are prepared
$(function () {

    // Creates and inserts textarea as middle element in each .row
    var textArea = $('<textarea class ="description" name ="description" cols = "3" wrap="hard">');
    textArea.insertBefore(".saveBtn");

    // Parses current time in HH to integer and prints to console 
    var currentTime = parseInt(moment().format("HH"));
    console.log("The current hour (24h format) is " + currentTime);

    for (var i = 0; i < 9; i++) {

        // Loops over each .row and gives it a datanumber value in the currentTime format. Here, the 3pm block would have a datanum of 15.
        var currentRow = rows.eq(i)
        currentRow.attr('data-number', rows[i].i = i + 9);

        // Gets data-number attr of currentRow and parses to integer 
        var dataNum = parseInt(currentRow.attr("data-number"));

        // If statement compares dataNum and currentTime and adds appropritate class with affected background color
        if (dataNum < currentTime) {
            currentRow.addClass("past")
        } else if (dataNum == currentTime) {
            currentRow.addClass("present")

        } else if (dataNum > currentTime) {
            currentRow.addClass("future")
        }

        // Pulls description string from local storage related to its data-number and prints to each textarea
        var stringedNum = (9 + i).toString();
        var localPull = localStorage.getItem(stringedNum)

        currentRow.children('textarea').text(localPull);
    }


})


// Event listener on save buttons to run function 
$('.saveBtn').on('click', function () {

    // Variable that selects the nearest row to the selected button and prints which row is selected
    var rowToSave = $(this).closest('.row');
    console.log("Row to save is " + rowToSave.attr('data-number'));

    // Variable that saves the description text value in the rowToSave and trims white space 
    var saveText = rowToSave.children('.description').val().trim();

    // If statement that alerts user if no text exists to be saved, and alerts the user what existing text is to be saved and at what time 
    if (saveText == "") {
        alert("This timeblock is empty!")
    } else {
        alert("You've saved the task " + "'" + saveText + "'" + " at " + rowToSave.attr('id'))
    }

    // Gets data-number for timeblock and saves it to local storage with a value of the saved text
    var storageBlock = rowToSave.attr('data-number')
    localStorage.setItem(storageBlock, saveText)
})


// Event listener for clear button at bottom of page
$('.clear-button').on('click', function () {
    // Confirms if user wants to clear all entries
    var clearConfirm = confirm("Are you sure you want to clear all entries?")

    // If true, local storage is cleared and the textareas are made to be an empty string
    if (clearConfirm === true) {
        localStorage.clear();
        $('textarea').text(' ')
    }
})






