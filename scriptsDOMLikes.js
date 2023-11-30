let clicks = 0
let starClicks = 7
let popularClicks = 10
let advice = document.getElementById('status')
let star = document.getElementById('star')
let starCount = document.getElementById('contador')

function increment() {
    clicks ++
    starCount.innerText = clicks
    if (clicks >= popularClicks) {
        advice.innerText = "🌟Foto Popular!🌟"
    }

    if (clicks >= starClicks) {
        star.classList.add('big-star');
    }
}
