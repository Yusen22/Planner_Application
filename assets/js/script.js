// variable for current date and time

var currentDay = moment().format("LL")

// Sets currentDay div to display current day 

$('#currentDay').text(currentDay)



$(function () {

    function currentTime() {
        return moment().format("HH")
    }
    
    currentTime();

    var containerChildren = $('.container-fluid').children()

    for (var i = 0; i < 10; i++) {
        
        containerChildren.eq(i).attr('data-number', containerChildren[i].i = i + 9); 

        
    }


    // if (currentTime < )

})