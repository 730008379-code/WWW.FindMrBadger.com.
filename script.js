// Coffee countdown timer: 1 year from today
const countdownEl = document.getElementById("countdown");

// Set the countdown to 1 year from now
const nextCoffee = new Date();
nextCoffee.setFullYear(nextCoffee.getFullYear() + 1);

function updateCountdown() {
    const now = new Date();
    const diff = nextCoffee - now;

    if (diff <= 0) {
        countdownEl.textContent = "☕ Mr. Badger should be back! ☕";
        clearInterval(timer);
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s until next coffee!`;
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown();

// Easter egg button
const eggButton = document.getElementById("easterEgg");
const eggMessage = document.getElementById("eggMessage");

eggButton.addEventListener("click", () => {
    const messages = [
        "☕ You found a secret espresso shot!",
        "☕ Mr. Badger loves latte art!",
        "☕ A hidden coffee bean appears!",
        "☕ Coffee magic activated!"
    ];
    const msg = messages[Math.floor(Math.random() * messages.length)];
    eggMessage.textContent = msg;
});
