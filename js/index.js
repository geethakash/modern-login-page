var val = 0;

document.getElementById("drkmodebtn").addEventListener('click', function () {
    if (val == 0) {
        val = 1;
        document.getElementById('body').classList.add("light-theme");
        document.getElementById('body').classList.remove("dark-theme");


    }
    else {
        val = 0;
        document.getElementById('body').classList.add("dark-theme");
        document.getElementById('body').classList.remove("light-theme");

    
    } 
    console.log("clicked");
}
)
