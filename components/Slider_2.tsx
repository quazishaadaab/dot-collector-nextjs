import React, { useState } from 'react'
import { Pagination } from "@nextui-org/react";
import { integerPropType } from '@mui/utils';
import { Warning } from '@mui/icons-material';

function Slider_2() {


    const [pageNumber,setPage] = useState(1)

const render=()=>{
    switch(pageNumber){

        case 1 : 
            return <><div className=' items-center'>
        <img className='rounded-3xl w-[97%] h-[100%] ml-2' src='Step4_a.png'></img>
        </div></>
        case 2 :
        return <><div className='rounded items-center'>
        <img  className='rounded-3xl w-[97%] h-[100%] ml-2' src='Step4_b.png'></img>
        </div></>
    


        }
    }

  return (
    <div>




<div >
{render()}
</div>


<div className="ml-[30%] mt-2 ">
 <Pagination animated shadow color={'warning'} noMargin loop total={2} initialPage={1} onChange={(page:number)=>{
setPage(page)
 }}/>
</div>




    </div>
  )
}

export default Slider_2