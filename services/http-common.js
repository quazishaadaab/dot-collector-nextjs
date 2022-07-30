import axios from "axios";
export default axios.create({
baseURL : "https://salty-tor-00815.herokuapp.com", // this links to our server.js file and in it we set this api call. this is the base URL
headers:{
    "Content-type":"application/json"
}
});