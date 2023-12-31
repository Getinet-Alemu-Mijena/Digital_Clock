document.addEventListener("DOMContentLoaded", function(){
    function updateClock() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();

        // Add leading zero if the value is less than 10
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        // Update the clock display
        document.getElementById("hrs").textContent = hours;
        document.getElementById("min").textContent = minutes;
        document.getElementById("sec").textContent = seconds;
    }

    // Update the clock every second
    setInterval(updateClock, 1000);
});