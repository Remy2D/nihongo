import katakanaSrc from "../model/katakana.txt";
import hiraganaSrc from "../model/hiragana.txt";
import * as KanaModel from '../model/KatakanaModel.js'


export function loadKatakana(dialogCloseCallback) {
    if (KanaModel.hasHiragana() && KanaModel.hasKatakana()) {
        console.log("Katakana already loaded");
        return;
    }

    console.log("Loading Katakana");
    fetchKanas(dialogCloseCallback);
}

function fetchKanas(dialogCloseCallback) {
    fetchKatakana(dialogCloseCallback);
}

function fetchKatakana(dialogCloseCallback) {
    fetch(katakanaSrc)
        .then(r => r.text())
        .then(text => {
            KanaModel.storeKatakana(text)
        })
        .then(() => fetchHiragana(dialogCloseCallback));
}

function fetchHiragana(dialogCloseCallback) {
    fetch(hiraganaSrc)
        .then(r => r.text())
        .then(text => {
            KanaModel.storeHiragana(text)
        })
        .then(() => dialogCloseCallback());
}
