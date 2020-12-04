/*!
 * Kong Addon for www.kongregate.com v1.5
 * https://github.com/Forthtilliath/Kong-Addon
 *
 * Copyright 2020 Forth
 * Released under the MIT license
 * 
 * @fileoverview All the CSS partitioned by page
 * @author Forth
 * @version 5
 */
//"use strict";

function loadCSS() {
    /***********************************************************************************************************************/
    /***** ALL PAGES *******************************************************************************************************/
    /***********************************************************************************************************************/
    if (namePage != '') {
        // Header
        jCSSRule("#header #header_logo", "bottom", "20px"); // Logo
        jCSSRule("#headerwrap", "background-color", bgColor_red_01); // Header bg color
        jCSSRule("#kong_header_link", "filter", "grayscale(0.6)"); // Logo dark
        // Menu user
        jCSSRule(".welcome-user>li", "background-color", bgColor_red_00); // Links menu colors
        jCSSRule(".welcome-user>li:hover", "background-color", bgColor_grey_02);
        jCSSRule(".welcome-guest", "background-color", bgColor_red_00);
        // Main menu
        jCSSRule(".main_nav_menu", "background-color", bgColor_grey_01); // Menu bg color
        jCSSRule(".main_nav_item:hover .main_nav_top_item, .main_nav_item:hover .main_nav_top_item.active", "background-color", bgColor_grey_01); // Menu buttons color
        jCSSRule(".main_navigation a", "color", linkColor_white); // Menu links color
        // Main menu : Success
        jCSSRule("#main_nav_achievements .game_link", "color", linkColor_red);
        // Main menu : My Kong
        jCSSRule(".main_nav_profile_sec", "color", linkColor_white); // Vignettes
        jCSSRule(".main_nav_profile_sec", "background", bgColor_grey_00);
        jCSSRule(".main_nav_profile_sec", "border-radius", "5px");
        jCSSRule(".main_nav_profile_link:hover", "background", bgColor_grey_00); // Hover vignettes
        jCSSRule(".main_nav_profile_link:hover", "box-shadow", "1px 1px 5px " + linkColor_white);
        jCSSRule("#main_nav_mykong .main-nav-sticker__name a", "color", linkColor_red); // Couleur des liens du menu
        jCSSRule("#main_nav_mykong .main_nav_friends_list strong a", "color", linkColor_red);
        // Under menu categories
        jCSSRule(".gamepage_categories_outer", "background-color", bgColor_grey_04);
        jCSSRule(".gamepage_categories_outer", "border-bottom", "3px solid");
        jCSSRule(".gamepage_categories_outer", "border-bottom-color", bgColor_red_01);
        // Background
        jCSSRule("html", "background-color", bgColor_grey_07);
        jCSSRule("#primarylayout", "background-color", bgColor_grey_00);

        // Footer
        jCSSRule("#subwrap", "background-color", bgColor_grey_07);
        jCSSRule("#footer", "color", linkColor_white);
        jCSSRule("#footer a", "color", color_grey_00);
        jCSSRule("#footer .kongregate_copyright a", "filter", "invert(1)");
        jCSSRule("#footer .footer_mtg--logo", "filter", "invert(1)");
        jCSSRule("#footer .large_kong_plus_icon", "filter", "invert(1)");

        jCSSRule(":focus", "outline", "none");

        // Box game
        jCSSRule(".hoverbox_cont", "background-color", bgColor_grey_01);
        jCSSRule(".hoverbox_cont", "border-radius", "5px");
        jCSSRule(".hoverbox .game_head", "background-color", bgColor_grey_07);
        jCSSRule(".hoverbox .game_head", "border-radius", "5px 5px 0 0");
        jCSSRule(".hoverbox .game_head .game_title a", "color", color_white);
        jCSSRule(".hoverbox .rating_unit .game_rating_footnote, .hoverbox .game_cont", "color", color_grey_00);
        jCSSRule(".hoverbox_below .hoverbox_cont", "border-radius", "5px");
        jCSSRule(".hoverbox_below .hoverbox_cont", "color", color_white);
        jCSSRule(".hoverbox .game_dev a", "color", color_white);
        // Box user
        jCSSRule(".mini_profile_header p a", "color", color_white);
        jCSSRule(".mini_profile_header li strong, .mini_profile_meta li strong, .mini_profile_developer_meta strong", "color", color_grey_00);
        jCSSRule(".mini_profile_header li a", "color", linkColor_red_02);
        jCSSRule(".mini_profile_meta li span, .mini_profile_game_count, .mini_profile_follower_count", "color", color_white);
        jCSSRule(".mini_profile_bio", "color", color_grey_00);
        jCSSRule(".mini_profile_actions, .mini_profile_developer_meta", "background-color", bgColor_grey_00);
        jCSSRule("div.bd", "color", color_grey_04); // Date of member since
        jCSSRule(".hoverbox .game_plays .kong_ico", "color", color_white); // Icons
    }
    /***********************************************************************************************************************/
    /***** MAIN PAGE *******************************************************************************************************/
    /***********************************************************************************************************************/
    if (namePage == 'accueil') {
        // Slider
        jCSSRule("#home .home_feat_roll .home_feat_nav .prev, #home .home_feat_roll .home_feat_nav .next", "background-color", bgColor_grey_01);
        jCSSRule("#home .home_feat_roll .home_feat_nav .prev, #home .home_feat_roll .home_feat_nav .next", "border", "1px solid");
        jCSSRule("#home .home_feat_roll .home_feat_nav .prev, #home .home_feat_roll .home_feat_nav .next", "border-color", color_grey_00);
        jCSSRule("#home .home_feat_roll .home_feat_nav .next:before", "border-color", "transparent transparent transparent " + color_grey_00);
        jCSSRule("#home .home_feat_roll .home_feat_nav .prev:before", "border-color", "transparent " + color_grey_00 + " transparent transparent");
        jCSSRule("#home .home_feat_roll .home_feat_nav .prev:hover, #home .home_feat_roll .home_feat_nav .next:hover", "background-color", bgColor_grey_02);
        // Box hover
        jCSSRule("#flash_messages_target .sitemessage", "border-radius", "5px"); // Message
        jCSSRule(".hoverbox_cont", "border-radius", "10px"); // Main box
        jCSSRule(".hoverbox .game_head", "background-color", bgColor_grey_00);
        jCSSRule(".hoverbox .game_head", "border-radius", "10px 10px 0 0"); // Top border-radius
        jCSSRule(".hoverbox .game_head .game_title a", "color", color_white);
        jCSSRule(".hoverbox .rating_unit .game_rating_footnote", "color", color_grey_00);
        jCSSRule(".hoverbox .game_cont", "background-color", bgColor_grey_00);
        jCSSRule(".hoverbox .game_cont", "color", color_white);
        jCSSRule(".hoverbox .game_cont", "border-radius", "0 0 10px 10px"); // Bot border-radius
        jCSSRule(".rating_btns .rating_star", "color", color_red_00);
        jCSSRule(".hoverbox .game_info", "color", color_white);
        jCSSRule(".hoverbox .game_dev a", "color", color_grey_00);
        jCSSRule("#home.new_home .home-pod ul", "width", "auto");
        // Central block
        jCSSRule("#home.new_home #home_pods", "background-color", bgColor_grey_04);
        jCSSRule("#home.new_home #home_pods", "border-radius", "10px");
        jCSSRule("#home.new_home .home-pod-header a", "color", linkColor_red); // See all links in titles
        jCSSRule("#trending_pod_holder", "border-radius", "5px");
        jCSSRule("div.home-pod-header .home-pod-title", "color", color_white); // Titles
        jCSSRule("#home #show_more_link .large_show_more_area", "color", color_white); // Show more (bot)
        jCSSRule("#home #show_more_link .large_show_more_area:hover", "color", color_black); // Show more (bot)
        jCSSRule(".browse_rating .num_rating", "color", color_white); // Average stars
        jCSSRule(".browse_rating .num_rating", "color", color_white); // Average stars
        // Recommanded games
        jCSSRule("#home.new_home #recommended_games_pod_holder .game", "color", color_white); // Info
        //jCSSRule("#home.new_home #recommended_games_pod_holder .game", "background-color", bgColor_grey_02); // Recommanded games bg
        //jCSSRule("#home.new_home #recommended_games_pod_holder .game:hover", "background-color", bgColor_grey_02); // Recommanded games bg
        jCSSRule("#home.new_home #recommended_games_pod_holder .game .title .play_link", "color", linkColor_red); // Title link
        jCSSRule("#home.new_home #recommended_games_pod_holder .game .info .hover_game_info", "color", linkColor_red); // Info link
        jCSSRule("#home.new_home #recommended_games_pod_holder .game .game_footer", "background-color", bgColor_grey_07); // Bg stars
        jCSSRule("#home.new_home #recommended_games_pod_holder .game .tags .term", "background-color", bgColor_grey_05); // Tags
        jCSSRule("#home.new_home #recommended_games_pod_holder .game .tags .term:hover", "color", color_grey_01); // Tags
        jCSSRule("#home.new_home #recommended_games_pod_holder .game .tags .term:hover", "background-color", bgColor_grey_06); // Tags
        // Top games of months
        jCSSRule("#home.new_home .game-pod-med", "background-color", bgColor_grey_04);
        jCSSRule("#home.new_home .game-pod-med .rating, #home.new_home .game-pod-med .developer", "color", color_white);
        jCSSRule("#home.new_home .game-pod-med .rating, #home.new_home .game-pod-med .developer:hover", "color", color_white);
        jCSSRule("#home.new_home .game-pod-med:hover", "background-color", bgColor_grey_01);
        jCSSRule("#home.new_home .game-pod-med:hover", "border-radius", "5px");
        jCSSRule("#home.new_home .game-pod-med:hover img", "border-radius", "5px 0 0 5px");
        jCSSRule("#top_games_this_month_pod .hover_game_info", "color", linkColor_red);
        // Trending in your network
        jCSSRule("#home.new_home #trending_pod_holder", "background-color", bgColor_grey_01);
        jCSSRule("#trending_pod_holder h2 a", "color", color_white);
        jCSSRule("#trending_pod_holder .trending-item a .desc", "color", color_white);
        // Box under Trending in your network
        jCSSRule("#home #home_pods>.line:not(#home-browse-pods)", "width", "auto");
        jCSSRule("#home #home_pods>.line:not(#home-browse-pods)", "display", "flex");
        jCSSRule("#home #home_pods>.line:not(#home-browse-pods)", "justify-content", "space-between");
        jCSSRule("#home #home_pods>.line:not(#home-browse-pods) > div", "width", "300px");
        jCSSRule("#home.new_home #most_played_games_pod", "padding-left", "0");
        jCSSRule("#home #home_pods>.line:not(#home-browse-pods) > div > ul", "width", "300px");
        jCSSRule("#home #home_pods>.line:not(#home-browse-pods) > div > ul > li", "width", "300px");
        jCSSRule("#home.new_home .game-pod-med", "margin", "8px 0px 0");
        jCSSRule("#home.new_home .game-pod-med .title .txt", "color", linkColor_red); // Most played & Community favorites
        // Top games by category
        jCSSRule("#home .pod_header", "color", color_white);
        jCSSRule("#home .pod_header h2, #home .pod_header h2 a", "color", color_white);
        jCSSRule("#home .pod_header .pod_all a", "color", linkColor_red);
        jCSSRule("#browsebycategory .category dt a, #browsebycategory .category_head_fake_link, #extra_games .category dt a, #extra_games .category_head_fake_link", "color", linkColor_red);
        jCSSRule("#browsebycategory .category .browse_games .graybg, #extra_games .category .browse_games .graybg", "background-color", bgColor_grey_01);
        jCSSRule("#browsebycategory .category dd a, #extra_games .category dd a", "color", color_white);
        jCSSRule("#browsebycategory .category .browse_games .browse_game_title .browse_developer, #extra_games .category .browse_games .browse_game_title .browse_developer", "color", color_grey_00);
        jCSSRule(".game_hover:hover, .game_hover.game_hover_active", "background-color", bgColor_grey_01 + "!important");
        jCSSRule("#browsebycategory .category .viewall, #extra_games .category .viewall", "color", linkColor_red);

        // 
        jCSSRule("#game_spotlights_pod h6", "color", color_white);
        jCSSRule(".pod_container", "background-color", bgColor_grey_04);
        jCSSRule("#home #kongregate_social_connect_pod .twitter_container", "background-color", bgColor_grey_04);
        jCSSRule("#home #kongregate_social_connect_pod .twitter_container", "box-shadow", "inset 0 8px 6px -6px " + color_grey_11);
        jCSSRule("#home #kongregate_social_connect_pod .twitter_container", "border-bottom", "1px solid");
        jCSSRule("#home #kongregate_social_connect_pod .twitter_container", "border-bottom-color", color_grey_11);
        jCSSRule("#twitter-widget-0 #widget .btn-o a", "color", linkColor_red);
    }
    /***********************************************************************************************************************/
    /***** GAMES PAGES *****************************************************************************************************/
    /***********************************************************************************************************************/
    if ((namePage == 'allgames') || (namePage == 'accounts')) {
        jCSSRule("#feature > h1", "color", color_white);
        jCSSRule("#category.game_browser .category_listing_header", "background-color", bgColor_grey_07);
        jCSSRule("#category.game_browser .browser_outer", "background-color", bgColor_grey_00);
        jCSSRule("#category.game_browser .callout_listing .game, .promotion-type--browser .callout_listing .game", "background-color", bgColor_grey_08 + "!important");
        jCSSRule("#category.game_browser .callout_listing .game:hover, .promotion-type--browser .callout_listing .game:hover", "background-color", bgColor_grey_08);
        jCSSRule("#category.game_browser .callout_listing .game .game_footer, .promotion-type--browser .callout_listing .game .game_footer", "background-color", bgColor_grey_07);
        jCSSRule("#category.game_browser .callout_listing .game .title a, .promotion-type--browser .callout_listing .game .title a", "color", linkColor_red);
        jCSSRule(".hyphenate, .hyphenate *", "color", color_grey_00);
        jCSSRule("#category.game_browser .callout_listing .game .game_footer>*, .promotion-type--browser .callout_listing .game .game_footer>*", "color", color_grey_00);
        jCSSRule("#category.game_browser .callout_listing .game .link, .promotion-type--browser .callout_listing .game .link", "color", linkColor_red);
        jCSSRule("#category.game_browser .callout_listing .game .link, .promotion-type--browser .callout_listing .game .link", "background-color", bgColor_grey_07);
        jCSSRule("#category.game_browser .callout_listing .game .link, .promotion-type--browser .callout_listing .game .link", "border-top", "1px solid");
        jCSSRule("#category.game_browser .callout_listing .game .link, .promotion-type--browser .callout_listing .game .link", "border-top-color", color_grey_04);
        jCSSRule("#category.game_browser .callout_listing .game .link, .promotion-type--browser .callout_listing .game .link", "text-align", "center");
        jCSSRule("#category.game_browser .callout_listing .game .link, .promotion-type--browser .callout_listing .game .link", "bottom", "0");
        jCSSRule("#category.game_browser .callout_listing .game .link, .promotion-type--browser .callout_listing .game .link", "left", "0");
        jCSSRule("#category.game_browser .callout_listing .game .link, .promotion-type--browser .callout_listing .game .link", "display", "block");
        jCSSRule("#category.game_browser .callout_listing .game .link, .promotion-type--browser .callout_listing .game .link", "width", "calc(100% - 20px)");
        jCSSRule("#category.game_browser .callout_listing .game .link, .promotion-type--browser .callout_listing .game .link", "padding", "10px");
        jCSSRule("#category.game_browser .category_listing .pagination, .promotion-type--browser .category_listing .pagination", "background-color", bgColor_grey_07);
        jCSSRule("#category.game_browser .category_listing .pagination li, .promotion-type--browser .category_listing .pagination li", "color", color_grey_00);
        jCSSRule("#category.game_browser .category_listing .pagination li.info, .promotion-type--browser .category_listing .pagination li.info", "color", color_white);
        jCSSRule("#category .category_listing ul.simple_pagination li a", "color", linkColor_red);
    }

    if (namePage == 'games') {
        // Window game
        let chatHeight = $("#chat_container").css("height");
        let gameHeight = `calc( ${chatHeight} + ${menuButtonsHeight} )`;
        let newHeight = `calc( ${chatHeight} + ${menuButtonsHeight} )`;
        $("#maingame").css("height", newHeight);
        $("#maingamecontent").css("height", newHeight);
        $("#flashframecontent").css("height", newHeight);
        jCSSRule("#flashframecontent .game_table > tbody > tr:first-child", "height", menuButtonsHeight);

        // Title of the game
        jCSSRule("#play .gamepage_header_outer h1", "width", "100%");
        jCSSRule("#main h2", "color", color_white);

        // Quick links bar
        jCSSRule("#play #maingame .user_connection", "padding-top", "3.5px"); // Align pseudo logged
        jCSSRule("#maingamecontent .game_table .links_connect", "height", "30px");
        jCSSRule("#play #maingame .user_connection .logged_in_user", "margin-top", "2px"); // Username
        jCSSRule(".user_connection #chat_connected_indicator", "margin-top", "1px"); //Green logo

        jCSSRule("#quicklinks > li:not(:first-child)", "display", "none");
        jCSSRule("#quicklinks > li:not(:first-child)", "margin-top", "6px");
        //jCSSRule("#quicklinks", "margin-top", "5px");
        jCSSRule("#quicklinks > li", "margin", "0 14px 0 0");

        jCSSRule(".upper_gamepage", "background-color", bgColor_grey_00); // Bg of top of the page
        jCSSRule("#maingamecontent #gameholder", "filter", "brightness(" + brightnessValue + ")"); // Game div

        // Chat        
        jCSSRule("#kong_game_ui .user_row .rank_icon, #kong_game_ui .user_row .friend_icon, #kong_game_ui .user_row .mobile_icon", "filter", "invert(1)"); // Icon in online players
        jCSSRule("#kong_game_ui .user_row.muted .username", "color", color_red_00); // Users muter in online players
        jCSSRule("#kong_game_ui .tabpane", "background-color", bgColor_grey_01); // Conturn chat
        jCSSRule("#kong_game_ui .room_name_container", "color", color_grey_03); // Room name
        jCSSRule("#kong_game_ui .room_name_container .room_name", "color", color_grey_03); // Room name
        //jCSSRule("#kong_game_ui .chat_actions_container", "filter", "invert(0.9)"); // Settings menu
        jCSSRule("#kong_game_ui .chat_actions_container .btn_tools", "background-color", bgColor_grey_03); // Settings icon
        jCSSRule("#kong_game_ui .chat_actions_container .btn_tools", "filter", "invert(0.9)"); // Settings icon
        jCSSRule("#kong_game_ui .chat_actions_container .chat_actions_list", "background-color", bgColor_grey_00); // Settings item
        jCSSRule("#kong_game_ui .chat_actions_container .chat_actions_list li", "background-color", bgColor_grey_00); // Settings item
        jCSSRule("#kong_game_ui .chat_actions_container .chat_actions_list li", "color", color_grey_09); // Settings item
        jCSSRule("#kong_game_ui .chat_actions_container .chat_actions_list li", "border-color", color_grey_09);
        jCSSRule("#kong_game_ui .chat_actions_container .chat_actions_list li:hover", "background-color", bgColor_grey_01);
        jCSSRule("#kong_game_ui .chat_actions_container .chat_actions_list li:hover", "color", color_grey_03);
        jCSSRule("#kong_game_ui .chat_message_window .chat_message_window_username", "color", color_blue_00); // Other player's username color
        jCSSRule("#kong_game_ui .chat_message_window .is_self span", "color", color_red_01); // Username color
        jCSSRule("#kong_game_ui .chat_message_window .is_self", "color", color_red_01); // Username color
        jCSSRule("#kong_game_ui .chat_message_window .sent_whisper span.username", "color", color_red_01); // Username color in pm
        jCSSRule("#kong_game_ui .chat_message_window", "background-color", bgColor_grey_00);
        jCSSRule("#kong_game_ui .chat_message_window", "color", color_grey_04);
        jCSSRule("#kong_game_ui .chat_message_window p", "background-color", bgColor_grey_00);
        jCSSRule("#kong_game_ui .chat_message_window .whisper", "background-color", bgColor_grey_00);
        jCSSRule("#kong_game_ui .chat_message_window .even", "background-color", bgColor_grey_08);
        //jCSSRule("#kong_game_ui .chat_message_window p .message", "color", "#e4e4e4");
        jCSSRule("#kong_game_ui .chat_message_window p .message", "color", color_grey_03); // Text color in chat
        jCSSRule("#kong_game_ui .chat_message_window p .message a", "color", linkColor_yellow); //Links in chat
        jCSSRule("#kong_game_ui .chat_message_window p .message a", "text-decoration", "none");
        jCSSRule("#kong_game_ui .chat_message_window .chat_message_window_undecorated_username[username='Kong Bot']", "color", color_green); // Kong bot
        jCSSRule("#kong_game_ui .chat_message_window .error_msg", "color", color_red_02); // Error message (spam)
        jCSSRule("#kong_game_ui .chat_message_window .error_msg", "background-color", bgColor_grey_05);
        jCSSRule("body:not(.no-flexbox) #chat_rooms_container .chat_message_window", "border", "2px double");
        jCSSRule("body:not(.no-flexbox) #chat_rooms_container .chat_message_window", "border-color", color_grey_01);
        jCSSRule("body:not(.no-flexbox) #chat_rooms_container .chat_message_window", "border-radius", "2px");
        //jCSSRule(".chat_message_window_username", "line-height", "14px");
        jCSSRule(".chat_message_window span", "line-height", "120%"); // Interline & v-align messages
        jCSSRule(".chat_message_window span", "vertical-align", "middle");
        jCSSRule("#kong_game_ui .chat_message_window p span", "vertical-align", "middle");
        jCSSRule("#kong_game_ui .chat_message_window p .username span", "vertical-align", "sub");
        // Clicked on user
        jCSSRule(".return_to_room a", "color", linkColor_red); // Return to game
        jCSSRule("#kong_game_ui .tabpane .contents_inner", "background-color", bgColor_grey_00);
        jCSSRule("#user_mini_profile_contents .mini_username", "color", color_white); // Username
        jCSSRule(".hinted_value", "color", color_grey_00); // Now playing
        jCSSRule("#user_mini_profile_contents #user_info ul", "color", color_white); // Member since
        jCSSRule("#user_mini_profile_contents #user_info ul li span", "color", color_grey_00); // Member since date
        jCSSRule("#user_mini_profile_contents h5", "color", color_white); // Favorite Games
        jCSSRule("#user_description a", "color", linkColor_red); // Favorite Games
        jCSSRule("#user_mini_profile_contents #user_info ul.user_actions li", "filter", "invert(1)"); // Icons Unfriend / Mute / Report
        jCSSRule("#user_mini_profile_contents #user_info ul.user_actions li a", "color", linkColor_red_invert); // Labels Unfriend / Mute / Report

        // Input
        jCSSRule("#kong_game_ui .chat_controls .chat_input", "background-color", bgColor_grey_00);
        jCSSRule("#kong_game_ui .chat_controls .chat_input", "color", color_grey_04);
        jCSSRule("#kong_game_ui .chat_controls .chat_input", "height", "46px");
        jCSSRule("#kong_game_ui .chat_controls .chat_input:focus", "outline", "none");
        jCSSRule("#kong_game_ui .chat_controls .chat_input:focus", "border", "1px inset");
        jCSSRule("#kong_game_ui .chat_controls .chat_input:focus", "border-color", color_white);
        jCSSRule("#kong_game_ui .chat_controls .chat_input:focus", "width", "278px");
        jCSSRule("#kong_game_ui .chat_controls .chat_input:focus", "height", "44px");

        // Shiny
        jCSSRule(".chat-sticker-tab__normal, .chat-sticker-tab__shiny", "color", color_grey_07); // Hover

        // Tabs games
        jCSSRule("#kong_game_ui ul.main_tabs li.tab a.active", "background-color", bgColor_grey_01);
        jCSSRule("#kong_game_ui ul.main_tabs li.tab a.active", "color", color_grey_02);
        jCSSRule("#kong_game_ui ul.main_tabs li.closeable a.active .close_tab_link", "background-color", bgColor_grey_01);
        jCSSRule(".panel_handle a", "color", color_grey_03);
        jCSSRule("#kong_game_ui ul.main_tabs li.tab a:not(.active)", "background-color", bgColor_grey_09);
        jCSSRule(".chat_char_countdown", "background-color", bgColor_grey_00);

        // Tabs rooms
        jCSSRule("#kong_game_ui .chat_room_tab:not(.active) a", "background-color", bgColor_grey_10);
        jCSSRule("#kong_game_ui .chat_room_tab:not(.active) a", "color", color_grey_06);
        jCSSRule("#kong_game_ui .chat_room_tab.active a", "background-color", bgColor_grey_00);
        jCSSRule("#kong_game_ui .chat_room_tab.active a", "color", color_grey_06);

        // Players online
        jCSSRule("#kong_game_ui .user_row .guest_count_in_room", "color", color_grey_08);
        jCSSRule("#kong_game_ui .users_in_room", "background-color", bgColor_grey_00); // Box
        jCSSRule("#kong_game_ui .users_in_room", "border", "2px double");
        jCSSRule("#kong_game_ui .users_in_room", "border-color", color_grey_01);
        jCSSRule("#kong_game_ui .users_in_room", "border-radius", "2px");
        jCSSRule("#kong_game_ui .user_row .username", "color", color_grey_04); // Username

        // Tab Game
        jCSSRule(".cntrToggle", "background-color", bgColor_grey_04); //Boxes
        jCSSRule(".cntrToggle", "border-radius", "2px");
        jCSSRule(".cntrToggle", "border", "1px solid");
        jCSSRule(".cntrToggle", "border-color", color_white);
        jCSSRule(".cntrToggle", "color", color_grey_00);
        jCSSRule("#game_news_posts .h6_alt", "color", color_white); // Dates
        jCSSRule("#game_news_posts .h6_alt", "font-weight", "bold");
        jCSSRule("#game_info em", "color", color_grey_09); // Infos
        jCSSRule("#game_info .creatorinfo p a", "color", color_white);
        jCSSRule("#game_info_panel ul a", "color", linkColor_red);
        jCSSRule("#chat_room_chooser .return_to_room a", "color", linkColor_red);
        jCSSRule("#kong_game_ui #chat_room_chooser .choose_room_text", "color", color_grey_00);
        jCSSRule("#kong_game_ui #chat_room_chooser .room_list_header", "background-color", bgColor_grey_01);
        jCSSRule("#kong_game_ui #chat_room_chooser .rooms_list", "background-color", bgColor_grey_00);
        jCSSRule("#kong_game_ui #chat_room_chooser .room_list_header", "border-radius", "5px 5px 0 0");
        jCSSRule("#kong_game_ui #chat_room_chooser .rooms_list", "border-radius", "0 0 5px 5px");
        jCSSRule("#kong_game_ui #chat_room_chooser .rooms .room .name", "color", color_red_01);
        jCSSRule(".show_more_text_block .truncated_text p", "color", color_grey_00); //Description
        jCSSRule(".show_more_text_block .full_text p", "color", color_grey_00);
        jCSSRule(".show_more_text_block .truncated_text a", "color", linkColor_red);
        jCSSRule(".show_more_text_block .full_text a", "color", linkColor_red);

        // Log in
        jCSSRule("#registration_form .error_block", "color", linkColor_red);
        jCSSRule("#registration_form a", "color", linkColor_red);

        // Alerte (loged somewhere else)
        jCSSRule("#alert_tab_pane_content a", "color", linkColor_red);
        jCSSRule("#alert_tab_pane_content > h4", "color", color_grey_03);
        jCSSRule("#session_conflict_content_for_chat_tab > h4", "color", color_grey_03);
        jCSSRule(".disconnect_content .disconnect_intro", "filter", "invert(1)"); // Alert logo
        jCSSRule("#kong_game_ui ul.main_tabs li.closeable a.active .close_tab_link", "filter", "invert(1)"); // Close icon

        // First box under game
        jCSSRule(".game_details_outer", "margin", "-49px auto 10px");
        jCSSRule(".game_details_outer", "border-radius", "5px");
        jCSSRule(".game_details_outer", "background", "none");
        jCSSRule(".game_details_outer", "background-color", bgColor_grey_01);
        jCSSRule(".game_details_outer", "background-image", "linear-gradient(to bottom, " + bgColor_grey_07 + ", " + bgColor_grey_01 + ")");
        jCSSRule("h2 .fn", "color", color_white); // Game title
        jCSSRule(".highcontrast", "color", color_white + "!important");
        jCSSRule(".game_details_outer .game_rating_label, .game_dev_title", "color", color_grey_04);
        jCSSRule(".favorite a, .play_later a, .game_dev a", "color", linkColor_red); // Recommanded game box hover
        jCSSRule(".game_details_outer .game_link a", "color", color_grey_04); // Bug / Report / Block
        jCSSRule(".games_pod_scrollable .pod_game_header a, .game_info_tabs .game_description_txt a", "color", linkColor_red); // Game names
        jCSSRule(".game_details_outer .game_user_fav p", "color", color_white); // Favorite


        // Second box under game
        jCSSRule("#play .game_page_wrap", "border-radius", "10px");
        jCSSRule("#play .game_page_wrap", "padding-top", "10px");
        jCSSRule("#play .game_page_wrap", "padding-bottom", "20px");
        jCSSRule("#play .game_page_wrap", "margin-top", "10px");
        jCSSRule("#play .game_page_wrap", "margin-bottom", "20px");
        jCSSRule("#play .game_page_wrap", "background-color", bgColor_grey_01);
        jCSSRule(".tab_group, .game_tab_group, .tab_link.active, .game_tab_item.active .game_tab_link", "background", bgColor_grey_00); // Tab
        jCSSRule(".game_more_games .pod_header", "background", bgColor_grey_00);
        jCSSRule(".game_more_games .game_spotlight > span", "color", color_grey_00);
        jCSSRule(".game_hover:hover, .game_hover.game_hover_active", "background-color", bgColor_grey_01 + " !important");
        jCSSRule(".tab_link.active::before, .game_tab_item.active .game_tab_link::before", "border-color", "transparent transparent " + bgColor_grey_00 + " " + bgColor_grey_00);
        jCSSRule(".tab_link.active, .game_tab_item.active .game_tab_link", "border-top-color", color_grey_00);
        jCSSRule(".tab_group, .game_tab_group, .tab_link.active, .game_tab_item.active .game_tab_link", "color", color_white + " !important");
        jCSSRule(".tab_link, .game_tab_link, .game_tab_link--link", "color", color_white + " !important"); // Tab not active
        jCSSRule(".tab_index, .game_tab_index", "background", bgColor_grey_01); // Tab not active
        jCSSRule(".tab_link, .game_tab_link", "background", bgColor_grey_01); // Tab not active
        jCSSRule(".tab_link:hover, .game_tab_link:hover", "color", color_black + " !important"); // Tab not active
        jCSSRule(".game_comments .comments_type", "background", bgColor_grey_00); // Div Meilleur (tout voir)
        jCSSRule(".game_comments .comments_type a", "color", linkColor_red); // Div Meilleur (tout voir)
        jCSSRule(".game_comments .comment .sender_name_link", "color", color_white); // User name post
        jCSSRule(".comment.above_threshold .comment_rating_area", "color", color_green); // Counter plus
        jCSSRule("recent_comments", "border-top", "1px dotted"); // User name post
        jCSSRule("recent_comments", "border-top-color", color_white); // Most recent
        jCSSRule(".comment_new .new_comment_avatar", "filter", "invert(0.9)"); // Avatar
        jCSSRule(".game_comments .game_comment_form_lower, .game_discussions .game_discussions_links", "background-image", "none"); // Box bot Avatar
        jCSSRule(".game_comments .game_comment_form_lower, .game_discussions .game_discussions_links", "background-color", bgColor_grey_00); // Box bot Avatar
        // Forum post tab
        jCSSRule(".game_discussions .game_forum_post.sticky_game_post .post_title a, .game_discussions .post_title a", "color", linkColor_red);
        jCSSRule(".game_discussions .game_forum_post .last_post .post_author", "color", color_white);
        jCSSRule(".game_discussions .game_forum_post .post_count", "color", color_white);
        jCSSRule(".game_comments .game_comment_form_lower a, .game_discussions .game_discussions_links a", "color", linkColor_red);
        // Best scores
        jCSSRule(".your_best_score", "background-color", bgColor_grey_00);
        jCSSRule(".microtabs .tab_title.active", "background-color", bgColor_grey_01);
        jCSSRule(".microtabs .tab_title.active a", "color", color_white);
        jCSSRule(".microtabs .tab_title.dormant", "background-color", bgColor_grey_06);
        jCSSRule(".microtabs .tab_title.dormant a", "color", color_black);
        jCSSRule(".score_table .score.even", "background-color", bgColor_grey_01);
        jCSSRule(".score_table .score.even", "color", color_white);
        jCSSRule(".score_table .score.odd", "background-color", bgColor_grey_00);
        jCSSRule(".score_table .score.odd", "color", color_white);
        jCSSRule(".microtabs .tab_box", "background-color", bgColor_grey_01);
        jCSSRule(".score_table .score .name a", "color", color_white);
        jCSSRule("ul.pagination li", "color", color_grey_00);
        jCSSRule("ul.pagination li.current", "color", color_white);
        jCSSRule("ul.pagination li a", "color", linkColor_red);

        // Tab High scores
        jCSSRule("div#high_scores_container a, div#high_scores_container a:link, div#high_scores_container a:active", "color", linkColor_red);
        jCSSRule("span#high_score_panel_stat_select", "color", color_grey_03);
        jCSSRule("#high_scores_container ul.high_score_tabs li.high_score_panel_tab a.active", "background-color", bgColor_grey_00);
        jCSSRule("#high_scores_container ul.high_score_tabs li.high_score_panel_tab a.active", "color", color_grey_06);
        jCSSRule("#high_scores_container table tr:nth-child(even) td", "background-color", bgColor_grey_00);
        jCSSRule("#high_scores_container table tr:nth-child(odd) td", "background-color", bgColor_grey_08);
        jCSSRule("#high_scores_container table tr td", "color", color_grey_04);
        jCSSRule("#high_scores_container table td.username a", "color", color_grey_04);
        jCSSRule("#high_scores_container table tr th", "background-color", bgColor_grey_00);
        jCSSRule("#high_scores_container table tr th", "color", color_grey_04);
        jCSSRule("#high_scores_container table tr.myscore td", "background-color", bgColor_grey_05);
        jCSSRule("#high_scores_container table tr.myscore td", "color", color_black);
        jCSSRule("#high_scores_container table tr.myscore td a", "color", color_black);
        jCSSRule("#high_scores_container .bucket", "background-color", bgColor_grey_00);
        jCSSRule("#high_scores_container .pagination", "background-color", bgColor_grey_00);
        jCSSRule("div#highscores_board li.current", "color", color_grey_06);

        // Tab Accomplishments
        jCSSRule("div#accomplishments_tab_content a, div#accomplishments_tab_content a:link, div#accomplishments_tab_content a:active", "color", linkColor_red);
        jCSSRule("span.no_accomplishments_completed", "color", color_grey_03);

        jCSSRule("#kong_game_ui .chat_promotion", "background-color", bgColor_grey_01);
        jCSSRule("#kong_game_ui .chat_promotion", "color", color_grey_10);

        jCSSRule("#kong_game_ui .default_tab_pane_content", "background-color", bgColor_grey_01);
        jCSSRule("#kong_game_ui .default_tab_pane_content", "color", color_grey_06);

        // Tab Signin/Signup
        jCSSRule("#normal-registration-wrapper > p.mts.mbm", "color", color_grey_06);
        jCSSRule("#normal-registration-wrapper > p.mts.mbm a", "color", linkColor_red);
        jCSSRule("#kong_game_ui .chat_message_window .history-button", "background-color", bgColor_grey_04); // Load older message
        jCSSRule("#kong_game_ui .chat_message_window .history-button:hover", "background-color", bgColor_grey_01); // Load older message
        jCSSRule("#kong_game_ui .signup_tab_form h3", "color", color_white);
        jCSSRule("#kong_game_ui .signup_tab_form form input.check_box", "margin-top", "2px !important");
    }
    /***********************************************************************************************************************/
    /***** FORTH ADDON *****************************************************************************************************/
    /***********************************************************************************************************************/
    if (namePage != '') {
        jCSSRule("#div_darkmode", "top", "5px");
        jCSSRule("#div_darkmode", "left", "5px");
        jCSSRule("#div_darkmode", "position", "fixed");
        jCSSRule("#div_darkmode", "z-index", "10000");
        jCSSRule("#bt_darkmode", "width", "40px");
        jCSSRule("#bt_darkmode", "height", "25px");
        jCSSRule("#bt_darkmode", "padding", "5px");
        jCSSRule("#bt_darkmode", "cursor", "pointer");
        jCSSRule("#bt_darkmode", "border", "1px solid");
        jCSSRule("#bt_darkmode", "border-color", color_grey_00);
        jCSSRule("#bt_darkmode", "background-color", bgColor_grey_00);
        jCSSRule("#bt_darkmode", "color", color_white);
        jCSSRule("#bt_darkmode", "border-radius", "5px");
        jCSSRule("#bt_darkmode", "box-shadow", "1px 1px 3px " + color_white);
    }
    if (namePage == 'games') {
        jCSSRule("#maingamecontent .game_table .links_connect", "padding-top", "5px");
        // All buttons
        jCSSRule("#forth_onlineplayers, #forth_hideChat, #forth_lockscreen, #forth_fontsize, #forth_fontsize, #forth_brightness, #forth_volume", "float", "right");
        jCSSRule("#forth_onlineplayers, #forth_hideChat, #forth_lockscreen, #forth_fontsize, #forth_fontsize, #forth_brightness, #forth_volume", "margin", "0 5px");
        jCSSRule("#forth_onlineplayers, #forth_hideChat, #forth_lockscreen, #forth_fontsize, #forth_fontsize, #forth_brightness, #forth_volume", "height", "25px");
        jCSSRule("#quicklinks", "height", "25px");
        jCSSRule("#bt_onlineplayers, #bt_hideChat, #bt_lockscreen, #bt_showquicklinks, #slt_fontsize, #slt_brightness, #slt_volume", "height", "25px");
        jCSSRule("#bt_onlineplayers, #bt_hideChat, #bt_lockscreen, #bt_showquicklinks, #slt_fontsize, #slt_brightness, #slt_volume", "padding", "0 5px");
        jCSSRule("#bt_onlineplayers, #bt_hideChat, #bt_lockscreen, #bt_showquicklinks, #slt_fontsize, #slt_brightness, #slt_volume", "cursor", "pointer");
        jCSSRule("#bt_onlineplayers, #bt_hideChat, #bt_lockscreen, #bt_showquicklinks, #slt_fontsize, #slt_brightness, #slt_volume", "border", "1px solid");
        jCSSRule("#bt_onlineplayers, #bt_hideChat, #bt_lockscreen, #bt_showquicklinks, #slt_fontsize, #slt_brightness, #slt_volume", "border-color", color_grey_00);
        jCSSRule("#bt_onlineplayers, #bt_hideChat, #bt_lockscreen, #bt_showquicklinks, #slt_fontsize, #slt_brightness, #slt_volume", "background-color", bgColor_grey_00);
        jCSSRule("#bt_onlineplayers, #bt_hideChat, #bt_lockscreen, #bt_showquicklinks, #slt_fontsize, #slt_brightness, #slt_volume", "color", color_white);
        jCSSRule("#bt_onlineplayers, #bt_hideChat, #bt_lockscreen, #bt_showquicklinks, #slt_fontsize, #slt_brightness, #slt_volume", "border-radius", "5px");
        jCSSRule("#bt_onlineplayers, #bt_hideChat, #bt_lockscreen, #bt_showquicklinks, #slt_fontsize, #slt_brightness, #slt_volume", "width", "40px");
        jCSSRule("#bt_onlineplayers, #bt_hideChat, #bt_lockscreen, #bt_showquicklinks, #slt_fontsize, #slt_brightness, #slt_volume", "height", "25px");
        jCSSRule("#slt_fontsize, #slt_brightness", "width", "65px");
        jCSSRule("#slt_brightness", "width", "70px");
        jCSSRule("#slt_volume", "width", "70px");
        // Select menus
        jCSSRule("#forth_fontsize > span, #forth_brightness > span, #forth_volume > span", "color", color_white);
        jCSSRule("#forth_fontsize > span, #forth_brightness > span, #forth_volume > span", "height", "25px");
        jCSSRule("#forth_fontsize > span, #forth_brightness > span, #forth_volume > span", "width", "20px");
        jCSSRule("#forth_fontsize > span, #forth_brightness > span, #forth_volume > span", "display", "inline-block");
        jCSSRule("#forth_fontsize > span, #forth_brightness > span, #forth_volume > span", "font-size", "18px");
        jCSSRule("#forth_fontsize > span, #forth_brightness > span, #forth_volume > span", "vertical-align", "sub");
        jCSSRule("#forth_fontsize > span, #forth_brightness > span, #forth_volume > span", "padding-right", "5px");
        jCSSRule("#forth_lockscreen > button:focus", "outline", "none");
        // Div lock screen
        jCSSRule("#forth_fullscreen", "height", "100%");
        jCSSRule("#forth_fullscreen", "width", "100%");
        jCSSRule("#forth_fullscreen", "background-color", bgColor_grey_00);
        jCSSRule("#forth_fullscreen", "position", "fixed");
        jCSSRule("#forth_fullscreen", "top", "0");
        jCSSRule("#forth_fullscreen", "left", "0");
        jCSSRule("#forth_fullscreen", "z-index", "9999");
        jCSSRule("#forth_fullscreen", "display", "none");
        // Locked
        jCSSRule("#forth_lockscreen > button.locked", "color", color_grey_07);
        jCSSRule("#forth_lockscreen > button.locked", "background-color", bgColor_grey_09);
        // Game
        jCSSRule(".game_ahead", "position", "absolute");
        jCSSRule(".game_ahead", "z-index", "10000");
        //jCSSRule("#bt_showquicklinks", "padding-top", "0");
        // Message box
        jCSSRule("#forth_messagebox", "height", "100px");
        jCSSRule("#forth_messagebox", "width", "90%");
        jCSSRule("#forth_messagebox", "top", "0");
        jCSSRule("#forth_messagebox", "left", "calc( 10% / 2)");
        jCSSRule("#forth_messagebox", "background-color", bgColor_grey_07);
        jCSSRule("#forth_messagebox", "position", "absolute");
        jCSSRule("#forth_messagebox", "z-index", "10000");
        jCSSRule("#forth_messagebox", "border-radius", "0 0 20px 20px");
        jCSSRule("#forth_messagebox", "border", "2px solid");
        jCSSRule("#forth_messagebox", "border-color", color_grey_00);
        jCSSRule("#forth_messagebox", "border-top", "none");
        jCSSRule("#forth_messagebox", "display", "none");
        jCSSRule("#forth_messagebox #forth_messagetitle", "text-align", "center");
        jCSSRule("#forth_messagebox #forth_messagetitle", "color", color_white);
        jCSSRule("#forth_messagebox #forth_messagetitle", "font-size", "30px");
        jCSSRule("#forth_messagebox #forth_messagetitle", "padding-top", "30px");
        jCSSRule("#forth_messagebox #forth_messagetitle", "height", "50px");
        jCSSRule("#forth_messagebox #forth_messagedesc", "text-align", "center");
        jCSSRule("#forth_messagebox #forth_messagedesc", "color", color_white);
        jCSSRule("#forth_messagebox #forth_messagedesc", "font-size", "12px");
    }
    /***********************************************************************************************************************/
    /***** ACCOUNTS PAGES **************************************************************************************************/
    /***********************************************************************************************************************/
    if (namePage == 'accounts') {
        jCSSRule("body#new_profile #profile_masthead #user_avatar", "background-color", bgColor_grey_00); //Avatar bg
        jCSSRule("#profile_bio textarea#user_about", "color", color_black); //Description
        jCSSRule("#feature #main h2", "color", color_white); // Titles
        jCSSRule("#profile_full_user_bio", "border-radius", "5px"); // More about me
        jCSSRule("#profile_hgroup", "color", color_white); // Box right avatar
        jCSSRule("#profile_hgroup .h6_alt", "color", color_grey_00); // Last activity
        jCSSRule("#profile_hgroup a:link, #profile_hgroup a:visited", "color", linkColor_red); // Game played
        jCSSRule("#profile_user_vitals", "color", color_white); // Box under avatar
        jCSSRule("#profile_user_vitals h3", "color", color_grey_00); // Labels

        jCSSRule("#profile_user_level_info #user_points .user_metric_stat a", "color", color_white); // Box level
        jCSSRule("#profile_user_level_info #user_level .user_metric_stat a", "color", linkColor_red);
        jCSSRule("#profile_user_metrics .user_metric_stat a", "color", color_white); // Box badges, comments, etc
        jCSSRule("#profile_user_metrics li h3 a", "color", linkColor_white);

        jCSSRule(".points_bar_container", "color", color_white); // Leveling bar
        jCSSRule(".points_bar .points_progress", "background-color", linkColor_red);

        // This week's kongpanion title
        jCSSRule(".pod_heading", "color", color_white);
        jCSSRule("#feature h2 a", "color", linkColor_red);
        // Activity feed
        jCSSRule(".comment_quote p", "color", color_grey_11); // Comment quotes
        jCSSRule("li.new_following_user_age", "color", color_grey_00); // Member since
        jCSSRule("li.new_following_user_age span", "color", color_black);
        jCSSRule("li.new_following_user_age span", "font-weight", "bold");
        jCSSRule(".feed_item > h3.feed_item_header", "color", color_grey_00); // Feed title content
        jCSSRule(".feed_item_header a", "color", linkColor_red);
        jCSSRule(".follower_feed_item_container .feed_item_header", "color", color_white);
        jCSSRule(".feed_info_content, .feed_item .new_following_user_info", "border-radius", "5px"); // Feed content
        jCSSRule(".feed_item .new_following_user_info ul li:first-child a", "color", linkColor_red_01);
        jCSSRule(".feed_item .new_following_user_info", "background-color", bgColor_grey_00);
        /**************/
        jCSSRule(".feed_info_content > .desc, .feed_info_content > p", "color", color_grey_01);
        jCSSRule(".feed_info_content > .desc a, .feed_info_content > p a", "color", linkColor_red_01);
        jCSSRule("ul#feed_items_container > li", "background-color", bgColor_grey_07); // Bg of left block
        jCSSRule("#additional_feed_items", "box-shadow", "none"); // Light on top of the button show more
        jCSSRule(".self_feed_items, .following_feed_items", "border-radius", "5px"); // Border-radius left block
        jCSSRule("ul#feed_items_container > li.first_feed_item", "border-radius", "5px 5px 0 0"); // Border-radius top left block
        jCSSRule("#additional_feed_items", "border-radius", "0 0 5px 5px"); // Border-radius bot left block
        jCSSRule("#show_more_feed_items_label a", "color", linkColor_red); // Show more
        jCSSRule("#show_more_feed_items_label a:hover", "color", linkColor_red_01); // Show more
        jCSSRule("#profile_activity_container .see_all_shouts", "color", linkColor_red); // See all shouts
        jCSSRule(".feed_item_add_comment, .feed_item_timestamp", "color", color_grey_00 + " !important");
        jCSSRule(".self_feed_items, .following_feed_items", "background-color", bgColor_grey_00);
        jCSSRule(".feed_item_user_followed .feed_item_icon, .feed_item_user_following .feed_item_icon", "filter", "invert(1)");
        // Community
        jCSSRule("#following_feed h2, #forums h2, #forums h3", "color", color_white);
        jCSSRule("li.new_following_user_age", "color", color_grey_01);
        jCSSRule(".feed_item_levelup .feed_info_content > h3 > strong", "color", color_grey_00); // Level up
        jCSSRule("img.green, img.icon", "margin", "6px 5px 0 0");
        jCSSRule("img.icon", "background-image", "none");
        jCSSRule("img.grey", "filter", "opacity(0.5)");
        jCSSRule("img.grey, img.green", "background", "none");
        jCSSRule("img.green", "filter", "drop-shadow(1px 2px 4px " + color_white + ")");
        jCSSRule("body#forums.community_page #forums table", "background-color", bgColor_grey_07);
        jCSSRule("body#forums.community_page #forums table", "border", "1px solid");
        jCSSRule("body#forums.community_page #forums table", "border-color", color_grey_13);
        jCSSRule("body#forums.community_page #forums table", "border-radius", "5px");
        jCSSRule("body#forums.community_page #forums table", "padding", "5px");
        jCSSRule("body#forums.community_page #forums table", "color", color_white);
        jCSSRule("body#forums.community_page #forums .title", "color", linkColor_red);
        jCSSRule("body#forums p.pts a, body#forums p.links a", "color", linkColor_red);

        // Sidebar
        jCSSRule(".tab_group .pod_item", "color", color_grey_12); //Games sidebar

        // Page Favorite games
        jCSSRule(".category_games_listing .pagination > .info", "color", color_grey_11); // Page atm

        // Settings
        jCSSRule("#feature h1", "color", color_white); // Account settings title
        jCSSRule(".settings-form--group .label", "color", color_white); // Labels
        jCSSRule(".settings-nav a", "color", color_white); // Nav tab
        // Account Settings - Edit profile
        jCSSRule(".field .privacy-note", "color", color_grey_05); // Privacy
        jCSSRule(".settings-form--group textarea#user_about", "color", color_black);
        // Account Settings - Account info
        jCSSRule(".field p", "color", color_white); // Guilds info
        jCSSRule("#guilds_opt_out", "color", color_white);
        jCSSRule("#guilds_opt_out a", "color", linkColor_red);
        // Account Settings - Email settings
        jCSSRuleAppearence(".settings-form input[type='checkbox']", "auto"); // Disable checkbox style
        jCSSRule(".field li label", "color", color_white); // Label checkboxes
        jCSSRule(".settings-form dd a", "color", linkColor_red); // Privacy link
        jCSSRule(".settings-form--group > dd > a", "color", linkColor_red); // Unsuscribe link
        jCSSRule(".settings-form .field--upload", "color", color_white); // File upload
        jCSSRule(".settings-form .field--upload", "background-color", bgColor_grey_00); // File upload
        // Accounts Settings - Feed settings
        jCSSRule("#notification_options li", "color", color_white); // Label checkboxes

        // Kled account
        jCSSRule("body#report #secondary h3", "color", color_white); // My Kreds Transaction History
        // Stikers
        jCSSRule(".stickers-header__title", "color", color_white); // Title
        jCSSRule(".stickers-header strong", "color", color_grey_00); // Desc
        jCSSRule(".stickers-header strong a", "color", linkColor_red);
        // Blocks transactions
        jCSSRule("body#report #main dl#account_summary div", "background-color", bgColor_grey_07);
        jCSSRule("body#report #main dl#account_summary div", "border-radius", "5px");
        jCSSRule("body#report #main dl#account_summary dt", "color", color_white); // Available balance
        jCSSRule("body#report #main dl#account_summary dd", "color", color_grey_00); // Blocks
        jCSSRule(".block-transactions__table thead tr", "background-color", bgColor_grey_00);
        jCSSRule(".block-transactions__table thead tr", "color", color_white);
        jCSSRule(".block-transactions__table tbody tr:nth-child(odd)", "background-color", bgColor_grey_08);
        jCSSRule(".block-transactions__table tbody tr:nth-child(even)", "background-color", bgColor_grey_00);
        jCSSRule(".block-transactions__table tbody tr", "color", color_grey_00);
        //jCSSRule("body#report #secondary .table_wrap", "background-color", bgColor_grey_00); // Pagination bg
        jCSSRule("body#report #secondary .table_wrap", "background-color", bgColor_grey_07); // Pagination bg
        //jCSSRule(".pagination", "background-color", bgColor_grey_00);
        jCSSRule(".pagination", "background-color", bgColor_grey_07);
        jCSSRule("ul.simple_pagination li.info", "color", color_white);
        jCSSRule("ul.simple_pagination li a", "color", linkColor_red);
        /*************************************************************************************************/
        // Friends
        jCSSRule("body.friends #main form label", "color", color_white);
        jCSSRule("body.friends #main form label", "display", "inline-block"); // Align label with input
        jCSSRule("#feature h1 a", "color", linkColor_red);
        jCSSRule("body.friends #friend_finder", "background-color", bgColor_grey_07);
        jCSSRule("body.friends #friend_finder > h3", "color", color_white);
        jCSSRule("body.friends #friend_finder > p", "color", color_grey_00);
        jCSSRule("body.friends #friend_finder > .fake_friends", "color", color_grey_03);
        jCSSRule("ul.pagination li", "color", color_grey_03);
        jCSSRule("ul.pagination li.current", "color", color_white);
        jCSSRule("ul.pagination li a", "color", linkColor_red);
        jCSSRule("body#report .table_wrap", "padding", "0"); // Padding around the array
        jCSSRule("body#report table tr.summary", "color", color_white); // Color th
        jCSSRule("body.friends table tr td", "background-color", bgColor_grey_00); //Bg td
        jCSSRule("body.friends table tr.odd td", "background-color", bgColor_grey_08); // Bg td alterned
        jCSSRule("body.friends table td.user_friend span.friend_reciprocated", "filter", "invert(1)"); //Stars
        jCSSRule("body.friends table td.user_friend span.friend_new_reciprocated", "filter", "invert(1)");
        jCSSRule("#secondary td a", "color", linkColor_red); // All links
        jCSSRule("body.friends table td.location, body.friends table td a.join_premium_room_link:visited", "color", color_grey_00); // Location
        // Fans
        jCSSRule("#followers_table tr td:last-child", "color", color_grey_00); // Fan since
        jCSSRule("a.btn_follow.btn.lbOn.btn_alt", "color", color_black + "!important"); // Btn friend
        jCSSRule("a.btn_follow.btn.lbOn.btn_alt", "text-shadow", "none"); // Btn friend
        // Stikers - Owned
        jCSSRule(".lrg-tabs__btn", "background-color", bgColor_grey_00); //Tab no-active
        jCSSRule(".lrg-tabs__btn", "color", color_white);
        jCSSRule(".lrg-tabs__btn.is-active", "background-color", bgColor_grey_08); // Tab active
        jCSSRule(".lrg-tabs__btn.is-active", "color", color_white);
        jCSSRule(".sticker-nav", "background-color", bgColor_grey_08); // Jump to sticker pack
        jCSSRule(".sticker-nav__title", "color", color_white);
        jCSSRule(".sticker-nav::after", "background-image", "none");
        jCSSRule(".sticker-collection__pack", "background", "none");
        jCSSRule(".sticker-collection__pack", "background-color", bgColor_grey_08);
        jCSSRule(".sticker-collection__pack h3", "color", color_white);
        jCSSRule(".sticker-header__desc", "color", color_grey_00);
        jCSSRule(".sticker-footer__link:link, .sticker-footer__link:visited", "background-color", bgColor_grey_00);
        jCSSRule(".sticker-footer__link:link, .sticker-footer__link:visited", "color", color_white);
        jCSSRule(".sticker-footer__link:link:hover, .sticker-footer__link:visited:hover", "background-color", bgColor_grey_00);
        jCSSRule(".sticker-footer__link:link:hover, .sticker-footer__link:visited:hover", "color", linkColor_red);
        jCSSRule(".sticker-pack__stickers", "background-color", bgColor_grey_00);
        jCSSRule(".sticker-pack__meta", "background-image", "none");
        jCSSRule(".sticker-pack__meta", "background-color", bgColor_grey_00);
        jCSSRule(".sticker-header__count", "color", color_black); // Count stickers
        jCSSRule(".sticker-pack__earned", "color", color_white); // Date aquired
        jCSSRule(".sticker-pack--shiny .sticker-pack__empty", "background-color", color_yellow); // Don't have yet 
        // Stickers - Unowned
        jCSSRule(".unearned-stickers", "background-color", bgColor_grey_01);
    }
    /***********************************************************************************************************************/
    /***** BADGES PAGES ****************************************************************************************************/
    /***********************************************************************************************************************/
    if (namePage == 'badges') {
        //Align badges bc we removed ad
        //jCSSRule("#category .badges_set1 .badge_row", "float", "left");
        jCSSRule("#category .badges_set1", "display", "flex");
        jCSSRule("#category .badges_set1", "flex-wrap", "wrap");
        jCSSRule("#category .badges_set1", "float", "none");
        jCSSRule("#category .badges_set1", "width", "auto");
        jCSSRule("#category .badges_set1 .badge_row", "float", "none");
        jCSSRule("#category .badges_set2", "float", "none");

        jCSSRule("#category.badges_browser #feature h1", "color", color_white); // Title
        jCSSRule("#category.badges_browser #feature h2", "color", color_white); // Title
        jCSSRule("#category.badges_browser #feature h2 span", "color", color_grey_00); // Title
        jCSSRule("#feature .category_listing .badge_listing_intro > div:first-child", "background-color", bgColor_grey_11 + "!important"); // It's time to earn some badges!
        jCSSRule("#feature .category_listing .badge_listing_intro > div:first-child", "color", color_white); // It's time to earn some badges!
        jCSSRule("#category .category_listing .pagination", "background-color", bgColor_grey_11); // Pagination
        jCSSRule("#category .category_listing .pagination", "color", color_grey_00); // Pagination
        jCSSRule("#category .category_listing .pagination .info", "color", color_white); // Current
        jCSSRule("#category .category_listing .pagination a", "color", linkColor_red); // Links
        jCSSRule("#category .category_listing .pagination a:hover", "color", linkColor_red_01);
        jCSSRule("#category .category_listing .pagination a:hover", "background-color", bgColor_grey_05);
        jCSSRule("#category .category_badges_listing", "background-color", bgColor_grey_11); // Conturn
        jCSSRule(".badges_header_upsell", "background-color", bgColor_grey_11); // First box
        jCSSRule(".badges_header_upsell .reward_item p", "color", color_white); // First box
        jCSSRule(".badges_header_upsell .reward_item p a", "color", linkColor_red); // First box
    }
    /***********************************************************************************************************************/
    /***** FORUMS PAGES ****************************************************************************************************/
    /***********************************************************************************************************************/
    if ((namePage == 'forums') || (namePage == 'topics')) {
        jCSSRule(".crumbs a", "color", linkColor_red); // Forum
        jCSSRule("span.arrow", "color", color_grey_00); // Arrow
        jCSSRule("#forums .forum_header .forum_title", "color", color_white); // Title
        jCSSRule("body#forums #feature label", "color", color_grey_00); // Limit my search to this forum & this topic is locked
        jCSSRule("img.icon", "background-image", "none");
        jCSSRule("img.grey", "filter", "opacity(0.5)");
        jCSSRule("img.grey, img.green", "background", "none");
        jCSSRule("img.green", "filter", "drop-shadow(1px 2px 4px " + color_white + ")");
        jCSSRule("ul.pagination li", "color", color_grey_00); // Pagination
        jCSSRule("ul.pagination li.current", "color", color_white);
        jCSSRule("ul.pagination li a", "color", linkColor_red);
    }
    if (namePage == 'forums') {
        // Forum - Main page
        jCSSRule("body#forums h4.forum_group_title", "color", color_white); // Title About Kongregate 
        jCSSRule("table.forums tr td .title", "color", linkColor_red); // Title
        // jCSSRule("body#forums p.pts a, body#forums p.links a", "color", linkColor_red); 
        jCSSRule("#featurewide p a", "color", linkColor_red); // 
        jCSSRule(".rendered_markdown p", "color", color_grey_00);
        jCSSRule("table.forums .posts", "color", color_grey_09);
        jCSSRule("body#forums #featurewide>table tr th", "background-color", bgColor_grey_07);
        jCSSRule("body#forums #featurewide>table tr th", "border", "1px solid");
        jCSSRule("body#forums #featurewide>table tr th", "border-color", color_grey_13);
        jCSSRule("body#forums #featurewide>table tr td", "background-color", bgColor_grey_07);
        jCSSRule("body#forums #featurewide>table tr:nth-child(even) td", "background-color", bgColor_grey_12);
        jCSSRule("table tr td.lp", "color", color_grey_00);
        jCSSRule("table tr td.lp span a", "color", linkColor_red);
        jCSSRule("body#forums #featurewide > div > p > img", "vertical-align", "bottom"); // Locket

        // Forum - Sub pages
        jCSSRule(".regtext", "color", color_white); // Text
        jCSSRule("table tr td.lp span", "color", color_white);
        jCSSRule("body#forums #forum_posts>table tr td a, body#forums #featurewide>table tr td a", "color", linkColor_red);
        jCSSRule("body#forums #featurewide>table tr:nth-child(even) td a", "color", linkColor_red);
    }
    if (namePage == 'topics') {
        jCSSRule(".forum_info .forum_feed .bd", "color", color_grey_00); // Number of posts
        jCSSRule("#feature #forum_posts > div > p > img", "vertical-align", "bottom"); // Locket
        jCSSRule("body#forums #forum_posts>table tr td", "background-color", bgColor_grey_07);
        jCSSRule("body#forums #forum_posts>table tr th", "border", "1px solid");
        jCSSRule("body#forums #forum_posts>table tr th", "border-color", color_grey_13);
        jCSSRule("body#forums #forum_posts>table tr td", "background-color", bgColor_grey_07);
        jCSSRule("body#forums #forum_posts>table tr.post:nth-child(2n) td", "background-color", bgColor_grey_12); // Bg alterned 1 post of 2
        jCSSRule("body#forums #forum_posts>table tr td", "border", "none"); // Remove all border
        jCSSRule("body#forums #forum_posts>table tr.post td", "border", "1px solid"); // Add borders only for post
        jCSSRule("body#forums #forum_posts>table tr.post td", "border-color", color_grey_00); // Add borders only for post
        jCSSRule("abbr.updated", "color", color_grey_00); // Date post
        jCSSRule("#forum_posts .author .post_flag_link a, #forum_posts .author .post_hide_link a, #forum_posts .author .post_clear_flags a", "color", linkColor_red); // Date post
        jCSSRule("body#forums table.posts tr.hentry .forum--entry", "color", color_white); // Post
        jCSSRule("body#forums table.posts tr.hentry .forum--entry a", "color", linkColor_red); // Post links
        jCSSRule(".post .author .name a", "color", color_grey_09); // Author
        jCSSRule(".post .author .name a.post_creator", "color", color_white); // Creator
        jCSSRule(".post .author .posts", "color", color_grey_00); // Nb post from author
        // Box user
        jCSSRule(".mini_profile_developer_meta", "background-color", bgColor_grey_00);
        jCSSRule(".mini_profile_developer_meta span", "color", color_white);
        jCSSRule(".mini_profile_actions", "border-radius", "0 0 5px 5px");
    }
    /***********************************************************************************************************************/
    /***** DIVERS PAGES ****************************************************************************************************/
    /***********************************************************************************************************************/
    if (namePage == 'awards') {
        jCSSRule("#feature h1", "color", color_white); // Account awards title
        jCSSRule("#feature h1 a", "color", linkColor_red); // Account awards title
        jCSSRule("ul.simple_pagination li.info", "color", color_white); // Current pagination
        jCSSRule("#feature.user_profile_see_all_page #see_all_items li a", "color", linkColor_red); // Link badge
        jCSSRule("#feature.user_profile_see_all_page #see_all_items li", "color", color_white); // Desc badge
    }
    if (namePage == 'minus') {
        jCSSRule("#feature h1", "color", color_white); // Title
        jCSSRule(".kong_minus_page .hc", "color", color_white); // Title
        jCSSRule(".kong_minus_page #feature h2", "color", color_red_00); // Sub titles
        jCSSRule(".kong_minus_page #feature ul li > p", "color", color_grey_00); // Sub titles
    }
    if (namePage == 'spellstone') {
        jCSSRule(".spellstone-lower", "background", "none");
        jCSSRule(".spellstone-lower", "background-color", bgColor_grey_00);
        jCSSRule("#spellstone .actions", "border-radius", "5px 5px 0 0");
        jCSSRule("#spellstone .task-footer", "border-radius", "0 0 5px 5px");
        jCSSRule(".spellstone-lower .prizes .first", "background-color", bgColor_purple_02 + "8a");
        jCSSRule(".spellstone-lower .prizes .second, .spellstone-lower .prizes .third", "background-image", "linear-gradient(to top, " + bgColor_purple_01 + "8a,  " + bgColor_purple_02 + "8a)");
        // Rules
        jCSSRule("#main h2", "color", color_white); // Title
        jCSSRule("body.generic #main p, body.generic #main ul, body.generic #feature ul", "color", color_grey_03); // Text
        jCSSRule("#main div", "background-color", bgColor_grey_01 + "!important"); // Text
    }
    if (namePage == 'privacy') {
        jCSSRule("body.generic #main", "width", "100%");
        jCSSRule("body.generic #main h1", "color", color_white); // Title
        jCSSRule("#main h2", "color", color_white); // Title
        jCSSRule("body.generic #main p, body.generic #main ul, body.generic #feature ul, body.generic #main ol, body.generic #feature ol", "color", color_grey_00);
        jCSSRule("body.generic #main p a, body.generic #main ul a, body.generic #feature ul a, body.generic #main ol a, body.generic #feature ol a", "color", linkColor_red);
    }
    if (namePage == 'kreds') {
        jCSSRule("#feature h1", "color", color_white); // Title
        jCSSRule("#feature .kreds_copy p", "color", color_grey_00); // Desc
        jCSSRule("a.kred-game__more-link", "color", linkColor_red); // Show more
    }
    if (namePage == 'newaccount') {
        jCSSRule("body.featureform #feature h1", "color", color_white); // Title
        jCSSRule(".bright", "color", color_red_00 + "!important"); // Title right
        //jCSSRule("body#register.featureform #feature #sidebar dd", "color", color_grey_00); // Text right
        jCSSRule("body#register.featureform #feature #sidebar dd", "filter", "invert(1)"); // Text right & icon
        jCSSRule(".form_outer", "background-color", bgColor_grey_07); // Bg Left
        jCSSRule("body.featureform #feature #main form", "background-color", bgColor_grey_07);
        jCSSRule("body.featureform #feature #main form", "color", color_white);
        jCSSRule("#register .new_account_fb_connect", "color", color_white);
        jCSSRule("#register .new_account_fb_connect .h6_alt", "color", color_grey_05);
        jCSSRule("#register .new_account_fb_connect_or_txt", "background-color", bgColor_grey_07);
        jCSSRule("#register .new_account_fb_connect_or_txt", "color", color_white);
        jCSSRule("body.featureform #feature .label_block", "color", color_white); // Labels
        jCSSRule("body.featureform #feature .label_block em", "color", color_grey_05); //Under labels
        jCSSRule("#register .form_outer form .checkbox label", "color", color_white);
        jCSSRule("#register .form_outer form .checkbox label a", "color", linkColor_red);
    }
    if (namePage == 'about') {
        jCSSRule("#feature h1", "color", color_white); // Title
        jCSSRule("body.generic ul#tabs--index, body.generic #tabs--list", "background-color", bgColor_grey_01); // Bg central div
        jCSSRule("body.generic ul#tabs--index, body.generic #tabs--list", "color", color_grey_00);
        jCSSRule("body.generic ul#tabs--index", "border-radius", "10px 10px 0 0");
        jCSSRule("body.generic #tabs--list", "border-radius", "0 0 10px 10px");
        jCSSRule("#tabs--index a", "color", color_white);
        jCSSRule("#exec-team h3 strong", "color", color_white);
        jCSSRule("#exec-team h3", "color", color_grey_00);
        jCSSRule("#contact-us dl dt + dd a, #contact-us dl dd + dd a", "color", linkColor_red_02);
    }
    if (namePage == 'adspecs') {
        jCSSRule(".header", "padding", "0 10px");
        jCSSRule(".header", "width", "calc( 100% - 20px)");
        jCSSRule(".logo", "filter", "grayscale(0.6)"); // Logo dark
        jCSSRule("a:link, a:visited", "color", linkColor_red);
        jCSSRule("table.main-specs td a", "color", linkColor_red_02);
    }
    if (namePage == 'conduct') {
        jCSSRule("#feature h1", "color", color_white); // Title
        jCSSRule(".help-page--langs dt, #feature p, #feature li, body.generic #main p", "color", color_grey_00); // Text
        jCSSRule(".help-page--langs dd a, #feature li a, #main h2 a", "color", linkColor_red);
        jCSSRule(".size2of3", "width", "100%");
        jCSSRule("font", "color", linkColor_red);
    }
    if (namePage == 'logos') {
        jCSSRule("#feature h1", "color", color_white); // Title
        jCSSRule("body.branding #feature p, body.branding #feature ul, body.branding #feature dl", "color", color_grey_00);
        jCSSRule("a.download-link", "color", linkColor_red);
    }
    if (namePage == 'feedbacks') {
        jCSSRule("#feature h1, body#feedback .sidebar dt", "color", color_white); // Title
        jCSSRule("body#feedback #feature p, body#feedback .sidebar dd", "color", color_grey_00 + "!important");
        jCSSRule("body#feedback .sidebar dd a", "color", linkColor_red);
        jCSSRule("body#feedback .sidebar h2", "color", linkColor_red_02);
        jCSSRule("#feedback_form", "background-color", bgColor_grey_07);
        jCSSRule("#feedback_form label, #feedback_form h2, #feedback_form td:last-child", "color", color_white);
        jCSSRule("#feedback_form span.feedback_desc", "color", color_grey_05);
        jCSSRule(".bright a", "color", color_red_00);
    }
    if (namePage == 'gamesexport') {
        jCSSRule("body#gamesponsorship #feature h1", "filter", "invert(0.9)"); // Title
        jCSSRule("body#gamesponsorship #main p", "color", color_grey_00); // Desc
        jCSSRule("body#gamesponsorship #main p a", "color", linkColor_red);
        jCSSRule("body#gamesponsorship #sidebar", "background-color", bgColor_grey_07); // Sidebar
        jCSSRule("body#gamesponsorship #sidebar", "border-radius", "10px"); // Sidebar
        jCSSRule("body#gamesponsorship #sidebar h2", "color", color_red_00);
        jCSSRule("body#gamesponsorship #sidebar ol li, body#gamesponsorship #sidebar p", "color", color_grey_00);
        jCSSRule("body#gamesponsorship #sidebar p a", "color", linkColor_red);
        jCSSRule(".pagination", "background-color", bgColor_grey_07);
        jCSSRule("ul.simple_pagination li.info", "color", color_white);
        jCSSRule("ul.simple_pagination li a", "color", linkColor_red);
    }
    if (namePage == 'jobs') {
        // No modifications since the page is in an iframe
    }
    if (namePage == 'comments') {
        jCSSRule("#feature h1", "color", color_white);
        jCSSRule(".regtext a", "color", linkColor_red);
        jCSSRule(".messages_table", "background-color", bgColor_grey_07); // Conturn
        jCSSRule("#commentutility #comment_add_a_comment a", "filter", "invert(1)"); // Icon add a comment
        jCSSRule("#commentutility #comment_add_a_comment a", "color", color_black); // Icon add a comment
        jCSSRule(".pagination", "background-color", bgColor_grey_07); // Pagination
        jCSSRule("ul.simple_pagination li.info", "color", color_white);
        jCSSRule("ul.simple_pagination li a", "color", linkColor_red);
        jCSSRule("form#sort_form label", "color", color_white); // Sort
        jCSSRule("#feature #all_comments .comment_list > div:nth-child(even)", "background-color", bgColor_grey_00);
        jCSSRule("#feature #all_comments .comment_list > div:nth-child(odd)", "background-color", bgColor_grey_01);
        jCSSRule("#feature #all_comments .comment_list", "color", color_white);
        jCSSRule(".messages_table .sender_info .sender_name a", "color", linkColor_red);
        jCSSRule(".messages_table .sender_info p", "color", color_grey_00);
        jCSSRule(".comment.above_threshold .comment_rating_area", "color", color_green);
        jCSSRule(".comment.below_threshold .comment_rating_area", "color", color_red_00);
        jCSSRule(".comment .comment_body .under_rating_threshold", "color", color_grey_00);
        jCSSRule(".comment .comment_body .under_rating_threshold a", "color", linkColor_red);
    }
    if (namePage == 'posts') {
        jCSSRule("#feature h1", "color", color_white); // Number of posts
        jCSSRule(".forum_info .forum_feed .bd", "color", color_grey_00); // Number of posts
        jCSSRule("body#forums #forum_posts>table tr td", "background-color", bgColor_grey_07);
        jCSSRule("body#forums #forum_posts>table tr th", "border", "1px solid");
        jCSSRule("body#forums #forum_posts>table tr th", "border-color", color_grey_13);
        jCSSRule("body#forums #forum_posts>table tr td", "background-color", bgColor_grey_07);
        jCSSRule("body#forums #forum_posts>table tr.post:nth-child(2n) td", "background-color", bgColor_grey_12); // Bg alterned 1 post of 2
        jCSSRule("body#forums #forum_posts>table tr td", "border", "none"); // Remove all border
        jCSSRule("body#forums #forum_posts>table tr.post td", "border", "1px solid"); // Add borders only for post
        jCSSRule("body#forums #forum_posts>table tr.post td", "border-color", color_grey_00); // Add borders only for post
        jCSSRule("body#forums #forum_posts>table tr.spacer td", "background-color", bgColor_grey_00); // Spacer color
        jCSSRule("abbr.updated", "color", color_grey_00); // Date post
        jCSSRule("#forum_posts .author .post_flag_link a, #forum_posts .author .post_hide_link a, #forum_posts .author .post_clear_flags a", "color", linkColor_red); // Date post
        jCSSRule("body#forums table.posts tr.hentry .forum--entry", "color", color_white); // Post
        jCSSRule("body#forums table.posts tr.hentry .forum--entry a", "color", linkColor_red); // Post links
        jCSSRule(".post .author .name a", "color", color_grey_09); // Author
        jCSSRule(".post .author .name a.post_creator", "color", color_white); // Creator
        jCSSRule(".post .author .posts", "color", color_grey_00); // Nb post from author
        // Box user
        jCSSRule(".mini_profile_developer_meta", "background-color", bgColor_grey_00);
        jCSSRule(".mini_profile_developer_meta span", "color", color_white);
        jCSSRule(".mini_profile_actions", "border-radius", "0 0 5px 5px");
        jCSSRule(".forum--entry blockquote, .CodeMirror blockquote, .editor-preview-side blockquote", "background-color", bgColor_grey_04);
        jCSSRule(".forum--entry blockquote, .CodeMirror blockquote, .editor-preview-side blockquote", "border-color", color_white);
        jCSSRule(".forum--entry blockquote, .CodeMirror blockquote, .editor-preview-side blockquote", "border-left-color", color_grey_13);
    }
    /***********************************************************************************************************************/
    /***** KARTRIDGE *******************************************************************************************************/
    /***********************************************************************************************************************/
    jCSSRule("#user_progress_bar_container .user-progress", "color", color_kartridge_Main);
    jCSSRule("#user_progress_bar_container .user-progress", "background-color", bgColor_kartridge);
    jCSSRule(".user-progress .steps .prev--klient, .user-progress .steps .next--klient", "background-color", bgColor_kartridge);
    jCSSRule(".user-progress .steps .prev, .user-progress .steps .next", "color", color_kartridge_Main);
    jCSSRule(".user-progress .steps .prev, .user-progress .steps .next", "box-shadow", "0px 0px 5px " + color_kartridge_Sec_tr);
    jCSSRule("span#klient_progress_bar_message svg path:nth-child(5)", "fill", color_kartridge_Sec);
    jCSSRule("span#klient_progress_bar_message svg path:nth-child(7)", "fill", color_kartridge_Sec);
    jCSSRule(".user-progress .step-list .step--klient a", "color", color_kartridge_Sec);
    jCSSRule(".user-progress .step-list .step--klient strong", "color", color_kartridge_Sec);
    jCSSRule(".user-progress .step-list--klient", "background-color", bgColor_kartridge);
    jCSSRule(".user-progress .steps .prev:hover, .user-progress .steps .next:hover, .user-progress .steps .step a:hover", "color", color_kartridge_Sec);
    jCSSRule(".user-progress .steps .prev:hover, .user-progress .steps .next:hover, .user-progress .steps .step a:hover", "border-color", color_kartridge_Sec);
    jCSSRule(".user-progress .steps .prev:hover, .user-progress .steps .next:hover, .user-progress .steps .step a:hover", "box-shadow", "0 0 5px " + color_kartridge_Sec);
    jCSSRule(".user-progress .progress-box .progress .bar--klient", "background-color", color_kartridge_Sec);
    jCSSRule(".user-progress .progress-box .progress .bar--klient", "border", "1px solid");
    jCSSRule(".user-progress .progress-box .progress .bar--klient", "border-color", color_kartridge_Sec_op);

    /***********************************************************************************************************************/
    /***** FIND YOUR FRIENDS ***********************************************************************************************/
    /***********************************************************************************************************************/
    if (namePage == 'findfriends') {
        jCSSRule("body#plugs.featureform h1", "color", color_white);
        jCSSRule("body.generic #main p, body.generic #main ul, body.generic #feature ul", "color", color_grey_05);
        jCSSRule("body#plugs.featureform #main form .import_contacts", "color", color_white);
        jCSSRule("body.featureform #feature #main form", "color", color_white);
        jCSSRule("body#plugs #sidebar dt", "color", linkColor_red);
        jCSSRule("body.generic #sidebar p, body.generic #sidebar ul, body.generic #sidebar dl", "color", color_white);
        jCSSRule("body.featureform #feature a", "color", linkColor_red);
    }
    /***********************************************************************************************************************/
    /***********************************************************************************************************************/
    /***********************************************************************************************************************/
};
loadCSS();
