
(function() {
  // Theme toggle
  const body = document.body;
  const stored = localStorage.getItem('chaima-theme');
  if (stored === 'dark') {
    body.classList.add('dark');
  }
  const toggle = document.querySelector('.theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      body.classList.toggle('dark');
      localStorage.setItem('chaima-theme', body.classList.contains('dark') ? 'dark' : 'light');
    });
  }
})();
