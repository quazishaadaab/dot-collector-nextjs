import React, { useState } from 'react'
import { Pagination } from "@nextui-org/react";
import { integerPropType } from '@mui/utils';
import { Warning } from '@mui/icons-material';

function Slider() {


    const [pageNumber,setPage] = useState(1)

const render=()=>{
    switch(pageNumber){

        case 1 : 
            return <><div className='h-[50%] w-[50%] items-center'>
        <img className='rounded-3xl' src='chart.png'></img>
        </div></>
        case 2 :
        return <><div className='h-[50%] w-[50%] rounded items-center'>
        <img  className='rounded-3xl' src='feature.png'></img>
        </div></>
    


        }
    }

  return (
    <div>




<div >
{render()}
</div>


<div className="ml-32  mt-5">
 <Pagination animated shadow color={'warning'} noMargin loop total={2} initialPage={1} onChange={(page:number)=>{
setPage(page)
 }}/>
</div>




    </div>
  )
}

export default Slider