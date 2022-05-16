import {USER_ROMAJI_SET_KATAKANA_FIELD} from "../common/Constants";

const SEPARATOR = ",";

export function storeUserRomajiSetKatakana(set) {
    localStorage.setItem(USER_ROMAJI_SET_KATAKANA_FIELD, set.join(SEPARATOR));
}

export function getUserRomajiSetKatakana() {
    return getUserSet(USER_ROMAJI_SET_KATAKANA_FIELD);
}

function getUserSet(field) {
    let set = localStorage.getItem(field);

    if (set === null) {
        return [];
    }

    return set.split(SEPARATOR);
}
