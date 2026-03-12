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

const monthSelect = document.getElementById("monthSelect");
const yearSelect = document.getElementById("yearSelect");
const calendarDates = document.getElementById("calendarDates");

const prevBtn = document.getElementById("prevMonth");
const nextBtn = document.getElementById("nextMonth");

const months = [
"January","February","March","April","May","June",
"July","August","September","October","November","December"
];

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

function populateSelectors() {

    months.forEach((month, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.text = month;
        monthSelect.appendChild(option);
    });

    for(let y = 2000; y <= 2100; y++){
        const option = document.createElement("option");
        option.value = y;
        option.text = y;
        yearSelect.appendChild(option);
    }

    monthSelect.value = currentMonth;
    yearSelect.value = currentYear;
}

function renderCalendar(){

    calendarDates.innerHTML = "";

    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    for(let i = 0; i < firstDay; i++){
        const empty = document.createElement("span");
        calendarDates.appendChild(empty);
    }

    for(let day = 1; day <= daysInMonth; day++){

        const date = document.createElement("span");
        date.textContent = day;
        date.className = "py-1";

        if(
            day === today.getDate() &&
            currentMonth === today.getMonth() &&
            currentYear === today.getFullYear()
        ){
            date.className = "bg-gray-800 text-white rounded-lg py-1";
        }

        calendarDates.appendChild(date);
    }
}

monthSelect.addEventListener("change", () => {
    currentMonth = parseInt(monthSelect.value);
    renderCalendar();
});

yearSelect.addEventListener("change", () => {
    currentYear = parseInt(yearSelect.value);
    renderCalendar();
});

prevBtn.addEventListener("click", () => {

    currentMonth--;

    if(currentMonth < 0){
        currentMonth = 11;
        currentYear--;
    }

    monthSelect.value = currentMonth;
    yearSelect.value = currentYear;

    renderCalendar();
});

nextBtn.addEventListener("click", () => {

    currentMonth++;

    if(currentMonth > 11){
        currentMonth = 0;
        currentYear++;
    }

    monthSelect.value = currentMonth;
    yearSelect.value = currentYear;

    renderCalendar();
});

populateSelectors();
renderCalendar();