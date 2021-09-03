$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
           $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    //toggle menu bar 

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation effct 
     
     var typed = new Typed(".typing",{
         strings: ["Web Developer","Designer","FreeLancer","Blogger"],
         typeSpeed: 100,
         backSpeed: 60,
         loop: true
     });

     var typed = new Typed(".typing-2",{
        strings: ["Web Developer","Designer","FreeLancer","Blogger"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

});