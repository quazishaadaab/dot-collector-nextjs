import axios from 'axios'
import * as React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import styles from "../../styles/horz.module.scss"
import { BASE_BACKEND } from '../../utils/deployments'
import { Tooltip } from '@nextui-org/react'

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



let text_font ='w-[85px] h-[40px] mr-[15px]  text-sm '
let text_gap=' pl-[100px]'
if(attributes.length>13){
  text_font='w-[50px] h-[40px] mr-[7px] text-[13px] '
  text_gap='pl-[100px]'
}

{/* <Tooltip placement="bottom"  content={attributes} color='invert' rounded >

</Tooltip> */}

  return (
    <div className={`bg-white flex ${text_gap} pt-2 `}>
{/* 
<Tooltip placement="bottom" content={'Dashboard'} color='invert' rounded >
<div className="bg-red-300 w-[80px] h-[30px] rounded ml-2 p-1 pl-4 text-sm truncate max-w-4 ">sdsdsdsd</div>

    </Tooltip>
 <div className="bg-red-300 w-[80px] h-[30px] rounded ml-2 p-1 pl-4 text-sm  truncate max-w-4 ">Helsdsdsdslo</div>
 <div className="bg-red-300 w-[80px] h-[30px] rounded ml-2 p-1 pl-4 text-sm truncate max-w-4 ">Helsdsdsdlo</div> */}



{attributes.map(attributes=>{


return(

<Tooltip placement="bottom" content={attributes} color='invert' rounded >
<div className={` w-[50px] h-[30px] mr-[7px]  ${text_font} rounded  text-clip font-light   text-transparent  bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 tracking-tighter`}>{attributes}</div>

    </Tooltip>


 
 )

console.log(attributes)
})}







    </div>
  )


}

export default Horz


