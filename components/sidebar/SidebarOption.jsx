import * as React from "react"
import { useHistory } from "react-router";
import { v4 as uuid } from 'uuid';

import { useParams } from 'react-router'

import styles from "../../styles/SidebarOption.module.scss"


import DataService from "../../services/service.js"
import DataService2 from "../../services/dot-services.js"
import { useRouter } from "next/router";
import { ConstructionOutlined } from "@mui/icons-material";

import retriveUserState from "../../utils/userPersist"
import { FRONT_END } from "../../utils/deployments";
export const SidebarOption = ({ title, roomid, addChannel, Icon }) => {

  const router = useRouter()

  const { userid, userPhoto, username } = retriveUserState()

  //temporary solution to the populate intial array problem
  let rows= 6
  let cols =4
  
  //this is just a temporary solution, our future solution wont need this so this may be deleted .
  const generateInitialEmptyDotArray= () => {

    let grid = new Array(rows)

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        grid[i] = new Array(j)
      }
    }

    return grid 
}



  const result = retriveUserState()
  // need to update this so we record the user that created the room
  const addRoom = async () => {
    const roomName = prompt("Add room name");
    const type = prompt("Is this room public or private?")
    let unique_id = uuid();
    if (roomName && unique_id && type) {

      const data = { roomid: unique_id, roomname: roomName, roomType: type }


      await DataService.createRoom(data)
      //post creator in the room
      await DataService.postCreatorInRoom({ roomid: unique_id, creator: userid })






      await DataService.postUsersInRoom({ userid: userid, userPhoto: userPhoto, username: username, roomid: unique_id })

      const initialGridArray = generateInitialEmptyDotArray()

      await DataService.updateDotInRoom({ roomid: unique_id , dot: initialGridArray })



    }
  }




  // const userid= await req.body.userid
  // const username=await req.body.username
  // const userPhoto=await req.body.userPhoto
  // const roomid=await req.body.roomid



  // we need to update this to search the room name and enter the password for the room to get into it
  const selectRoom = () => {

    // change this upon deployment
    router.push(`${FRONT_END}/rooms/${roomid}`)


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
