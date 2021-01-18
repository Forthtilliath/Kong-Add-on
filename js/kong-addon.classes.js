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
};

class Feature {

    constructor(id, active, position) {
        this.id = id;
        this.active = active || false;
        this.position = position >= 0 ? position : -1; // Position in the Feature's Div
    }

    // Getters
    getId() {
        return this.id;
    }

    getPosition() {
        return this.position;
    }

    isActive() {
        return this.active;
    }

    get divName() {
        return `forth_${this.id}`;
    }

    get divName2() {
        return `forth_f_${this.id}`;
    }

    // Get the Div Element
    get div() {
        if (this.position == -1) {
            return $(`#${this.divName2}`);
        } else {
            return $(`#forth_feature_${this.position}`);
        }
    }

    // Setters
    setTitle(title) {
        this.div.attr('title', title);
    }


    show() {
        this.div.show();
    }

    hide() {
        this.div.hide();
    }

    // Add the div to the DOM
    addDiv(content) {
        if (this.position == -1) {
            $('body').append($.createDiv(this.divName2, content));
        } else {
            this.div.append($.createDiv(this.divName, content));
        }
    }
};

class ListFeatures {

    constructor() {
        this.aFeatures = new Array;
        this.containerId = 'forth_features';
    }

    /* Add a Feature to the list
     * @param oneFeature {Feature}
     */
    add(oneFeature) {
        this.aFeatures[oneFeature.getId()] = oneFeature;
    }

    /* Create the container for all features
     * @param element {string} Name of the element before what we insert the container
     */
    addContainerIn(element) {
        $('<div id="' + this.containerId + '"></div>').insertBefore(element);
    }

    /* Create the container for each feature
     */
    addSubContainers() {
        // Create a sub-block for each feature
        for (let i = 0; i < this.nbFeatures; i++) {
            this.container.append($.createDiv(`forth_feature_${i}`));
        }
    }

    // Return the number of feature displayed in the bar's features
    get nbFeatures() {
        let i = 0;
        // For each feature
        for (var c in this.aFeatures) {
            if ((this.aFeatures[c].isActive()) && (this.aFeatures[c].getPosition() >= 0)) {
                i++;
            }
        };
        return i;
    }

    // Return the container 
    get container() {
        return $(`#${this.containerId}`);
    }

    // Return the feature by his id
    get(id) {
        return this.aFeatures[id];
    }
}
