document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide icons
  // Declare lucide variable (assuming it's a global object or imported elsewhere)
  const lucide = window.lucide || {} // Use window.lucide to check if it's globally available

  lucide.createIcons()

  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Mobile menu toggle
  const menuToggle = document.getElementById("menu-toggle")
  const closeMenu = document.getElementById("close-menu")
  const mobileMenu = document.getElementById("mobile-menu")

  if (menuToggle && closeMenu && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.add("active")
    })

    closeMenu.addEventListener("click", () => {
      mobileMenu.classList.remove("active")
    })

    // Close menu when clicking outside
    mobileMenu.addEventListener("click", (e) => {
      if (e.target === mobileMenu) {
        mobileMenu.classList.remove("active")
      }
    })
  }

  // Live chat functionality
  const chatToggle = document.getElementById("chat-toggle")
  const chatWindow = document.getElementById("chat-window")
  const chatIcon = document.getElementById("chat-icon")
  const closeIcon = document.getElementById("close-icon")
  const chatForm = document.getElementById("chat-form")
  const messageInput = document.getElementById("message-input")
  const chatMessages = document.getElementById("chat-messages")

  if (chatToggle && chatWindow && chatIcon && closeIcon) {
    chatToggle.addEventListener("click", () => {
      chatWindow.classList.toggle("hidden")
      chatIcon.classList.toggle("hidden")
      closeIcon.classList.toggle("hidden")

      if (!chatWindow.classList.contains("hidden")) {
        messageInput.focus()
      }
    })
  }

  if (chatForm && messageInput && chatMessages) {
    chatForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const message = messageInput.value.trim()
      if (!message) return

      // Add user message
      const userMessage = createMessage(message, "user")
      chatMessages.appendChild(userMessage)

      // Clear input
      messageInput.value = ""

      // Scroll to bottom
      chatMessages.scrollTop = chatMessages.scrollHeight

      // Simulate agent response after a short delay
      setTimeout(() => {
        const agentMessage = createMessage(
          "Thanks for your message! I'll get back to you shortly. If you need immediate assistance, you can also call us at (555) 123-4567.",
          "agent",
        )
        chatMessages.appendChild(agentMessage)

        // Scroll to bottom again
        chatMessages.scrollTop = chatMessages.scrollHeight
      }, 1000)
    })
  }

  // Helper function to create a message element
  function createMessage(text, sender) {
    const messageDiv = document.createElement("div")
    messageDiv.className = `message ${sender}-message`

    const contentDiv = document.createElement("div")
    contentDiv.className = "message-content"

    const paragraph = document.createElement("p")
    paragraph.textContent = text

    const timeSpan = document.createElement("span")
    timeSpan.className = "message-time"
    timeSpan.textContent = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })

    contentDiv.appendChild(paragraph)
    contentDiv.appendChild(timeSpan)
    messageDiv.appendChild(contentDiv)

    return messageDiv
  }

  // Tab functionality
  const tabButtons = document.querySelectorAll(".tab-button")

  if (tabButtons.length > 0) {
    tabButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const tabId = this.dataset.tab

        // Remove active class from all buttons and content
        document.querySelectorAll(".tab-button").forEach((btn) => {
          btn.classList.remove("active")
        })

        document.querySelectorAll(".tab-content").forEach((content) => {
          content.classList.remove("active")
        })

        // Add active class to clicked button and corresponding content
        this.classList.add("active")
        document.getElementById(`tab-${tabId}`).classList.add("active")
      })
    })
  }

  // Service tab functionality
  const serviceTabButtons = document.querySelectorAll("[data-service]")

  if (serviceTabButtons.length > 0) {
    serviceTabButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const serviceId = this.dataset.service

        // Remove active class from all buttons and content
        document.querySelectorAll("[data-service]").forEach((btn) => {
          btn.classList.remove("active")
        })

        document.querySelectorAll(".service-content").forEach((content) => {
          content.classList.remove("active")
        })

        // Add active class to clicked button and corresponding content
        this.classList.add("active")
        document.getElementById(`service-${serviceId}`).classList.add("active")
      })
    })
  }
})

