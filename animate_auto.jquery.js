/*!
 *
 * jQuery Animate Auto Values Plugin v.1.0
 * http://darcyclarke.me/development/fix-jquerys-animate-to-allow-auto-values/
 *
 * Copyright 2011, Darcy Clarke
 * Do what you want license
 * 
 */
jQuery.fn.animateAuto = function(prop, speed, callback){
    var elem, height, width;
    return this.each(function(i, el){
        el = jQuery(el), elem = el.clone().css({"height":"auto","width":"auto"}).appendTo("body");
        height = elem.css("height"),
        width = elem.css("width"),
        elem.remove();
        
        if(prop === "height")
            el.animate({"height":height}, speed, callback);
        else if(prop === "width")
            el.animate({"width":width}, speed, callback);  
        else if(prop === "both")
            el.animate({"width":width,"height":height}, speed, callback);
    });  
}