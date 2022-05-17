import {
    USER_ROMAJI_SET_KATAKANA_FIELD,
    USER_ROMAJI_SET_HIRAGANA_FIELD,
    KATAKANA_PATH, HIRAGANA_PATH
} from "../common/Constants";
import {getCurrentKana} from "./KatakanaModel";

const SEPARATOR = ",";

export function storeUserRomajiSet(set) {
    if (getCurrentKana() === KATAKANA_PATH) {
        localStorage.setItem(USER_ROMAJI_SET_KATAKANA_FIELD, set.join(SEPARATOR));
    } else if (getCurrentKana() === HIRAGANA_PATH) {
        localStorage.setItem(USER_ROMAJI_SET_HIRAGANA_FIELD, set.join(SEPARATOR));
    }
}

export function getUserRomajiSet() {
    if (getCurrentKana() === KATAKANA_PATH) {
        return getUserSet(USER_ROMAJI_SET_KATAKANA_FIELD);
    } else if (getCurrentKana() === HIRAGANA_PATH) {
        return getUserSet(USER_ROMAJI_SET_HIRAGANA_FIELD);
    }
}

function getUserSet(field) {
    let set = localStorage.getItem(field);

    if (set === null) {
        return [];
    }

    return set.split(SEPARATOR);
}
