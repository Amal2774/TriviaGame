var counter = 0;

function setUpTimer() {
    noCanvas();
    
    var timer = $("#timer");
    timer.html(counter);

    function timeIt() {
        counter++;
        timer.html(counter);
    }

    setInterval(timeIt, 1000);

};






