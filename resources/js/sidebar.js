document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const toggleSidebar = document.getElementById('toggleSidebar');
    const closeSidebar = document.getElementById('closeSidebar');
  
    ///abre
    toggleSidebar.addEventListener('click', () => {
      sidebar.classList.add('translate-x-0');
      sidebar.classList.remove('-translate-x-full');
    });
  
    //fecha
    closeSidebar.addEventListener('click', () => {
      sidebar.classList.add('-translate-x-full');
      sidebar.classList.remove('translate-x-0');
    });
  });
  