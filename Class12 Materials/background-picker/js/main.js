document.getElementById('red').onclick = partyRed
document.getElementById('green').onclick = partyGreen
document.getElementById('purple').onclick = partyPurple
document.getElementById('blue').onclick = partyBlue

function partyRed() {
  document.querySelector('body').style.backgroundColor = 'rgba(243, 1, 1)'
  document.quesrySelector('body').style.color = 'white'
}

function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
  document.querySelector('body').style.color = 'white'
}

function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
  document.querySelector('body').style.color = 'white'
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
  document.querySelector('body').style.color = 'white'
}