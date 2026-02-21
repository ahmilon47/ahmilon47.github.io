// Back to top button
const btn = document.getElementById('back-to-top');
window.onscroll = () => { btn.style.display = window.scrollY > 200 ? 'block' : 'none'; }
btn.onclick = () => { window.scrollTo({top:0, behavior:'smooth'}); }