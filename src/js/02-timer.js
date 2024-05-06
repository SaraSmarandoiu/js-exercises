document.addEventListener("DOMContentLoaded", function () {
    let datetimePicker;
    let timerInterval;
  
    function setupTimer() {
      datetimePicker = flatpickr("#datetime-picker", {
        enableTime: true,
        time_24hr: true,
        defaultDate: new Date(),
        minuteIncrement: 1,
        onClose(selectedDates) {
          if (selectedDates[0] < new Date()) {
            alert("Please choose a date in the future");
          } else {
            document.getElementById("start-button").removeAttribute("disabled");
          }
        },
        onChange(selectedDates) {
          if (selectedDates.length > 0) {
            const selectedDate = selectedDates[0];
            clearInterval(timerInterval); 
            updateTimer(selectedDate); 
          }
        },
      });
    }
  
    function convertMs(ms) {
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;
  
      const days = Math.floor(ms / day);
      const hours = Math.floor((ms % day) / hour);
      const minutes = Math.floor(((ms % day) % hour) / minute);
      const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
      return { days, hours, minutes, seconds };
    }
  
    function updateTimer(endDate) {
      const currentTime = new Date();
      const difference = endDate - currentTime;
  
      if (difference <= 0) {
        clearInterval(timerInterval);
        return;
      }
  
      const { days, hours, minutes, seconds } = convertMs(difference);
  
      document.querySelector("[data-days]").textContent = String(days).padStart(2, "0");
      document.querySelector("[data-hours]").textContent = String(hours).padStart(2, "0");
      document.querySelector("[data-minutes]").textContent = String(minutes).padStart(2, "0");
      document.querySelector("[data-seconds]").textContent = String(seconds).padStart(2, "0");
    }
  
    document.getElementById("start-button").addEventListener("click", () => {
      const selectedDate = new Date(datetimePicker.selectedDates[0]);
      timerInterval = setInterval(() => updateTimer(selectedDate), 1000);
    });
  
    setupTimer(); 
  });
  