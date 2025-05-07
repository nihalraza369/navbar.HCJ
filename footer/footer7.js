document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const panels = document.querySelectorAll(".tab-panel");
  
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove("active"));
        // Hide all panels
        panels.forEach(panel => panel.classList.remove("active"));
  
        // Activate clicked tab and corresponding panel
        tab.classList.add("active");
        const target = tab.getAttribute("data-tab");
        document.getElementById(target).classList.add("active");
      });
    });
  });
  