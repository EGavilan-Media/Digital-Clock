
(function () {

    function setTime() {
        var currentTime = new Date();
        // console.log(currentTime);

        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var ampm;
        var dayWeek = currentTime.getDay();
        var day = currentTime.getDate();
        var month = currentTime.getMonth();
        var year = currentTime.getFullYear();

        var hr = document.getElementById('hours');
        var sec = document.getElementById('seconds');
        var min = document.getElementById('minutes');
        var AMPM = document.getElementById('ampm');
        var wk = document.getElementById('date');
        var d = document.getElementById('day');
        var m = document.getElementById('month');
        var yr = document.getElementById('year');

        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October ", "November", "December"];

        wk.textContent = days[dayWeek];
        d.textContent = day;
        m.textContent = months[month];
        yr.textContent = year;

        if (hours >= 12) {
            hours = hours - 12;
            ampm = "PM";
        } else {
            ampm = "AM";
        };

        if (hours == 0) {
            hours = 12;
        };

        if (hours < 10) {
            hr.textContent = "0" + hours;
        } else {
            hr.textContent = hours;
        };

        if (minutes < 10) {
            min.textContent = "0" + minutes;
        } else {
            min.textContent = minutes;
        };

        if (seconds < 10) {
            sec.textContent = "0" + seconds;
        } else {
            sec.textContent = seconds;
        };

        AMPM.textContent = ampm;
    };
    setTime();
    setInterval(setTime, 1000);
})();
