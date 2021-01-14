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

    if (namePage != '') {
        if (darkMode) {
            $.addButton('div', 'div_darkmode', 'bt_darkmode', title_darkmode_on, $.addIcon(icon_darkmode_on)).appendTo("body");
        } else {
            $.addButton('div', 'div_darkmode', 'bt_darkmode', title_darkmode_off, $.addIcon(icon_darkmode_off)).appendTo("body");
        }
    }

    $(window).resize(function () {
        if ($(window).height() < (parseInt($("#maingame").css("height"), 10) + 30 /* height button */ + 20 /* padding gamebox */ )) {
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
        // Update the value
        darkMode = !darkMode;
        // Update the cookie
        $.setCookieAll('DarkMode', darkMode);
        loadCSS();
    });

    //The magic code to add show/hide custom event triggers
    /*(function ($) {
        $.each(['show', 'hide', 'fadeOut', 'fadeIn'], function (i, ev) {
            var el = $.fn[ev];
            $.fn[ev] = function () {
                var result = el.apply(this, arguments);
                result.promise().done(function () {
                    this.triggerHandler(ev, [result]);
                })
                return result;
            };
        });
    })(jQuery);*/
});
