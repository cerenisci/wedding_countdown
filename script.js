// Hedef düğün tarihi: 20 Temmuz 2025 17:00 Türkiye Saati
const weddingDate = new Date('2025-07-20T17:00:00+03:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "Düğün başladı!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        `${days} gün ${hours} saat ${minutes} dakika ${seconds} saniye`;
}

setInterval(updateCountdown, 1000);
updateCountdown(); // sayfa yüklenince çalışsın
