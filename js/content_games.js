/*!
 * Kong Addon for www.kongregate.com v1.5
 * https://github.com/Forthtilliath/Kong-Addon
 *
 * Copyright 2020 Forth
 * Released under the MIT license
 * 
 * @fileoverview List of functions which are only executed on game pages. Among this function, there are buttons which show/hide quick links, dark mode, lock screen, hide online players, change text size, change brightless and change volume of ding when someone post a message in the chat
 * @author Forth
 * @version 4
 */
"use strict";

/* When page is loaded */
$(document).ready(function () {
    /* Initialisation start */

    /* Check if each button already exist and delete them to avoid any double
     * when the extension is updated while running (had this issue on FF) */
    //$.removeFeatures();
    //$.removeElements(['#bt_showquicklinks', '#forth_lockscreen', '#forth_onlineplayers', '#forth_hideChat', '#forth_fontsize', '#forth_brightness', '#forth_volume', '#forth_chatOnly', 'div#forth_fullscreen']);
    if (isFirefox) $.removeElements(['button#bt_showquicklinks', 'div#forth_features', 'div#forth_fullscreen']);
    /*for(let i = 0 ; i < aFeatures.length;i++)
        aFeatures[i]['divname'].remove();*/

    /*aFeatures.each(function(item) {
        item['divname'].remove();
    })*/

    //aFeatures.forEach( item => console.log(item['divname']));
    //aFeatures.forEach( item => $(item['divname']).remove());
    /*Object.keys(aFeatures).each(function(a,b) {
      $(aFeatures[a]['divname']).remove();
    });*/
    //$.removeElements(Object.keys(aFeatures));
    /*jQuery.each(aFeatures, function (i) {
        //jQuery.each(aFeatures[i], function (key, val) {
            if(aFeatures[i]['divname'] !== undefined ) {
                console.log(aFeatures[i]['divname']);
                $(aFeatures[i]['divname']).removeAll();
            }
        //});
    });*/

    let gameName = $(".gamepage_title_block > h1[itemprop='name']").text();

    //$("#alert_tab_pane").css("width", $("#chat_tab_pane").css("width")); // Fixe the default width which is too high // DO NOT WORK

    //if (aFeatures['lockscreen']['display'] && aFeatures['unreadMessages']['display']) { BUG WITH IT
    // Actions did when the number of unread messages change
    function actionUnreadMessage() {
        $.log(10, "Call function actionUnreadMessage()");
        $.log(10, "Unread msg = " + parseInt($("#profile_control_unread_message_count").text()));


        // If message unread and lockScreen on
        if ((parseInt($("#profile_control_unread_message_count").text(), 10) > 0) && $("#forth_fullscreen").is(":visible")) {
            $.copyText('#msg-count', '#profile_control_unread_message_count'); //// Show the number of new messages
            //$("#div_unreadMessages").show();
            //$(aFeatures['unreadMessages']['divname']).show();
            //$.getFeatureDivByName('unreadMessages').show();
            //aFeatures2.unreadMessages.show();
            $.log(10, "SHOW");
            features.get('unreadMessages').show();
        } else {
            //$("#div_unreadMessages").hide();
            //$(aFeatures['unreadMessages']['divname']).hide();
            //$.getFeatureDivByName('unreadMessages').hide();
            //aFeatures2.unreadMessages.hide();
            $.log(10, "HIDE");
            features.get('unreadMessages').hide();
        }
    }

    function removeStyleUnreadMessage() {
        $("#profile_control_unread_message_count").text(''); // Remove the number of unread messages
        $("#profile_control_unread_message_count").removeClass('has_messages mls'); // Remove the class
        $("#profile_bar_messages").removeClass('alert_messages'); // Remove the class
        $("#my-messages-link").attr('title', ''); // Remove the title
    }
    //}

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
    //$('<div id="forth_features"></div>').insertBefore('#cloud_save_info_template');
    features.addContainerIn('#cloud_save_info_template');
    features.addSubContainers();
    // Create a sub-block for each feature
    /*for (let i = 0; i < nbFeatures; i++) {
        $('#forth_features').append($.createDiv(`forth_feature_${i}`));
    }*/

    /**** BLOCK FEATURES END */

    function changeVolume() {
        $('#slt_volume').val(volumeValue);
        // Update the button with new icon & title
        let iconVolume = (volumeValue == 0) ? icon_volume_off : (volumeValue < 0.5) ? icon_volume_down : icon_volume_up;
        let textVolume = (volumeValue == 0) ? 'Click to unmute' : 'Click to mute';
        $("#forth_volume > span").setButton($.addIcon(iconVolume), textVolume);
        // Update the new volume
        $.execScript(`songMsg.volume = ${ volumeValue };`);
        // Update the cookie to save setting after refreshs
        $.setCookieGame('VolumePing', volumeValue);
    }

    /**** BUTTON LOCK SCREEN START ******************************************************************************************
     * - Add a background we can use to only show game & chat
     * - Add a button to lock and unlock screen
     * - Remove cinematic button from quick links
     * - Add evenement on click
     ****/

    //if (aFeatures['lockscreen']['display']) {
    //if ($.isFeatureActive('lockscreen')) {
    //if (aFeatures.lockscreen.display) {
    //let featureLockscreen = aFeatures2['lockscreen'];

    $.log(50, "Feature Lockscreen visible : " + (features.get('lockscreen') !== undefined) + " && " + features.get('lockscreen').isActive());
    //if ((featureLockscreen !== undefined) && featureLockscreen.isActive()) {
    if ((features.get('lockscreen') !== undefined) && features.get('lockscreen').isActive()) {
        $.log(20, "Feature Lockscreen");
        //let pos = aFeatures['lockscreen']['position'];
        // Add the fullscreen mode in hide
        $('<div id="forth_fullscreen"></div>').appendTo("body");
        // Create the button
        /*featureLockscreen.featureDiv.append(
            $.createDiv(featureLockscreen.divName, new Button('bt_lockscreen', 'Lock screen', $.addIcon(icon_lockscreen_off)).html)
        );*/
        features.get('lockscreen').addDiv(new Button('bt_lockscreen', 'Lock screen', $.addIcon(icon_lockscreen_off)).html);
        // We remove the cinematic mode button
        $("#cinematic_mode_quicklink").remove();

        // Evenement
        $('#bt_lockscreen').click(function () {
            //if ($("#forth_fullscreen").css("display") == "none") { // Locked screen
            //if (!$("#forth_fullscreen").is(":visible")) { // Locked screen
            if ($("#forth_fullscreen").is(":visible")) { // Unlocked screen
                $("#forth_fullscreen").hide(); // Background
                $("#floating_game_holder").removeClass("game_ahead");
                $(this).removeClass("locked");
                jCSSRule("body", "overflow", "");
                jCSSRule("#floating_game_holder", "padding-top", "4px");
                $(this).setButton($.addIcon(icon_lockscreen_off), 'Lock screen');
                $.setCookieGame('LockScreen', 'false');
            } else { // Locked screen
                $("#forth_fullscreen").show(); // Background
                $("#floating_game_holder").addClass("game_ahead"); // Put the game ahead
                $(this).addClass("locked"); // Change the style of the button
                jCSSRule("body", "overflow", "hidden"); // We remove scrollbars
                jCSSRule("#floating_game_holder", "padding-top", "0px");
                $(this).setButton($.addIcon(icon_lockscreen_on), 'Unlock screen');
                $("#floating_game_holder").centrerElementAbsolu(); // Center the game
                $.setCookieGame('LockScreen', 'true');
            }
            //if (aFeatures['unreadMessages']['display']) {
            if (features.get('unreadMessages').isActive()) {
                actionUnreadMessage();
            }
        });

        if (cookieLockScreen) {
            $('#bt_lockscreen').trigger('click');
        }
    }

    /**** BUTTON LOCK SCREEN END */

    /**** BUTTON SHOW PLAYERS START *****************************************************************************************
     * - Add a button to show or hide online players
     * - Add evenement on click
     ****/

    //if (aFeatures['onlineplayers']['display']) {
    //if ($.isFeatureActive('onlineplayers')) {
    //if (aFeatures2.onlineplayers.isActive()) {
    if ((features.get('onlineplayers') !== undefined) && features.get('onlineplayers').isActive()) {
        //let pos = aFeatures['onlineplayers']['position'];
        // Create the button
        let value = '';
        if (cookieShowPlayers) { // Show
            value = new Button('bt_onlineplayers', 'Hide online players', $.addIcon(icon_onlinep_on)).html;
        } else { // Hide
            value = new Button('bt_onlineplayers', 'Show online players', $.addIcon(icon_onlinep_off)).html;
            jCSSRule(".chat_room_template > .users_in_room", "display", "none"); // Hide don't work here
        }
        /*aFeatures2.onlineplayers.featureDiv.append(
            $.createDiv(aFeatures2.onlineplayers.divName, value)
        );*/
        features.get('onlineplayers').addDiv(value);

        // Evenement
        $('#bt_onlineplayers').click(function () {
            $(".chat_room_template > .users_in_room").toggle(500, function () {
                //if (jQuery(".chat_room_template > .users_in_room").css("display") == "none") {
                //if (!jQuery(".chat_room_template > .users_in_room").is(":visible")) {
                if ($(".chat_room_template > .users_in_room").is(":visible")) { // Show
                    $('#bt_onlineplayers').html($.addIcon(icon_onlinep_on));
                    $('#bt_onlineplayers').prop('title', 'Hide online players');
                    // Update the cookie to save setting after refreshs
                    $.setCookieAll('ShowPlayers', 'true');
                } else { // Hide
                    $('#bt_onlineplayers').html($.addIcon(icon_onlinep_off));
                    $('#bt_onlineplayers').prop('title', 'Show online players');
                    // Update the cookie to save setting after refreshs
                    $.setCookieAll('ShowPlayers', 'false');
                }
                $.log(50, 'ONLINE PLAYERS');
                $("#chat_rooms_container .chat_message_window").scrollBottom();
            });
        });
    }

    /**** BUTTON SHOW PLAYERS END */

    /**** MENU SELECT SIZE TEXT START ***************************************************************************************
     * - Add the button to change text size
     * - Add evenement on change
     ****/

    //if (aFeatures['textsize']['display']) {
    //if ($.isFeatureActive('textsize')) {
    if ((features.get('textsize') !== undefined) && features.get('textsize').isActive()) {
        //let pos = aFeatures['textsize']['position'];
        // Create the select menu
        let sOptionsSize = '';
        let sSelected = '';
        for (let i = min_fontsize; i <= max_fontsize; i += 2) {
            // Add 11px option (default value of the website)
            if (i == 12) {
                let ii = 11;
                (ii == cookieFontSize) ? sSelected = ' selected': sSelected = '';
                sOptionsSize += `<option value="${ii}"${sSelected}>${ii}px</option>`;
            }
            (i == cookieFontSize) ? sSelected = ' selected': sSelected = '';
            sOptionsSize += `<option value="${i}"${sSelected}>${i}px</option>`;
        }
        //$(`#forth_feature_${pos}`).append($.addSelect('div', 'forth_fontsize', 'slt_fontsize', 'Select the text size of your choice', $.addIcon(icon_font), sOptionsSize));
        features.get('textsize').addSelect('div', 'forth_fontsize', 'slt_fontsize', 'Select the text size of your choice', $.addIcon(icon_font), sOptionsSize);
        $.changeTextSize(cookieFontSize);
        $.log(50, 'TEXT SIZE');
        //$("#chat_rooms_container .chat_message_window").scrollBottom(); // Not sure if it's useful

        // Evenement
        $('#slt_fontsize').change(function () {
            // Add a cssrule to dynamise the text size
            $.changeTextSize($(this).val());
            // Update the cookie to save setting after refreshs
            $.setCookieAll('FontSize', $(this).val());
        });
    }

    /**** MENU SELECT SIZE TEXT END */

    /**** MENU SELECT BRIGHTNESS START **************************************************************************************
     * - Add the button to change the brightness of the game
     * - Add evenement on change
     ****/

    //if (aFeatures['brightness']['display']) {
    //if ($.isFeatureActive('brightness')) {
    if ((features.get('brightness') !== undefined) && features.get('brightness').isActive()) {
        //let pos = aFeatures['brightness']['position'];
        // Create select menu
        let sOptionsBrightness = '';
        let sSelected = '';
        for (let i = min_brightness; i <= max_brightness; i += step_brightness) {
            ((i + "%") == cookieBrightness) ? sSelected = ' selected': sSelected = '';
            sOptionsBrightness += `<option value="${i}%"${sSelected}>${i}%</option>`;
        }
        //$(`#forth_feature_${pos}`).append($.addSelect('div', 'forth_brightness', 'slt_brightness', 'Select the brightness of your choice', $.addIcon(icon_brightness), sOptionsBrightness));
        features.get('brightness').addSelect('div', 'forth_brightness', 'slt_brightness', 'Select the brightness of your choice', $.addIcon(icon_brightness), sOptionsBrightness);

        // Evenement change brightness start
        $('#slt_brightness').change(function () {
            // Add a cssrule to dynamise the text size
            cookieBrightness = $(this).val();
            jCSSRule("#maingamecontent #gameholder", "filter", "brightness(" + cookieBrightness + ")");

            // Update the cookie to save setting after refreshs
            $.setCookieGame('Brightness', $(this).val());
        });
    }

    /**** MENU SELECT BRIGHTNESS END */

    /**** MENU SELECT VOLUME START ******************************************************************************************
     * - Add a button to change the volume from pings
     * - Add evenement on change on menu select
     * - Add evenement on click on icon
     ****/

    //if (aFeatures['ping']['display']) {
    //if ($.isFeatureActive('ping')) {
    if ((features.get('ping') !== undefined) && features.get('ping').isActive()) {
        //let pos = aFeatures['ping']['position'];
        // Create the select menu
        let sOptionsVolume = '';
        let sSelected = '';
        for (let i = min_volume; i <= max_volume; i += 10) {
            (i == volumeValue * 100) ? sSelected = ' selected': sSelected = '';
            let labVolume = (i == 0) ? `Muted` : `${i}%`;
            sOptionsVolume += `<option value="${i/100}"${sSelected}>${labVolume}</option>`;
        }
        let iconVolume = (volumeValue == 0) ? icon_volume_off : (volumeValue < 0.5) ? icon_volume_down : icon_volume_up;
        //$(`#forth_feature_${pos}`).append($.addSelect('div', 'forth_volume', 'slt_volume', '', $.addIcon(iconVolume), sOptionsVolume, 'Click to mute', 'Select the volume of your choice'));
        features.get('ping').addSelect('div', 'forth_volume', 'slt_volume', '', $.addIcon(iconVolume), sOptionsVolume, 'Click to mute', 'Select the volume of your choice');

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

    /**** BUTTON CHAT ONLY END */

    //if (aFeatures['displayMode']['display']) {
    //if ($.isFeatureActive('displayMode')) {
    if ((features.get('displayMode') !== undefined) && features.get('displayMode').isActive()) {
        //let pos = aFeatures['displayMode']['position'];
        // Create the buttons
        let bt_gameOnly = new Button('bt_gameOnly', 'Show only the game', $.addIcon(icon_gameonly));
        let bt_gameNchat = new Button('bt_gameNchat', 'Show both', $.addIcon(icon_gameNchat));
        let bt_chatOnly = new Button('bt_chatOnly', 'Show only the chat', $.addIcon(icon_chatonly));
        //$(`#forth_feature_${pos}`).append($(`<div id="forth_displayMode">${bt_gameOnly.html}${bt_gameNchat.html}${bt_chatOnly.html}</div>`));
        features.get('displayMode').addDiv(bt_gameOnly.html + bt_gameNchat.html + bt_chatOnly.html);

        // Create a new line in the table between links_connect & chat (to have enough space to have all in one line)
        $('<tr id="tr_features"><td colspan="2"></td></tr>').insertAfter("#flashframecontent > table.game_table > tbody > tr:nth-of-type(1)");
        // Add the name of the game
        $(`<span class="onlyGameOrChat">${gameName}</span>`).insertBefore("#quicklinks");

        // Evenements
        function showOnlyGameOrChat() {
            if (displayMode == 0) {
                $("#forth_features").addClass("onlyGameOrChat");
                $("#quicklinks").hide(); // Hide quicklinks
                $("#tr_features").show(); // Show tr_features
                $('#forth_features').prependTo('#tr_features > td'); // Move buttons in tr_features
                //if ($("#forth_fullscreen").css("display") == "block") // Center the chat/game if fullscreen
                //if (aFeatures['lockscreen']['display'] && $("#forth_fullscreen").is(":visible")) // Center the chat/game if fullscreen
                if ((features.get('lockscreen') !== undefined) && features.get('lockscreen').isActive() && $("#forth_fullscreen").is(":visible")) // Center the chat/game if fullscreen
                    $("#floating_game_holder").centrerElementAbsolu();
                gameOrChatHided = true;
            }
        }

        function click_gameOnly() {
            if (displayMode != -1) { // If already in gameMode, do nothing
                // Hide/Show features when onlyGame
                $.getFeatureDiv('onlineplayers').hide(); // Hide onlineplayers button
                $.getFeatureDiv('textsize').hide(); // Hide textsize button
                $.getFeatureDiv('brightness').show(); // Show brightness button

                // Show game & hide chat
                $("#gameholder").show(); // Show game
                $("#chat_container_cell").hide(); // Hide chat

                // Resize box
                $.log(10, "gameiframe= " + $("#gameiframe").css("width"));
                while ($("#gameiframe").css("width") == 0) {
                    setTimeout(function () {

                    }, 1000);
                }
                $.setHeightBoth(`calc(${iDefaultBothHeight} + ${menuButtonsHeight2})`);
                $.setWidthBoth($("#gameiframe").css("width"));
                $.setWidthChat(); // Resize chat
                $.setWidthGame($("#gameiframe").css("width"));
                if (iDefaultGameLeft == -1) iDefaultGameLeft = $("#gameiframe").css("left");
                $.log(10, "left= " + iDefaultGameLeft);
                $("#gameiframe").css("left", 0);

                // Show game name
                let width_nameGame = $("#maingame").width() - 150 /* Login max width */ - 20 /* Space */ ;
                $("span.onlyGameOrChat").css("width", width_nameGame);
                $("span.onlyGameOrChat").show();

                // Mute pings
                volumeValueOld = (volumeValue > 0) ? volumeValue : 0;
                if (volumeValue > 0) volumeValue = 0;
                changeVolume();

                showOnlyGameOrChat();
                $.setCookieGame('DisplayMode', -1);
                $.setStyleDisplayMode(-1); // Change display of button
                displayMode = -1;
            }
        }

        function click_chatOnly() {
            if (displayMode != 1) { // If already in chatMode, do nothing
                // Hide/Show features when onlyChat
                $.getFeatureDiv('brightness').hide(); // Hide brightness button
                $.getFeatureDiv('onlineplayers').show(); // Show onlineplayers button
                $.getFeatureDiv('textsize').show(); // Show textsize button

                // Hide game & show chat
                $("#gameholder").hide(); // Hide game
                $("#chat_container_cell").show(); // Show chat

                // Resize box
                $.setHeightBoth(`calc(${iDefaultBothHeight} + ${menuButtonsHeight2})`);
                $.setWidthBoth(`calc( ${iDefaultChatWidth} + ${modif_chat_width}px )`); // Reduce game box
                $.setWidthChat(modif_chat_width); // Resize chat enlarger
                $("#gameiframe").css("left", iDefaultGameLeft);

                // Show game name
                let width_nameGame = $("#maingame").width() - $(".user_connection").width() - 20;
                $("span.onlyGameOrChat").css("width", width_nameGame);
                $("span.onlyGameOrChat").show();

                // Unmute pings
                if (volumeValueOld > 0) {
                    volumeValue = volumeValueOld;
                    volumeValueOld = 0;
                    changeVolume();
                }

                showOnlyGameOrChat();
                $.setCookieGame('DisplayMode', 1);
                $.setStyleDisplayMode(1); // Change display of button
                displayMode = 1;
            }
        }

        function click_gameNchat() {
            if (displayMode != 0) { // If already in bothMode, do nothing
                $("#forth_features").removeClass("onlyGameOrChat");

                // Remove features & quicklinks as default
                $("#quicklinks").show(); // Show quicklinks
                $('#forth_features').insertBefore('#cloud_save_info_template'); // Move buttons in tr_features
                $("#tr_features").hide(); // Hide tr_features

                // Show features
                $.getFeatureDiv('brightness').show(); // Hide brightness button
                $.getFeatureDiv('onlineplayers').show(); // Show onlineplayers button
                $.getFeatureDiv('textsize').show(); // Show textsize button

                // Show game & chat
                $("#gameholder").show(); // Show game
                $("#chat_container_cell").show(); // Show chat

                // Resize box
                $.setHeightBoth(iDefaultBothHeight);
                $.setWidthBoth(iDefaultBothWidth); // Resize game box per default
                $.setWidthGame(iDefaultGameWidth); // Resize game box per default
                $.setWidthChat(); // Resize chat enlarger per default
                $("#gameiframe").css("left", iDefaultGameLeft);

                $("span.onlyGameOrChat").hide(); // Hide game name

                // Unmute pings
                if (volumeValueOld > 0) {
                    volumeValue = volumeValueOld;
                    volumeValueOld = 0;
                    changeVolume();
                }

                gameOrChatHided = false;
                $.setCookieGame('DisplayMode', 0);
                $.setStyleDisplayMode(0); // Change display of button
                displayMode = 0;
            }
        }

        // Initialisation
        if (cookieDisplayMode == '-1') {
            $("#gameiframe").ready(function () {
                click_gameOnly();
            });
        } else if (cookieDisplayMode == '1') {
            $("#chat_rooms_container").ready(function () {
                click_chatOnly();
            });
            /*$('.chat_input').on('show', function(){
                $.log(10, "onHide launched !");
                $.setWidthChat(modif_chat_width);
            });*/

            //$("#chat_rooms_container").on('show', function () {

            $.initialize("#chat_rooms_container", function () {
                $.log(10, "chat_rooms_container ready launched !");
                $.setWidthChat(modif_chat_width);
                let width_nameGame = $("#maingame").width() - $(".user_connection").width() - 20;
                $("span.onlyGameOrChat").css("width", width_nameGame);
            });

        } else if (cookieDisplayMode == '0') {
            click_gameNchat();
        }

        // Evenements
        $('#bt_gameOnly').click(function () {
            click_gameOnly();
        });
        $('#bt_chatOnly').click(function () {
            click_chatOnly();
        });
        $('#bt_gameNchat').click(function () { // Default mode
            click_gameNchat();
        });
    }

    //if (aFeatures['lockscreen']['display'] && aFeatures['unreadMessages']['display']) {
    //if ($.isFeatureActive('lockscreen') && $.isFeatureActive('unreadMessages')) {
    if ((features.get('lockscreen') !== undefined) && features.get('lockscreen').isActive() && (features.get('unreadMessages') !== undefined) && features.get('unreadMessages').isActive()) {

        // Create the button with the icone & span for unread messages count
        //$.addButton('div', 'div_unreadMessages', 'bt_unreadMessages', 'Read new message', $.addIcon(icon_unreadMessage) + '<span id="msg-count"></span>').appendTo("body");

        features.get('unreadMessages').addDiv(new Button('bt_unreadMessages', 'Read new message(s)', $.addIcon(icon_unreadMessage) + '<span id="msg-count"></span>').html);

        // Actions did when the number of unread messages change
        /*function actionUnreadMessage() {
            $.log(10, "Call fumaybe you shouldnction actionUnreadMessage()");
            
            // If message unread and lockScreen on
            if ((parseInt($("#profile_control_unread_message_count").text(), 10) > 0) && $("#forth_fullscreen").is(":visible")) {
                $("#msg-count").text($("#profile_control_unread_message_count").text()); // Show the number of new messages
                $("#div_unreadMessages").show();
            } else {
                $("#div_unreadMessages").hide();
            }
        }*/
        $.initialize("#profile_control_unread_message_count", function () {
            actionUnreadMessage(); // No needed, observer is called once when the page is loading
        });

        //$("#forth_fullscreen").css("display")
        $.log(20, "#forth_fullscreen is visible ? " + $("#forth_fullscreen").is(":visible"));

        // create a new instance of `MutationObserver` named `observer`,
        // passing it a callback function
        const observer = new MutationObserver(function () {
            //console.log('callback that runs when observer is triggered');
            actionUnreadMessage();
        });

        // call `observe()` on that MutationObserver instance,
        // passing it the element to observe, and the options object
        observer.observe($("#profile_control_unread_message_count")[0], {
            childList: true
        });

        // Hide darkMode button when the height of the page is too low
        $(window).resize(function () {
            if ($(window).height() < (parseInt($("#maingame").css("height"), 10) + 60 /* height button */ + 20 /* padding gamebox */ )) {
                //$("#div_unreadMessages").hide();
                //$(aFeatures['unreadMessages']['divname']).hide();
                features.get('unreadMessages').hide();
            } else {
                //$("#div_unreadMessages").show();
                //$(aFeatures['unreadMessages']['divname']).show();
                features.get('unreadMessages').show();
            }
        });

        // Click on the button
        $('#bt_unreadMessages').click(function () {
            //$("#div_unreadMessages").hide(); // Hide the div with the button
            //$(aFeatures['unreadMessages']['divname']).hide();
            features.get('unreadMessages').hide();
            removeStyleUnreadMessage();
            window.open($("#my-messages-link").attr('href')); // Open a new page to show new messages
        });

        $("a#my-messages-link").mousedown(function () {
            removeStyleUnreadMessage();
        });
    }

    //if (aFeatures['lockscreen']['display']) {
    //if ($.isFeatureActive('lockscreen')) {
    if ((features.get('lockscreen') !== undefined) && features.get('lockscreen').isActive()) {
        /** Each time the window is resized, we keep the game centered */
        $(window).resize(function () {
            //if ($("#forth_fullscreen").css("display") == "block") {
            if ($("#forth_fullscreen").is(":visible")) {
                $("#floating_game_holder").centrerElementAbsolu();
            }
        });
    }
});
