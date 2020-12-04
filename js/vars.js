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

let debugLevel = 10;

// Links to block
let aBots = ['dateforsex', 'datingfree', 'gaysdate'];

/* Font size input range */
let min_fontsize = 4;
let max_fontsize = 20;

let min_brightness = 50;
let max_brightness = 150;
let step_brightness = 10;

let min_volume = 0;
let max_volume = 100;

/* Background colors List */
let bgColor_grey_00 = "#181a1b";
let bgColor_grey_01 = "#2b2f31";
let bgColor_grey_02 = "#423f3e";
let bgColor_grey_03 = "#222222";
let bgColor_grey_04 = "#111111";
let bgColor_grey_05 = "#aaaaaa";
let bgColor_grey_06 = "#dddddd";
let bgColor_grey_07 = "#0d0d0d";
let bgColor_grey_08 = "#282b2d";
let bgColor_grey_09 = "#4d5356";
let bgColor_grey_10 = "#3c4143";
let bgColor_grey_11 = "#333333";
let bgColor_grey_12 = "#202020";
let bgColor_red_00 = "#710000";
let bgColor_red_01 = "#490000";
let bgColor_purple_00 = "#e0d1ff";
let bgColor_purple_01 = "#b69cff";
let bgColor_purple_02 = "#daccff";

/* Colors List */
let color_grey_00 = "#cccccc";
let color_grey_01 = "#222222";
let color_grey_02 = "#a8a095";
let color_grey_03 = "#e8e8e8";
let color_grey_04 = "#d3d3d3";
let color_grey_05 = "#b0b0b0";
let color_grey_06 = "#eeeeee";
let color_grey_07 = "#181a1b";
let color_grey_08 = "#a7a7a7";
let color_grey_09 = "#aaaaaa";
let color_grey_10 = "#f5f5f5";
let color_grey_11 = "#3b3b3b";
let color_grey_12 = "#666666";
let color_grey_13 = "#dddddd";
let color_black = "#000000";
let color_white = "#ffffff";
let color_red_00 = "#e2062c";
let color_red_01 = "#ff6161";
let color_red_02 = "#8c0000";
let color_blue_00 = "#86b4db";
let color_green = "#2da432";
let color_yellow = "#ece0b9";

/* Colors Link List */
let linkColor_white = "#ffffff";
let linkColor_red = "#e2062c";
let linkColor_red_01 = "#a7001d";
let linkColor_red_02 = "#ff3b5d";
let linkColor_red_invert = "#1df9d3";
let linkColor_yellow = "#ffc107";

/* Kratridge colors */
let bgColor_kartridge = "#000000";
let color_kartridge_Main = "#ffffff";
let color_kartridge_Sec = "#6937dc";
let color_kartridge_Sec_op = "#651fd6";
let color_kartridge_Sec_tr = "#dac5ff";

/* URL Pages start */
let regURL = /(http[s]?:\/\/www\.kongregate\.com)((\/[\-\w]+)(\/[\-\w]+)?(\/[\-\w]+)?(\/[\-\w]+)?)?/ig;
let regVolume = /(songMsg.volume = )([01]{1})(\.{1}\d{1})?(;)/i;

// Id of the current page
let namePage = $(location).getIdCurrentPage();
$.log(10, `CURRENT PAGE : ${namePage}`);
/* URL Pages end */

/* Game page */
let menuButtonsHeight = "40px";

let icon_quicklinks_on = "fa fa-toggle-on";
let icon_quicklinks_off = "fa fa-toggle-off";
let icon_lockscreen_on = "fas fa-lock";
let icon_lockscreen_off = "fas fa-unlock";
let icon_onlinep_on = "fa fa-users";
let icon_onlinep_off = "fa fa-user";
let icon_chat_on = "fa fa-comment";
let icon_chat_off = "fas fa-comment-slash";
let icon_volume_down = "fas fa-volume-down";
let icon_volume_up = "fas fa-volume-up";
let icon_volume_off = "fas fa-volume-off";
let icon_darkmode_on = "fas fa-moon";
let icon_darkmode_off = "fas fa-sun";
let icon_font = "fas fa-font";
let icon_brightness = "fas fa-adjust fa-w-18";

// Regexp 
let regWiki = /(http[s]?:\/\/idle-grindia\.fandom\.com\/wiki\/)(\w+)([#\w?]*)?/ig;
let regGame = /[^<a href="]{1}(http[s]?:\/\/www\.kongregate\.com\/games\/\w+\/)([\-\w]+)([#\w?]*){1}[^" target="_blank">]{1}/ig;
let regAccount = /[^<a href="]{1}(http[s]?:\/\/www\.kongregate\.com\/accounts\/)(\w+){1}[^" target="_blank">]{1}/ig;

// Song chat
let songUrl = 'https://proxy.notificationsounds.com/message-tones/pristine-609/download/file-sounds-1150-pristine.mp3';
let volumeValue = $.getCookie('forth_volume', 0.1);
let volumeValueOld = 0.1; // Usefull when mute

let brightnessValue = $.getCookie('forth_brightness', '80%');
let fontsizeValue = $.getCookie('forth_fontsize', '11');

/* Display modes */
let darkMode = $.getCookie('forth_darkmode', true);
let title_darkmode_on = 'Disable dark mode';
let title_darkmode_off = 'Activate dark mode';

// jcssrule.js vars
// Properties we don't want to change when darkmode is off
let aPropRefused = ['color', 'background', 'background-color', 'background-image', 'border-color', 'border-color-top', 'border-color-right', 'border-color-bottom', 'border-color-left', 'filter', 'box-shadow'];
// Properties we want to always change even when darkmode is off
let aElemAlways = ["#forth_fullscreen", "#forth_messagebox", "#forth_messagebox #forth_messagetitle", "#forth_messagebox #forth_messagedesc", "#forth_fontsize > span, #forth_brightness > span, #forth_volume > span"];
