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
    constructor(idbutton, title, value, classes) {
        this.idbutton = idbutton;
        this.title = title;
        this.value = value;
        this.classes = classes || '';
    }

    /* To use it : unBouton.html */
    get html() {
        if (this.classes != '') {
            return `<button id="${this.idbutton}" title="${this.title}" class="${this.classes}">${this.value}</button>`;
        } else {
            return `<button id="${this.idbutton}" title="${this.title}">${this.value}</button>`;
        }
    }
};

class Button2 {
    constructor(id, title, value, classes) {
        this.id = $.getArg(id, '');
        this.title = $.getArg(title, '');
        this.value = $.getArg(value, '');
        this.classes = $.getArg(classes, '');
        this.element = $('<button>');

        this.initialize();
    }

    initialize() {
        if (this.id !== '') this.element.prop('id', this.id);
        if (this.classes !== '') this.element.addClass(this.classes);
        this.set(this.value, this.title);
    }

    get() {
        return this.element;
    }

    getHtml() {
        return this.element[0].outerHTML;
    }

    set(content, title) {
        if (title !== '') this.element.prop('title', title);
        if (typeof content === 'string') {
            this.element.html(content); // On ajoute le texte
            //this.element.text(content); // On ajoute le texte
        }
        if (typeof content === 'object') {
            this.element.empty(); // On vide le bouton avant d'ajouter le nouveau contenu
            this.element.append(content); // On ajoute l'élément
        }
    }

}

class Feature {

    constructor(id, active, position, classes) {
        this.id = id;
        this.active = active || false;
        this.position = position >= 0 ? position : -1; // Position in the Feature's Div
        this.classes = classes;
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

    setActive(b) {
        this.active = $.parseBool(b);
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
            $('body').append($.createDiv(this.divName2, content, this.classes));
        } else {
            this.div.append($.createDiv(this.divName, content, this.classes));
        }
    }
};

class ListFeatures {

    constructor() {
        this.aFeatures = [];
        this.aFeaturesTemp = [];
        this.containerId = 'forth_features';
    }

    /* Add a Feature to the list
     * @param oneFeature {Feature}
     */
    add(id, active, position, classes) {
        if (position >= 0 && active) { // Check if feature is active and has an interface position
            this.aFeaturesTemp.push({ // Add to temp array to sort it and organize positions
                id,
                active,
                position,
                classes
            });
        } else if (active) { // Check if feature is active
            this.aFeatures[id] = new Feature(id, active, position, classes); // Add to final array
        }
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

    // Order features
    sort() {
        this.aFeaturesTemp.sort((a, b) => a.position - b.position);
        for (let i = 0; i < this.aFeaturesTemp.length; i++) { // Add features to final array
            this.aFeatures[this.aFeaturesTemp[i].id] = new Feature(this.aFeaturesTemp[i].id, this.aFeaturesTemp[i].active, i, this.aFeaturesTemp[i].classes);
        };
    }
}
