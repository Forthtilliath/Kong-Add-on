/*!
 * Kong Addon for www.kongregate.com v1.5
 * https://github.com/Forthtilliath/Kong-Addon
 *
 * Copyright 2020 Forth
 * Released under the MIT license
 * 
 * @fileoverview List of classes used
 * @author Forth
 * @version 1
 */
"use strict";

class Button {
    constructor(idbutton, title, value) {
        this.idbutton = idbutton;
        this.title = title;
        this.value = value;
    }

    /* To use it : unBouton.html */
    get html() {
        return `<button id="${this.idbutton}" title="${this.title}">${this.value}</button>`;
    }
}
