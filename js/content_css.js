/*!
 * Kongregate Update for www.kongregate.com v0.9.4
 * https://github.com/Forthtilliath/kongregate_update
 *
 * Copyright 2020 Forth
 * Released under the MIT license
 * 
 * @fileoverview Modifie le CSS de plusieurs parties du site
 * @author Forth
 * @version 0.3
 */

"use strict";

/* Variables start */
//var bgColorMain		= "#2b2b2b"; // Grey17
var bgColorMain		= "#181a1b"; // Grey17
var bgColorSec		= "#efefef"; // Blanc argile
var bgColorThird	= "#dedede"; // Grey87
var bgColorFour		= "#737373"; // Grey45
var colorMain	= "#ffffff"; // Blanc
var colorSec	= "#cccccc"; // Grey80 – Pinchard
var colorThird	= "#b0b0b0"; // Grey69
var colorFour	= "#525252"; //Grey32
var colorFive	= "#3b3b3b"; //Grey23
var colorSix	= "#000000"; // Black, Grey0
var colorSev	= "#666666"; // Grey40
var linkColorMain	= "#e2062c"; // Medium Candy Apple Red
var linkColorSec	= "#bf0000";
/* Variables end */


/* All pages */
// Repositionning logo
jCSSRule("#header #header_logo", "bottom", "20px");
jCSSRule("#primarylayout", "background-color", bgColorMain);
jCSSRule(".main_navigation a", "color", colorMain);


/* Accounts pages start */
jCSSRule(".upper_gamepage", "background-color", "#181a1b");
jCSSRule(".pod_heading", "color", colorMain);
jCSSRule("#user_about", "color", colorMain);
jCSSRule("#feature #main h2", "color", colorMain);
jCSSRuleBorderRadius("#profile_full_user_bio", "5px");
jCSSRule("#profile_hgroup", "color", colorMain);
jCSSRule("#profile_user_vitals", "color",colorMain);
jCSSRule("#profile_hgroup .h6_alt", "color", colorSec);
jCSSRule("#profile_user_vitals h3", "color", colorSec);
jCSSRule("#profile_user_level_info li h3 a", "color", colorMain);
jCSSRule("#profile_user_level_info #user_points .user_metric_stat a", "color", colorMain);
jCSSRule("#profile_user_metrics .user_metric_stat a", "color", colorMain);
jCSSRule("#profile_user_metrics li h3 a", "color", colorMain);
jCSSRule(".points_bar_container", "color", colorMain);
jCSSRule("#profile_user_level_info #user_level .user_metric_stat a", "color", linkColorMain);
jCSSRule("#profile_hgroup a:link, #profile_hgroup a:visited", "color", linkColorMain);
jCSSRule("h2 a:link, h2 a:visited", "color", linkColorMain);
jCSSRule("textarea#user_about", "color", colorSix);
jCSSRule(".points_bar .points_progress", "background-color", linkColorMain);
jCSSRuleAppearence(".settings-form input[type='checkbox']", "auto");

jCSSRule(".show_more_text_block .truncated_text p", "color", colorFive);
jCSSRule(".show_more_text_block .full_text p", "color", colorFive);
jCSSRule(".comment_quote p", "color", colorFive);
jCSSRule("li.new_following_user_age", "color", colorFive);
jCSSRule("li.new_following_user_age span", { "color": colorSix, "font-weight": "bold" });
jCSSRule(".feed_info_container .feed_info_content .feed_item_header", "color", colorSix);
jCSSRule("div.bd", "color", colorSev);
jCSSRule(".tab_group .pod_item", "color", colorSev);
jCSSRule(".category_games_listing .pagination > .info", "color", colorFive);

jCSSRule("body.friends #main form label", "color", colorMain);

/* Settings */
jCSSRule("#feature h1", "color", colorMain);
jCSSRule(".settings-form--group .label", "color", colorMain);
jCSSRule(".field p", "color", colorMain);
jCSSRule(".field li label", "color", colorMain);
jCSSRule(".field .privacy-note", "color", colorThird);
jCSSRule("#notification_options li", "color", colorMain);
jCSSRule("#guilds_opt_out", "color", colorMain);
jCSSRule(".settings-nav a", "color", colorMain);
jCSSRule(".rendered_markdown", "color", colorMain);
jCSSRule(".hentry > td", "background-color", bgColorMain);
jCSSRule(".mtm > label", "color", colorThird);
jCSSRule("#shouts_table a:link, #shouts_table a:visited", "color", linkColorSec);
jCSSRule("#shouts_table h3", "color", colorSix);
/* Accounts pages end */


