
import * as React from "react"

import { useDispatch, useSelector } from "react-redux";

import DataService from "./service"
import {payload} from "../pages/home/[home]"
import { ConstructionOutlined } from "@mui/icons-material";



// this algorithim works only if the array size is a 6*4 ( as of now it is a 6*3 by default with max width being 4 but for some reason it shows up as 3)
// also the attributes need to be hardcoded. like a,b,c,d represents the core 4 attributes of thinking, creativity, empathy, and assertiveness
let th = 0
let cr =0 
let em=0 
let as=0

let userdot_totalsize = 0


let widget_payload ;

function CalculateAvgDot() {
  let attributeArray =[]
// when declaring arrays that contain objects, just leave the arrays as null [null]
  const [a_array,setAttributeArray] = React.useState([])
  const [average,setAverage] = React.useState([])
  const [test1,setTest]=React.useState([null])
  const [data_array,setData]=React.useState([null])

  const [length_of_data_array ,setLength]=React.useState(0)

  let roomdotval=[]
  let avg
    let roomarray = [
[],
[],
[]
]


var test =

  [
  {
    roomid:'34924jfdsf3f4',
    values :[1,2,3,4 ,1,2,3,4 ,1,2,3,4 ,1,2,3,4, 0,0,0,0 ,0,0,0,0]
  },
  {
    roomid:'11111',
    values:[2,3,4,5 ,1,2,4,5 ,6,7,8,9, 0,0,0,0,  1,0,0,0]
  }
  ]



React.useEffect(() => {



setTest(test)
retrive()
calculateAvgDot()



}, [length_of_data_array ])



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
    
    console.log('ddcoll',response.data.dotCollection)
    var dotCollection= response?.data?.dotCollection;
    let count =0

    let buffer = []



for(var roomid in dotCollection){
  
// since dotCollection is an object(bad design need to make it an array), we need to use a for loop to iterate over its keys, then reinsert the keys into the dotcollection object to get
// the values . note, map does not work with objects, it does not iterate objects. map only iterates over arrays.

let vals = []



console.log('room',roomid)
console.log('dotcoll',dotCollection[roomid])


      dotCollection[roomid]?.map(dot=>{

            console.log('dot',dot)
            dot?.map(attribute=>{
              
              if(attribute?.value==null){
                vals.push(0)
              }
              else{
              vals.push(parseInt(attribute?.value))
             
              }
            })

            console.log(vals)
              setAttributeArray(vals)
            })

  let testDoc = {
              roomid : roomid, 
              values : vals
            }

buffer.push(testDoc)

         


          
}

buffer&& setData(buffer)
console.log(buffer)



})

// set data_array length to retrigger the calculateAvgDot() and the page
setLength(data_array.length)



}



const calculateAvgDot =()=>{

// map through each room




data_array?.map((roomdot)=>{



  

// get all the dot values in each room
roomdotval =(roomdot?.values)

// get the size of the dots in the rooms( aggregate size of all the dots added together in the all the rooms)

let roomdotval_size=0
roomdotval?.map(val=>{

  roomdotval_size++
  userdot_totalsize++
})


// add all the similar attribute values. change the inital value of i for the attributes and change the increment val of 4 for the # of columns(attributes)
for (let i=0; i<roomdotval_size;i=i+4){
  th = th + roomdotval[i]
  }

for (let i=1; i<roomdotval_size;i=i+4){
  cr = cr + roomdotval[i]
  }

for (let i=2; i<roomdotval_size;i=i+4){
    em = cr + roomdotval[i]
  }

for (let i=3; i<roomdotval_size;i=i+4){
    as = (as + roomdotval[i])
  }





})



// append all the avg of attributes into the average array

// let divisor
// (roomdotval_size!=0) && (divisor = roomdotval_size/4) ;
// console.log('divisor',divisor)

 // change 4 to whatever the number of columns are

let divisor =userdot_totalsize /4
th!=0 && setAverage(oldArray => [...oldArray, th/divisor])
cr!=0 && setAverage(oldArray => [...oldArray, cr/divisor])
em!=0 && setAverage(oldArray => [...oldArray, em/divisor])
as!=0 && setAverage(oldArray => [...oldArray, as/divisor])


// axios call to send the average array into the users avg dot collection
widget_payload=average;

}
// cannot fill widget_payload in above bracket because the setAverage needs to be called. average is empty in the above bracket.
widget_payload=average;




  return (
    <div>
    </div>
  )
}

export default CalculateAvgDot

export {widget_payload}