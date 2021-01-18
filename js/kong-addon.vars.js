/*!
 * Kong Addon for www.kongregate.com v1.5
 * https://github.com/Forthtilliath/kongregate_update
 *
 * Copyright 2020 Forth
 * Released under the MIT license
 * 
 * @fileoverview Variables used in the addon
 * @author Forth
 * @version 2
 */
"use strict";

// Configs
const debugLevel = 10; // Used to show or not logs to debug
const aBots = ['dateforsex', 'datingfree', 'gaysdate']; // Links to block bots
const iCookiesTimeAll = 30; //days // DarkMode / OnlinePlayers / TextSize
const iCookiesTimeGame = 7; //days // LockScreen / DisplayMode / Volume / Brightness
const sCookieNameAll = "kong_addon";
const sCookieNameGame = "kong_addon_game";

// Features config
const min_fontsize = 4;
const max_fontsize = 20;

const min_brightness = 50;
const max_brightness = 150;
const step_brightness = 10;

const min_volume = 0;
const max_volume = 100;

const modif_chat_width = 185; // When chat only

const songUrl = 'sound/pristine.flac';
let volumeValue = $.getCookieGame('VolumePing', 0.1);
let volumeValueOld = 0.1; // Usefull when mute

let cookieLockScreen = $.parseBool($.getCookieGame('LockScreen', 'false'));
let cookieShowPlayers = $.parseBool($.getCookieAll('ShowPlayers', 'false'));
let cookieFontSize = $.getCookieAll('FontSize', '11');
let cookieBrightness = $.getCookieGame('Brightness', '80%');
let cookieDisplayMode = $.getCookieGame('DisplayMode', '0');
let displayMode = 0;
const title_darkmode_on = 'Disable dark mode';
const title_darkmode_off = 'Activate dark mode';

/* Background colors List */
const bgColor_grey_00 = "#181a1b";
const bgColor_grey_01 = "#2b2f31";
const bgColor_grey_02 = "#423f3e";
const bgColor_grey_03 = "#222222";
const bgColor_grey_04 = "#111111";
const bgColor_grey_05 = "#aaaaaa";
const bgColor_grey_06 = "#dddddd";
const bgColor_grey_07 = "#0d0d0d";
const bgColor_grey_08 = "#282b2d";
const bgColor_grey_09 = "#4d5356";
const bgColor_grey_10 = "#3c4143";
const bgColor_grey_11 = "#333333";
const bgColor_grey_12 = "#202020";
const bgColor_grey_13 = "#5a5a5a";
const bgColor_red_00 = "#710000";
const bgColor_red_01 = "#490000";
const bgColor_purple_00 = "#e0d1ff";
const bgColor_purple_01 = "#b69cff";
const bgColor_purple_02 = "#daccff";

/* Colors List */
const color_grey_00 = "#cccccc";
const color_grey_01 = "#222222";
const color_grey_02 = "#a8a095";
const color_grey_03 = "#e8e8e8";
const color_grey_04 = "#d3d3d3";
const color_grey_05 = "#b0b0b0";
const color_grey_06 = "#eeeeee";
const color_grey_07 = "#181a1b";
const color_grey_08 = "#a7a7a7";
const color_grey_09 = "#aaaaaa";
const color_grey_10 = "#f5f5f5";
const color_grey_11 = "#3b3b3b";
const color_grey_12 = "#666666";
const color_grey_13 = "#dddddd";
const color_black = "#000000";
const color_white = "#ffffff";
const color_red_00 = "#e2062c";
const color_red_01 = "#ff6161";
const color_red_02 = "#8c0000";
const color_blue_00 = "#86b4db";
const color_green = "#2da432";
const color_yellow = "#ece0b9";

/* Colors Link List */
const linkColor_white = "#ffffff";
const linkColor_red = "#e2062c";
const linkColor_red_01 = "#a7001d";
const linkColor_red_02 = "#ff3b5d";
const linkColor_red_invert = "#1df9d3";
const linkColor_yellow = "#ffc107";

/* Kratridge colors */
const bgColor_kartridge = "#000000";
const color_kartridge_Main = "#ffffff";
const color_kartridge_Sec = "#6937dc";
const color_kartridge_Sec_op = "#651fd6";
const color_kartridge_Sec_tr = "#dac5ff";

