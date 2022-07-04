

window.addEventListener("scroll",(e) =>{
  if (window.scrollY == 0) {
         fleche.style.display = "none";
  }else if(window.scrollY > 810){
          fleche.style.display = "block";
  }
},false);
















home.addEventListener('click',function affich(){



homebar.style.display ="block";
   home.className = "fas fa-times";


 home.removeEventListener('click',affich);



 home.addEventListener('click',function cache(){


  home.className = "fas fa-align-justify";
  homebar.style.display = "none";
 home.addEventListener('click',affich);


});







});
