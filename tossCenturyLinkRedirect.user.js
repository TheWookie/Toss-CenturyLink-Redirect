// ==UserScript==
// @name            Toss CenturyLink Redirect
// @author          Paul Baker le Salt Shaker
// @namespace       http://plus.google.com/104712665653645760753
// @description     CenturyLink users have to suffer through redirections whenever that user enters a correctly formed url that still 404's. This script re-redirects the user to Google (or any other searchengine of their choosing).
// @license         Creative Commons Attribution License
// @version	        0.1
// @include         http://webhelper.centurylink.com/*
// @include         *webhelper.centurylink.com/*
// @released        2012-4-1
// @updated         2012-4-1
// @compatible      Greasemonkey
// ==/UserScript==
 
/* 
 * Creative Commons Attribution License (--> or Public Domain)
 * http://creativecommons.org/licenses/by/2.5/
*/
 
(function(){
 
    //object constructor
    function example(){
 
        // modify the stylesheet
        this.append_stylesheet('body,div { border: 1px solid red; }');
 
    };
 
    //create a stylesheet
    example.prototype.append_stylesheet = function(css){
 
        var styletag = document.createElement("style");
        styletag.setAttribute('type', 'text/css');
        styletag.setAttribute('media', 'screen');
        styletag.appendChild(document.createTextNode(css));
 
        document.getElementsByTagName('head')[0].appendChild(styletag);
 
    };
 
    //instantiate and run 
    var example = new example();
 
 
})();
 
// you can completely copy this template, including
// the install description, have fun! :-)