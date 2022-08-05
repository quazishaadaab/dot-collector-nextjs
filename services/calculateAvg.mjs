import * as React from "react"

import { useDispatch, useSelector } from "react-redux";

import DataService from "./service.js"
import {payload} from "../pages/home/[home].tsx"
import { ConstructionOutlined } from "@mui/icons-material";










let attributeArray =[]

const [a_array,setAttributeArray] = React.useState([])
const [average,setAverage] = React.useState(0)
let roomdotval
let avg
  let roomarray = [
[],
[],
[]
]
React.useEffect(() => {


retrive()
setTest(test)

}, [])

  // 0- thinking
  // 1-creativity
  // 2-empathy
  //3-assertiveness
  

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

 await DataService.getUserById({userid:payload?.userid}).then(response=>{
  
  console.log(response.data.dotCollection)
  var dotCollection=response?.data?.dotCollection

for(var roomid in dotCollection){

// since dotCollection is an object(bad design need to make it an array), we need to use a for loop to iterate over its keys, then reinsert the keys into the dotcollection object to get
// the values . note, map does not work with objects, it does not iterate objects. map only iterates over arrays.
    console.log('room',roomid)


    dotCollection[roomid].map(dot=>{

          let i=0
          console.log('dot',dot)
          dot.map(attribute=>{
            
            if(attribute?.value==null){
              attributeArray.push(0)
            }
            else{
            attributeArray.
            push(attribute?.value)
            i++
            }
          })
            setAttributeArray(attributeArray)
            
        })



}})}

var test =[

[
{
  roomid:'34924jfdsf3f4',
  values :[1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4]
},
{
  roomid:'11111',
  values:[2,3,4,5,1,2,4,5,6,7,8,9]
}
]
]
const [test1,setTest]=React.useState([[{}]])


const e =()=>{




test1[0]?.map((roomdot)=>{
// need to initialize or else it wont work
roomdotval =(roomdot?.values)
roomdotval?.map(val=>{
 let prev_avg = average
 setAverage(val)
})



})
}
console.log(average)