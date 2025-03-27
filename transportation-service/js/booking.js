document.addEventListener("DOMContentLoaded", () => {
  // Initialize Flatpickr date picker
  if (typeof flatpickr !== "undefined") {
    flatpickr(".datepicker", {
      minDate: "today",
      dateFormat: "Y-m-d",
    })
  }

  // Get URL parameters
  const urlParams = new URLSearchParams(window.location.search)
  const serviceParam = urlParams.get("service")
  const vehicleParam = urlParams.get("vehicle")

  // Set initial service tab if provided in URL
  if (serviceParam) {
    const serviceButton = document.querySelector(`[data-service="${serviceParam}"]`)
    if (serviceButton) {
      // Trigger click event to activate the tab
      serviceButton.click()
    }
  }

  // Set initial vehicle if provided in URL
  if (vehicleParam) {
    const vehicleRadio = document.getElementById(`vehicle-${vehicleParam}`)
    if (vehicleRadio) {
      vehicleRadio.checked = true
    }
  }

  // Multi-step form navigation
  const nextToStep2 = document.getElementById("next-to-step-2")
  const nextToStep3 = document.getElementById("next-to-step-3")
  const backToStep1 = document.getElementById("back-to-step-1")
  const backToStep2 = document.getElementById("back-to-step-2")
  const submitBooking = document.getElementById("submit-booking")

  const step1 = document.getElementById("step-1")
  const step2 = document.getElementById("step-2")
  const step3 = document.getElementById("step-3")

  const stepIndicators = document.querySelectorAll(".step")

  if (nextToStep2 && step2) {
    nextToStep2.addEventListener("click", () => {
      step1.classList.remove("active")
      step2.classList.add("active")
      stepIndicators[1].classList.add("active")
      window.scrollTo(0, 0)
    })
  }

  if (backToStep1 && step1) {
    backToStep1.addEventListener("click", () => {
      step2.classList.remove("active")
      step1.classList.add("active")
      stepIndicators[1].classList.remove("active")
      window.scrollTo(0, 0)
    })
  }

  if (nextToStep3 && step3) {
    nextToStep3.addEventListener("click", () => {
      step2.classList.remove("active")
      step3.classList.add("active")
      stepIndicators[2].classList.add("active")
      window.scrollTo(0, 0)
    })
  }

  if (backToStep2 && step2) {
    backToStep2.addEventListener("click", () => {
      step3.classList.remove("active")
      step2.classList.add("active")
      stepIndicators[2].classList.remove("active")
      window.scrollTo(0, 0)
    })
  }

  // Form submission
  const bookingForm = document.getElementById("booking-form")

  if (bookingForm && submitBooking) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Show loading state
      const btnText = submitBooking.querySelector(".btn-text")
      const btnLoading = submitBooking.querySelector(".btn-loading")

      if (btnText && btnLoading) {
        btnText.classList.add("hidden")
        btnLoading.classList.remove("hidden")
      }

      submitBooking.disabled = true

      // Simulate form submission delay
      setTimeout(() => {
        // Redirect to confirmation page
        window.location.href = "confirmation.html"
      }, 1500)
    })
  }
})

