import * as React from "react"
import { useHistory } from "react-router";
import { v4 as uuid } from 'uuid';

import { useParams } from 'react-router'
import axios from "axios"
import styles from "../../styles/SidebarOption.module.scss"

import { Modal, Input, Checkbox} from "@nextui-org/react";

import DataService from "../../services/service.js"
import DataService2 from "../../services/dot-services.js"
import { useRouter } from "next/router";
import { ConstructionOutlined } from "@mui/icons-material";

import retriveUserState from "../../utils/userPersist"
import { FRONT_END ,BASE_BACKEND} from "../../utils/deployments";
import { Card, Grid, Row, Text,Button } from "@nextui-org/react";
import { Tooltip } from '@nextui-org/react'

import QueryStatsIcon from '@mui/icons-material/QueryStats';

export const SidebarOption = ({ title, roomid, addChannel, Icon }) => {

  const router = useRouter()



  const { userid, userPhoto, username } = retriveUserState()
  const [roomName,setRoomName]=React.useState('')
  const [type,setRoomType]=React.useState('')

  const [email,setEmail]= React.useState('')

  //use below for actual attribute values
  // const [attributes,setAttributeArray]= React.useState({})

  //this is only for storing the attribute ids
  const [attributeid,setAttributeId]= React.useState('')

  const [attributeOptions,setAttributeOptions]= React.useState([])

  //temporary solution to the populate intial array problem
  let rows= 7
  let cols =7
  
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


const [visible, setVisible] = React.useState(false);
const [visible2, setVisible2] = React.useState(false);

const handler = () => setVisible(true);
const handler2 = () => {setVisible2(true); closeHandler};

const closeHandler = () => {
  setVisible(false);
  console.log("closed");
};
const closeHandler2 = () => {
  setVisible2(false);
  console.log("closed");
};




  const result = retriveUserState()
  // need to update this so we record the user that created the room
  const addRoom = async () => {
    // const roomName = prompt("Add room name");
    // const type = prompt("Is this room public or private?")


   //this is the new room id generated everytime new room is created. this is different from the roomid being passed as a prop
  let unique_id = uuid();

    if (roomName && unique_id && type) {

      const data = { roomid: unique_id, roomname: roomName, roomType: type }


      await DataService.createRoom(data)
      //post creator in the room
      await DataService.postCreatorInRoom({ roomid: unique_id, creator: userid })






      await DataService.postUsersInRoom({ userid: userid, userPhoto: userPhoto, username: username, roomid: unique_id })

      const initialGridArray = generateInitialEmptyDotArray()

      await DataService.updateDotInRoom({ roomid: unique_id , dot: initialGridArray })

      await axios.put(`${BASE_BACKEND}/postAttributeIdInRoom`,{roomid:unique_id,attributeid:attributeid})

      axios.post(`${BASE_BACKEND}/sendEmailInvite`,{email:email, roomlink:`${FRONT_END}/rooms/${unique_id}`})  

    }
  }




  // const userid= await req.body.userid
  // const username=await req.body.username
  // const userPhoto=await req.body.userPhoto
  // const roomid=await req.body.roomid



  // we need to update this to search the room name and enter the password for the room to get into it
  const selectRoom = () => {

    // change this upon deployment
    router.push(`/rooms/${roomid}`)


  }


  function handleRoomName(Event){

    Event.target.value.length>2 && setRoomName(Event.target.value);

}
 
function handleRoomType(Event){

  Event.target.value.length>2 && setRoomType(Event.target.value);

}



const selectAttributeOptions=async()=>{
  const attributeOptions =await axios.post(`${BASE_BACKEND}/getAttributeByUserId`,{userid:userid})
  setAttributeOptions(attributeOptions?.data)
}

const meta=(Event)=>{
console.log('alpha',Event.target.value)

}





  React.useEffect(() => {

    // insert post peers api
    selectAttributeOptions()

   

  }, [])


  





  return (
    <>
    {/* will set visibility of modal to true if add channel exists(opening the modal),
    ? other wise select room */}
    <div className='w-full items-center  mb-9 px-1.5 py-1 cursor-pointer' onClick={addChannel ? handler: selectRoom}>
      {/* {Icon}

      <span>{title}</span> */}

    <Tooltip placement="right" content={title} color='invert' rounded >
{Icon}
                      </Tooltip>


    </div>


{/* Step 1 : Create Room */}
<div>
<Modal
    closeButton
    blur
    aria-labelledby="modal-title"
    open={visible}
    onClose={closeHandler}
  >
    <Modal.Header>
      <Text id="modal-title" size={18}>
        Create Room {``}
        <Text b size={18}>
        Credentials
        </Text>
      </Text>
    </Modal.Header>
    <Modal.Body>
      <Input
        clearable
        bordered
        fullWidth
        color="primary"
        size="xl"
        className='text-sm'
        placeholder="Team 1"
        contentLeft={'room name'}
        onChange={handleRoomName}
      />
      <Input
        clearable
        bordered
        fullWidth
        color="primary"
        size="xl"
        className='text-sm'
        placeholder="private/public"
        contentLeft={'room type'}
        onChange={handleRoomType}

      />

<Text  size={15} color='purple'>
        Select attribute package
        </Text>


<Grid.Container gap={2} justify="flex-start" direction="row">
{attributeOptions?.map((item, index) => (
  <Grid className='w-[30%] h-[10%]' key={index} >
    <Card isPressable onClick={async()=>{ setAttributeId( item?.attributeid) }
  }>
      <Card.Body css={{ p: 0 }} md={3}>
        <Card.Image
          src={"https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/green_edupictthinking_1484335266-1.png"}
          objectFit="contain"
          width="100%"
          height={50}
          alt={item?.name}
      
        
        />
      </Card.Body>
      <Card.Footer css={{ justifyItems: "flex-start" }}>
        <Row wrap="wrap" justify="space-between" align="center">

{/* item name */}

          <Text className="text-xs" b>{item?.name}</Text>


          <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
{/* add attributes importance , {attributeImportance} */}
          </Text>
        </Row>
      </Card.Footer>
    </Card>
  </Grid>
))}


</Grid.Container>

      <Row justify="space-between">
        
      </Row>
    </Modal.Body>
    <Modal.Footer>
      <Button auto flat color="error" onClick={closeHandler}>
        Close
      </Button>
      <Button auto onClick={ ()=>{handler2(); closeHandler()}}>
        Create
      </Button>
    </Modal.Footer>
  </Modal>
</div>




{/* Step 2: Invite members by email */}
<div>
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
        addRoom();
        setEmail('');
         const emailInput = document.getElementById('emailinput');
         emailInput.value='';
         document.getElementById('invitation_sent').hidden=false
         
         setTimeout(()=>{document.getElementById('invitation_sent').hidden=true
        },1000)

         }}>
        Create
      </Button>
    </Modal.Footer>
  </Modal>
</div>
</>



  )
}
