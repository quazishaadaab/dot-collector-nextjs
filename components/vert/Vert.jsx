import axios from 'axios';
import * as React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import DataService from "../../services/service";
import styles from "../../styles/vert.module.scss"
import { BASE_BACKEND } from '../../utils/deployments';


let number_of_users = 0

const Vert = ({ roomid, attributeid }) => {

  const [users, setUsers] = useState([])
  const [NumberofAttributes, setNumberofAttributes] = useState()


  useEffect(() => {
    retriveUsersInRoom(roomid)
    retriveAttributes()
    //we need to pass in attributeid due to it depending on/waiting on an api/async promise. This means it has to wait before it gets the data, so our component wont render properly at first
  }, [users, attributeid, NumberofAttributes])



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
      setNumberofAttributes(data[0]?.attributes?.length)
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
  let margin_top ='mt-3'
  let gap='pb-5'
  let width_height='w-20 h-20'


  //scaled down dimensions for avatar if load is high
  if (number_of_users>8 || NumberofAttributes >13 ){
    margin_top ='mt-3'
    gap='pb-[1.1rem]'
    width_height='w-10 h-10 '

  }


    return (
      <div className={`ml-[-95px] ${margin_top}`}>




        {userData?.map(images => {


          return (
            <div className={`pl-28 pr-3 ${gap}`}>
              <img src={images.userPhoto} alt="" className={`${width_height} rounded-3xl`} />
            </div>


          )

        })}







      </div>
    )


}

export default Vert


