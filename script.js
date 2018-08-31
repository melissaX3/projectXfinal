var getPotus = document.getElementById('potus')

var potusClick = function() {
  document.getElementById('message').textContent = 'You did it! You found POTUS!!'
}

getPotus.addEventListener('click', potusClick)

var countdown = document.getElementById('timer')
var countItDown = function() {
  var currentTime = parseFloat(countdown.textContent)
  if (currentTime > 0) {
    countdown.textContent = currentTime - 1
  } else {
    window.clearInterval(timer)
  }
}
var timer = window.setInterval(countItDown, 1000)
