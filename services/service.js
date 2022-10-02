import http from "./http-common.js" ;

class DataService{


    // room api

getRoomData(data){
    return http.post("/getRoomById",data)
}




createRoom(data){
return http.post("/postRooms",data);

}

getAllRooms(){

    return http.get("/getAllRooms");
}

//useless

sendRoomId(data){
return http.post("/getRoomId",data)

}

// users api

postUsersInUsers(data){

    return http.put('/postUsersInUsers',data)
}


getUserById(data){

    return http.post('/getUserById',data)
}

addPeers(data){

    return http.put("/addPeers",data)

}
deletePeerById(data){

    return http.put("/deletePeerById",data)
}




// advanced rooms api
getUsersInRoom(data){


    return http.post("/getUsersInRoom",data)
}


getAllRoomsByUserId(data){
return http.post("/getAllRoomsByUserId",data)
}

deleteUsersInRoom(data){

    return http.put("/deleteUsersInRoom",data)
}


postUsersInRoom(data){

    return http.put("/postUsersInRoom",data)
    
}

postCreatorInRoom(data){

    return http.put("/postCreatorInRoom",data)

}

postSpeakerInRoom(data){

    return http.put("/postSpeakerInRoom",data)

}

updateDotInRoom(data){

    return http.put("/updateDotInRoom",data)

}







}

export default new DataService();