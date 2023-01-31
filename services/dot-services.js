import http from "./http-common-2.js" ;

class DataService2{



// user api

updateDotInUser(data){

    return http.put("/updateDotInUser",data)

}

launch(){
return http.get("/launch")

}

//useless
getAvgDot(data){

    return http.post('/getAvgDot',data)
}

getDotCollectionCount(data){

    return http.post("/getDotCollectionCount",data)
}

getDotCollection(data){

    return http.post("/getDotCollection",data)

}

updateRatings(data){

    return http.put("/updateRatings",data)
}

getRatings(data){

    return http.post("/getRatings",data)
}




}

export default new DataService2();