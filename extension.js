import GLib from 'gi://GLib';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import { getInputSourceManager } from 'resource:///org/gnome/shell/ui/status/keyboard.js';
import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';

// XKB layout ids (from gsettings sources, e.g. 'jp', 'ara', 'us')
const FLAG_BY_LAYOUT = {
    us: '🇺🇸',
    gb: '🇬🇧',
    uk: '🇬🇧',
    no: '🇳🇴',
    nb: '🇳🇴',
    nn: '🇳🇴',
    ru: '🇷🇺',
    jp: '🇯🇵',
    ja: '🇯🇵',
    fr: '🇫🇷',
    de: '🇩🇪',
    ara: '🇸🇦',
    ar: '🇸🇦',
    es: '🇪🇸',
    it: '🇮🇹',
    pt: '🇵🇹',
    br: '🇧🇷',
    se: '🇸🇪',
    fi: '🇫🇮',
    dk: '🇩🇰',
    pl: '🇵🇱',
    nl: '🇳🇱',
    gr: '🇬🇷',
    tr: '🇹🇷',
    il: '🇮🇱',
    he: '🇮🇱',
    cn: '🇨🇳',
    kr: '🇰🇷',
    ko: '🇰🇷',
    in: '🇮🇳',
    ua: '🇺🇦',
    cz: '🇨🇿',
    hu: '🇭🇺',
    ro: '🇷🇴',
    th: '🇹🇭',
    vn: '🇻🇳',
    eg: '🇪🇬',
    ae: '🇦🇪',
};

// Fallback when layout id differs from menu short code (en, ja, ar, …)
const FLAG_BY_SHORT = {
    en: '🇺🇸',
    no: '🇳🇴',
    ru: '🇷🇺',
    ja: '🇯🇵',
    fr: '🇫🇷',
    ar: '🇸🇦',
    de: '🇩🇪',
    es: '🇪🇸',
    it: '🇮🇹',
    pt: '🇵🇹',
    sv: '🇸🇪',
    pl: '🇵🇱',
    nl: '🇳🇱',
    tr: '🇹🇷',
    zh: '🇨🇳',
    ko: '🇰🇷',
};

function flagForSource(source) {
    if (!source || source.type === 'external')
        return '';

    const layout = (source.xkbId ?? source.id ?? '').split('+')[0];
    if (FLAG_BY_LAYOUT[layout])
        return FLAG_BY_LAYOUT[layout];

    const short = source.shortName?.replace(/[\u2080-\u2089]/g, '') ?? '';
    if (FLAG_BY_SHORT[short])
        return FLAG_BY_SHORT[short];

    return short.toUpperCase();
}

function applyFlags(keyboard) {
    if (!keyboard?._inputSources)
        return;

    for (const is of keyboard._inputSources) {
        if (is.type === 'external')
            continue;

        const flag = flagForSource(is);
        if (!flag)
            continue;

        const index = keyboard._calculateSourceIndicatorIndex(is);
        keyboard._menuItems[index]?.indicator?.set_text(flag);
        keyboard._indicatorLabels[index]?.set_text(flag);
    }
}

function hookKeyboardIndicator(keyboard, extension) {
    if (!keyboard || extension._keyboardHooked)
        return false;

    extension._keyboard = keyboard;
    extension._origAddSourceIndicators = keyboard._addSourceIndicators.bind(keyboard);

    keyboard._addSourceIndicators = function () {
        extension._origAddSourceIndicators();

        for (const is of this._inputSources) {
            if (is.type === 'external')
                continue;

            const update = () => applyFlags(this);
            if (is._flagsInputChangedId)
                is.disconnect(is._flagsInputChangedId);
            is._flagsInputChangedId = is.connect('changed', update);
        }

        applyFlags(this);
    };

    extension._keyboardHooked = true;
    keyboard._sourcesChanged();
    return true;
}

export default class FlagsInputExtension extends Extension {
<<<<<<< HEAD
enable() {
    this._manager = getInputSourceManager();
    this._keyboardHooked = false;
    this._timeoutId = null;

    this._tryHook = () => {
        if (hookKeyboardIndicator(Main.panel.statusArea?.keyboard, this)) {
            this._timeoutId = null;
            return GLib.SOURCE_REMOVE;
        }
        return GLib.SOURCE_CONTINUE;
    };

    if (!hookKeyboardIndicator(Main.panel.statusArea?.keyboard, this)) {
        this._timeoutId = GLib.timeout_add(
            GLib.PRIORITY_DEFAULT, 100, this._tryHook
        );
    }

    this._manager.connectObject(
        'sources-changed', () => applyFlags(this._keyboard),
        'current-source-changed', () => applyFlags(this._keyboard),
        this
    );
}

disable() {
    if (this._timeoutId) {
        GLib.source_remove(this._timeoutId);
        this._timeoutId = null;
    }

    this._manager?.disconnectObject(this);

    if (this._keyboard && this._origAddSourceIndicators) {
        this._keyboard._addSourceIndicators = this._origAddSourceIndicators;
        for (const is of this._keyboard._inputSources ?? []) {
            if (is._flagsInputChangedId) {
                is.disconnect(is._flagsInputChangedId);
                delete is._flagsInputChangedId;
            }
        }
        this._keyboard._sourcesChanged();
    }

    this._keyboard = null;
    this._origAddSourceIndicators = null;
    this._keyboardHooked = false;
    this._manager = null;
}
=======
    enable() {
        this._manager = getInputSourceManager();
        this._keyboardHooked = false;

        this._tryHook = () => {
            if (hookKeyboardIndicator(Main.panel.statusArea?.keyboard, this))
                return GLib.SOURCE_REMOVE;
            return GLib.SOURCE_CONTINUE;
        };

        if (!hookKeyboardIndicator(Main.panel.statusArea?.keyboard, this))
            GLib.timeout_add(GLib.PRIORITY_DEFAULT, 100, this._tryHook);

        this._manager.connectObject(
            'sources-changed', () => applyFlags(this._keyboard),
            'current-source-changed', () => applyFlags(this._keyboard),
            this
        );
    }

    disable() {
        this._manager?.disconnectObject(this);

        if (this._keyboard && this._origAddSourceIndicators) {
            this._keyboard._addSourceIndicators = this._origAddSourceIndicators;
            for (const is of this._keyboard._inputSources ?? []) {
                if (is._flagsInputChangedId) {
                    is.disconnect(is._flagsInputChangedId);
                    delete is._flagsInputChangedId;
                }
            }
            this._keyboard._sourcesChanged();
        }

        this._keyboard = null;
        this._origAddSourceIndicators = null;
        this._keyboardHooked = false;
        this._manager = null;
    }
>>>>>>> 1b4163e428023fbe04b77fa618f7938ac71bdf53
}
