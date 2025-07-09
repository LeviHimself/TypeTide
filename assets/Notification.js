class GuideNotification {
  constructor() {
    this.notificationQueue = [
      {
        target: ".quote",
        message:
          "Type this paragraph in the text area below to start the test.",
        position: "bottom",
      },
      {
        target: ".stop-btn",
        message: "Click to stop the test at any time.",
        position: "top",
      },
      {
        target: ".pause-play-btn",
        message: "Pause or resume the test when needed.",
        position: "top",
      },
      {
        target: ".change-btn",
        message: "Get a different paragraph to type.",
        position: "top",
      },
      {
        target: ".reset-btn",
        message: "Reset the test to start over.",
        position: "top",
      },
      {
        target: ".info-btn",
        message: "View test requirements and tips.",
        position: "top",
      },
      {
        target: ".theme-btn",
        message: "Toggle between light and dark themes.",
        position: "top",
      },
    ];

    this.currentIndex = 0;
    this.timeoutDuration = 5500;
    this.activeTimeout = null;
    this.init();
  }

  createNotificationElement() {
    const notification = document.createElement("div");
    notification.className = "guide-notification";
    notification.innerHTML = `
            <span class="notification-text"></span>
            <button class="close-guide">×</button>
        `;
    document.body.appendChild(notification);
    return notification;
  }

  positionNotification(notification, target, position) {
    const targetElement = document.querySelector(target);
    const targetRect = targetElement.getBoundingClientRect();

    if (position === "bottom") {
      notification.style.top = `${targetRect.bottom + 10}px`;
      notification.style.left = `${targetRect.left + targetRect.width / 2}px`;
      notification.style.transform = "translateX(-50%)";
    } else {
      notification.style.top = `${targetRect.top - 10}px`;
      notification.style.left = `${targetRect.left + targetRect.width / 2}px`;
      notification.style.transform = "translate(-50%, -100%)";
    }
  }

  showNotification(notificationData) {
    const notification = this.createNotificationElement();
    notification.querySelector(".notification-text").textContent =
      notificationData.message;

    this.positionNotification(
      notification,
      notificationData.target,
      notificationData.position
    );

    notification.classList.add("show");

    const closeBtn = notification.querySelector(".close-guide");
    closeBtn.addEventListener("click", () => {
      this.hideNotification(notification);
    });

    this.activeTimeout = setTimeout(() => {
      this.hideNotification(notification);
    }, this.timeoutDuration);
  }

  hideNotification(notification) {
    clearTimeout(this.activeTimeout);
    notification.classList.remove("show");
    setTimeout(() => {
      notification.remove();
      this.showNext();
    }, 300);
  }

  showNext() {
    if (this.currentIndex < this.notificationQueue.length) {
      this.showNotification(this.notificationQueue[this.currentIndex]);
      this.currentIndex++;
    }
  }

  init() {
    // Start showing notifications when DOM is loaded
    document.addEventListener("DOMContentLoaded", () => {
      this.showNext();
    });
  }
}

// Initialize the guide
const guide = new GuideNotification();
