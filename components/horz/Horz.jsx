import axios from 'axios'
import * as React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import styles from "../../styles/horz.module.scss"
import { BASE_BACKEND } from '../../utils/deployments'
const  Horz=({attributeid}) =>{


const [attributes,setAttributes]=useState([])


useEffect(() => {

  retriveAttributes()


}, [attributeid])

const retriveAttributes=async()=>{
  if(attributeid){
    const {data} =await axios.post(`${BASE_BACKEND}/getAttribute`,{attributeid:attributeid}) 
      setAttributes(data[0]?.attributes)
  }
}



  return (
    <div className='bg-white flex gap-x-auto pl-28 pt-2'>


{attributes.map(attributes=>{
return(
<div className='text-[13px] font-[200] mr-2'>
{attributes +' '}

 </div>

 
 )

console.log(attributes)
})}







    </div>
  )


}

export default Horz


