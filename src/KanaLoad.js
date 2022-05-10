import katakanaSrc from "./katakana.txt";
import * as KanaModel from './KanaModel.js'


export function isKatakanaLoaded() {
    return KanaModel.getKatakanaRomajiSet() != null && KanaModel.getKatakanaKanaSet() != null;
}

export function loadKatakana() {
    if (isKatakanaLoaded()) {
        console.log("Katakana already loaded");
        return;
    } else {
        console.log("Loading Katakana");
    }

    fetch(katakanaSrc)
        .then(r => r.text())
        .then(text => {
            KanaModel.storeKatakana(text)
        });

    //todo redraw?
}
