const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("closeSidebar");

    menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("-translate-x-full");
});

    closeSidebar.addEventListener("click", () => {
    sidebar.classList.add("-translate-x-full");
  });

  window.addEventListener("click", (e) => {
    if (window.innerWidth < 1024) {
      if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
        sidebar.classList.add("-translate-x-full");
      }
    }
  });