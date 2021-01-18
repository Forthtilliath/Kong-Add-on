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
    content = '';

    constructor(id, active, position) {
        this.id = id;
        this.active = active || false;
        this.position = position >= 0 ? position : -1;
    }

    getId() {
        return this.id;
    }

    isActive() {
        return this.active;
    }

    /*getPosition() {
        return this.position;
    }*/

    get divName() {
        return `forth_${this.id}`;
    }

    get div() {
        return $(`#${this.divName}`);
    }

    get featureDiv() {
        return $(`#forth_feature_${this.position}`);
    }

    show() {
        $.log(10, "Position = "+this.position);
        if (this.position == -1) {
            return $(this.div).show();
        } else {
            return $(this.featureDiv).show();
        }
    }

    hide() {
        $.log(10, "Position = "+this.position);
        if (this.position == -1) {
            return $(this.div).hide();
        } else {
            return $(this.featureDiv).hide();
        }
    }

    addDiv(content) {
        if (this.position == -1) {
            $.log(10, "Call addDiv()");
            $.log(10, $.createDiv(this.divName, content));
            //$.createDiv(this.divName, content).appendTo('body');
            $('body').append($.createDiv(this.divName, content));
        } else {
            this.featureDiv.append($.createDiv(this.divName, content));
        }
    }

    addSelect(container, idcontainer, idSelect, title, label, options, titleLabel, titleSelect) {
        let a = '',
            b = '';
        if (typeof (titleLabel) != 'undefined') a = ` title="${titleLabel}"`;
        if (typeof (titleSelect) != 'undefined') b = ` title="${titleSelect}"`;
        this.featureDiv.append($(`<${container} id="${idcontainer}" title="${title}"><span${a}>${label}</span><select id="${idSelect}"${b}>${options}</select></${container}>`));
    }
};

class ListFeatures {
    aFeatures = new Array;
    containerId = 'forth_features';

    /* Add a Feature to the list
     * @param oneFeature {Feature}
     */
    add(oneFeature) {
        //ListFeatures[Feature.id] : Feature.active, Feature.position
        let k = oneFeature.getId();
        /*this.aFeatures.push({
            k: oneFeature
        });*/
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
        for (var c in aFeatures) {
            if ((aFeatures[c]['display'] == true) && (aFeatures[c]['position'] >= 0)) {
                i++;
            }
        };
        return i;
    }

    // Return the container 
    get container() {
        return $(`#${this.containerId}`);
    }

    get(id) {
        return this.aFeatures[id];
    }
    /*isActive(id) {

    }*/
}
