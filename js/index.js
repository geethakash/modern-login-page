var val = 0;

document.getElementById("drkmodebtn").addEventListener('click', function () {
    if (val == 0) {
        val = 1;
        document.getElementById('body').classList.add("light-theme");
        document.getElementById('body').classList.remove("dark-theme");
        document.getElementById('darksvg').style.display = "";
        document.getElementById('lightsvg').style.display = "none";




    }
    else {
        val = 0;
        document.getElementById('body').classList.add("dark-theme");
        document.getElementById('body').classList.remove("light-theme");
        document.getElementById('lightsvg').style.display = "";
        document.getElementById('darksvg').style.display = "none";
     
    } 
}
)