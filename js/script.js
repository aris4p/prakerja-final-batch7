const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function (){
  nav.classList.toggle('slide');
});

function ubahDark(){
  const ubah = document.body;
  ubah.classList.toggle("dark");
}

function bukaGithub(){
  const github = window.open("https://github.com/aris4p");
  // github.document.getElementsByClassName("button");
}

const yearspan = document.querySelector('#copyrightYear');
const currentYear = new Date();
yearspan.innerHTML = currentYear.getFullYear();