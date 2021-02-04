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
const DEBUG_LEVEL = 10, // Used to show or not logs to debug
    BOTS_TO_BLOCK = ['dateforsex', 'datingfree', 'gaysdate'], // Links to block bots
    COOKIE_TIME_ALL = 30, //days // DarkMode / OnlinePlayers / TextSize
    COOKIE_TIME_GAME = 7, //days // LockScreen / DisplayMode / Volume / Brightness
    COOKIE_NAME_ALL = "kong_addon",
    COOKIE_NAME_GAME = "kong_addon_game";

// Features config
const FONT_SIZE_MIN = 4,
    FONT_SIZE_MAX = 20,
    BRIGHTNESS_MIN = 50,
    BRIGHTNESS_MAX = 150,
    BRIGHTNESS_STEP = 10,
    VOLUME_MIN = 0,
    VOLUME_MAX = 100;
// Ping feature
let songUrl = 'sound/pristine.flac',
    volumeValue = $.getCookieGame('VolumePing', 0.1),
    volumeValueOld = 0.1; // Usefull when mute
// DisplayMode feature
let modif_chat_width = 0; // When chat only
if (!$('#forth_firefox').length) modif_chat_width = 185; // Except when extension updated on FF // NOTE Verifier sur FF si ca fonctionne correctement

// Cookies
let cookieLockScreen = $.parseBool($.getCookieGame('LockScreen', 'false')),
    cookieShowPlayers = $.parseBool($.getCookieAll('ShowPlayers', 'false')),
    cookieFontSize = $.getCookieAll('FontSize', '11'),
    cookieBrightness = $.getCookieGame('Brightness', '80%'),
    cookieDisplayMode = $.getCookieGame('DisplayMode', '0'),
    displayMode = 0;

// Background colors List
const bgColor_grey_00 = "#181a1b",
    bgColor_grey_01 = "#2b2f31",
    bgColor_grey_02 = "#423f3e",
    bgColor_grey_03 = "#222222",
    bgColor_grey_04 = "#111111",
    bgColor_grey_05 = "#aaaaaa",
    bgColor_grey_06 = "#dddddd",
    bgColor_grey_07 = "#0d0d0d",
    bgColor_grey_08 = "#282b2d",
    bgColor_grey_09 = "#4d5356",
    bgColor_grey_10 = "#3c4143",
    bgColor_grey_11 = "#333333",
    bgColor_grey_12 = "#202020",
    bgColor_grey_13 = "#5a5a5a",
    bgColor_red_00 = "#710000",
    bgColor_red_01 = "#490000",
    bgColor_purple_00 = "#e0d1ff",
    bgColor_purple_01 = "#b69cff",
    bgColor_purple_02 = "#daccff";

// Colors List
const color_grey_00 = "#cccccc",
    color_grey_01 = "#222222",
    color_grey_02 = "#a8a095",
    color_grey_03 = "#e8e8e8",
    color_grey_04 = "#d3d3d3",
    color_grey_05 = "#b0b0b0",
    color_grey_06 = "#eeeeee",
    color_grey_07 = "#181a1b",
    color_grey_08 = "#a7a7a7",
    color_grey_09 = "#aaaaaa",
    color_grey_10 = "#f5f5f5",
    color_grey_11 = "#3b3b3b",
    color_grey_12 = "#666666",
    color_grey_13 = "#dddddd",
    color_black = "#000000",
    color_white = "#ffffff",
    color_red_00 = "#e2062c",
    color_red_01 = "#ff6161",
    color_red_02 = "#8c0000",
    color_blue_00 = "#86b4db",
    color_green = "#2da432",
    color_yellow = "#ece0b9";

/* Colors Link List */
const linkColor_white = "#ffffff",
    linkColor_red = "#e2062c",
    linkColor_red_01 = "#a7001d",
    linkColor_red_02 = "#ff3b5d",
    linkColor_red_invert = "#1df9d3",
    linkColor_yellow = "#ffc107";

/* Kratridge colors */
const KARTRIDGE_BGCOLOR = "#000000",
    KARTRIDGE_COLOR_MAIN = "#ffffff",
    KARTRIDGE_COLOR_SEC = "#6937dc",
    KARTRIDGE_COLOR_SEC_OP = "#651fd6",
    KARTRIDGE_COLOR_SEC_TR = "#dac5ff";

