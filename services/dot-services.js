import http from "./http-common-2.js" ;

class DataService2{



// user api

updateDotInUser(data){

    return http.put("/updateDotInUser",data)

}

launch(){
return http.get("/launch")

}

//we do not use this in our app, delete
postDotInUser(data){

    return http.put("/postDotInUser",data)

}


getAvgDot(data){

    return http.post('/getAvgDot',data)
}

getDotCollectionCount(data){

    return http.post("/getDotCollectionCount",data)
}

getDotCollection(data){

    return http.post("/getDotCollection",data)

}


}

export default new DataService2();