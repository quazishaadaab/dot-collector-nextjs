
import * as React from "react"

import { useDispatch, useSelector } from "react-redux";

import DataService from "./service"


function CalculateAvgDot() {

const { user } = useSelector((state) => state.user);


    // 0- thinking
    // 1-creativity
    // 2-empathy
    //3-assertiveness
    
    let attributeArray =['thinking,creativity,empathy,assertiveness']
    
    // dotcollection.map(roomid=>{
    // roomid.map(peer=>{
    //     let i=0
    //         peer.map(attribute=>{
    //             attributeArray[i]=attribute.value
    //             i++
    //         })
    //     })
    // })

    const retrive=async()=>{

   await DataService.getUserById({userid:user?.userid}).then(response=>{
    
    console.log(response.data.dotCollection)
    var dotCollection=response?.data?.dotCollection

for(var roomid in dotCollection){
  
// since dotCollection is an object(bad design need to make it an array), we need to use a for loop to iterate over its keys, then reinsert the keys into the dotcollection object to get
// the values . note, map does not work with objects, it does not iterate objects. map only iterates over arrays.
      
      dotCollection[roomid].map(dot=>{

            let i=0
            dot.map(attribute=>{

              attributeArray[i]=attribute?.value
              i++
            })
              console.log(attributeArray)
          })
 
  
  

}
   
     
    



    
      })
  }

  retrive()
  return (
    <div></div>
  )
}

export default CalculateAvgDot