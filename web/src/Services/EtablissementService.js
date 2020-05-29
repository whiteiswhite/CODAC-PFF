export default {
    newEtablissement : etablissement => {
        console.log(etablissement);
        return fetch('/etablissement/new', {
            method: "post",
            body : JSON.stringify(etablissement),
            headers: {
                'Content-Type' : 'application/json'
            }
        }).then(res => res.json())
            .then(data => data)
    },
    promoPermanente : etablissement => {
        return fetch('/etablissement/promoPermanente', {
            method: "post",
            body: JSON.stringify(etablissement),
            headers: {
                'Content-Type' : 'application/json'
            }
        }).then(res => res.json())
            .then(data => data)
    }
}