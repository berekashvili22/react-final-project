export class API_SERVICE {
    static async Translate(text, fromLang, toLang) {
        console.log(`vtargmni: ${text} from: ${fromLang} to: ${toLang}`);
        try {
            const API_KEY = ['AIzaSyCHfnN-dZkU_NjzI767Z1rgCev0coiUY90'];
            let url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;
            url += '&q=' + encodeURI(text);
            url += `&source=${fromLang}`;
            url += `&target=${toLang}`;

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                }
            });
            const result = await response.json();
            return result.data.translations[0].translatedText;
        } catch (error) {
            console.trace(error);
        }
    }
}

export default API_SERVICE;
