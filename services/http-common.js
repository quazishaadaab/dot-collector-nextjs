import axios from "axios";
import { BASE_BACKEND, CANVAS_BACKEND } from "../utils/deployments";

export default axios.create({
baseURL : `${BASE_BACKEND}`, // this links to our server.js file and in it we set this api call. this is the base URL

//"https://salty-tor-00815.herokuapp.com"

headers:{
    "Content-type":"application/json"
}
});