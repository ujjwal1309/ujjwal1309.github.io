document.getElementById("resume-link-2").onclick = ()=>{
    window.open("https://drive.google.com/file/d/188lGyqT4ZZ3LTYQ9EIKTVzoZKuqeabjy/view")
}
document.getElementById("resume-link-1").onclick = ()=>{
    window.open("https://drive.google.com/file/d/188lGyqT4ZZ3LTYQ9EIKTVzoZKuqeabjy/view")
}
document.getElementById("meetease").onclick = ()=>{
    window.open("https://easemeet.onrender.com/")
}
document.getElementById("meetease").onmouseover = ()=>{
    document.getElementById("meetease").style.cursor = "pointer"
}
document.getElementById("beautyHeaven").onclick = ()=>{
    window.open("https://beauty-heaven.onrender.com/")
}
document.getElementById("beautyHeaven").onmouseover = ()=>{
    document.getElementById("beautyHeaven").style.cursor = "pointer"
}
document.getElementById("upwear").onclick = ()=>{
    window.open("https://extraordinary-pavlova-536bcb.netlify.app/")
}
document.getElementById("upwear").onmouseover = ()=>{
    document.getElementById("upwear").style.cursor = "pointer"
}
document.getElementById("groceryarc").onclick = ()=>{
    window.open("https://lucent-valkyrie-3c86fc.netlify.app/")
}
document.getElementById("groceryarc").onmouseover = ()=>{
    document.getElementById("groceryarc").style.cursor = "pointer"
}
// document.getElementById("anthropologie").onclick = ()=>{
//     window.open("https://spontaneous-dolphin-60e6a7.netlify.app")
// }
document.getElementById("kindmeal").onclick = ()=>{
    window.open("https://beamish-salamander-14c16f.netlify.app/")
}
document.getElementById("kindmeal").onmouseover = ()=>{
    document.getElementById("kindmeal").style.cursor = "pointer"
}

const navbarToggle = document.getElementById('navbar-toggle');
const navbarMenu = document.getElementById('navbar-menu');

navbarToggle.addEventListener('click', function() {
  navbarMenu.classList.toggle('show');
});
document.addEventListener('click', function(event) {
    if (!navbarToggle.contains(event.target) && !navbarMenu.contains(event.target)) {
      navbarMenu.classList.remove('show');
    }
  });