import katakanaSrc from "./katakana.txt";
import * as KanaModel from './KanaModel.js'


export function clearKatakana() {
    return KanaModel.clearKatakana()
}

export function isKatakanaLoaded() {
    return KanaModel.getKatakanaRomajiSet() != null &&
        KanaModel.getKatakanaRomajiSet().length > 0 &&
        KanaModel.getKatakanaKanaSet() != null &&
        KanaModel.getKatakanaKanaSet().length > 0
}

export function loadKatakana() {
    if (isKatakanaLoaded()) {
        console.log("Katakana already loaded");
        return;
    }

    console.log("Loading Katakana");


    fetch(katakanaSrc)
        .then(r => r.text())
        .then(text => {
            KanaModel.storeKatakana(text)
        });

    //todo redraw?
    // window.location.reload(false);
}
