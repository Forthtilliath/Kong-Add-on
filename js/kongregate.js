/*!
 * Kong Addon for www.kongregate.com v1.5
 * https://github.com/Forthtilliath/Kong-Addon
 *
 * Copyright 2020 Forth
 * Released under the MIT license
 * 
 * @fileoverview Script injected to modify kong script and be able to block bots and add a ping when someone post a message
 * @author Forth
 * @version 1
 */

// We create a new script block
var s = document.createElement("script");
s.type = "text/javascript";
// We give an id to be able to set songVolume
s.id = "script_kong";

// And we had manually all the code
/**********************************************************/
/******************** Forth Code Start ********************/
/**********************************************************/
s.append("var websitesBlocked = " + $.getArrayDoubleToString(aBots) + ";");
//s.append("var songMsg = new Audio('" + songUrl + "');");
s.append("var songMsg = new Audio('" + chrome.runtime.getURL(songUrl) + "');");
s.append("songMsg.volume = " + volumeValue + ";");
/**********************************************************/
/********************* Forth Code End *********************/
/**********************************************************/

s.append("ChatDialogue.prototype.displayUnsanitizedMessage = function (a, b, c, d) {");
s.append("    c || (c = {});");
s.append("    d || (d = {});");
s.append("    allow_mutes = (active_room = this._holodeck.chatWindow().activeRoom()) && !active_room.canUserModerate(active_room.self()) || d.whisper;");
s.append("    if (!allow_mutes || !this._chat_window.isMuted(a)) {");
s.append("        var e = d.non_user ? 'chat_message_window_undecorated_username' : 'chat_message_window_username',");
s.append("            g = a == this._chat_window.username(),");
s.append("            h = [];");
s.append("        e = [e];");
s.append("        var l = d['private'] ? 'To ' : '';");
s.append("        d.timestamp = d.timestamp ? new Date(d.timestamp) : new Date;");
s.append("        d.formatted_timestamp = d.timestamp.format('mmm d - h:MMTT');");
/**********************************************************/
/******************** Forth Code Start ********************/
/**********************************************************/
// We check if the message content a website blocked
s.append("        for( var i = 0 ; i  < websitesBlocked.length ; i++ ) {");
// If YES
s.append("            if( b.search(websitesBlocked[i][0]) >= 0 ) {");
// We log in the console
if (debugLevel >= 50) {
    s.append("                console.log(`${d.formatted_timestamp} : Bot detected [${a}] with the pattern [${websitesBlocked[i][0]}]`);");
}
// We count it
//s.append("                aBotsBlocked[i]++;");
s.append("                websitesBlocked[i][1]++;");
// And cancel the adding of the message
s.append("                return;");
s.append("            }"); // If end
s.append("        }"); // For end
// Add a song when there are a new message
// if ( COOKIE NOTIF == ON )
s.append("        if( !g && !d.non_user ) songMsg.play();");
/**********************************************************/
/********************* Forth Code End *********************/
/**********************************************************/
s.append("        this._messages_count % 2 && h.push('even');");
s.append("        c['class'] && h.push(c['class']);");
s.append("        g && e.push('is_self');");
s.append("        if (c = 'string' === typeof b ? null : b.stickerId) d.template = ChatDialogue.STICKER_MESSAGE_TEMPLATE, d.stickerId = c, d.stickerVariant = b.stickerVariant, d.stickerPackName = b.stickerPackName, d.stickerLevel = b.level, d.stickerQuality = 100 <= b.level ? b.quality + ' is-ranked' : b.quality, d.stickerUrl = this._sticker_manager.url(c, d.stickerVariant, 72);");
s.append("        a = this.messageContent({");
s.append("            prefix: l,");
s.append("            username: a,");
s.append("            message: b,");
s.append("            classNames: h.join(' '),");
s.append("            userClassNames: e.join(' '),");
s.append("            characterName: d.characterName,");
s.append("            timestamp: d.formatted_timestamp,");
s.append("            template: d.template,");
s.append("            stickerId: d.stickerId,");
s.append("            stickerVariant: d.stickerVariant,");
s.append("            stickerUrl: d.stickerUrl,");
s.append("            stickerLevel: d.stickerLevel,");
s.append("            stickerQuality: d.stickerQuality,");
s.append("            stickerPackName: d.stickerPackName");
s.append("        });");
s.append("        this.insert(a, null, {");
s.append("            timestamp: d.timestamp");
s.append("        });");
s.append("        this._messages_count++");
s.append("    }");
s.append("}");

$("head").append(s);
