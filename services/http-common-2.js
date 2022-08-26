import axios from "axios";
export default axios.create({
baseURL : "http://localhost:2000" ,


// this links to our server.js file and in it we set this api call. this is the base URL


//https://sleepy-dawn-45361.herokuapp.com
headers:{
    "Content-type":"application/json"
}
});