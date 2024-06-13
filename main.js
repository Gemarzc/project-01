document.addEventListener('DOMContentLoaded', function () {
  var azul = document.getElementById('azul')
  var color1 = 'red'
  var color2 = ' rgb(56, 225, 231)'
  var currentColor = color1

  setInterval(function () {
    if (currentColor === color1) {
      azul.style.borderColor = color2
      currentColor = color2
    } else {
      azul.style.borderColor = color1
      currentColor = color1
    }
  }, 1000)
})
