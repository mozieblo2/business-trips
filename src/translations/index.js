import en from './locale/en.json';
import pl from './locale/pl.json';
import ru from './locale/ru.json';

export const messages = {
    en,
    pl,
    ru
};

const language = navigator.language.split(/[-_]/)[0];

export const appLang = setAppLang(language);

function setAppLang(language) {
    switch (language) {
        case 'pl':
            return 'pl';
        case 'ru':
            return 'ru';
        default:
            return 'en';
    }
}
