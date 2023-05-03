const toggleBtn = document.querySelector('.sidebar-toggle'),
    closeBtn = document.querySelector('.close-btn'),
    sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', function() {
    sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('show-sidebar');
});