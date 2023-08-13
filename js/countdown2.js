let countdownInterval2;

function startCountdown2() {
  clearInterval(countdownInterval2);

  const selectedDate = new Date(document.getElementById("datepicker2").value).getTime();

  // Verstecke den Datepicker-Container
  document.getElementById("datepicker-container2").style.display = "none";

  function updateCountdown2() {
    const now = new Date().getTime();
    const timeDifference = selectedDate - now;

    if (timeDifference <= 0) {
      clearInterval(countdownInterval2);
      document.getElementById("days2").textContent = "0";
      document.getElementById("hours2").textContent = "0";
      document.getElementById("minutes2").textContent = "0";
      document.getElementById("seconds2").textContent = "0";
    } else {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      document.getElementById("days2").textContent = days;
      document.getElementById("hours2").textContent = hours;
      document.getElementById("minutes2").textContent = minutes;
      document.getElementById("seconds2").textContent = seconds;
    }
  }

  updateCountdown2();
  countdownInterval2 = setInterval(updateCountdown2, 1000);
}