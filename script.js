const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("closeSidebar");

// Open sidebar
menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
  document.body.classList.toggle("overflow-hidden"); // lock body scroll
});

// Close sidebar
closeSidebar.addEventListener("click", () => {
  sidebar.classList.add("-translate-x-full");
  document.body.classList.remove("overflow-hidden"); // unlock body scroll
});

// Optional: click outside to close
window.addEventListener("click", (e) => {
  if (window.innerWidth < 1024) { // mobile only
    if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
      sidebar.classList.add("-translate-x-full");
      document.body.classList.remove("overflow-hidden"); // unlock body scroll
    }
  }
});