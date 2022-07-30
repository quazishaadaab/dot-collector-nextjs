import axios from "axios";
export default axios.create({
baseURL : "https://sleepy-dawn-45361.herokuapp.com" , // this links to our server.js file and in it we set this api call. this is the base URL
headers:{
    "Content-type":"application/json"
}
});