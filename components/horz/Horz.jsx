import axios from 'axios'
import * as React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import styles from "../../styles/horz.module.scss"
import { BASE_BACKEND } from '../../utils/deployments'
import { Tooltip } from '@nextui-org/react'
import { useRouter } from "next/router";
import DataService from "../../services/service";



//for props in react, always add the props as dependencies because upon initial render, t
//he props are null(empty). So you component wont even get a prop value. But after 1sec the 
//prop will appear and your component needs to re-render, thus add ur prop into ur dependency

//note: this is only required if the prop is from an async/await function, like for example an api that retrives data from database
//therefor the waiting period casues the prop to be null, then after the wait it gets populated, thus it is a dependecy

//note: things like constant /variables being passed as props are INSTANT and no waiting is required.So they dont need this

const  Horz=({attributeid,roomid}) =>{


const [attribute,setAttributes]=useState([])
const [number_of_users,setNumber_of_users]=useState()

const router=useRouter()

//this is false
//get the roomId from the url. This is different from passing a prop because a prop will only exist if its parent component is rendered.
//in our case , users are clicking the link to this room from their email, therefore 


useEffect(() => {

  retriveAttributes()
  retriveUsers()

  //attributeid is here because of the await/asynchros lag/wait time of 1 sec
}, [attributeid,attribute,number_of_users])




const retriveAttributes=async()=>{
  if(attributeid){
    const {data} =await axios.post(`${BASE_BACKEND}/getAttribute`,{attributeid:attributeid}) 
      setAttributes(data[0]?.attributes)
  }
}

//we need the number of users so we can adjust the font size/gaps,
//grid shrinks if the number of users is too large also, in addition to the attributes
const retriveUsers=async()=>{ 
  //pass the roomid to the api to retrive the users in room
// const { data: { roomdata: {users} } } = await axios.post(`${BASE_BACKEND}/getRoomById`,{roomid:roomid})


const response = await DataService.getUsersInRoom({roomid:roomid})


//bug here. If user goes into this room from the dashboard all is fine
//however, if user goes into this room from a link , then he/she gets registered as undefined(in mongodb database).
//we need to setup a screener when accessing rooms.
// We need to use sessions or we need to not accept random users. 

  console.log('setusers',response?.data?.users)
  const userJSON = response?.data?.users


  //will throw error if undefined user in users list
  try{   setNumber_of_users(Object.keys(setNumber_of_users(Object.keys(userJSON)?.length))?.length)
  }catch(e){return }
}




let text_font ='w-[80px] h-[50px] mr-[20px] text-sm '
let text_gap=' pl-[120px]'

if(attribute?.length>13 || number_of_users>8){
  text_font='w-[50px] h-[50px] mr-[7px] text-[13px] '
  text_gap='pl-[80px]'
}

{/* <Tooltip placement="bottom"  content={attributes} color='invert' rounded >

</Tooltip> */}


  return (
    <div className={`bg-white flex ${text_gap} pt-2 mb-2`}>
{/* 
<Tooltip placement="bottom" content={'Dashboard'} color='invert' rounded >
<div className="bg-red-300 w-[80px] h-[30px] rounded ml-2 p-1 pl-4 text-sm truncate max-w-4 ">sdsdsdsd</div>

    </Tooltip>
 <div className="bg-red-300 w-[80px] h-[30px] rounded ml-2 p-1 pl-4 text-sm  truncate max-w-4 ">Helsdsdsdslo</div>
 <div className="bg-red-300 w-[80px] h-[30px] rounded ml-2 p-1 pl-4 text-sm truncate max-w-4 ">Helsdsdsdlo</div> */}



{attribute?.map(attributes=>{


return(

<Tooltip placement="bottom" content={attributes} color='invert' rounded >
<div className={` ${text_font} rounded  text-center text-clip font-light  bg-clip-text  text-transparent   bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 tracking-tighter`}>{attributes}</div>

    </Tooltip>


 
 )

console.log(attributes)
})}







    </div>
  )


}

export default Horz


