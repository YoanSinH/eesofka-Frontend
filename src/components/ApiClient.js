import axios from "axios";

export function onDelete(url, id){
    fetch(url + id, {
        method: 'DELETE',
    })
}

export function onPostAxios(url,data){
    console.log(data)
    JSON.stringify(data)
    axios.post(url, data)
        .then(response => {
            console.log(response)
        })
}

export function onPutAxios(url,id,data){
    axios.put(url+id,data)
        .then(response => {
            console.log(response)
        })
}