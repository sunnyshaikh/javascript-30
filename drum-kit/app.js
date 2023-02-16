// selector
const keys = document.querySelectorAll(".keys")

// keydown event
window.addEventListener("keydown", playSound)

// remove transition on key
function removeTransition(e) {
  e.target.classList.remove("playing")
}

// playSound function on key press
function playSound(e) {
  // get pressed key code
  let keyCode = e.keyCode

  // selector
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${keyCode}"]`)
  if (!audio) return    // return if key is not valid
  audio.currentTime = 0  // reset audio time
  audio.play()  // play sound

  key.classList.add("playing")  // add transition
}

// remove transition on key after playing
keys.forEach(key => key.addEventListener("transitionend", removeTransition))