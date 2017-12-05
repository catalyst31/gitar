/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Masuk */
    $(document).on("click", ".uib_w_3", function(evt)
    {
         /*global activate_page */
         activate_page("#awal"); 
         return false;
    });
    
        /* button  .uib_w_1 */
    
    
        /* button  .uib_w_1 */
    $(document).on("click", ".uib_w_1", function(evt)
    {
         /*global activate_page */
         activate_page("#major"); 
         return false;
    });
    
        /* listitem  Kunci Mayor */
    
    
        /* listitem  Kunci Minor */
    $(document).on("click", ".uib_w_65", function(evt)
    {
         /*global activate_page */
         activate_page("#minor"); 
         return false;
    });
    
        /* button  Masuk */
    $(document).on("click", ".uib_w_67", function(evt)
    {
         /*global activate_page */
         activate_page("#awal"); 
         return false;
    });
    
        /* listitem  Kunci Mayor */
    
    
        /* listitem  Kunci Mayor */
    $(document).on("click", ".uib_w_64", function(evt)
    {
         /*global activate_page */
         activate_page("#major"); 
         return false;
    });
    
        /* button  Video */
    $(document).on("click", ".uib_w_70", function(evt)
    {
         /*global activate_page */
         activate_page("#video_a_major"); 
         return false;
    });
    
        /* button  #kembali_major */
    $(document).on("click", "#kembali_major", function(evt)
    {
         /*global activate_page */
         activate_page("#awal"); 
         return false;
    });
    
        /* button  #kembali_minor */
    $(document).on("click", "#kembali_minor", function(evt)
    {
         /*global activate_page */
         activate_page("#awal"); 
         return false;
    });
    
        /* button  #kembali_balok */
    $(document).on("click", "#kembali_balok", function(evt)
    {
         /*global activate_page */
         activate_page("#awal"); 
         return false;
    });
    
        /* button  Kembali */
    $(document).on("click", ".uib_w_110", function(evt)
    {
         /*global activate_page */
         activate_page("#major"); 
         return false;
    });
    
        /* listitem  Kunci Kres */
    
    
        /* listitem  Kunci Kres */
    $(document).on("click", ".uib_w_84", function(evt)
    {
         /*global activate_page */
         activate_page("#kres"); 
         return false;
    });
    
        /* button  #Kembali_Kres */
    $(document).on("click", "#Kembali_Kres", function(evt)
    {
         /*global activate_page */
         activate_page("#awal"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
