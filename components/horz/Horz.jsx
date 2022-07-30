import * as React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import styles from "../../styles/horz.module.scss"
const  Horz=() =>{

const [horz,setHorz]=useState([])


useEffect(() => {
    setHorz(['Thinking','Creativity','Empathy','Assertiveness'])


}, [])




  return (
    <div className={styles.horz}>


{horz.map(attributes=>{
return(
<div className={styles.horz_container}>
{attributes +' '}
 </div>

 
 )

console.log(attributes)
})}







    </div>
  )


}

export default Horz