// Regexp for rewriter url on chat
const REGEX_WIKI = /((https:\/\/idle-grindia\.fandom\.com\/wiki\/)(\w+)([#\w?]*)?)(?!.+\1)/ig,
    REGEX_GAME = /[^<a href="]{1}(http[s]?:\/\/www\.kongregate\.com\/games\/\w+\/)([\-\w]+)([#\w?]*){1}[^" target="_blank">]{1}/ig,
    REGEX_ACCOUNT = /[^<a href="]{1}(http[s]?:\/\/www\.kongregate\.com\/accounts\/)(\w+){1}[^" target="_blank">]{1}/ig;
// URL Pages start
const REGEX_URL = /(http[s]?:\/\/www\.kongregate\.com)((\/[\-\w]+)(\/[\-\w]+)?(\/[\-\w]+)?(\/[\-\w]+)?)?/ig;;

// Id of the current page
const PAGE_NAME = $(location).getIdCurrentPage(),
    PAGE_TITLE = $(document).attr("title");

const WIDTH_CHAT_DEFAULT = (PAGE_NAME == 'games') ? $("#chat_container_cell").css("width") : 0,
    WIDTH_GAME_DEFAULT = (PAGE_NAME == 'games') ? $("#gameholder").css("width") : 0,
    WIDTH_BOTH_DEFAULT = (PAGE_NAME == 'games') ? $("#maingame").css("width") : 0,
    HEIGHT_BOTH_DEFAULT = (PAGE_NAME == 'games') ? ($('#forth_firefox').length) ? $('#iDefaultBothHeight').text() : ($("#maingame").cssNumber("height") + 9) + 'px' : 0, // +9 because of our buttons
    LEFT_GAME_DEFAULT = (PAGE_NAME == 'games') ? $("#gameiframe").css("left") : 0;
let iDefaultGameLeft = -1;
/* URL Pages end */

/* Game page */
const HEIGHT_MENU_BUTTONS_1 = "35px",
    HEIGHT_MENU_BUTTONS_2 = "30px";

const ICON_QUICKLINKS_ON = "fa fa-toggle-on",
    ICON_QUICKLINKS_OFF = "fa fa-toggle-off",
    ICON_LOCKSCREEN_ON = "fas fa-lock",
    ICON_LOCKSCREEN_OFF = "fas fa-unlock",
    ICON_ONLINE_PLAYERS_ON = "fa fa-users",
    ICON_ONLINE_PLAYERS_OFF = "fa fa-user",
    ICON_VOLUME_DOWN = "fas fa-volume-down",
    ICON_VOLUME_UP = "fas fa-volume-up",
    ICON_VOLUME_OFF = "fas fa-volume-off",
    ICON_DARKMODE_ON = "fas fa-moon",
    ICON_DARKMODE_OFF = "fas fa-sun",
    ICON_FONTSIZE = "fas fa-font",
    ICON_BRIGHTNESS = "fas fa-adjust fa-w-18",
    ICON_CHAT_ONLY = "fas fa-comment",
    ICON_GAME_ONLY = "fas fa-gamepad",
    ICON_GAME_AND_CHAT = "fas fa-band-aid",
    ICON_UNREAD_MESSAGE = "fas fa-envelope";

// jcssrule.js vars
// Properties we don't want to change when darkmode is off
const JCSS_PROPERTIES_DARKMODE = ['color', 'background', 'background-color', 'background-image', 'border-color', 'border-color-top', 'border-color-right', 'border-color-bottom', 'border-color-left', 'filter', 'box-shadow'];
// Properties we want to always change even when darkmode is off
const JCSS_ELEMENTS_IMMUTABLE = ["#forth_fullscreen", "#forth_messagebox", "#forth_messagebox #forth_messagetitle", "#forth_messagebox #forth_messagedesc", ".feature_aSelect span", "span.onlyGameOrChat", "#bt_gameOnly", "#bt_gameNchat", "#bt_chatOnly"];

const IS_FIREFOX = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

let features = new ListFeatures();
features.add('lockscreen', true, 0, 'feature_aButton');
features.add('onlineplayers', true, 1, 'feature_aButton');
features.add('displayMode', true, 2, 'feature_sevButtons');
features.add('textsize', true, 3, 'feature_aSelect');
features.add('brightness', true, 4, 'feature_aSelect');
features.add('ping', true, 5, 'feature_aSelect');
features.add('settings', false, 6, 'feature_aButton');
// no interface features
features.add('darkMode', true, -1, 'feature_global_button');
features.add('unreadMessages', true, -1, 'feature_global_button');
features.add('quickLinks', true, -1, 'feature_aButton');
features.add('botsblocker', true, -1, '');
features.add('urlrewriter', true, -1, '');
features.add('notifications', true, -1, '');
features.sort();

let darkMode = ((features.get('darkMode') !== undefined) && features.get('darkMode').isActive()) ? $.parseBool($.getCookieAll('DarkMode', 'true')) : false;
let featuresSettings = $.parseBool($.getCookieAll('Settings', 'false')); // Feature Settings to active or not each features

let gameOrChatHided = cookieDisplayMode != 0;
const STICKERS_SHINNY = true;
