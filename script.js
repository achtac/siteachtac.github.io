

window.addEventListener("scroll",(e) =>{
  if (window.scrollY == 0) {
         fleche.style.display = "none";
  }else if(window.scrollY > 810){
          fleche.style.display = "block";
  }
},false);


home.addEventListener('click',affich);

function affich(e){
  e.preventDefault();
  const sr = ScrollReveal({
    reset:true
  });


  sr.reveal("#homebar",{

    duration:500,
    Delay:2,
    distance:"40px",
    origin:"top"

  });

   homebar.style.display ="block";

      home.addEventListener("click",cacher)
      function cacher(e){
          e.preventDefault();


          const sr = ScrollReveal({
            reset:true
          });


          sr.reveal("#homebar",{

            duration:500,
            Delay:2,
            distance:"40px",
            origin:"top"

          });

           homebar.style.display ="none";



      }

}


function close(e){
  e.preventDefault();

   homebar.style.display ="none";

}
