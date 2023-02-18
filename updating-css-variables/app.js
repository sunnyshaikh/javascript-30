const inputs = document.querySelectorAll(".input")

inputs.forEach(input => {
  input.addEventListener('input', function () {
    const prop = this.getAttribute("id")
    const unit = this.dataset.unit || ''
    const value = this.value

    document.documentElement.style.setProperty(`--${prop}`, value + unit)
  })
})