// Theme variables
const darkTheme = {
  background: "#1a1a1a",
  containerBg: "#2d2d2d",
  textColor: "#ffffff",
  textAreaBg: "#3d3d3d",
  textAreaText: "#ffffff",
  buttonHolderBg: "#595959",
  statsBg: "#353535",
  resultsBg: "#2d2d2d",
  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
  inputBorder: "#4d4d4d",
  quoteBg: "#353535",
  resultHeadings: "#000000",
  resultValues: "#fffffff",
  chartText: "#000000",
};

const lightTheme = {
  background: "#f8f8f8",
  containerBg: "#ffffff",
  textColor: "#2c3e50",
  textAreaBg: "#ffffff",
  textAreaText: "#2c3e50",
  buttonHolderBg: "#f1f3f5",
  statsBg: "#f8f8f8",
  resultsBg: "#ffffff",
  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
  inputBorder: "#dee2e6",
  quoteBg: "#f8f8f8",
  resultHeadings: "#2c3e50",
  resultValues: "#2c3e50",
  chartText: "#2c3e50",
};

// Initialize theme
let currentTheme = localStorage.getItem("theme") || "light";

// Update theme icon based on current theme
function updateThemeIcon() {
  const themeIcon = document.getElementById("themeIcon");
  themeIcon.src = currentTheme === "light" ? "assets/images/dark.png" : "assets/images/light.png";
}

// Apply theme to elements
function applyTheme(theme) {
  const themeColors = theme === "light" ? lightTheme : darkTheme;

  document.body.style.background = `linear-gradient(135deg, ${themeColors.background} 0%, ${themeColors.background} 100%)`;

  // Container
  document.querySelector(".container").style.backgroundColor =
    themeColors.containerBg;
  document.querySelector(".container").style.boxShadow = themeColors.boxShadow;

  // Text colors
  document
    .querySelectorAll("h1, h2, h3, h4, p, span, li")
    .forEach((element) => {
      element.style.color = themeColors.textColor;
    });

  // Text area
  const textArea = document.querySelector(".input");
  textArea.style.backgroundColor = themeColors.textAreaBg;
  textArea.style.color = themeColors.textAreaText;
  textArea.style.borderColor = themeColors.inputBorder;

  // Stats section
  document.querySelector(".stats").style.backgroundColor = themeColors.statsBg;

  // Quote section
  document.querySelector(".quote").style.backgroundColor = themeColors.quoteBg;

  // Results container
  document
    .querySelectorAll(".results-container .results-popup")
    .forEach((element) => {
      element.style.backgroundColor = themeColors.resultsBg;
    });

  // Notifications
  document.querySelectorAll(".notification").forEach((notification) => {
    notification.style.backgroundColor = themeColors.notificationBg;
  });

  // Buttons holder
  document.querySelector(".buttons").style.backgroundColor =
    themeColors.buttonHolderBg;

  // Info popup
  document.querySelector(".info-popup .info-content").style.backgroundColor =
    themeColors.containerBg;

  // Update result chart text colors
  document.querySelectorAll(".stat-container h3").forEach((heading) => {
    heading.style.color = themeColors.resultHeadings;
  });

  // Update speedometer value color
  const speedValue = document.querySelector(".speed-value");
  if (speedValue) {
    speedValue.style.color = themeColors.chartText;
  }

  // Update accuracy value color
  const accuracyValue = document.querySelector(".accuracy-value");
  if (accuracyValue) {
    accuracyValue.style.color = themeColors.chartText;
  }

  // Update time value color
  const timeValue = document.querySelector(".time-circle span");
  if (timeValue) {
    timeValue.style.color = themeColors.chartText;
  }

  // Update errors value color
  const errorsValue = document.querySelector(".errors-value");
  if (errorsValue) {
    errorsValue.style.color = themeColors.chartText;
  }

  // Save theme preference
  localStorage.setItem("theme", currentTheme);

  updateThemeIcon();
}

// Toggle theme
function toggleTheme() {
  currentTheme = currentTheme === "light" ? "dark" : "light";
  applyTheme(currentTheme);
}

// Initialize theme functionality
document.addEventListener("DOMContentLoaded", () => {
  applyTheme(currentTheme);

  // Update the event listener to use the button's ID
  document.getElementById("themeToggle").addEventListener("click", toggleTheme);
});
