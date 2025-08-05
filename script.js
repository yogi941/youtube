 const searchBtn = document.querySelector('.search-button');
  const searchBar = document.querySelector('.search-bar');

  searchBtn.addEventListener('click', () => {
    const query = searchBar.value.trim();
    if (query) {
      alert(`You searched for: ${query}`);
    } else {
      alert("Please enter something to search!");
    }
  });

  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
      alert(`You clicked on: ${link.innerText}`);
    });
  });

  const notificationIcon = document.querySelector('.icon[src*="notifications.svg"]');
  const notificationCount = document.querySelector('.notification-count');

  notificationIcon.addEventListener('click', () => {
    alert("Opening notifications...");
    notificationCount.style.display = 'none';
  });

  const hamburger = document.querySelector('.hamburger-menu');
  hamburger.addEventListener('click', () => {
    alert("Menu clicked");
  });