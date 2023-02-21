const panels = document.querySelectorAll(".panel")

panels.forEach(panel => {
  panel.addEventListener("click", function () {
    panels.forEach(pan => pan.classList.remove("open"))
    this.classList.add("open")
  })
})

panels.forEach(panel => {
  panel.addEventListener('transitionend', e => {
    if (e.propertyName.includes("flex")) {
      panel.classList.toggle("open-active")
    }
  })
})