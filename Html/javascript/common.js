function common () {  
    let self= this;
    /* properties */
    this.promobar= {
        promoitems: null,
        currentitem: 0,
        numberofitems: 0,
    };
    /* methods */
    this.intialisepromo= function (){
        /* get all items in promo bar */
        letpromoitems= $("#promo > div");
        /* values */
        this.promobar.promoitems= promoitems;
        this.promobar.numberofitems= promoitems.length;
        /* initiate promo item loop */
        this.startdelay();
    }
    this.startdelay= function(){
        /* 4 second delay before next item */
        settimeout(function (){
self.shownextpromoitem()
        }, 4000);
        this.shownextpromoitem= function () {
            /* fade out to the next item */
            $(self.promobar.promoitems).fadeout("slow").promise().done(function() {
                /*promo counter */
                if (self.promobar.currentitem >=(self.promobar.numberofitems- 1)){
                    /* reset counter */
                    self.currentitem=0;
                } else{
                    /* increase counter */
                    self.promobar.currentitem++;

                }
                /* fade next item */
                $(self.promobar.promoitems).eq(self.promobar.currentitems).fadein("slow", function (){
                    /* delay timer */
                    self.startdelay();
                });
            });
        }
    }
}
$(document).ready(function () {
    /* initialise new common class */
    app.common= new common ();
    /* initilaiser promobar */
    app.common.initialisepromo();
});