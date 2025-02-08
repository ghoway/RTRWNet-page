import './style.css'

const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.remove('bg-opacity-90');
    header.classList.add('bg-opacity-100', 'shadow-md');
  } else {
    header.classList.add('bg-opacity-90');
    header.classList.remove('bg-opacity-100', 'shadow-md');
  }
});

const themeToggle = document.getElementById('theme-toggle');

const setTheme = (isDark) => {
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  if (themeToggle) {
    themeToggle.checked = isDark;
  }
};

if (window.matchMedia) {
  const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  setTheme(darkModeQuery.matches);
  
  darkModeQuery.addEventListener('change', (e) => setTheme(e.matches));
}

if (themeToggle) {
  themeToggle.addEventListener('change', (e) => setTheme(e.target.checked));
}

const footerYear = document.querySelector('footer p');
if (footerYear) {
  footerYear.innerHTML = footerYear.innerHTML.replace('{new Date().getFullYear()}', new Date().getFullYear());
}