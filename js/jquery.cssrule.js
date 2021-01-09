/*	Copyright (c) 2017 Jean-Marc VIGLINO, 
	released under MIT license
	(http://www.cecill.info/licences/Licence_CeCILL-B_V1-en.txt).
*/
/** @fileoverview A simple jQuery plugin to manipulate CSS styleSheet
 *	@see {@link https://www.w3.org/wiki/Dynamic_style_-_manipulating_CSS_with_JavaScript }
 *  @author  Jean-Marc VIGLINO
 *  @version 1.0
 *  @requires jQuery
 *	@external "jQuery.fn"
 *	@see {@link http://learn.jquery.com/plugins/|jQuery Plugins}
 */
(function ($) {

    /** Manipulate CSS styleSheet. 
     *  The function will add a new property for the selector in a style sheet.
     *  The style sheet will be inserted where the js is placed and will override other css style sheets placed before.
     *
     *  @example 
     *  $("body").cssRule("background","red");	// Change background color of the body
     *  $("body").cssRule("background");			// return "red"
     *  $("body").cssRule({background":"red", "color":"blue"});
     *  $("body").cssRule("background",null);	// Remove previous value
     *  $("*").cssRule(null);					// Remove all values
     *
     *  @function external:"jQuery.fn".styleSheet
     *  @param {string|object} property a property or a key, value array of properties you want to set
     *  @param {string|null|undefined} value the value you want to set, if undefined will return the current value, if null remove the property
     *  @return {jQuery object|string} the object or the property value id value is undefined
     */
    $.fn.cssRule = function (property, value) {
        var v = jCSSRule(this.selector, property, value);
        return (value === undefined) ? v : this;
    };

})(jQuery);
