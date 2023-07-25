document.getElementById("resume-link-2").onclick = ()=>{
    window.open("https://drive.google.com/file/d/1A5WpN0KvDctALvyCOO2gdNfTPN16SywW/view")
}
document.getElementById("resume-link-1").onclick = ()=>{
    window.open("https://drive.google.com/file/d/1A5WpN0KvDctALvyCOO2gdNfTPN16SywW/view")
}
document.getElementById("meetease").onclick = ()=>{
    window.open("https://easemeet.onrender.com/")
}
document.getElementById("meetease").onmouseover = ()=>{
    document.getElementById("meetease").style.cursor = "pointer"
}
document.getElementById("beautyHeaven").onclick = ()=>{
    window.open("https://649036113722945443c6387d--spiffy-unicorn-2d615b.netlify.app/index.html")
}
document.getElementById("beautyHeaven").onmouseover = ()=>{
    document.getElementById("beautyHeaven").style.cursor = "pointer"
}
document.getElementById("upwear").onclick = ()=>{
    window.open("https://magenta-lion-hem.cyclic.app/")
}
document.getElementById("upwear").onmouseover = ()=>{
    document.getElementById("upwear").style.cursor = "pointer"
}
document.getElementById("groceryarc").onclick = ()=>{
    window.open("https://singular-babka-0ed0b3.netlify.app/")
}
document.getElementById("groceryarc").onmouseover = ()=>{
    document.getElementById("groceryarc").style.cursor = "pointer"
}
// document.getElementById("anthropologie").onclick = ()=>{
//     window.open("https://spontaneous-dolphin-60e6a7.netlify.app")
// }


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