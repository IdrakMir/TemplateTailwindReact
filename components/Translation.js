import { useRouter } from "next/router";
import az from "../locales/az";
import en from "../locales/en";
import ru from "../locales/ru";

const Translation = (key) => {
    let transword;
    const router = useRouter();

    const checkLangWord = (word) => {
        if (word != undefined) {
            transword = word;
        } else {
            transword = en[key];
        }
    }

    switch (router.locale) {
        case "az":
            checkLangWord(az[key])
            break;
        case "ru":
            checkLangWord(ru[key])
            break;
        case "en":
            transword = en[key];
            break;
        default:
            return (transword = en[key]);
    }
    return transword;
};

export default Translation;