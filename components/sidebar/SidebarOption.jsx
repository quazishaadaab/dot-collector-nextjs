import * as React from "react"
import { useHistory } from "react-router";
import { v4 as uuid } from 'uuid';

import { useParams } from 'react-router'

import styles from "../../styles/SidebarOption.module.scss"


import DataService from "../../services/service.js"
import { useRouter } from "next/router";
import { ConstructionOutlined } from "@mui/icons-material";

import retriveUserState from "../../utils/userPersist"
export const SidebarOption = ({ title, roomid, addChannel, Icon }) => {

  const router = useRouter()

  const { userid } = retriveUserState()

  // need to update this so we record the user that created the room
  const addRoom = () => {
    const roomName = prompt("Add room name");
    const type = prompt("Is this room public or private?")
    let unique_id = uuid();
    if (roomName && unique_id && type) {

      const data = { roomid: unique_id, roomname: roomName, roomType: type }


      DataService.createRoom(data)
      //post creator in the room
      DataService.postCreatorInRoom({ roomid: unique_id, creator: userid })



    }
  }








  // we need to update this to search the room name and enter the password for the room to get into it
  const selectRoom = () => {

    // change this upon deployment
    router.push(`http://localhost:3000/rooms/${roomid}`)


  }

  React.useEffect(() => {

    // insert post peers api

  }, [])






  return (
    <div className={styles.sidebarOption} onClick={addChannel ? addRoom : selectRoom}>
      {Icon}

      <span>{title}</span>
    </div>
  )
}
