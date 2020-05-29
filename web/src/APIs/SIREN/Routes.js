const token = '67ed4db3-b890-32d8-95fe-002faf4e39c8';

var headers = new Headers();
headers.append('Authorization', 'Bearer ' + token);

var optionsRequest = {
    method: 'GET',
    headers: headers
}

export function checkSiren(req, res) {
    return fetch('https://api.insee.fr/entreprises/sirene/V3/siren/' + req, optionsRequest)
        .then(response => response.json())
        .catch(error => {
            res.json({message: { msgBody: error, msgError: true}})


        })
}
