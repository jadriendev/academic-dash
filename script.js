const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("closeSidebar");

function openSidebar() {
  sidebar.classList.remove("-translate-x-full");
  document.body.style.position = "fixed";
  document.body.style.width = "100%";
}

function closeSidebarFunc() {
  sidebar.classList.add("-translate-x-full");
  document.body.style.position = "";
  document.body.style.width = "";
}

menuBtn.addEventListener("click", openSidebar);

closeSidebar.addEventListener("click", closeSidebarFunc);

window.addEventListener("click", (e) => {
  if (window.innerWidth < 1024) {
    if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
      closeSidebarFunc();
    }
  }
});