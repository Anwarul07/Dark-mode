console.log("feel the dark theme");

let icon=document.getElementById("icon");
icon.addEventListener(  "click", ()=>{
    document.body.classList.toggle("dark-theme")
    if (document.body.classList.contains("dark-theme")) {
        icon.src="files/sun.png";
        
    } else{
        icon.src="files/moon.png";
    }
})