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

function consoleDebug(nLevel, text) {
    if (debugLevel >= nLevel) console.log(text);
}

// Scroll down an element
/*function scrollBottom(selector) {
    if ($(selector).length) {
        try {
            $(selector).animate({
                scrollTop: document.querySelector(selector).scrollHeight
            }, 500);
        } catch (e) {
            console.log(e);
        }
    } else {
        console.log(`Selector [${selector}] not found`);
    }
}*/


// Transform an url to html url
function urlWikiToHtml(url) {
    var urlOut = `<a href="${url[0]}" target="_blank">[Wiki`;
    // If not main page
    if ((url[2] != "Idle_Grindia_Wiki") && (url[2] != "Idle_Grindia")) {
        // If there are an anchor with his id
        if (url[3] && (url[3].length > 1)) {
            urlOut += ` - ${url[3].substr(1).replaceAll("_", " ")}`;
        } else {
            urlOut += ` - ${url[2].replaceAll("_", " ")}`;
        }
    }
    urlOut += ']</a>';

    return urlOut;
}

function urlGameToHtml(name) {
    var titleGame = "";
    var aTitleGame = name.split("-");
    // We uppercase the first letter of each word of the game name
    for (var i = 0; i < aTitleGame.length; i++) {
        titleGame += aTitleGame[i].substring(0, 1).toUpperCase() + aTitleGame[i].substring(1).toLowerCase() + " ";
    }

    return `>[Game - ${titleGame}]<`;
}

function urlAccountToHtml(name) {
    return `>[Account - ${name}]<`;
}

// Remove some ads contenairs
function cleanPages() {
    if (namePage == 'allgames') $(".adcontainer").remove();
    if (namePage == 'accounts') $(".adcontainer").remove();
    if (namePage == 'badges') $(".adcontainer").remove();
}

// Return the id of the current page
function getIdCurrentPage() {
    var url = $(location).attr('href');

    var m = regURL.exec(url);

    if (m[2] != null) {

        var aUrl = m[2].substr(1).split("/");
        consoleDebug(1, aUrl);

        var nSplitUrl = aUrl.length;

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

// Transform an array to [ 'val1', 'val2', 'val3' ]
function arrayToScript(a) {
    var s = "[";
    a.forEach(function (v, i) {
        s += i > 0 ? "," : "";
        s += `'${v}'`;
    });
    s += "]";
    return s;
}

// Transform aBots array to [['website_1',0],['website_2',0],['website_3',0]] usable in script function
function aBotsToScript() {
    var s = "";

    aBots.forEach(function (v, i) {
        s += i > 0 ? "," : "";
        s += `['${v}',0]`;
    });

    return `[${s}]`;
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
        consoleDebug(10, "bt_darkmode clicked");
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
        loadCSS();
    });
});