/* Game pages start */
jCSSRule("h2 .fn", "color", colorSix);
jCSSRule("#play .gamepage_header_outer h1", "width", "100%");
jCSSRule(".game_details_outer", "margin", "-49px auto 10px");
jCSSRule("#primarylayout", "padding-bottom", "10px");
jCSSRuleBorderRadius(".game_details_outer", "5px");
jCSSRuleBorderRadius("#play .game_page_wrap", "10px");
jCSSRule("#play .game_page_wrap", {
	"padding-top": "10px",
	"padding-bottom": "20px" });
jCSSRule("svg:not(:root).svg-inline--fa", {
	"float": "left",
	"padding-left": "5px" });
//jCSSRule(".chat_message_window_username", "line-height", "14px");
jCSSRule(".chat_message_window span", {
	"line-height": "120%",
	"vertical-align": "middle" });
jCSSRule("#kong_game_ui .chat_message_window p span", "vertical-align", "middle");
jCSSRule("#kong_game_ui .chat_message_window p .username span", "vertical-align", "sub");
jCSSRule("#kong_game_ui .room_name_container", "color", colorSix);
jCSSRule(".feed_item_header a", "color", linkColorSec);
jCSSRuleBorderRadius(".feed_info_content", "10px");
jCSSRule(".feed_info_content > .desc, .feed_info_content > p", "color", colorFive);
jCSSRule(".feed_item > h3.feed_item_header", "color", colorFive);
jCSSRule("body:not(.no-flexbox) #chat_rooms_container .chat_message_window", "border", "2px double #222");
jCSSRuleBorderRadius("body:not(.no-flexbox) #chat_rooms_container .chat_message_window", "2px");
jCSSRule("#kong_game_ui .users_in_room", "border", "2px double #222");
jCSSRuleBorderRadius("#kong_game_ui .users_in_room", "2px");
/*jCSSRule("#high_scores_container table tr:nth-child(even) td", "background-color", bgColorSec);
jCSSRule("#high_scores_container table tr th", "background-color", bgColorSec);
jCSSRule("#high_scores_container table tr.myscore td", "background-color", "#fdcccc");*/
jCSSRule("#maingamecontent .game_table .links_connect", "height", "30px");
$("#maingame").css("height", "630px");
$("#maingamecontent").css("height", "630px");
$("#flashframecontent").css("height", "630px");
/* Forth module start */
jCSSRule("#forth_onlineplayers", {
	"color": colorMain,
	"font-weight": "bold",
	"width": "160px",
	"height": "20px",
	"float": "right" });
jCSSRule("#forth_onlineplayers > button", {
	"width": "150px",
	"height": "20px" });
jCSSRule("#forth_hideChat", {
	"color": colorMain,
	"font-weight": "bold",
	"width": "120px",
	"height": "20px",
	"float": "right" });
jCSSRule("#forth_hideChat > button", {
	"width": "110px",
	"height": "20px" });
jCSSRule("#forth_fontsize", {
	"width": "150px",
	"height": "20px",
	"color": colorMain,
	"float": "right" });
jCSSRule("#forth_fontsize > #ip_range", {
	"width": "80px",
	"vertical-align": "middle",
	"padding": "0px" });
jCSSRule("#forth_lockscreen", {
	"width": "120px",
	"height": "20px",
	"float": "right", });
jCSSRule("#forth_lockscreen > button", {
	"width": "110px",
	"height": "20px" });
jCSSRule("#forth_lockscreen > button:focus", "outline", "none");
jCSSRule(".locked", {
	"color": "black",
	"background-color": "grey" });
jCSSRule("#forth_fullscreen", {
	"height": "100%",
	"width": "100%",
	"background-color": bgColorMain,
	"position": "fixed",
	"top": "0",
	"left": "0",
	"z-index": "9999",
	"display": "none" });
