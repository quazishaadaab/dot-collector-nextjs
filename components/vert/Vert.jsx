import * as React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import DataService from "../../services/service";
import styles from "../../styles/vert.module.scss"

const  Vert=(roomid) =>{

const [users,setUsers]=useState([])


useEffect(() => {
  retriveUsersInRoom(roomid)


}, [users])



const retriveUsersInRoom=async (roomid)=> {
  await DataService.getUsersInRoom(roomid).then(response=>{

setUsers((response?.data?.users))

  })

}


let store=[]
let userData=[]
for (const x in users ){
  store.push(x)
}


for(let i=0;i<store.length;i++){

userData.push(users[store[i]])

}



  return (
<div className={styles.vert}>




{userData.map(images=>{


return(
    <div className={styles.vert_container}>
<img src={images.userPhoto} alt="" className={styles.avatar} />  
</div>

 
 )

})}







</div>
  )


}

export default Vert


