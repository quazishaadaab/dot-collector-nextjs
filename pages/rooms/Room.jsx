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

const Rooms = (unique_id) => {

// const [data,setData]=React.useState(null)



const { user } = useSelector((state) => state.user);

const {roomId} = useParams()


console.log("this is room id "+ roomId)
const url = `https://sleepy-dawn-45361.herokuapp.com/rooms/${roomId}/home.html`

console.log(user.userid)

React.useEffect(() => {

DataService.sendRoomId(roomId)
insertPeersInRoom(usersDoc)
}, [roomId,user.userid])

// DataService.createRoom(data)
const usersDoc={
  userid:user?.userid,
  username:user?.username,
  userPhoto:user?.userPhoto,
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

    
     
    <>
    <Horz/>
<Vert roomid={roomId} />
<SpeakerOption roomid={roomId} />
    <div className={styles.rooms}>

<div className={styles.iframe} dangerouslySetInnerHTML={iframe()} /> 


    </div>
    </>


  )
}



export default Rooms