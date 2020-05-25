export default {
    getPublications : ()=>{
        return fetch('/user/publications')
            .then(res =>{
                if(res.status !== 401) {
                    return res.json().then(data => data);
                }
                else
                    return {message : {msgBody : "UnAuthorized"}, msgError : true}
            })
    },
    postPublication : publication=>{
        return fetch('/user/publication',{
            method : "post",
            body : JSON.stringify(publication),
            headers: {
                'Content-Type' : 'application/json'
            }
        }).then(res=>{
            if(res.status !== 401) {
                return res.json().then(data => data);
            }
            else
                return {message : {msgBody : "UnAuthorized"}, msgError : true}
        })

    }
}
