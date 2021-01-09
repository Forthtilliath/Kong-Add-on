/*!
 * Kong Addon for www.kongregate.com v1.5
 * https://github.com/Forthtilliath/Kong-Addon
 *
 * Copyright 2020 Forth
 * Released under the MIT license
 * 
 * @fileoverview List of functions used
 * @author Forth
 * @version 2
 */
"use strict";

(function ($) {
    // Usable with $.function
    $.extend({
        /** Display a message to the player at the top of the screen
         *  @param {number} set a timer to show the message
         *  @param {string} set the title of the message
         *  @param {string|null|undefined} set the contenair of the message
         */
        displayMessage: function (timer, title, message) {
            if (typeof (message) == 'undefined') message = '';
            // If not existing, we add the box
            if (!$('#forth_messagebox').length) $('<div id="forth_messagebox"><div id="forth_messagetitle"></div></div>').appendTo("body");
            $("#forth_messagetitle").text(title);
            $("#forth_messagedesc").text(message);
            $("#forth_messagebox").fadeIn("slow").delay(timer).fadeOut("slow");
        },
        /** Generate a code to display an icon
         *  @param {string} set the classes to the icon
         *  @return {string} Element i
         */
        addIcon: function (classes) {
            return `<i class="${classes}"></i>`;
        },
        /** Generate a code to display a button
         *  @param container {string} set the element container (div, span...)
         *  @param idcontainer {string} set the id of the container
         *  @param idbutton {string} set the id of the button
         *  @param title {string} set the title when hover
         *  @param value {string} set the value of the button (can be an icon or just text if you want)
         *  @return {object} Element with button and his value
         */
        addButton: function (container, idcontainer, idbutton, title, value) {
            return $(`<${container} id="${idcontainer}"><button id="${idbutton}" title="${title}">${value}</button></${container}>`);
        },
        /** Generate a code to display a select
         *  @param container {string} set the element container (div, span...)
         *  @param idcontainer {string} set the id of the container
         *  @param idSelect {string} set the id of the select
         *  @param title {string|null} set the title when hover
         *  @param label {string} set the label of the select
         *  @param options {string} set the options of the select
         *  @param title {string|null|undefined} set the title of the label when hover
         *  @param title {string|null|undefined} set the title of the select when hover
         *  @return {object} Element with select, his label and his values
         */
        addSelect: function (container, idcontainer, idSelect, title, label, options, titleLabel, titleSelect) {
            let a = '',
                b = '';
            if (typeof (titleLabel) != 'undefined') a = ` title="${titleLabel}"`;
            if (typeof (titleSelect) != 'undefined') b = ` title="${titleSelect}"`;
            return $(`<${container} id="${idcontainer}" title="${title}"><span${a}>${label}</span><select id="${idSelect}"${b}>${options}</select></${container}>`);
        },
        /** Generate a cookie
         *  @param name {string} set the id of the cookie
         *  @param value {string} set the value
         *  @param time {number} set the time in days
         *  @param path {string} set the path
         */
        addCookie: function (name, value, time, path) {
            $.removeCookie(name, {
                path: path
            });
            $.cookie(name, value, {
                expires: time,
                path: path
            });
        },
        /** Return the value of a cookie, if this one doesn't exist, this return default value
         *  @param name {string} set the name of the cookie
         *  @param defaultValue {string|number|boolean} set the value returned if the cookie doesn't exist
         *  @return {string} Value of the cookie or defaultValue
         */
        getCookie: function (name, defaultValue) {
            if (typeof defaultValue == "boolean")
                return !!$.cookie(name) ? ($.cookie(name) === 'true') : defaultValue;
            return !!$.cookie(name) ? $.cookie(name) : defaultValue;
        },
        execScript: function (code) {
            let script = document.createElement('script');
            script.textContent = `${ code };`;
            (document.head || document.documentElement).appendChild(script);
            script.remove();
        },
        /** Change the text size in the chat box
         *  @param val {number} set the text size for chat, timestamp and input
         */
        changeTextSize: function (val) {
            // Add a cssrule to dynamise the text size
            jCSSRule(".chat_message_window_username", "font-size", val + "px"); // Username
            jCSSRule(".chat_message_window_undecorated_username", "font-size", val + "px"); // Kong bot
            jCSSRule(".chat_message_window p .message", "font-size", val + "px"); // Message
            jCSSRule(".chat_input", "font-size", val + "px"); // Chat input
            jCSSRule(".chat_message_window p .timestamp", "font-size", (val - 2) + "px !important"); // Timestamp
        },
        /** Remove elements from html */
        removeElements: function (a) {
            a.forEach(function (b) {
                if ($(b).length > 0) $(b).remove();
            });
        },
        /** Resize the game box
         *  @param {number} set the width of the box
         */
        setWidthGame: function (w) {
            $("#gameholder").css("width", w);
            $("#game").css("width", w);
        },
        /** Resize the game box
         *  @param {number} set the width of the box
         */
        setWidthBoth: function (w) {
            $("#maingame").css("width", w);
            $("#maingamecontent").css("width", w);
            $("#flashframecontent").css("width", w);
        },
        /** Resize the game box
         *  @param {number} set the height of the box
         */
        setHeightBoth: function (h) {
            $("#maingame").css("height", h);
            $("#maingamecontent").css("height", h);
            $("#flashframecontent").css("height", h);
        },
        /** Resize the chat box
         *  @param {number} add the width of the box
         */
        /*setWidthChat: function (w) {
            if (typeof (w) == 'undefined') w = iDefaultChatWidth - $("#chat_container").css("width");
            let chat_container_w = $("#chat_container").css("width");
            let tabpane_w = $("#kong_game_ui .tabpane").css("width");
            let chat_tab_pane_w = $("#chat_tab_pane").css("width");
            let chat_input_w = $(".chat_input").css("width");
            let chat_char_countdown_w = $(".chat_char_countdown").css("width");
            $("#chat_container").css("width", `calc( ${chat_container_w} + ${w}px )`);
            $("#kong_game_ui .tabpane").css("width", `calc( ${tabpane_w} + ${w}px )`);
            $("#chat_tab_pane").css("width", `calc( ${chat_tab_pane_w} + ${w}px )`);
            $(".chat_input").css("width", `calc( ${chat_input_w} + ${w}px )`);
            $(".chat_char_countdown").css("width", `calc( ${chat_char_countdown_w} + ${w}px )`);
        },*/
        setWidthChat: function (w) {
            if (typeof (w) == 'undefined') w = 0;            
            $("#chat_container").css("width", `calc( ${iDefaultChatWidth} + ${w}px - 3px )`);
            $("#kong_game_ui .tabpane").css("width", `calc( ${iDefaultChatWidth} + ${w}px - 3px )`);
            $("#chat_tab_pane").css("width", `calc( ${iDefaultChatWidth} + ${w}px - 3px - 16px )`);
            $(".chat_input").css("width", `calc( ${iDefaultChatWidth} + ${w}px - 3px - 16px - 8px )`);
            $(".chat_char_countdown").css("width", `calc( ${iDefaultChatWidth} + ${w}px - 3px - 16px - 8px )`);
        },
        /** Transform an array ['a','b','c'] to [['a',0],['b',0],['c',0]] usable in script function
         *  @param a {array} set the array to become a double array 
         *  @param d {number} set the default value
         */
        getArrayDoubleToString: function (a, d) {
            let s = "";
            if (typeof (d) == 'undefined') d = 0;
            a.forEach(function (v, i) {
                s += i > 0 ? "," : "";
                s += `['${v}', ${d}]`;
            });

            return `[${s}]`;
        },
        /** Display a message in the console
         *  @param nLevel {number} set the level required to display the message
         *  @param text {string} set the text to display
         */
        log: function (nLevel, text) {
            if (debugLevel >= nLevel) console.log(text);
        },
        getNbFeatures: function (a) {
            let i = 0;

            // For each feature
            for (var c in a) {
                $.log(20, a[c]['divname'] + " at position " + a[c]['position']);
                if ((a[c]['display'] == true) && (a[c]['position'] >= 0)) {
                    i++;
                }
            };
            $.log(200, `Features number = ${i}`);
            return i;
        },
        /** Get the feature's div where a feature is 
         * @param {string} set the name of the feature
         *
         */
        getFeatureDiv: function (sName) {
            let pos = aFeatures[sName]['position'];
            return $(`#forth_feature_${pos}`);
        },
        /** Change the color of button and the cursor in function of the active mode
         *  @param {number} set the id of the mode
         */
        setDisplayMode: function (i) {
            if (typeof (i) != 'undefined') displayModeValue = i;
            if (displayModeValue == -1) {
                jCSSRule("#bt_gameOnly", "color", darkMode ? color_white : color_black);
                jCSSRule("#bt_gameOnly", "cursor", "default");
                jCSSRule("#bt_gameNchat", "color", bgColor_grey_13);
                jCSSRule("#bt_gameNchat", "cursor", "pointer");
                jCSSRule("#bt_chatOnly", "color", bgColor_grey_13);
                jCSSRule("#bt_chatOnly", "cursor", "pointer");
            } else if (displayModeValue == 0) {
                jCSSRule("#bt_gameOnly", "color", bgColor_grey_13);
                jCSSRule("#bt_gameOnly", "cursor", "pointer");
                jCSSRule("#bt_gameNchat", "color", darkMode ? color_white : color_black);
                jCSSRule("#bt_gameNchat", "cursor", "default");
                jCSSRule("#bt_chatOnly", "color", bgColor_grey_13);
                jCSSRule("#bt_chatOnly", "cursor", "pointer");
            } else if (displayModeValue == 1) {
                jCSSRule("#bt_gameOnly", "color", bgColor_grey_13);
                jCSSRule("#bt_gameOnly", "cursor", "pointer");
                jCSSRule("#bt_gameNchat", "color", bgColor_grey_13);
                jCSSRule("#bt_gameNchat", "cursor", "pointer");
                jCSSRule("#bt_chatOnly", "color", darkMode ? color_white : color_black);
                jCSSRule("#bt_chatOnly", "cursor", "default");
            }
        }
    });

    // Usable with $(selector).function
    $.fn.extend({
        /** Set a button with new value and new title
         *  @param {string} set the value
         *  @param {string} set the title
         */
        setButton: function (value, title) {
            this.html(value);
            this.prop('title', title);
        },
        /** Center an element in the middle of the screen  */
        centrerElementAbsolu: function () {
            this.css('top', ($(window).height() - this.height()) / 2 + $(window).scrollTop());
            this.css('left', ($(window).width() - this.width()) / 2 + $(window).scrollLeft());
        },
        /** Scroll down an element */
        scrollBottom: function () {
            if (this.length) {
                try {
                    this.animate({
                        scrollTop: this.prop("scrollHeight")
                    }, 'slow');
                } catch (e) {
                    console.log(e);
                }
            } else {
                $.log(1, `Selector [${this}] not found`);
            }
        },
        /** The function will return a title for the Location object. With $(location), the function will return
         *  le title of the current page
         *  return {string} title of the page
         */
        getIdCurrentPage: function () {
            let m = regURL.exec(this.attr('href'));

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
                    if (aUrl[0] == 'search') return 'search';
                    if (aUrl[0] == 'forum_search') return 'forum_search';
                    if (aUrl[0] == 'stickers') return ''; // Not done yet https://www.kongregate.com/stickers/#sticker-pack-27
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
                    if (aUrl[0] == 'games') return 'allgames'; // dev pages
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
        },
        /* Not working well */
        removeAll: function () {
            console.log($(this));
            while ($(this).length >= 1) {
                $(this).remove();
            }
        }
    });
    
    jQuery.fn.cssNumber = function(prop){
        var v = parseInt(this.css(prop),10);
        return isNaN(v) ? 0 : v;
    };

})(jQuery);
