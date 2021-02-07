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
    // Load sprites
    $.loadSpritesSvg();

    // Clean pages (remove ads blocks)
    if ($(".adcontainer").length > 0) $(".adcontainer").remove();
    if (PAGE_NAME == 'allgames') $("article.callout_listing").remove();
    if (IS_FIREFOX) $.removeElements2([features.get('darkMode').div, $('#forth_fullscreen')]);
    if (IS_FIREFOX && !$('#forth_firefox').length) $('body').append($.createDiv('forth_firefox', '<span id="iDefaultBothHeight">' + HEIGHT_BOTH_DEFAULT + '</span>'));

    if ((features.get('darkMode') !== undefined) && features.get('darkMode').isActive()) {
        let aTitle = ['Activate dark mode', 'Disable dark mode'];
        let aSvg = [$.createElementSVG('#__darkmode_off'), $.createElementSVG('#__darkmode_on')];
        if (PAGE_NAME != '') {
            /*if (darkMode) {
                features.get('darkMode').addDiv(new Button('bt_darkmode', 'Disable dark mode', $.createIcon(ICON_DARKMODE_ON)).html);
            } else {
                features.get('darkMode').addDiv(new Button('bt_darkmode', 'Activate dark mode', $.createIcon(ICON_DARKMODE_OFF)).html);
            }*/

            let button = new Button2('bt_darkmode', aTitle[darkMode ? 1 : 0], aSvg[darkMode ? 1 : 0]);
            features.get('darkMode').addDiv(button.getHtml());
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
            /*if (darkMode) {
                $(this).setButton($.createIcon(ICON_DARKMODE_OFF), 'Activate dark mode');
            } else {
                $(this).setButton($.createIcon(ICON_DARKMODE_ON), 'Disable dark mode');
            }*/
            darkMode = !darkMode; // Update the value
            $(this).setButton(aSvg[darkMode ? 1 : 0], aTitle[darkMode ? 1 : 0]);

            $.setCookieAll('DarkMode', darkMode); // Update the cookie
            jCSSReset(); // Reset current styles
            loadCSS(); // Change the style
        });
    }
});
