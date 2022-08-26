import axios from "axios";
export default axios.create({
baseURL : "http://localhost:8000", // this links to our server.js file and in it we set this api call. this is the base URL

//"https://salty-tor-00815.herokuapp.com"

headers:{
    "Content-type":"application/json"
}
});