jCSSRule(".game_ahead", {
	"position": "absolute",
	"z-index": "10000" });
jCSSRule("#bt_showquicklinks", {
	"color": "white",
	"cursor": "pointer" });
/* Forth module end */

/* Chat start */
jCSSRule("#kong_game_ui .tabpane", "background-color", "#2b2f31");
jCSSRule("#kong_game_ui .room_name_container", "color", "#a8a095");
jCSSRule("#kong_game_ui .room_name_container .room_name", "color", "#e8e6e3");
jCSSRule("#kong_game_ui .chat_message_window .chat_message_window_username", "color", "#86b4db");
jCSSRule("#kong_game_ui .chat_message_window .is_self span", "color", "#ff6161");
jCSSRule("#kong_game_ui .chat_message_window .is_self", "color", "#ff6161");
jCSSRule("#kong_game_ui .chat_message_window", "background-color", "#181a1b");
jCSSRule("#kong_game_ui .chat_message_window .even", "background-color", "#282b2d");
jCSSRule("#kong_game_ui .chat_message_window", "color", "#d3cfc9");
jCSSRule("#kong_game_ui ul.main_tabs li.tab a.active", "background-color", "#2b2f31");
jCSSRule("#kong_game_ui ul.main_tabs li.tab a.active", "color", "#a8a095");
jCSSRule("#kong_game_ui ul.main_tabs li.closeable a.active .close_tab_link", "background-color", "#2b2f31");
jCSSRule(".panel_handle a", "color", "#e8e8e8");
jCSSRule("#kong_game_ui ul.main_tabs li.tab a:not(.active)", "background-color", "#4d5356");
jCSSRule(".chat_char_countdown", "background-color", "#181a1b");
jCSSRule("textarea.chat_input", "background-color", "#181a1b");
jCSSRule("textarea.chat_input", "color", "#d3cfc9");
jCSSRule("#kong_game_ui .chat_controls .chat_input", "height", "36px");
jCSSRule("#kong_game_ui .chat_controls .chat_input:focus", {
    "outline": "none",
    "border": "1px inset white",
    "width": "278px",
    "height": "34px" });
jCSSRule("#kong_game_ui .chat_room_tab:not(.active) a", "background-color", "#3c4143");
jCSSRule("#kong_game_ui .chat_room_tab:not(.active) a", "color", "#eee");
jCSSRule("#kong_game_ui .chat_room_tab.active a", "background-color", "#181a1b");
jCSSRule("#kong_game_ui .chat_room_tab.active a", "color", "#eee");
jCSSRule("#kong_game_ui .user_row .guest_count_in_room", "color", "#a7a7a7");
jCSSRule(".chat-sticker-tab__normal, .chat-sticker-tab__shiny", "color", "#181a1b");

jCSSRule("#kong_game_ui .users_in_room", "background-color", "#181a1b");
jCSSRule("#kong_game_ui .user_row .username", "color", "#d3cfc9");
jCSSRuleBorderRadius(".cntrToggle", "4px");
jCSSRule(".cntrToggle", {
    "background-color": "#1b1b1b",
    "border": "white 1px solid",
    "color": "#ccc" });
jCSSRule("#game_news_posts .h6_alt", {
	"color": colorMain,
	"font-weight": "bold" });
jCSSRule("#game_info em", "color", "#aaa");
jCSSRule("#game_info .creatorinfo p a", "color", "#fff");
jCSSRule("#game_info_panel ul a", "color", "#ff6161");
jCSSRule("#kong_game_ui .chat_message_window .whisper", "background-color", "#181a1b");


