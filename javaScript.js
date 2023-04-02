const navlinks = document.getElementById('navlinks');
const show = () => navlinks.style.top = "0px";
const hide = () => navlinks.style.top = "-1000px" ;

const copyright = document.querySelector("#copyright");
copyright.textContent = ` copyright ${new Date().getFullYear()}`;