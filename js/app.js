var menuBar =  document.querySelector("#bars");
var closeBtn =  document.querySelector("#closeBtn");

window.addEventListener(
    "scroll",
    function(e){
        console.clear(); // clear krne ke liye
        // console.log(window.scrollY);  // Y-axis pr kitna scroll kr liya btane ke liye

        if(window.scrollY >= 56){
          document.body.classList.add("sticky-nav");
        } else{
            document.body.classList.remove("sticky-nav");
        }
    }
)
menuBar.addEventListener(
    "click",
    function(){
        document.body.classList.add("open-menu")
        menuBar.style.display = "none";
        // document.body.classList.remove("")
    }
)
closeBtn.addEventListener(
    "click",
    function(){
        document.body.classList.remove("open-menu");
        menuBar.style.display = "";
    }
)








