export class API_SERVICE {
    static async getResourceListAsync() {
        const url = 'http://frengly.com/frengly/data/translateREST';
        try {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    src: 'en',
                    dest: 'fr',
                    text: 'this is a sample text in english',
                    email: 'tokoberekashvili22@gmail.com',
                    password: 'lardayina1',
                    premiumkey: 'null'
                }),
                headers: { 'Content-Type': 'application/json' }
            });
            const result = await response.json();

            return result.data;
        } catch (error) {
            console.trace(error);
        }
    }
}

export default API_SERVICE;
