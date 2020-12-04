/*!
 * Kong Addon for www.kongregate.com v1.5
 * https://github.com/Forthtilliath/kongregate_update
 *
 * Copyright 2020 Forth
 * Released under the MIT license
 * 
 * @fileoverview List of functions used
 * @author Forth
 * @version 2
 */

// Remove some ads contenairs
function cleanPages() {
    if (namePage == 'allgames') $(".adcontainer").remove();
    if (namePage == 'accounts') $(".adcontainer").remove();
    if (namePage == 'badges') $(".adcontainer").remove();
}

// Return the id of the current page
function getIdCurrentPage() {
    let url = $(location).attr('href');

    let m = regURL.exec(url);

    if (m[2] != null) {

        let aUrl = m[2].substr(1).split("/");
        $.log(1, aUrl);

        let nSplitUrl = aUrl.length;

        if (nSplitUrl == 1) {
            if (aUrl[0] == 'my_favorites') return 'allgames';
            if (aUrl[0] == 'recommended-badges') return 'badges';
            if (aUrl[0] == 'badges') return 'badges';
            if (aUrl[0] == 'minus') return 'minus';
            if (aUrl[0] == 'forums') return 'forums';
            if (aUrl[0] == 'community') return 'accounts';
            if (aUrl[0] == 'cookie-policy') return 'privacy';
            if (aUrl[0] == 'privacy') return 'privacy';
            if (aUrl[0] == 'user-agreement') return 'privacy';
            if (aUrl[0] == 'kreds') return 'kreds';
            if (aUrl[0] == 'posts') return 'posts';
            if (aUrl[0] == 'games_for_your_site') return 'gamesexport';
            return 'allgames';
        }

        if (nSplitUrl == 2) {
            if ((aUrl[0] == 'badge_quests') && (aUrl[1] == 'your_first')) return 'badges';
            if ((aUrl[0] == 'accounts') && (aUrl[1] == 'new')) return 'newaccount';
            if (aUrl[0] == 'pages') {
                if (aUrl[1] == 'bartender-ballerina') return ''; // Full bugged page
                if (aUrl[1] == 'luck-of-the-draw-sweeps') return 'spellstone';
                if (aUrl[1] == 'luck-of-the-draw-sweeps-rules') return 'spellstone';
                if (aUrl[1] == 'about') return 'about';
                if (aUrl[1] == 'kongregate-ad-specs') return 'adspecs';
                if (aUrl[1].substr(0, 7) == 'conduct') return 'conduct';
                if (aUrl[1] == 'logos-and-branding') return 'logos';
                if (aUrl[1] == 'jobs') return 'jobs';
            }
            if (aUrl[0] == 'forums') return 'forums';
            if (aUrl[0] == 'feedbacks') return 'feedbacks';
        }

        if (nSplitUrl == 3) {
            if ((aUrl[0] == 'accounts') && (aUrl[2] == 'awards')) return 'awards';
            if ((aUrl[0] == 'pages') && (aUrl[2].substr(0, 7) == 'conduct')) return 'conduct';
        }

        if (nSplitUrl == 4) {
            if ((aUrl[0] == 'forums') && (aUrl[2] == 'topics')) return 'topics';
            if ((aUrl[0] == 'games') && (aUrl[3] == 'comments')) return 'comments';
        }

        if (aUrl[0] == 'games') return 'games';
        if (aUrl[0] == 'accounts') return 'accounts';
    }
    return 'accueil';
}

function addButtonDarkMode() {
    if (darkMode) {
        $.addButton('div', 'div_darkmode2', 'bt_darkmode2', title_darkmode_on, $.addIcon(icon_darkmode_on)).appendTo("body");
    } else {
        $.addButton('div', 'div_darkmode2', 'bt_darkmode2', title_darkmode_off, $.addIcon(icon_darkmode_off)).appendTo("body");
    }
}

$(function () {
    // Clean pages (remove ads blocks)
    cleanPages();

    addButtonDarkMode();

    $(window).resize(function () {
        if ($(window).height() < 730) {
            $("#div_darkmode2").hide();
        } else {
            $("#div_darkmode2").show();
        }
    });

    $('#bt_darkmode2').click(function () {
        $.log(10, "bt_darkmode clicked");
        // Update the icon
        if (darkMode) {
            $(this).setButton($.addIcon(icon_darkmode_off), title_darkmode_off);
            if (namePage == "games") {
                $('#bt_darkmode').setButton($.addIcon(icon_darkmode_off), title_darkmode_off);
            }
        } else {
            $(this).setButton($.addIcon(icon_darkmode_on), title_darkmode_on);
            if (namePage == "games") {
                $('#bt_darkmode').setButton($.addIcon(icon_darkmode_on), title_darkmode_on);
            }
        }
        // Update the value
        darkMode = !darkMode;
        // Update the cookie
        $.addCookie('forth_darkmode', darkMode, 30, '/');

        //$('#styles_css').remove();
        loadCSS();
    });
});
