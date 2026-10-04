const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const periodEl = document.getElementById("period");
const dateEl = document.getElementById("date");
const toggleBtn = document.getElementById("toggle");

let use24Hour = false;


function pad(number) {
  return String(number).padStart(2, "0");
}

function updateClock() {
  const now = new Date();
  let hours = now.getHours();

  if (use24Hour) {
    periodEl.textContent = "";
  } else {
    periodEl.textContent = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
  }

  hoursEl.textContent = pad(hours);
  minutesEl.textContent = pad(now.getMinutes());
  secondsEl.textContent = pad(now.getSeconds());

  dateEl.textContent = now.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}

toggleBtn.addEventListener("click", () => {
  use24Hour = !use24Hour;
  toggleBtn.textContent = use24Hour ? "Switch to 12-hour" : "Switch to 24-hour";
  updateClock();
});

updateClock();                 
setInterval(updateClock, 1000); 
