/*!
 * Kong Addon for www.kongregate.com v1.5
 * https://github.com/Forthtilliath/kongregate_update
 *
 * Copyright 2020 Forth
 * Released under the MIT license
 * 
 * @fileoverview Variables used in the addon
 * @author Forth
 * @version 1
 */
"use strict";

const debugLevel = 10;

// Links to block
const aBots = ['dateforsex', 'datingfree', 'gaysdate'];

/* Font size input range */
const min_fontsize = 4;
const max_fontsize = 20;

const min_brightness = 50;
const max_brightness = 150;
const step_brightness = 10;

const min_volume = 0;
const max_volume = 100;

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

/* URL Pages start */
const regURL = /(http[s]?:\/\/www\.kongregate\.com)((\/[\-\w]+)(\/[\-\w]+)?(\/[\-\w]+)?(\/[\-\w]+)?)?/ig;
const regVolume = /(songMsg.volume = )([01]{1})(\.{1}\d{1})?(;)/i;

// Id of the current page
const namePage = $(location).getIdCurrentPage();
$.log(10, `CURRENT PAGE : ${namePage}`);
/* URL Pages end */

/* Game page */
const menuButtonsHeight = "40px";

const icon_quicklinks_on = "fa fa-toggle-on";
const icon_quicklinks_off = "fa fa-toggle-off";
const icon_lockscreen_on = "fas fa-lock";
const icon_lockscreen_off = "fas fa-unlock";
const icon_onlinep_on = "fa fa-users";
const icon_onlinep_off = "fa fa-user";
const icon_chat_on = "fa fa-comment";
const icon_chat_off = "fas fa-comment-slash";
const icon_volume_down = "fas fa-volume-down";
const icon_volume_up = "fas fa-volume-up";
const icon_volume_off = "fas fa-volume-off";
const icon_darkmode_on = "fas fa-moon";
const icon_darkmode_off = "fas fa-sun";
const icon_font = "fas fa-font";
const icon_brightness = "fas fa-adjust fa-w-18";

// Regexp 
const regWiki = /((https:\/\/idle-grindia\.fandom\.com\/wiki\/)(\w+)([#\w?]*)?)(?!.+\1)/ig;
const regGame = /[^<a href="]{1}(http[s]?:\/\/www\.kongregate\.com\/games\/\w+\/)([\-\w]+)([#\w?]*){1}[^" target="_blank">]{1}/ig;
const regAccount = /[^<a href="]{1}(http[s]?:\/\/www\.kongregate\.com\/accounts\/)(\w+){1}[^" target="_blank">]{1}/ig;

// Song chat
const songUrl = 'sound/pristine.flac';
let volumeValue = $.getCookie('forth_volume', 0.1);
let volumeValueOld = 0.1; // Usefull when mute

let brightnessValue = $.getCookie('forth_brightness', '80%');
let fontsizeValue = $.getCookie('forth_fontsize', '11');

/* Display modes */
let darkMode = $.getCookie('forth_darkmode', true);
const title_darkmode_on = 'Disable dark mode';
const title_darkmode_off = 'Activate dark mode';

// jcssrule.js vars
// Properties we don't want to change when darkmode is off
const aPropRefused = ['color', 'background', 'background-color', 'background-image', 'border-color', 'border-color-top', 'border-color-right', 'border-color-bottom', 'border-color-left', 'filter', 'box-shadow'];
// Properties we want to always change even when darkmode is off
const aElemAlways = ["#forth_fullscreen", "#forth_messagebox", "#forth_messagebox #forth_messagetitle", "#forth_messagebox #forth_messagedesc", "#forth_fontsize > span, #forth_brightness > span, #forth_volume > span"];

// Features displayed
const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1; // Some features slowing FF 
const aFeatures = new Array();
aFeatures['lockscreen'] = {
    'display': true,
    'position': 0,
    'divname':'#forth_lockscreen'
};
aFeatures['onlineplayers'] = {
    'display': true,
    'position': 1,
    'divname':'#forth_onlineplayers'
};
aFeatures['hidechat'] = {
    'display': true,
    'position': 2,
    'divname':'#forth_hideChat'
};
aFeatures['textsize'] = {
    'display': true,
    'position': 3,
    'divname':'#forth_fontsize'
};
aFeatures['brightness'] = {
    'display': true,
    'position': 4,
    'divname':'#forth_brightness'
};
aFeatures['ping'] = {
    'display': true,
    'position': 5,
    'divname':'#forth_volume'
};
aFeatures['botsblocker'] = {
    'display': true
};
aFeatures['urlrewriter'] = {
    'display': true
};

const nbFeatures = $.getNbFeatures(aFeatures);