/*!
 * Kong Addon for www.kongregate.com v1.5
 * https://github.com/Forthtilliath/Kong-Addon
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

    /**** BUTTON QUICK LINKS START ******************************************************************************************
     * - Hide all quick links to gain space
     * - Add a button to show and hide quick links
     * - Remove facebook button from quick links
     ****/

    // Create the button
    $("#quicklinks").prepend($.addButton('li', '', 'bt_showquicklinks', 'Show quick links', $.addIcon(icon_quicklinks_off)));
    // We remove the facebook button to gain space
    $("#quicklinks_facebook").remove();

    // Evenement
    $("#bt_showquicklinks").click(function () {
        $("#quicklinks > li:not(:first-child)").toggle();
        if ($("#quicklinks > li:not(:first-child)").css("display") == "list-item") {
            $(this).setButton($.addIcon(icon_quicklinks_on), 'Hide quick links');
        } else {
            $(this).setButton($.addIcon(icon_quicklinks_off), 'Show quick links');
        }
    });

    /**** BUTTON QUICK LINKS END */


    /**** BLOCK FEATURES START **********************************************************************************************
     * - 
     ****/
    // Create the box for all features
    $('<div id="forth_features"></div>').insertBefore('#cloud_save_info_template');
    // Create a sub-block for each feature
    for (let i = 0; i < nbFeatures; i++) {
        $('#forth_features').append(`<div id="forth_feature_${i}"></div>`);
    }

    /**** BLOCK FEATURES END */

    /**** BUTTON LOCK SCREEN START ******************************************************************************************
     * - Add a background we can use to only show game & chat
     * - Add a button to lock and unlock screen
     * - Remove cinematic button from quick links
     * - Add evenement on click
     ****/

    if (aFeatures['lockscreen']['display']) {
        let pos = aFeatures['lockscreen']['position'];
        // Add the fullscreen mode in hide
        $('<div id="forth_fullscreen"></div>').appendTo("body");
        // Create the button
        $(`#forth_feature_${pos}`).append($.addButton('div', 'forth_lockscreen', 'bt_lockscreen', 'Lock screen', $.addIcon(icon_lockscreen_off)));
        // We remove the cinematic mode button
        $("#cinematic_mode_quicklink").remove();

        // Evenement
        $('#bt_lockscreen').click(function () {
            if ($("#forth_fullscreen").css("display") == "none") { // Locked screen
                $("#forth_fullscreen").show(); // Background
                $("#floating_game_holder").addClass("game_ahead"); // Put the game ahead
                $(this).addClass("locked"); // Change the style of the button
                jCSSRule("body", "overflow", "hidden"); // We remove scrollbars
                jCSSRule("#floating_game_holder", "padding-top", "0px");
                $(this).setButton($.addIcon(icon_lockscreen_on), 'Unlock screen');
                $("#floating_game_holder").centrerElementAbsolu(); // Center the game
            } else { // Unlocked screen
                $("#forth_fullscreen").hide(); // Background
                $("#floating_game_holder").removeClass("game_ahead");
                $(this).removeClass("locked");
                jCSSRule("body", "overflow", "");
                jCSSRule("#floating_game_holder", "padding-top", "4px");
                $(this).setButton($.addIcon(icon_lockscreen_off), 'Lock screen');
            }
        });
    }

    /**** BUTTON LOCK SCREEN END */

    /**** BUTTON SHOW PLAYERS START *****************************************************************************************
     * - Add a button to show or hide online players
     * - Add evenement on click
     ****/

    if (aFeatures['onlineplayers']['display']) {
        let pos = aFeatures['onlineplayers']['position'];
        // Create the button
        if ($.cookie('forth_showPlayers') == 'true') { // Show
            $(`#forth_feature_${pos}`).append($.addButton('div', 'forth_onlineplayers', 'bt_onlineplayers', 'Hide online players', $.addIcon(icon_onlinep_on)));
        } else { // Hide
            $(`#forth_feature_${pos}`).append($.addButton('div', 'forth_onlineplayers', 'bt_onlineplayers', 'Show online players', $.addIcon(icon_onlinep_off)));
            jCSSRule(".chat_room_template > .users_in_room", "display", "none");
        }

        // Evenement
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
    }

    /**** BUTTON SHOW PLAYERS END */

    /**** BUTTON HIDE CHAT START ********************************************************************************************
     * - Add the button to hide chat
     * - Add evenement on click
     ****/

    if (aFeatures['hidechat']['display']) {
        let pos = aFeatures['hidechat']['position'];
        // Create the button
        $(`#forth_feature_${pos}`).append($.addButton('div', 'forth_hideChat', 'bt_hideChat', 'Hide chat', $.addIcon(icon_chat_on)));

        // Evenement
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
                // Unmute pings
                if (volumeValueOld > 0) {
                    volumeValue = volumeValueOld;
                    volumeValueOld = 0;
                    changeVolume();
                }
            } else { // Hide
                $(this).html($.addIcon(icon_chat_off));
                $("#bt_lockscreen").prop('title', 'Show chat');
                jQuery("#quicklinks").hide();
                $("#chat_container_cell").toggle();
                $.setWidthGame(`calc( ${maingameWidth} - ${chatWidth} )`);
                if ($("#forth_fullscreen").css("display") == "block")
                    $("#floating_game_holder").centrerElementAbsolu();
                $("#forth_fontsize").toggle();
                // Mute pings
                if (volumeValue > 0) {
                    volumeValueOld = volumeValue;
                    volumeValue = 0;
                } else {
                    volumeValueOld = 0;
                }
                changeVolume();
            }
            $("#chat_rooms_container .chat_message_window").scrollBottom();
        });
    }

    /**** BUTTON HIDE CHAT END */

    /**** MENU SELECT SIZE TEXT START ***************************************************************************************
     * - Add the button to change text size
     * - Add evenement on change
     ****/

    if (aFeatures['textsize']['display']) {
        let pos = aFeatures['textsize']['position'];
        // Create the select menu
        let sOptionsSize = '';
        let sSelected = '';
        for (let i = min_fontsize; i <= max_fontsize; i += 2) {
            // Add 11px option (default value of the website)
            if (i == 12) {
                let ii = 11;
                (ii == fontsizeValue) ? sSelected = ' selected': sSelected = '';
                sOptionsSize += `<option value="${ii}"${sSelected}>${ii}px</option>`;
            }
            (i == fontsizeValue) ? sSelected = ' selected': sSelected = '';
            sOptionsSize += `<option value="${i}"${sSelected}>${i}px</option>`;
        }
        $(`#forth_feature_${pos}`).append($.addSelect('div', 'forth_fontsize', 'slt_fontsize', 'Select the text size of your choice', $.addIcon(icon_font), sOptionsSize));
        $.changeTextSize($.cookie('forth_fontsize'));
        $("#chat_rooms_container .chat_message_window").scrollBottom();

        // Evenement
        $('#slt_fontsize').change(function () {
            // Add a cssrule to dynamise the text size
            $.changeTextSize($(this).val());
            // Update the cookie to save setting after refreshs
            $.addCookie('forth_fontsize', $(this).val(), 30, '/');
        });
    }

    /**** MENU SELECT SIZE TEXT END */

    /**** MENU SELECT BRIGHTNESS START **************************************************************************************
     * - Add the button to change the brightness of the game
     * - Add evenement on change
     ****/

    if (aFeatures['brightness']['display']) {
        let pos = aFeatures['brightness']['position'];
        // Create select menu
        let sOptionsBrightness = '';
        sSelected = '';
        for (let i = min_brightness; i <= max_brightness; i += step_brightness) {
            ((i + "%") == brightnessValue) ? sSelected = ' selected': sSelected = '';
            sOptionsBrightness += `<option value="${i}%"${sSelected}>${i}%</option>`;
        }
        $(`#forth_feature_${pos}`).append($.addSelect('div', 'forth_brightness', 'slt_brightness', 'Select the brightness of your choice', $.addIcon(icon_brightness), sOptionsBrightness));

        // Evenement change brightness start
        $('#slt_brightness').change(function () {
            // Add a cssrule to dynamise the text size
            brightnessValue = $(this).val();
            jCSSRule("#maingamecontent #gameholder", "filter", "brightness(" + brightnessValue + ")");

            // Update the cookie to save setting after refreshs
            $.addCookie('forth_brightness', $(this).val(), 30, '/');
        });
    }

    /**** MENU SELECT BRIGHTNESS END */

    /**** MENU SELECT VOLUME START ******************************************************************************************
     * - Add a button to change the volume from pings
     * - Add evenement on change on menu select
     * - Add evenement on click on icon
     ****/

    if (aFeatures['ping']['display']) {
        let pos = aFeatures['ping']['position'];
        // Create the select menu
        let sOptionsVolume = '';
        sSelected = '';
        for (let i = min_volume; i <= max_volume; i += 10) {
            (i == volumeValue * 100) ? sSelected = ' selected': sSelected = '';
            let labVolume = (i == 0) ? `Muted` : `${i}%`;
            sOptionsVolume += `<option value="${i/100}"${sSelected}>${labVolume}</option>`;
        }
        let iconVolume = (volumeValue == 0) ? icon_volume_off : (volumeValue < 0.5) ? icon_volume_down : icon_volume_up;
        $(`#forth_feature_${pos}`).append($.addSelect('div', 'forth_volume', 'slt_volume', '', $.addIcon(iconVolume), sOptionsVolume, 'Click to mute', 'Select the volume of your choice'));

        function changeVolume() {
            $('#slt_volume').val(volumeValue);
            // Update the button with new icon & title
            let iconVolume = (volumeValue == 0) ? icon_volume_off : (volumeValue < 0.5) ? icon_volume_down : icon_volume_up;
            let textVolume = (volumeValue == 0) ? 'Click to unmute' : 'Click to mute';
            $("#forth_volume > span").setButton($.addIcon(iconVolume), textVolume);
            // Update the new volume
            $.execScript(`songMsg.volume = ${ volumeValue };`);
            // Update the cookie to save setting after refreshs
            $.addCookie('forth_volume', volumeValue, 30, '/');
        }

        // Evenement when sound choose on select menu
        $('#slt_volume').change(function () {
            // Save last volume
            volumeValueOld = volumeValue;
            volumeValue = $(this).val();

            changeVolume();
        });
        // Evenement when sound is muted/unmuted from icon

        $('#forth_volume > span').click(function () {
            // Swap old volume to new if mute
            if (volumeValue == 0) {
                volumeValue = volumeValueOld;
            } else { // Swap current volume to old then mute
                volumeValueOld = volumeValue;
                volumeValue = 0;
            }

            changeVolume();
        });
    }

    /**** MENU SELECT VOLUME END */
});

if (aFeatures['lockscreen']['display']) {
    /** Each time the window is resized, we keep the game centered */
    $(window).resize(function () {
        if ($("#forth_fullscreen").css("display") == "block") {
            $("#floating_game_holder").centrerElementAbsolu();
        }
    });
}