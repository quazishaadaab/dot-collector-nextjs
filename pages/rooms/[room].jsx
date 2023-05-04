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

import Canvas from "../../components/canvas/Canvas"

import { payload } from "../home/[home]"
import { useRouter } from "next/router";
import DataService2 from "../../services/dot-services";

import { Input} from "@nextui-org/react";

import retriveUserState from "../../utils/userPersist"
import dynamic from "next/dynamic";
import { BASE_BACKEND, CANVAS_BACKEND } from "../../utils/deployments"
import axios from "axios"
import * as ReactDOM from 'react-dom';
import { FRONT_END} from "../../utils/deployments";

import { Button, Collapse, Text, useModal,Modal } from "@nextui-org/react";
import SlimSidebar from "../../components/sidebar/SlimSidebar"
import Login from "../login/Login"

const Rooms = (unique_id) => {

  // const [data,setData]=React.useState(null)





  const [canvas, setCanvas] = React.useState('')
  const [creator, setCreator] = React.useState('')

  //this is the chosen attribute id by user( not array of attributes)
  const [attributes, setAttribute] = React.useState([])
  const [attribute_id, setAttributeId] = React.useState('')

//for displaying the slim sidebar when button clicked on side(modal)
  const { setVisible, bindings } = useModal();

  //for invite function
  const [email,setEmail]= React.useState('')

  const [visible2, setVisible2] = React.useState(false);
  const handler2 = () => {setVisible2(true); };
  const closeHandler2 = () => {
    setVisible2(false);
    console.log("closed");
  };
  

  const { userid,loggedIn } = retriveUserState()
console.log(retriveUserState())


  const router = useRouter()
  console.log(router.query?.room)
  const roomId = router.query?.room
  console.log("this is room id " + roomId)

  const url = `${CANVAS_BACKEND}/rooms/${roomId}/home.html`

  const NoSSR_Search = dynamic(
    () => import('../../components/search/Search'), { ssr: false }
  )


  console.log(roomId)




  //useEffect for all functions( no dependency)
  React.useEffect(() => {
    DataService2.launch()
    DataService.sendRoomId(roomId)
    insertPeersInRoom(usersDoc)

    //dependent on roomId
    getAttributeIdByRoomId()

  }, [roomId])





  //dependant on roomId
  const getAttributeIdByRoomId = async () => {
    const { data } = await axios.post(`${BASE_BACKEND}/getRoomById`, { roomid: roomId })


    setAttributeId(data?.roomdata?.attributeid)
  
  }




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



  //payload was not working ( it didnt get rendered because when user clicks link from email, only [room] gets rendered not home, thus payload never gets rendered)
  const data_unparsed  = window.localStorage.getItem('persist:root')
const data_parsed = JSON.parse(data_unparsed)
const user_data = JSON.parse(data_parsed?.user)

  const usersDoc = {
    userid: user_data?.userid,
    username: user_data?.username,
    userPhoto: user_data?.userPhoto,
    roomid: roomId
  }


  const insertPeersInRoom = (data) => {

    // only insert peers/user in database if they exist(not null or undefined). We dont want undefined values
    //this bug happends due to the payload import. This was a quick solution to solve the problem, but instead we should use an api or redux to access the user state.
    //right now we are using an import which returns null/undefined if the homepage did not render beforehand( like for example if you hit refresh or access the room page by clicking a link)

    //this bug doesnt happen if you enter the room page from homepage. homepage->room.
    if(data?.userid){
    DataService.postUsersInRoom(data)
    }
    else{return}
  }







  const [dot, setDot] = React.useState(null)

  const postDot=async()=>{

    DataService.getRoomData({ roomid: roomId }).then(async (res) => {

      let speakerid = await res?.data?.roomdata?.speakerid
      let retrivedDotArray=await res?.data?.roomdata?.dot

      DataService2.updateDotInUser({userid:speakerid,roomid:roomId,dot:retrivedDotArray,attribute_id:attribute_id})

    })
  }













  return (

    // rooms class will have an iframe that will store the dots data


    <>


{loggedIn?( <div className="w-full h-full flex   ">


{/* width used to be 90 here, be decreased to accomodate for the post button */}

{/* margin top used to be 14 but we changed due to the buttons */}

<div className=" h-[100%] w-[90%]  rounded-3xl ml-4 mt-16 mb-3 ">
<Horz attributeid={attribute_id} roomid={roomId} />



  <div className=" bg-gray-100 border  flex h-[auto] w-[auto] rounded-3xl   mt-1 mb-5 ">
  <Vert roomid={roomId} attributeid={attribute_id} />

    {/* <div id='dangerousHtml' className=' w-auto' dangerouslySetInnerHTML={ iframe()} /> */}

    {/* {()=>{setInterval(()=>{setHtml(url)},2000)}} */}

    {/* {setHtml(url)} */}


    <Canvas url={url} />


  </div>




</div>

<div className=" mt-3 gap-x-2  w-34 h-14 flex  ">


  {/* v1 */}
{/* <Button type="submit" id="addbutton" flat color="warning" size={"md"} auto>
             Post Dot
              </Button>

  <Button onClick={()=>{router.push(`/home/${user_data?.userid}`)}} type="submit" id="addbutton" flat color="secondary" size={"md"}  auto>
             Homepage
              </Button> */}

{/* v2 */}
{/* 
<Button  onClick={() => setVisible(true)} type="submit" id="addbutton" flat color="secondary" size={"md"}  auto>
         ...
    
</Button> */}


<Modal
    closeButton
    blur
    aria-labelledby="modal-title"
    open={visible2}
    onClose={closeHandler2}
  >
    <Modal.Header>
      <Text id="modal-title" size={18}>
        Invite members by {``}
        <Text b size={18}>
        email
        </Text>
      </Text>
    </Modal.Header>
    <Modal.Body>
      <Input
        id='emailinput'
        clearable
        bordered
        fullWidth
        color="primary"
        size="xl"
        className='text-sm'
        placeholder="example@gmail.com"
        contentLeft={'Email'}
        onChange={(Event)=>{ if(Event.target.value.length>2) { setEmail(Event.target.value) ;}}}
      />
      

<Text  size={15} color='purple'>
        Enter a valid email
        </Text>

        <Text id='invitation_sent' hidden={true} size={15} color='purple'>
Invitation sent       
 </Text>


    </Modal.Body>
    <Modal.Footer>
      <Button auto flat color="error" onClick={closeHandler2}>
        Close
      </Button>
      <Button auto onClick={ ()=>{
      axios.post(`${BASE_BACKEND}/sendEmailInvite`,{email:email, roomlink:`${FRONT_END}/rooms/${roomId}`})  
      setEmail('');
         const emailInput = document.getElementById('emailinput');
         emailInput.value='';
         document.getElementById('invitation_sent').hidden=false
         
         setTimeout(()=>{document.getElementById('invitation_sent').hidden=true
        },1000)

         }}>
        Send invite
      </Button>
    </Modal.Footer>
  </Modal>
  {/* Invite peers by email.Send roomlink by email to peers */}
  <Button auto type="submit" id="addbutton" flat color="secondary" size={"xs"} onClick={ ()=>{handler2()}}>
        Invite Peers
      </Button>

        <Button onClick={()=>{postDot()}} type="submit" id="addbutton" flat color="success" size={"xs"} auto>
PostDot
             </Button>            
          

              </div>
{/* post dot is not configured yet still have to complete */}




{/* <div className="h-full w-[40%] h-full  max-w-full ">
<div className="p-4 mt-2 mb-4">{userid == creator ? (<NoSSR_Search searchtype={"invite"} roomid={roomId} />) : (console.log('unmatched', creator, userid))}



</div>
</div> */}
{/* <SlimSidebar/> */}







</div>):(

<><Login secondLogin={true}/></>
) }

   
    </>
  )
}



export default Rooms