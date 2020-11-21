/*!
 * Kongregate Update for www.kongregate.com v0.9.4
 * https://github.com/Forthtilliath/kongregate_update
 *
 * Copyright 2020 Forth
 * Released under the MIT license
 * 
 * @fileoverview Add a button to hide/show online users and a slider to change the size of the text
 * @author Forth
 * @version 0.1
 */
 
var min_range_fontsize = 4;
var max_range_fontsize = 20;

var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;


/* When page is loaded */
jQuery(document).ready(function($) {
	
	/* Initialisation start */
	
	/* Check if each button already exist and delete them to avoid any double
	 * when the extension is updated while running (had this issue on FF) */
	if( $("#bt_showquicklinks").length ) {
		$("#bt_showquicklinks").remove();
	}
	if( $("#forth_fullscreen").length ) {
		$("#forth_fullscreen").remove();
	}
	if( $("#forth_onlineplayers").length ) {
		$("#forth_onlineplayers").remove();
	}
	if( $("#forth_hideChat").length ) {
		$("#forth_hideChat").remove();
	}
	if( $("#forth_fontsize").length ) {
		$("#forth_fontsize").remove();
	}
	
	/* We add the button to show the quick links */
	if( isFirefox ){
		$("#quicklinks").prepend('<li><button id="bt_showquicklinks">Show quick links</button></li>');
		jCSSRule("#bt_showquicklinks", {
			"color": "black",
			"width": "130px"
		});
	} else {
		$("#quicklinks").prepend('<li id="bt_showquicklinks" title="Hide/Show quick links"><i class="fas fa-arrow-alt-circle-left"></i></li>');
	}
	/* Per default, we hide all quick links */
	jCSSRule("#quicklinks li:not(:first-child)", "display", "none");
	jCSSRule("#quicklinks li:first-child svg", { "width": "12px", "height": "12px" });
	
	/* We add the fullscreen mode in hide */
	$('<div id="forth_fullscreen"></div>').appendTo("body");
	
	/* We add the button to lock the screen */
	$('<div id="forth_lockscreen"><button id="bt_lockscreen"><i class="fas fa-unlock"></i>Lock screen</button></div>').insertBefore("#cloud_save_info_template");
	
	/* We remove the cinematic mode button */
	$("#cinematic_mode_quicklink").remove();
	
	/* We remove the facebook button to gain space */
	$("#quicklinks_facebook").remove();
	
	/* We add the button to show or hide online players */   
	if( $.cookie('forth_showPlayers') == 'true' ) { /* Show */
		$('<div id="forth_onlineplayers"><button id="bt_showPlayers"><i class="fas fa-bars"></i>Hide online players</button></div>').insertBefore("#forth_lockscreen");
	}
	else /* Hide */
	{
		$('<div id="forth_onlineplayers"><button id="bt_showPlayers"><i class="fas fa-minus"></i>Show online players</button></div>').insertBefore("#forth_lockscreen");
		jCSSRule(".chat_room_template > .users_in_room", "display", "none");
	}
		
	/* We add the button to hide chat */
	$('<div id="forth_hideChat"><button id="bt_hideChat"><i class="fas fa-bars"></i>Hide chat</button></div>').insertBefore("#forth_onlineplayers");
	
	/* We add the button to show or hide online players */
	$('<div id="forth_fontsize"><span id="lb_fontsize">Text size </span><input type="range" id="ip_range" value="'+$.cookie('forth_fontsize')+'" min="'+min_range_fontsize+'" max="'+max_range_fontsize+'" /></div>').insertBefore("#forth_hideChat");
	changeTextSize($.cookie('forth_fontsize'));
	
	/* Initialisation end */
   
	/* Evenement show or hide online players start */
	$('#bt_showPlayers').click(function(){
		$(".chat_room_template > .users_in_room").toggle(500,function(){
			if( jQuery(".chat_room_template > .users_in_room").css("display") == "none" ) { /* Hide */
				$('#bt_showPlayers').html('<i class="fas fa-minus"></i>Show online players');
				/* Update the cookie to save setting after refreshs */
				$.removeCookie('forth_showPlayers', { path: '/' });
				$.cookie('forth_showPlayers', 'false', { expires: 30, path: '/' });
			}
			else /* Show */
			{
				$('#bt_showPlayers').html('<i class="fas fa-bars"></i>Hide online players');
				/* Update the cookie to save setting after refreshs */
				$.removeCookie('forth_showPlayers', { path: '/' });
				$.cookie('forth_showPlayers', 'true', { expires: 30, path: '/' });
			}
		});
   });
   /* Evenement show or hide online players end */
   
   /* Evenement change size of text start */
   $(document).on('input change', '#ip_range', function() {
		/* Add a cssrule to dynamise the text size */
		changeTextSize($(this).val());
		
		/* Update the cookie to save setting after refreshs */
		$.removeCookie('forth_fontsize', { path: '/' });
		$.cookie('forth_fontsize', $(this).val(), { expires: 30, path: '/' });
	});
	/* Evenement change size of text end */
	
	/* Evenement lock screen start */
	$('#bt_lockscreen').click(function(){
		if( $("#forth_fullscreen").css("display") == "none" ) { /* Locked screen */
			$("#forth_fullscreen").css("display","block"); /* Background */
			$("#floating_game_holder").addClass("game_ahead"); /* Put the game ahead */
			$("#bt_lockscreen").addClass("locked"); /* Change the style of the button */
			jCSSRule("body","overflow","hidden"); /* We remove scrollbars */
			jCSSRule("#floating_game_holder","padding-top","0px");
			$('#bt_lockscreen').html('<i class="fas fa-lock"></i> Unlock screen'); /* We change the title of the button */
			
			centrerElementAbsolu($("#floating_game_holder")); /* Center the game */
		} else {
			$("#forth_fullscreen").css("display","none"); /* Background */
			$("#floating_game_holder").removeClass("game_ahead");
			$("#bt_lockscreen").removeClass("locked");
			jCSSRule("body","overflow","");
			jCSSRule("#floating_game_holder","padding-top","4px");
			$('#bt_lockscreen').html('<i class="fas fa-unlock"></i> Lock screen');
		}
	});
	/* Evenement lock screen end */
	
	/* Evenement hide chat start */
	$('#bt_hideChat').click(function(){
		if( jQuery("#chat_container_cell").css("display") == "none" ) { // Show
			jQuery("#quicklinks").css("display","block");
			$("#chat_container_cell").toggle();
			$("#maingame").css("width", "1103px");
			$("#maingamecontent").css("width", "1103px");
			$("#flashframecontent").css("width", "1103px");
			$('#bt_hideChat').html('<i class="fas fa-bars"></i>Hide chat');
			$("#forth_fontsize").toggle();
		}
		else // Hide
		{
			jQuery("#quicklinks").css("display","none");
			$("#chat_container_cell").toggle();
			$("#maingame").css("width", "800px");
			$("#maingamecontent").css("width", "800px");
			$("#flashframecontent").css("width", "800px");
			
			if( $("#forth_fullscreen").css("display") == "block" ) {
				centrerElementAbsolu($("#floating_game_holder"));
			}
			
			$('#bt_hideChat').html('<i class="fas fa-minus"></i>Show chat');
			$("#forth_fontsize").toggle();
		}
	});
	/* Evenement hide chat end */
	
	$("#bt_showquicklinks").click(function(){
		$("#quicklinks li:not(:first-child)").toggle();
		if( $("#quicklinks li:not(:first-child)").css("display") == "list-item" ) {
			if( isFirefox ){
				$("#bt_showquicklinks").html('Hide quick links');
			} else {
				$("#bt_showquicklinks").html('<i class="fas fa-arrow-alt-circle-right"></i>');
			}
		} else {
			if( isFirefox ){
				$("#bt_showquicklinks").html('Show quick links');
			} else {
				$("#bt_showquicklinks").html('<i class="fas fa-arrow-alt-circle-left"></i>');
			}
		}
	});
});

$(window).resize(function(){
	if( $("#forth_fullscreen").css("display") == "block" ) {
		centrerElementAbsolu($("#floating_game_holder"));
	}
});

function centrerElementAbsolu(element)
{
	var hauteur_fenetre = $(window).height();

	var haut = (hauteur_fenetre - element.height()) / 2 + $(window).scrollTop();
	element.css({top: haut});
}

function changeTextSize(val) {
	/* Add a cssrule to dynamise the text size */
	jCSSRule(".chat_message_window_username", "font-size", val + "px"); /* Username */
	jCSSRule(".chat_message_window_undecorated_username", "font-size", val + "px"); /* Kong bot */
	jCSSRule(".chat_message_window p .message", "font-size", val + "px"); /* Message */
	jCSSRule(".chat_input", "font-size", val + "px"); /* Chat input */
	jCSSRule(".chat_message_window p .timestamp", "font-size", (val-2) + "px !important"); /* Timestamp */
}
