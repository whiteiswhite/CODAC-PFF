const token = '67ed4db3-b890-32d8-95fe-002faf4e39c8';

var headers = new Headers();
headers.append('Authorization', 'Bearer ' + token);

var optionsRequest = {
    Accept: 'application/json',
    method: 'GET',
    headers: headers
}

export function checkSiren(req) {
    return fetch('https://api.insee.fr/entreprises/sirene/V3/siret/' + req, optionsRequest)
        .then(response => response.json())
        .catch(error => console.log('error : ', error))
}
