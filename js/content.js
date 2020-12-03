/*!
 * Kong Addon for www.kongregate.com v1.5
 * https://github.com/Forthtilliath/kongregate_update
 *
 * Copyright 2020 Forth
 * Released under the MIT license
 * 
 * @fileoverview List of functions which are only executed on game pages. Among this function, there are buttons which show/hide quick links, dark mode, lock screen, hide online players, change text size, change brightless and change volume of ding when someone post a message in the chat
 * @author Forth
 * @version 2
 */

/* When page is loaded */
$(function () {
    /* Initialisation start */

    /* Check if each button already exist and delete them to avoid any double
     * when the extension is updated while running (had this issue on FF) */
    $.removeElements(['#bt_showquicklinks', '#forth_lockscreen', '#forth_onlineplayers', '#forth_hideChat', '#forth_fontsize', '#forth_darkmode', '#forth_brightness', '#forth_volume']);

    /* We add the button to show the quick links */
    $("#quicklinks").prepend($.addButton('li', '', 'bt_showquicklinks', 'Show quick links', $.addIcon(icon_quicklinks_off)));

    /* We add the fullscreen mode in hide */
    $('<div id="forth_fullscreen"></div>').appendTo("body");

    /* We add the button to lock the screen */
    $.addButton('div', 'forth_lockscreen', 'bt_lockscreen', 'Lock screen', $.addIcon(icon_lockscreen_off)).insertBefore("#cloud_save_info_template");

    // Button Darkmode
    if (darkMode) {
        $.addButton('div', 'forth_darkmode', 'bt_darkmode', title_darkmode_on, $.addIcon(icon_darkmode_on)).insertAfter("#forth_lockscreen");
    } else {
        $.addButton('div', 'forth_darkmode', 'bt_darkmode', title_darkmode_off, $.addIcon(icon_darkmode_off)).insertAfter("#forth_lockscreen");
    }

    /* We remove the cinematic mode button */
    $("#cinematic_mode_quicklink").remove();

    /* We remove the facebook button to gain space */
    $("#quicklinks_facebook").remove();

    /* We add the button to show or hide online players */
    if ($.cookie('forth_showPlayers') == 'true') {
        /* Show */
        $.addButton('div', 'forth_onlineplayers', 'bt_onlineplayers', 'Hide online players', $.addIcon(icon_onlinep_on)).insertBefore("#forth_lockscreen");
    } else /* Hide */ {
        $.addButton('div', 'forth_onlineplayers', 'bt_onlineplayers', 'Show online players', $.addIcon(icon_onlinep_off)).insertBefore("#forth_lockscreen");
        jCSSRule(".chat_room_template > .users_in_room", "display", "none");
    }

    /* We add the button to hide chat */
    $.addButton('div', 'forth_hideChat', 'bt_hideChat', 'Hide chat', $.addIcon(icon_chat_on)).insertBefore("#forth_onlineplayers");

    /* We add the button to change the size of the text */
    var sOptionsSize = '';
    var sSelected = '';
    //var val = !!$.cookie('forth_fontsize') ? $.cookie('forth_fontsize') : "12";
    for (let i = min_fontsize; i <= max_fontsize; i += 2) {
        (i == fontsizeValue) ? sSelected = ' selected': sSelected = '';
        sOptionsSize += `<option value="${i}"${sSelected}>${i}px</option>`;
    }
    $.addSelect('div', 'forth_fontsize', 'slt_fontsize', 'Select the text size of your choice', $.addIcon(icon_font), sOptionsSize).insertBefore("#forth_hideChat");
    $.changeTextSize($.cookie('forth_fontsize'));

    /* We add the button to change the brightness of the game */
    var sOptionsBrightness = '';
    sSelected = '';
    //var val = !!$.cookie('forth_brightness') ? $.cookie('forth_brightness') : "100%";
    for (let i = min_brightness; i <= max_brightness; i += step_brightness) {
        ((i + "%") == brightnessValue) ? sSelected = ' selected': sSelected = '';
        sOptionsBrightness += `<option value="${i}%"${sSelected}>${i}%</option>`;
    }
    $.addSelect('div', 'forth_brightness', 'slt_brightness', 'Select the brightness of your choice', $.addIcon(icon_brightness), sOptionsBrightness).insertBefore("#forth_fontsize");
    /* Initialisation end */

    /* We add the button to change the volume of pings */
    var sOptionsVolume = '';
    sSelected = '';
    //var val = !!$.cookie('forth_volume') ? $.cookie('forth_volume') : "10";
    for (let i = min_volume; i <= max_volume; i += 10) {
        (i == volumeValue * 100) ? sSelected = ' selected': sSelected = '';
        sOptionsVolume += `<option value="${i/100}"${sSelected}>${i}%</option>`;
    }
    let iconVolume = (volumeValue == 0) ? icon_volume_off : (volumeValue < 0.5) ? icon_volume_down : icon_volume_up;
    $.addSelect('div', 'forth_volume', 'slt_volume', '', $.addIcon(iconVolume), sOptionsVolume, 'Click to mute', 'Select the volume of your choice').insertBefore("#forth_brightness");
    /* Initialisation end */

    /* Evenement change volume start */
    $('#slt_volume').change(function () {
        // We save our last volume
        volumeValueOld = volumeValue;
        volumeValue = $(this).val();

        // Update the button with new icon & title
        let iconVolume = (volumeValue == 0) ? icon_volume_off : (volumeValue < 0.5) ? icon_volume_down : icon_volume_up;
        let textVolume = (volumeValue == 0) ? 'Click to unmute' : 'Click to mute';
        $("#forth_volume > span").setButton($.addIcon(iconVolume), textVolume);
        // Update the new volume
        $.execScript(`songMsg.volume = ${ volumeValue };`);
        // Update the cookie to save setting after refreshs
        $.addCookie('forth_volume', volumeValue, 30, '/');
    });
    $('#forth_volume > span').click(function () {
        // Swap old volume to new if mute
        if (volumeValue == 0) {
            volumeValue = volumeValueOld;
        } else { // Swap current volume to old then mute
            volumeValueOld = volumeValue;
            volumeValue = 0;
        }
        $('#slt_volume').val(volumeValue);

        // Update the button with new icon & title
        let iconVolume = (volumeValue == 0) ? icon_volume_off : (volumeValue < 0.5) ? icon_volume_down : icon_volume_up;
        let textVolume = (volumeValue == 0) ? 'Click to unmute' : 'Click to mute';
        $("#forth_volume > span").setButton($.addIcon(iconVolume), textVolume);
        // Update the new volume
        $.execScript(`songMsg.volume = ${ volumeValue };`);
        // Update the cookie to save setting after refreshs
        $.addCookie('forth_volume', volumeValue, 30, '/');
    });
    /* Evenement change volume end */

    /* Evenement darkmode start */
    $('#bt_darkmode').click(function () {
        var keyword = '';
        // Update the icon
        if (darkMode) {
            $(this).setButton($.addIcon(icon_darkmode_off), title_darkmode_off);
            $("#bt_darkmode2").setButton($.addIcon(icon_darkmode_off), title_darkmode_off);
            keyword = 'disable';
        } else {
            $(this).setButton($.addIcon(icon_darkmode_on), title_darkmode_on);
            $("#bt_darkmode2").setButton($.addIcon(icon_darkmode_on), title_darkmode_on);
            keyword = 'activate';
        }
        // Update the value
        darkMode = !darkMode;
        // Update the cookie
        $.addCookie('forth_darkmode', darkMode, 30, '/');
        // Show a message
        $.displayMessage(1000, `You ${keyword}d the dark mode.`, '');
        // Refresh css
        loadCSS();
    });
    /* Evenement darkmode end */

    /* Evenement show or hide online players start */
    $('#bt_onlineplayers').click(function () {
        $(".chat_room_template > .users_in_room").toggle(500, function () {
            if (jQuery(".chat_room_template > .users_in_room").css("display") == "none") {
                // Hide
                $('#bt_onlineplayers').html($.addIcon(icon_onlinep_off));
                $("#bt_lockscreen").prop('title', 'Show online players');
                // Update the cookie to save setting after refreshs
                $.addCookie('forth_showPlayers', 'false', 30, '/');
            } else { // Show
                $('#bt_onlineplayers').html($.addIcon(icon_onlinep_on));
                $("#bt_lockscreen").prop('title', 'Hide online players');
                // Update the cookie to save setting after refreshs
                $.addCookie('forth_showPlayers', 'true', 30, '/');
            }
            $("#chat_rooms_container .chat_message_window").scrollBottom();
        });
    });
    /* Evenement show or hide online players end */

    /* Evenement change size of text start */
    $('#slt_fontsize').change(function () {
        // Add a cssrule to dynamise the text size
        $.changeTextSize($(this).val());
        // Update the cookie to save setting after refreshs
        $.addCookie('forth_fontsize', $(this).val(), 30, '/');
    });
    /* Evenement change size of text end */

    /* Evenement change brightness start */
    $('#slt_brightness').change(function () {
        // Add a cssrule to dynamise the text size
        brightnessValue = $(this).val();
        jCSSRule("#maingamecontent #gameholder", "filter", "brightness(" + brightnessValue + ")");

        // Update the cookie to save setting after refreshs
        $.addCookie('forth_brightness', $(this).val(), 30, '/');
    });
    /* Evenement change brightness end */

    /* Evenement lock screen start */
    $('#bt_lockscreen').click(function () {
        if ($("#forth_fullscreen").css("display") == "none") {
            // Locked screen
            $("#forth_fullscreen").css("display", "block"); // Background
            $("#floating_game_holder").addClass("game_ahead"); // Put the game ahead
            $(this).addClass("locked"); // Change the style of the button
            jCSSRule("body", "overflow", "hidden"); // We remove scrollbars
            jCSSRule("#floating_game_holder", "padding-top", "0px");
            $(this).setButton($.addIcon(icon_lockscreen_on), 'Unlock screen');

            //centrerElementAbsolu($("#floating_game_holder")); // Center the game
            $("#floating_game_holder").centrerElementAbsolu(); // Center the game
        } else {
            $("#forth_fullscreen").css("display", "none"); // Background
            $("#floating_game_holder").removeClass("game_ahead");
            $(this).removeClass("locked");
            jCSSRule("body", "overflow", "");
            jCSSRule("#floating_game_holder", "padding-top", "4px");
            $(this).setButton($.addIcon(icon_lockscreen_off), 'Lock screen');
        }
    });
    /* Evenement lock screen end */

    /* Evenement hide chat start */
    $('#bt_hideChat').click(function () {
        let chatWidth = $("#chat_container").css("width");
        let maingameWidth = $("#maingame").css("width");
        
        if ($("#chat_container_cell").css("display") == "none") { // Show
            $(this).html($.addIcon(icon_chat_on));
            $("#bt_lockscreen").prop('title', 'Hide chat');
            jQuery("#quicklinks").show();
            $("#chat_container_cell").toggle();
            $.setWidthGame(`calc( ${maingameWidth} + ${chatWidth} )`);
            $("#forth_fontsize").toggle();
        } else // Hide
        {
            $(this).html($.addIcon(icon_chat_off));
            $("#bt_lockscreen").prop('title', 'Show chat');
            jQuery("#quicklinks").hide();
            $("#chat_container_cell").toggle();
            $.setWidthGame(`calc( ${maingameWidth} - ${chatWidth} )`);
            if ($("#forth_fullscreen").css("display") == "block")
                $("#floating_game_holder").centrerElementAbsolu();
            $("#forth_fontsize").toggle();
        }
        //scrollBottom("#chat_rooms_container .chat_message_window");
        $("#chat_rooms_container .chat_message_window").scrollBottom();
    });
    /* Evenement hide chat end */

    /* Evenement show quick links start */
    $("#bt_showquicklinks").click(function () {
        $("#quicklinks > li:not(:first-child)").toggle();
        if ($("#quicklinks > li:not(:first-child)").css("display") == "list-item") {
            $(this).setButton($.addIcon(icon_quicklinks_on), 'Hide quick links');
        } else {
            $(this).setButton($.addIcon(icon_quicklinks_off), 'Show quick links');
        }
    });
    /* Evenement show quick links end */
});

