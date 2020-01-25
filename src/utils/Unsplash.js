import axios from "axios";

class Unsplash
{
    url = '';
    constructor(accessToken){
        this.url = "https://api.unsplash.com/search/photos/?page=1&client_id=" + accessToken + "&query=";
    }
    fetch = (query) => {
         return axios
            .get(this.url + query)
            .then( response => {
                return response.data.results
            })
            .catch(e => {
                console.log(e);
                return e;
            })
    }
}

export default new Unsplash('46e4ac884131aec757a58eb7854dd07211744cdd9ad2ddfb6f8e7e3faed1eac2');