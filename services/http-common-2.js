import axios from "axios";
import { BASE_BACKEND, CANVAS_BACKEND } from "../utils/deployments";

export default axios.create({
baseURL : `${CANVAS_BACKEND}` ,


// this links to our server.js file and in it we set this api call. this is the base URL


//https://sleepy-dawn-45361.herokuapp.com
headers:{
    "Content-type":"application/json"
}
});