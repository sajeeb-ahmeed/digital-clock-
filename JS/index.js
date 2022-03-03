

window.onload = function () {

    let hours = document.getElementById('hours');
    let Minite = document.getElementById('min');
    let second = document.getElementById('sec');
    // let minusSeconds = document.getElementById('minus-sec');
    let hrs = 0;
    let mins = 0;
    let sec = 0;
    const timeID = setInterval(() => {
        sec++
        if (sec <= 9) {
            second.innerHTML = '0' + sec
        }
        if (sec > 9) {
            second.innerHTML = sec;
        }

        if (sec > 60) {
            mins++
            sec = '00';
            second.innerHTML = '0' + '0';
            Minite.innerHTML = '0' + mins
        }

        if (Minite > 9) {
            Minite.innerHTML = mins;
        }
        if (Minite > 59) {
            hrs++
            hours.innerHTML = '0' + hrs
            Minite = 0
        }

        if (hours > 9) {
            hours.innerHTML = hrs;
        }

    }, 1000)
}
