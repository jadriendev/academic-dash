document.addEventListener("DOMContentLoaded", () => {
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

  menuBtn?.addEventListener("click", openSidebar);
  closeSidebar?.addEventListener("click", closeSidebarFunc);

  window.addEventListener("click", (e) => {
    if (window.innerWidth < 1024) {
      if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
        closeSidebarFunc();
      }
    }
  });

  const fileUpload = document.getElementById("fileUpload");
  const preview = document.getElementById("preview");

  if (fileUpload && preview) {
    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";
    submitBtn.className = "bg-green-600 text-white w-full p-2 rounded-lg mt-2 hover:bg-green-700";
    submitBtn.style.cursor = "pointer";
    submitBtn.type = "button";
    fileUpload.parentElement.parentElement.appendChild(submitBtn);

    fileUpload.addEventListener("change", function() {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
          preview.src = e.target.result;
          preview.classList.remove("opacity-70");
        }
        reader.readAsDataURL(file);
      }
    });

    submitBtn.addEventListener("click", function() {
      if (!fileUpload.files[0]) {
        alert("Please upload a file first!");
        return;
      }
      alert("Submitted");
    });
  }

  ["studentName", "studentID", "program", "yearLevel", "name", "age", "birthday", "address", "number", "email"].forEach(id => {
    const el = document.getElementById(id);
    el?.addEventListener("click", () => {
      const newValue = prompt(`Enter new ${id}:`);
      if (newValue) el.textContent = newValue;
    });
  });

  const tasks = [
    { title: "GCAS 08 - Understanding the Self", details: "Read chapters 1-5 and submit reflection questions." },
    { title: "ITC2222N - Human Computer Interaction", details: "Complete group project and submit mockups." },
    { title: "ITC123 - Discrete Math", details: "Solve problem sets and prepare for quiz." }
  ];

  const table = document.getElementById("taskTable");
  const rows = table?.querySelectorAll("div.flex:not(:first-child)") || [];
  const titleEl = document.getElementById("taskTitle");
  const detailsEl = document.getElementById("taskDetails");

  rows.forEach((row, index) => {
    row.style.cursor = "pointer";
    row.addEventListener("click", () => {
      titleEl.textContent = "Title: " + tasks[index].title;
      detailsEl.textContent = "Details: " + tasks[index].details;
    });
  });

  const monthSelect = document.getElementById("monthSelect");
  const yearSelect = document.getElementById("yearSelect");
  const calendarDates = document.getElementById("calendarDates");
  const prevBtn = document.getElementById("prevMonth");
  const nextBtn = document.getElementById("nextMonth");

  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
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
      calendarDates.appendChild(document.createElement("span"));
    }

    for(let day = 1; day <= daysInMonth; day++){
      const date = document.createElement("span");
      date.textContent = day;
      date.className = "py-1";
      if(day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()){
        date.className = "bg-gray-800 text-white rounded-lg py-1";
      }
      calendarDates.appendChild(date);
    }
  }

  monthSelect?.addEventListener("change", () => {
    currentMonth = parseInt(monthSelect.value);
    renderCalendar();
  });
  yearSelect?.addEventListener("change", () => {
    currentYear = parseInt(yearSelect.value);
    renderCalendar();
  });
  prevBtn?.addEventListener("click", () => {
    currentMonth--;
    if(currentMonth < 0){ currentMonth = 11; currentYear--; }
    monthSelect.value = currentMonth;
    yearSelect.value = currentYear;
    renderCalendar();
  });
  nextBtn?.addEventListener("click", () => {
    currentMonth++;
    if(currentMonth > 11){ currentMonth = 0; currentYear++; }
    monthSelect.value = currentMonth;
    yearSelect.value = currentYear;
    renderCalendar();
  });

  populateSelectors();
  renderCalendar();

  const togglePassword = document.getElementById('togglePassword');
  const password = document.getElementById('password');

  togglePassword?.addEventListener('click', () => {
    if(!password) return;
    password.type = password.type === 'password' ? 'text' : 'password';
    togglePassword.classList.toggle('fa-eye');
    togglePassword.classList.toggle('fa-eye-slash');
  });

});