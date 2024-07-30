
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar').style.marginLeft = "250px";
    

    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('show');
    });
});
