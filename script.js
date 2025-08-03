const toggleBtn = document.createElement("button");
toggleBtn.textContent = "Toggle Theme";
toggleBtn.className = "toggle-theme";
document.body.appendChild(toggleBtn);

// Apply saved theme on load
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
}

toggleBtn.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme === "dark") {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
});
