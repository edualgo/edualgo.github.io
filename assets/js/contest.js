
$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
          
            loop: true,
            margin:50,
            stagePadding: 10,
            autoWidth:true,
           dots : false,
     
            autoplay : true,
            autoplayTimeout : 2500,
            nav: false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        }
    );
  
    
  });
// accordion

  var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}