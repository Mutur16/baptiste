const toggleBtn = document.querySelector('.sidebar-toggle')
const sidebar = document.querySelector('.sidebar')

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
  sidebar.classList.toggle('show-sidebar')
})



