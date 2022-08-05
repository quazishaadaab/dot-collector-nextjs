import * as React from 'react'
import styles from "../../styles/speakeroption.module.scss"

import { useParams } from 'react-router'

import Card from '@mui/material/Card';

import DataService from "../../services/service";


import ProfileCard from "./Card.jsx"

// needs to take in peers
function SpeakerOption(roomid) {



 
const [speaker,setSpeaker]=React.useState()
const [users,setUsers]=React.useState([])


const speakerDoc={
  roomid:roomid.roomid,

speakerid:speaker,

}




const insertSpeakerInRooms=async(data)=>{

  // extremely important to ask if speaker or user exists for post requests(injections), and then submit data. Otherwise, null will be submitted
// we could also do speaker?.() but for some reason it return an uncaught error?
  if(speaker!=null){
    (await DataService.postSpeakerInRoom(data))
  }
  }
  

  const retriveUsersInRoom=async (roomid)=> {
// in get or retive requests, asking if users exist is not so important
   await DataService.getUsersInRoom(roomid).then(response=>{

setUsers((response?.data?.users))

   })

}



  React.useEffect(() => {
    retriveUsersInRoom(roomid)

    insertSpeakerInRooms(speakerDoc)
  }, [speaker,users])
  




  let store=[]
  let userData=[]
  for (const x in users ){
    store.push(x)
  }
  
  
  for(let i=0;i<store.length;i++){
  
  userData.push(users[store[i]])
  
  }
  
  
 








  return (
<div className={styles.speaker_option}>


    <div className={styles.profile_card}>






{userData?.map(r=>{

  return(
    //you cant do onClick={function} inside a component. You need to first put that component inside a div and use the onClick or eventListener function on the div.
    //e.target.textContext should be replaced with the user ID. the text context returns the name field, Alex costa or mike tyson
    <div  className={styles.container} onClick={ (e)=>{ 
      e.preventDefault()

      setSpeaker(e.target.id)
      }
      

      }> 

<ProfileCard id={r?.userid} className="individual-card" name={r?.username} img={r?.userPhoto} />
</div>
        )



  
}


)} 









    
    </div>
    



</div>
  )
}

export default SpeakerOption