import * as React from "react"
import { useHistory } from "react-router";
import {v4 as uuid} from 'uuid' ;

import { useParams } from 'react-router'

import styles from "../../styles/SidebarOption.module.scss"


import DataService from "../../services/service.js"
import { useRouter } from "next/router";


export const SidebarOption = ({title,roomid,addChannel,Icon}) => {

const router = useRouter()


    // need to update this so we record the user that created the room
const addRoom=()=>{
const roomName=prompt("Add room name");

let unique_id =uuid();
if(roomName && unique_id){

const data ={roomid:unique_id, roomname:roomName}

DataService.createRoom(data)


}
}






// we need to update this to search the room name and enter the password for the room to get into it
const selectRoom=()=>{
  
  // change this upon deployment
router.push(`http://localhost:3000/rooms/${roomid}`)


}

React.useEffect(() => {
  
// insert post peers api
  
}, [])






  return (
    <div className={styles.sidebarOption} onClick={ addChannel ? addRoom :selectRoom}>
{Icon}

  <span>{title}</span>
    </div>
  )
}
 