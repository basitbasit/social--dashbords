/*var sidebarOpen = false;
var sidebar = document.getElementById('slidebar')
function openSidebar(){
    if(!sidebarOpen){
        sidebar.classList.add("sidebar-responsive")
        sidebarOpen = true
    }
}
function closesidebar(){
    if(sidebarOpen){
        sidebar.classList.remove("sidebar-responsive")
        sidebarOpen = false
    }
}*/
const menuBar = document.querySelector('#menuBar')
const closeBtn = document.querySelector("#closeBtn")
const side = document.querySelector('header')

menuBar.addEventListener('click',()=>{
side.style.display="block"
})

closeBtn.addEventListener('click',()=>{
    side.style.display="none"
})


var icon = document.getElementById('icon')
icon.onclick = function(){
    document.body.classList.toggle(".dark-themes")
    console.log("sami");
}