import { Grid,Badge,Avatar } from '@nextui-org/react';
import axios from 'axios';
import * as React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import DataService from "../../services/service";
import styles from "../../styles/horz.module.scss"
import { BASE_BACKEND } from '../../utils/deployments';




import { useRouter } from 'next/router'
import Loading from '../../pages/loading';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

let number_of_users = 0

const Horz = ({ roomid, attributeid, setSpeakerForRoom }) => {





//we need to initalize the speaker variable to null, or else our setSpeakerOnLoad will not work.
//
  const [speaker, setSpeaker] = useState()

  const [users, setUsers] = useState([])
  const [NumberofAttributes, setNumberofAttributes] = useState()


  useEffect(() => {


    //everytime speaker changes these also get executed(may be redundant)
    retriveUsersInRoom(roomid)
    retriveAttributes()

    //we need to pass in attributeid due to it depending on/waiting on an api/async promise. This means it has to wait before it gets the data, so our component wont render properly at first
  }, [users, attributeid, NumberofAttributes])


//strictly depends on these two dependencies. If there is no speaker dependency then the initial load of speaker will go away (so horz will not show a red badge). Will show red badge at first then it will go away
//                                            If there is no roomid , then it will not even load the speaker from the mongo database. Since the api needs roomid as a parameter, it is dependant on roomid.
useEffect(() => {

  setSpeakerOnLoad()
}, [speaker,roomid])


//strictly depends on speaker and nothing but speaker. Since it needs the value of speaker for the api, it is a dependency. 
//If you put roomid as a dependency then it will post a null speaker in mongodb database, causing a bug.
useEffect(() => {
  insertSpeakerInRooms()
}, [speaker])




  const setSpeakerOnLoad=async()=>{

    //we tried this with speaker==undefined speaker='' , but the best case is nULL. null worked
      if(speaker==undefined || speaker==null){
      const {data:{roomdata}} = await axios.post(`${BASE_BACKEND}/getRoomById`,{roomid:roomid})
      
       setSpeaker(roomdata?.speakerid)
       setSpeakerForRoom(roomdata?.speakerid)
      }
 
  }



  const retriveUsersInRoom = async (roomid) => {
    await DataService.getUsersInRoom({ roomid: roomid }).then(response => {

      setUsers((response?.data?.users))

      try {
        number_of_users = Object.keys(users)?.length

      } catch (e) {
        return
      }

    })

  }




  const retriveAttributes = async () => {
    if (attributeid) {
      const { data } = await axios.post(`${BASE_BACKEND}/getAttribute`, { attributeid: attributeid })
      setNumberofAttributes(data?.attributes?.length)
    }
  }



  let store = []
  let userData = []
  for (const x in users) {
    store.push(x)
  }


  for (let i = 0; i < store.length; i++) {

    userData.push(users[store[i]])

  }




  //default dimensions for avatars if load is small
  // let margin_top ='mt-3'
  // let gap='pr-5'
  // let width_height='w-20 h-20'
  // let badge_size = '2xl'


  //scaled down dimensions for avatar if load is high
    let margin_top ='mt-3'
    let gap='pr-[1.1rem]'
    let width_height='w-10 h-10 '
    let badge_size='md'




  // we want to click on a user/member and then set them as the speaker of the room

  const insertSpeakerInRooms = async () => {

    // extremely important to ask if speaker or user exists for post requests(injections), and then submit data. Otherwise, null will be submitted
    // we could also do speaker?.() but for some reason it return an uncaught error?
    const speakerDoc = {
      roomid: roomid,
  
      speakerid: speaker,
  
    }
    if (speaker != null || speaker != undefined || speaker!='') {
      (await DataService.postSpeakerInRoom(speakerDoc))
    }
  }




  // let text_font ='w-[80px] h-[50px] mr-[20px] text-sm '
  // let text_gap='xl:pl-[100px]  2xl:pl-[125px]'
  
    let text_font='xl w-[50px] xl: h-[50px] xl:mr-[7px]    2xl:w-[50px] 2xl: h-[50px] 2xl:mr-[7px] text-[13px] '
    let text_gap='pl-5 2xl:pl-[80px]'

  

    return (
      <div className={`ml-[7rem] 2xl:ml-[8rem] flex  `}>


        {userData?.map(data => {


          return (

            //if the userid is equal to the speakerid of the room(from the database not from the component state)
            //, then make the badge red and pulsing with speaker label. Else, just give it a basic label 
             speaker==data?.userid? (
              <Grid>
      
          


            <div className={` cursor-pointer xl:pl-[.8rem] xl:pr-1 2xl:pl-[.8rem] ${text_gap}`} onClick={()=>{setSpeaker(data?.userid);setSpeakerForRoom(data?.userid)} }>

              <div className={styles.overlap}>

              {/* <img src={data.userPhoto} alt="" className={`${width_height} rounded-3xl`} /> */}


              <Badge content="speaker" color="error"  placement="top-right" className={`${width_height} rounded-3xl `} onClick={()=>{setSpeaker(data?.userid); setSpeakerForRoom(data?.userid)}}>
              <Avatar
                              src={data?.userPhoto} 

                bordered
                squared
                size={badge_size}
                color="error"
                pointer
              />
            </Badge>
            

            </div>
            
            </div>
            </Grid>
            ):(
              <Grid>
      
          


              <div className={` cursor-pointer xl:pl-[.8rem] xl:pr-1 2xl:pl-[.8rem]  ${text_gap}`} onClick={()=>{setSpeaker(data?.userid);setSpeakerForRoom(data?.userid)}}>
  
  
                {/* <img src={data.userPhoto} alt="" className={`${width_height} rounded-3xl`} /> */}
  
  
                <Badge  content="+" variant="points" color="success" placement="top-right" className={` ${width_height} rounded-3xl`} >

                <Avatar
                  bordered
                  squared
                  size={badge_size}
                  color="success"
                  src={data.userPhoto}
                  pointer
                />

              </Badge>
         
              
              </div>
              </Grid>
            ) 


            



          )

        })}






      </div>
    )


}

export default Horz