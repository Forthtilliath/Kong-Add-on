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
    if (isFirefox) $.removeElements2([features.get('darkMode').div, $('#forth_fullscreen')]);
    if (isFirefox && !$('#forth_firefox').length) $('body').append($.createDiv('forth_firefox', '<span id="iDefaultBothHeight">' + iDefaultBothHeight + '</span>'));

    if ((features.get('darkMode') !== undefined) && features.get('darkMode').isActive()) {
        if (namePage != '') {
            if (darkMode) {
                //$.createDiv('div_darkmode',new Button('bt_darkmode', title_darkmode_on,$.createIcon(icon_darkmode_on)).html).appendTo("body");
                features.get('darkMode').addDiv(new Button('bt_darkmode', title_darkmode_on, $.createIcon(icon_darkmode_on)).html);
            } else {
                //$.createDiv('div_darkmode',new Button('bt_darkmode', title_darkmode_off,$.createIcon(icon_darkmode_off)).html).appendTo("body");
                features.get('darkMode').addDiv(new Button('bt_darkmode', title_darkmode_off, $.createIcon(icon_darkmode_off)).html);
            }
        }

        // Hide darkMode button when the height of the page is too low
        $(window).resize(function () {
            if ($(window).height() < (parseInt($("#maingame").css("height"), 10) + 60 /* height button doubled */ + 20 /* padding gamebox */ )) {
                features.get('darkMode').hide();
            } else {
                features.get('darkMode').show();
            }
        });

        $('#bt_darkmode').click(function () {
            // Update the icon
            if (darkMode) {
                $(this).setButton($.createIcon(icon_darkmode_off), title_darkmode_off);
            } else {
                $(this).setButton($.createIcon(icon_darkmode_on), title_darkmode_on);
            }

            darkMode = !darkMode; // Update the value
            $.setCookieAll('DarkMode', darkMode); // Update the cookie
            jCSSReset(); // Reset current styles
            loadCSS(); // Change the style
        });
    }
});
