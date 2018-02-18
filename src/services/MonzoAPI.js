export default class MonzoAPI {
    static getAuthorisationToken(formbody) {
        return fetch('https://api.monzo.com/oauth2/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formbody
        })
            .then(response => response.json())
            .then(data => data)
            .catch(error => console.error("ERROR", error));
    }
}