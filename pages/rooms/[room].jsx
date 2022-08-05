import styles from "../../styles/room.module.scss"

import * as React from "react"
import { useParams } from 'react-router'
// import {v4 as uuid} from 'uuid' ;
// const unique_id =uuid();


import Horz from "../../components/horz/Horz" 
import Vert from "../../components/vert/Vert" 

import { useDispatch, useSelector } from "react-redux";
import DataService from "../../services/service";

import SpeakerOption from "../../components/speakeroption/SpeakerOption"
import {payload} from "../home/[home]"
import { useRouter } from "next/router";
import DataService2 from "../../services/dot-services";

const Rooms = (unique_id) => {

// const [data,setData]=React.useState(null)




const router=useRouter()
console.log(router.query?.room)
const roomId= router.query?.room
console.log("this is room id "+ roomId)
const url = `https://sleepy-dawn-45361.herokuapp.com/rooms/${roomId}/home.html`



console.log(roomId)
React.useEffect(() => {
DataService2.launch()
DataService.sendRoomId(roomId)
insertPeersInRoom(usersDoc)
}, [])

// DataService.createRoom(data)
const usersDoc={
  userid:payload?.userid,
  username:payload?.username,
  userPhoto:payload?.userPhoto,
  roomid:roomId
}


const insertPeersInRoom=(data)=>{
DataService.postUsersInRoom(data)
}



    function iframe() {
  return {
      __html: `<iframe src=${url} width="700" height="650" border="0" frameborder="0"  ></iframe>`
  }
}


const [dot,setDot]=React.useState(null)



  return (

    // rooms class will have an iframe that will store the dots data

    
     
    
    <div className="bg-white">
    <Horz/>
<Vert roomid={roomId} />
<SpeakerOption roomid={roomId} />
    <div className={styles.rooms}>

<div className={styles.iframe} dangerouslySetInnerHTML={iframe()} /> 


    </div>
</div>

  )
}



export default Rooms