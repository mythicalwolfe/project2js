function HomeIndex(){
/* properties */
const heightfromtop= 300;
/* methods */
    this.initialisescrolltotopbutton= function(){  
    
    /* window scroll event handler */
$(window).scroll(function (){
    /* show or hide scroll to top button based on scroll distance */
    var verticalheight= $(this).scrolltotop();
    if (verticalheight > heightfromtop){
        $("#scrolltotop").fadein();
    } else {
        $("#scrolltotop").fadeout ();
    }
});
/* scroll to top click event handler */
$("#scrolltotop").click(function (){
    $("html, body").animate({scrolltop: 0}, "slow");
});
}
}
$(document).ready(function (){
    /*initiate new home class */
    app.HomeIndex= new HomeIndex();
    
    /* initialise scroll to top button */
app.HomeIndex.intialisescrolltotopbutton();
});