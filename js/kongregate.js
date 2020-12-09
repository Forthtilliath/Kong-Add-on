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

if (aFeatures['ping']['display'] || aFeatures['botsblocker']['display']) {
    // We create a new script block
    var s = document.createElement("script");
    s.type = "text/javascript";
    // We give an id to be able to set songVolume
    s.id = "script_kong";

    // And we had manually all the code
    /**********************************************************/
    /******************** Forth Code Start ********************/
    /**********************************************************/
    if (aFeatures["urlrewriter"]["display"]) {
        /** Transform an url to html url
         *  @param type {string} set the type of link (wiki, game or account)
         *  @param value {array} set the regexp result
         *  @return {string} link ready to display in the chat
         */
        s.append("function getHtmlLink(type, value) {");
        s.append("    if (type == 'wiki') {");
        s.append("        let urlOut = '<a href=\"' + value[0] + '\" target=\"_blank\">[Wiki';");
        // If not main page
        s.append("        if ((value[3] != 'Idle_Grindia_Wiki') && (value[3] != 'Idle_Grindia')) {");
        // If there are an anchor with his id
        s.append("            if (value[4] && (value[4].length > 1)) {");
        s.append("                urlOut += ' - ' + value[4].substr(1).replaceAll('_', ' ');");
        s.append("            } else {");
        s.append("                urlOut += ' - ' + value[3].replaceAll('_', ' ');");
        s.append("            }");
        s.append("        }");
        s.append("        urlOut += ']</a>';");

        s.append("        return urlOut;");
        s.append("    }");
        s.append("    if (type == 'game') {");
        s.append("        let titleGame = '';");
        s.append("        let aTitleGame = value[2].split('-');");
        // We uppercase the first letter of each word of the game name
        s.append("        for (let i = 0; i < aTitleGame.length; i++) {");
        s.append("            titleGame += aTitleGame[i].substring(0, 1).toUpperCase() + aTitleGame[i].substring(1).toLowerCase() + ' ';");
        s.append("        }");

        s.append("        return '>[Game - ' + titleGame + ']<';");
        s.append("    }");
        s.append("    if (type == 'account') {");
        s.append("        return '>[Account - ' + value[2] + ']<';");
        s.append("    }");
        s.append("}");

        s.append("function urlRewritter(msg) {");
        s.append("    let m;");
        s.append("    let msgOut = msg;");
        // For each wiki's link in the msg
        s.append("    let regWiki = " + regWiki + ";");
        s.append("    while ((m = regWiki.exec(msg)) !== null) {");
        //s.append("        msgOut = msgOut.replace(m[0], getHtmlLink('wiki', m));"); // Rewrite link alrdy did
        s.append("        msgOut = msgOut.replaceAll(m[0], getHtmlLink('wiki', m));"); 
        s.append("    }");
        // For each game's link in the msg
        s.append("    let regGame = " + regGame + ";");
        s.append("    while ((m = regGame.exec(msg)) !== null) {");
        s.append("        msgOut = msgOut.replace(m[0], getHtmlLink('game', m));");
        s.append("    }");
        // For each account"s link in the msg
        s.append("    let regAccount = " + regAccount + ";");
        s.append("    while ((m = regAccount.exec(msg)) !== null) {");
        s.append("        msgOut = msgOut.replace(m[0], getHtmlLink('account', m));");
        s.append("    }");
        // We fixe some issues after replace games link (because there are already html links)
        s.append("    msgOut = msgOut.replace(new RegExp('( ]<\/a>)([#])?','g'), ']</a>');");
        // We replace the message
        s.append("    return msgOut;");
        s.append("}");
    }
    
    if (aFeatures['botsblocker']['display']) {
        s.append("var websitesBlocked = " + $.getArrayDoubleToString(aBots) + ";");
    }
    if (aFeatures['ping']) {
        s.append("var songMsg = new Audio('" + chrome.runtime.getURL(songUrl) + "');");
        s.append("songMsg.volume = " + volumeValue + ";");
    }
    /**********************************************************/
    /********************* Forth Code End *********************/
    /**********************************************************/

    s.append("ChatDialogue.prototype.displayUnsanitizedMessage = function (a, b, c, d) {");
    //s.append("songMsg.pause();");
    //s.append("songMsg.currentTime = 0;");
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
    if (aFeatures['botsblocker']['display']) {
        // We check if the message content a website blocked
        s.append("        for( var i = 0 ; i  < websitesBlocked.length ; i++ ) {");
        // If YES
        s.append("            if( b.search(websitesBlocked[i][0]) >= 0 ) {");
        // We log in the console
        if (debugLevel >= 50) {
            s.append("                console.log(`${d.formatted_timestamp} : Bot detected [${a}] with the pattern [${websitesBlocked[i][0]}]`);");
        }
        // We count it
        s.append("                websitesBlocked[i][1]++;");
        // And cancel the adding of the message
        s.append("                return;");
        s.append("            }"); // If end
        s.append("        }"); // For end
    }
    if (aFeatures['ping']['display']) {
        // Add a song when there are a new message
        s.append("        if( !g && !d.non_user ) songMsg.play();");
    }
    /**********************************************************/
    /********************* Forth Code End *********************/
    /**********************************************************/
    s.append("        this._messages_count % 2 && h.push('even');");
    s.append("        c['class'] && h.push(c['class']);");
    s.append("        g && e.push('is_self');");
    s.append("        if (c = 'string' === typeof b ? null : b.stickerId) d.template = ChatDialogue.STICKER_MESSAGE_TEMPLATE, d.stickerId = c, d.stickerVariant = b.stickerVariant, d.stickerPackName = b.stickerPackName, d.stickerLevel = b.level, d.stickerQuality = 100 <= b.level ? b.quality + ' is-ranked' : b.quality, d.stickerUrl = this._sticker_manager.url(c, d.stickerVariant, 72);");
    if (aFeatures["urlrewriter"]["display"]) {
        s.append("        b = urlRewritter(b);"); // URL Rewritter
    }
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
}