/** Each time the window is resized, we keep the game centered */
$(window).resize(function () {
    if ($("#forth_fullscreen").css("display") == "block") {
        $("#floating_game_holder").centrerElementAbsolu();
    }
});

/** After each new message in the chat, call this evenement to check if there are links in message to
 *  replace them by html link with better title.
 */
var iNbPost = 0;
$('body').on('DOMSubtreeModified', '#chat_rooms_container .chat_message_window', function () {
    var msg = $("#chat_rooms_container .chat_message_window .chat-message:last-child .message").html();
    // When we are using html() later, there are a phase where this function is recall and msg is empty
    if (msg == "") {
        iNbPost = $("#chat_rooms_container .chat_message_window .chat-message .message").length;
        return;
    }
    // When room changed
    if (iNbPost > $("#chat_rooms_container .chat_message_window .chat-message .message").length) {
        iNbPost = $("#chat_rooms_container .chat_message_window .chat-message .message").length;
    }
    // If new message
    if (iNbPost < $("#chat_rooms_container .chat_message_window .chat-message .message").length) {
        var m;
        var msgOut = msg;
        // For each wiki's link in the msg
        while ((m = regWiki.exec(msg)) !== null) {
            var urlOut = "";
            if (m.index === regWiki.lastIndex) {
                regWiki.lastIndex++;
            }
            msgOut = msgOut.replace(m[0], urlWikiToHtml(m));
        }
        // For each game's link in the msg
        while ((m = regGame.exec(msg)) !== null) {
            var urlOut = "";
            if (m.index === regGame.lastIndex) {
                regGame.lastIndex++;
            }
            msgOut = msgOut.replace(m[0], urlGameToHtml(m[2]));
        }
        // For each account's link in the msg
        while ((m = regAccount.exec(msg)) !== null) {
            var urlOut = "";
            if (m.index === regAccount.lastIndex) {
                regAccount.lastIndex++;
            }

            msgOut = msgOut.replace(m[0], urlAccountToHtml(m[2]));
        }
        // We fixe some issues after replace games link (because there are already html links)
        msgOut = msgOut.replace(/( ]<\/a>)([#])?/g, ']</a>');
        // We replace the message
        $("#chat_rooms_container .chat_message_window .chat-message:last-child .message").html(msgOut);
    }
});
