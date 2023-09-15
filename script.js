const navbar=document.getElementById("navbar");

window.addEventListener("scroll",function(){
    if(window.pageYOffset>=341){
         document.body.style.backgroundColor="yellow";
         navbar.classList.add("sticky");
        // navbar.style.position="sticky";
        // navbar.style.top="0px";

    }

    else{
        document.body.style.backgroundColor="white";
        navbar.classList.remove("sticky");
    }
})