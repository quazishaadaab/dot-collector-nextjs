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
import { payload } from "../home/[home]"
import { useRouter } from "next/router";
import DataService2 from "../../services/dot-services";


import retriveUserState from "../../utils/userPersist"
import dynamic from "next/dynamic";
import { BASE_BACKEND, CANVAS_BACKEND } from "../../utils/deployments"
import axios from "axios"


const Rooms = (unique_id) => {

  // const [data,setData]=React.useState(null)


  const [canvas, setCanvas] = React.useState('')
  const [creator, setCreator] = React.useState('')

  //this is the chosen attribute id by user( not array of attributes)
const [attributes,setAttribute]= React.useState({})

  const [attributeOptions,setAttributeOptions]= React.useState([])

  const { userid } = retriveUserState()




  const router = useRouter()
  console.log(router.query?.room)
  const roomId = router.query?.room
  console.log("this is room id " + roomId)

  const url = `${CANVAS_BACKEND}/rooms/${roomId}/home.html`

  const NoSSR_Search = dynamic(
    () => import('../../components/search/Search'), { ssr: false }
  )


  console.log(roomId)


  const selectAttributeOptions=async()=>{
        const attributeOptions =await axios.post(`${BASE_BACKEND}/getAttributeByUserId`,{userid:userid})
        setAttributeOptions(attributeOptions)

  }

//useEffect for all functions( no dependency)
  React.useEffect(() => {
    DataService2.launch()
    DataService.sendRoomId(roomId)
    insertPeersInRoom(usersDoc)

    selectAttributeOptions()

  }, [])


//secondary useEffect for roomData only,dependency is on creator of room
  React.useEffect(() => {
    DataService.getRoomData({ roomid: roomId }).then(async (res) => {

      const creatorid = await res?.data?.roomdata?.creatorid
      setCreator(creatorid)
    })
  }, [creator])

  // React.useEffect(()=>{
  //   DataService.getRoomData({roomid:roomId}).then(async(response)=>{

  //     const data = await response?.data?.roomdata?.dot

  //     const stringifiedDot=JSON.stringify(data)
  //     setCanvas(stringifiedDot)
  //   })
  // reloadiframe()
  // },[canvas])



  // DataService.createRoom(data)
  const usersDoc = {
    userid: payload?.userid,
    username: payload?.username,
    userPhoto: payload?.userPhoto,
    roomid: roomId
  }


  const insertPeersInRoom = (data) => {
    DataService.postUsersInRoom(data)
  }


  function iframe() {
    return {
      __html: `<iframe src=${url} width="700" height="650" border="0" frameborder="0"  ></iframe>`
    }
  }




  const [dot, setDot] = React.useState(null)


  










  return (

    // rooms class will have an iframe that will store the dots data


    <div className="w-full h-full flex">


      <div className="h-full w-[60%] rounded-3xl bg-white ml-4 mt-5 ">

        <Horz />

        <div className="flex h-auto w-auto rounded-3xl bg-gray-100 mt-3 ">
        <Vert roomid={roomId} />
        <div className=' w-auto' dangerouslySetInnerHTML={iframe()} />
        </div>
      </div>


      <div className="h-full w-[40%] h-full  max-w-full ">
      <div className="p-4 mt-2 mb-4">{userid == creator ? (<NoSSR_Search searchtype={"invite"} roomid={roomId} />) : (console.log('unmatched', creator, userid))}



      <SpeakerOption  roomid={roomId} />
      </div>
      </div>


      




    </div>
  )
}



export default Rooms