// URL Pages start
const regURL = /(http[s]?:\/\/www\.kongregate\.com)((\/[\-\w]+)(\/[\-\w]+)?(\/[\-\w]+)?(\/[\-\w]+)?)?/ig;
const regVolume = /(songMsg.volume = )([01]{1})(\.{1}\d{1})?(;)/i;

// Id of the current page
const namePage = $(location).getIdCurrentPage();
const titlePage = $(document).attr("title");

const iDefaultBothWidth = (namePage == 'games') ? $("#maingame").css("width") : 0;
const iDefaultBothHeight = (namePage == 'games') ? ($("#maingame").cssNumber("height") + 9) + 'px' : 0; // +9 because of our buttons
const iDefaultChatWidth = (namePage == 'games') ? $("#chat_container_cell").css("width") : 0;
const iDefaultGameWidth = (namePage == 'games') ? $("#gameholder").css("width") : 0;
const iDefaultGameRealWidth = (namePage == 'games') ? $("#gameiframe").css("width") : 0;
let iDefaultGameLeft = -1;
/* URL Pages end */

/* Game page */
const menuButtonsHeight1 = "35px";
const menuButtonsHeight2 = "30px";

const icon_quicklinks_on = "fa fa-toggle-on";
const icon_quicklinks_off = "fa fa-toggle-off";
const icon_lockscreen_on = "fas fa-lock";
const icon_lockscreen_off = "fas fa-unlock";
const icon_onlinep_on = "fa fa-users";
const icon_onlinep_off = "fa fa-user";
const icon_chat_on = "fa fa-comment";
const icon_chat_off = "fas fa-comment-slash";
const icon_chatonly_on = "fas fa-comment-alt";
const icon_chatonly_off = "far fa-comment-alt";
const icon_volume_down = "fas fa-volume-down";
const icon_volume_up = "fas fa-volume-up";
const icon_volume_off = "fas fa-volume-off";
const icon_darkmode_on = "fas fa-moon";
const icon_darkmode_off = "fas fa-sun";
const icon_font = "fas fa-font";
const icon_brightness = "fas fa-adjust fa-w-18";
const icon_chatonly = "fas fa-comment";
const icon_gameonly = "fas fa-gamepad";
const icon_gameNchat = "fas fa-band-aid";
const icon_unreadMessage = "fas fa-envelope";

// Regexp for rewriter url on chat
const regWiki = /((https:\/\/idle-grindia\.fandom\.com\/wiki\/)(\w+)([#\w?]*)?)(?!.+\1)/ig;
const regGame = /[^<a href="]{1}(http[s]?:\/\/www\.kongregate\.com\/games\/\w+\/)([\-\w]+)([#\w?]*){1}[^" target="_blank">]{1}/ig;
const regAccount = /[^<a href="]{1}(http[s]?:\/\/www\.kongregate\.com\/accounts\/)(\w+){1}[^" target="_blank">]{1}/ig;

// jcssrule.js vars
// Properties we don't want to change when darkmode is off
const aPropRefused = ['color', 'background', 'background-color', 'background-image', 'border-color', 'border-color-top', 'border-color-right', 'border-color-bottom', 'border-color-left', 'filter', 'box-shadow'];
// Properties we want to always change even when darkmode is off
const aElemAlways = ["#forth_fullscreen", "#forth_messagebox", "#forth_messagebox #forth_messagetitle", "#forth_messagebox #forth_messagedesc", "#forth_textsize > span, #forth_brightness > span, #forth_ping > span", "span.onlyGameOrChat", "#bt_gameOnly", "#bt_gameNchat", "#bt_chatOnly"];

const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

let features = new ListFeatures();
features.add(new Feature('lockscreen', true, 0));
features.add(new Feature('onlineplayers', true, 1));
features.add(new Feature('displayMode', true, 2));
features.add(new Feature('textsize', true, 3));
features.add(new Feature('brightness', true, 4));
features.add(new Feature('ping', true, 5));
features.add(new Feature('darkMode', true, -1));
features.add(new Feature('unreadMessages', true, -1));
features.add(new Feature('botsblocker', true, -1));
features.add(new Feature('urlrewriter', true, -1));
features.add(new Feature('notifications', true, -1));

$.log(20, features);

let darkMode = ((features.get('darkMode') !== undefined) && features.get('darkMode').isActive()) ? $.parseBool($.getCookieAll('DarkMode', 'true')) : false;

let gameOrChatHided = false;
