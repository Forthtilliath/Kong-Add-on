/*!
 * Kong Addon for www.kongregate.com v1.5
 * https://github.com/Forthtilliath/Kong-Addon
 *
 * Copyright 2020 Forth
 * Released under the MIT license
 * 
 * @fileoverview List of functions used on every pages
 * @author Forth
 * @version 2
 */
"use strict";

$(function () {
    // Clean pages (remove ads blocks)
    if ($(".adcontainer").length > 0) $(".adcontainer").remove();
    if (isFirefox) $.removeElements(['div#div_darkmode', 'style#styles_css']);

    if (aFeatures['darkMode']['display']) {
        if (namePage != '') {
            if (darkMode) {
                $.addButton('div', 'div_darkmode', 'bt_darkmode', title_darkmode_on, $.addIcon(icon_darkmode_on)).appendTo("body");
            } else {
                $.addButton('div', 'div_darkmode', 'bt_darkmode', title_darkmode_off, $.addIcon(icon_darkmode_off)).appendTo("body");
            }
        }

        // Hide darkMode button when the height of the page is too low
        $(window).resize(function () {
            if ($(window).height() < (parseInt($("#maingame").css("height"), 10) + 60 /* height button */ + 20 /* padding gamebox */ )) {
                $("#div_darkmode").hide();
            } else {
                $("#div_darkmode").show();
            }
        });

        $('#bt_darkmode').click(function () {
            // Update the icon
            if (darkMode) {
                $(this).setButton($.addIcon(icon_darkmode_off), title_darkmode_off);
            } else {
                $(this).setButton($.addIcon(icon_darkmode_on), title_darkmode_on);
            }
            
            darkMode = !darkMode; // Update the value
            $.setCookieAll('DarkMode', darkMode); // Update the cookie
            jCSSReset(); // Reset current styles
            loadCSS(); // Change the style
        });
    }
});
