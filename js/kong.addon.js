/*!
 * Kong Addon for www.kongregate.com v1.5
 * https://github.com/Forthtilliath/kongregate_update
 *
 * Copyright 2020 Forth
 * Released under the MIT license
 * 
 * @fileoverview List of functions used
 * @author Forth
 * @version 1
 */

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
        execScript: function(code) {
            var script = document.createElement('script');
            script.textContent = `${ code };`;
            (document.head || document.documentElement).appendChild(script);
            script.remove();
        },
        /** Change the text size in the chat box
         *  @param val {number} set the text size for chat, timestamp and input
         */
        changeTextSize: function(val) {
            // Add a cssrule to dynamise the text size
            jCSSRule(".chat_message_window_username", "font-size", val + "px"); // Username
            jCSSRule(".chat_message_window_undecorated_username", "font-size", val + "px"); // Kong bot
            jCSSRule(".chat_message_window p .message", "font-size", val + "px"); // Message
            jCSSRule(".chat_input", "font-size", val + "px"); // Chat input
            jCSSRule(".chat_message_window p .timestamp", "font-size", (val - 2) + "px !important"); // Timestamp
        },
        /** Remove elements from html */
        removeElements: function(a) {
            a.forEach(function (b) {
                if ($(b).length) $(b).remove();
            });
        },
        /** Resize the game box
         *  @param {number} set the width of the box
         */
        setWidthGame: function(w) {
            $("#maingame").css("width", w);
            $("#maingamecontent").css("width", w);
            $("#flashframecontent").css("width", w);
        }
        
    });

    // Usable with $(selector).function
    $.fn.extend({
        /** Setting a button with new value and new title
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
                console.log(`Selector [${this}] not found`);
            }
        }
    });

})(jQuery);