jCSSRule("#alert_tab_pane_content > h4", "color", "#e4e4e4");
jCSSRule("#session_conflict_content_for_chat_tab > h4", "color", "#e4e4e4");
jCSSRule("span.no_accomplishments_completed", "color", "#dadada");
jCSSRule("div#accomplishments_tab_content a", "color", "#ff6161");
jCSSRule("div#accomplishments_tab_content a:link", "color", "#ff6161");
jCSSRule("div#accomplishments_tab_content a:active", "color", "#ff6161");
jCSSRule("div#high_scores_container a", "color", "#ff6161");
jCSSRule("div#high_scores_container a:link", "color", "#ff6161");
jCSSRule("div#high_scores_container a:active", "color", "#ff6161");
jCSSRule("span#high_score_panel_stat_select", "color", "#e4e4e4");
jCSSRule("#kong_game_ui .chat_promotion", "background-color", "#2b2f31");
jCSSRule("#kong_game_ui .chat_promotion", "color", "#f5f5f5");
jCSSRule("#kong_game_ui .default_tab_pane_content", "background-color", "#2b2f31");
jCSSRule("#kong_game_ui .default_tab_pane_content", "color", "#ededed");
jCSSRule("#high_scores_container ul.high_score_tabs li.high_score_panel_tab a.active", "background-color", "#181a1b");
jCSSRule("#high_scores_container ul.high_score_tabs li.high_score_panel_tab a.active", "color", "#ededed");
/*jCSSRule("#high_scores_container ul.high_score_tabs li.high_score_panel_tab a:not(.active)", "background-color", "#2b2f31");
jCSSRule("#high_scores_container ul.high_score_tabs li.high_score_panel_tab a:not(.active)", "color", "#ededed");*/
jCSSRule("#kong_game_ui .chat_message_window p .message", "color", "#e4e4e4");
jCSSRule("#normal-registration-wrapper > p.mts.mbm", "color", "#e4e4e4");
jCSSRule("#normal-registration-wrapper > p.mts.mbm a", "color", "#ff6161");


jCSSRule("#high_scores_container table tr:nth-child(even) td", "background-color", "#181a1b");
jCSSRule("#high_scores_container table tr:nth-child(odd) td", "background-color", "#282b2d");
jCSSRule("#high_scores_container table tr td", "color", "#d3cfc9");
jCSSRule("#high_scores_container table td.username a", "color", "#d3cfc9");
jCSSRule("#high_scores_container table tr th", "background-color", "#181a1b");
jCSSRule("#high_scores_container table tr th", "color", "#d3cfc9");
jCSSRule("#high_scores_container table tr.myscore td", "background-color", "#bbbbbb");
jCSSRule("#high_scores_container table tr.myscore td", "color", "#000");
jCSSRule("#high_scores_container table tr.myscore td a", "color", "#000");
jCSSRule("#high_scores_container .bucket", "background-color", "#181a1b");
jCSSRule("#high_scores_container .pagination", "background-color", "#181a1b");
jCSSRule("div#highscores_board li.current", "color", "#eee");

/* Chat end */

/* Game pages end */


/* Main page start */
jCSSRuleBorderRadius("#home.new_home #home_pods", "10px");
jCSSRuleBorderRadius("#trending_pod_holder", "5px");
jCSSRule("div.home-pod-header .home-pod-title", "color", colorSix);
jCSSRule("#show_more_link .large_show_more_area", "color", colorSix);
jCSSRule(".browse_rating .num_rating", "color", colorSix);
/* Main page end */


/* Findyourfriends pages start */
jCSSRule("body#plugs.featureform h1", "color", colorMain);
jCSSRule("body.generic #main p, body.generic #main ul, body.generic #feature ul", "color", colorThird);
jCSSRule("body#plugs.featureform #main form .import_contacts", "color", colorMain);
jCSSRule("body.featureform #feature #main form", "color", colorMain);
jCSSRule("body#plugs #sidebar dt", "color", linkColorSec);
jCSSRule("body.generic #sidebar p, body.generic #sidebar ul, body.generic #sidebar dl", "color", colorMain);
/* Findyourfriends pages end */


/* Fonction gestion de border radius start */
function jCSSRuleBorderRadius(selector, value) {
	jCSSRule(selector, {
		"-webkit-border-radius": value,
		"-moz-border-radius": value,
		"border-radius": value
	});
};
/* Fonction gestion de border radius end */

/* Fonction gestion de appearance start */
function jCSSRuleAppearence(selector, value) {
	jCSSRule(selector, {
		"-webkit-appearance": value,
		"-moz-appearance": value,
		"appearance": value
	});
};
/* Fonction gestion de appearance end */
