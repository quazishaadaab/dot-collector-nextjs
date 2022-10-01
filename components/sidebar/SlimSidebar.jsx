
import * as React from "react";
import styles from "../../styles/sidebar.module.scss"
import GridViewIcon from '@mui/icons-material/GridView';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LoginIcon from '@mui/icons-material/Login';
import SettingsIcon from '@mui/icons-material/Settings';
import FaceIcon from '@mui/icons-material/Face';
import LogoutIcon from '@mui/icons-material/Logout';
import Image from 'next/image'



import { SidebarOption } from "./SidebarOption";
import Rooms from "../../pages/rooms/[room]";

import DataService from "../../services/service";
import DataService2 from "../../services/dot-services";

import { useDispatch, useSelector } from "react-redux";
import  Link  from "next/link";

import {logout} from "../../services/redux/userSlice.js"

import {payload} from "../../pages/home/[home]"



import { Tooltip } from '@nextui-org/react'
import { useRouter } from 'next/router'

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

import FeedIcon from '@mui/icons-material/Feed';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import PersonIcon from '@mui/icons-material/Person';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import DescriptionIcon from '@mui/icons-material/Description';
import { PlusOne } from "@mui/icons-material";

const SlimSidebar = () => {

const [Rooms,setRooms]= React.useState([]);
const [room_ids,setRoom_Ids]=React.useState('')
// const [userid,setUserid]=React.useState()



const [user,setUser] = React.useState({})


const router= useRouter() ;

React.useEffect(() => {
  //important to put it here since itll be quicker and will not leave an empty state in startup
  const data_unparsed = window.localStorage.getItem('persist:root')
  const data_parsed = JSON.parse(data_unparsed)
  const user_data = JSON.parse(data_parsed?.user)
  
  //set the USER. user is now automatically updated/filled after this line
   setUser(user_data)

// setUserid(uid)
DataService2.launch()

// its best practice to put all your code in one function/method because useEffect only runs everything once. inside a method,
// code gets run from top to bottom. In useEffect, it gets run at the same time.
 retriveRooms()


//  when we add Rooms as a dependency, since it is an array, it will loop forever(this is a React sideeffect for array states).
//therefore, it acts like infinite polling. this may consume resources. best thing to do is use long polling.

}, [Rooms,user?.userid])


// const uid=useParams()

const retriveRooms=async()=>{





 DataService.getAllRoomsByUserId({userid:user?.userid}).then((roomnames)=>{

setRooms(roomnames?.data)

  // roomnames?.data?.map((response)=>{
  //   console.log('oop',response)
  //     // setRooms(current => [...current, response]);
    
  //   })
})
// console.log('rids',roomnames?.data[0]?.roomid)

//  setRoom_Ids(roomnames?.data[0]?.roomid)
// console.log('r3s',roomnames?.data)


//  setRooms(current => [...current, roomnames?.data?.roomname]);

//user array state is filled/populated
//   DataService.getAllRoomsByUserId({userid:user?.userid}).then(async(response)=>{

//     console.log('daata',response)
// await setRoom_Ids(response?.data)




// room_ids?.map(id=>{
//   DataService.getRoomData({roomid:id})?.then((response)=>{
//     console.log('rooms json',response)
//     setRooms(current => [...current, response?.data?.roomdata]);
  
//   })
//   })
// setRooms(response?.data)

  // })


}

const dispatch=useDispatch()



const signOut=()=>{
dispatch(logout())
}


  return (
<>


    <div className="bg-white h-full w-[5%] items-center space-y-5 px-3 cursor-pointer overflow-y-scroll pt-3">

{/* <span className='text-[20px] font-200 text-red-500 '>Dots</span> */}


<Image
      src="/logo.png"
      alt="Picture of the author"
      width={700}
      height={700}
      className=''
      objectFit='contain'
    />
    <hr></hr>

    <Tooltip placement="right" content={'Dashboard'} color='invert' rounded >
          <div onClick={()=>{router.push(`/home/${user?.userid}`)}} className=' data-tooltip-target="tooltip-right" data-tooltip-placement="right"  w-full items-center mt-5 mb-9 px-1.5 py-1 cursor-pointer'>
            <GridViewIcon sx={{ color: '#C00B00', fontSize:"30px"}}   />
          </div>
    </Tooltip>
    
    <Tooltip placement="right" content={'Feed'} color='invert' rounded >
    
          <div onClick={()=>{router.push("/users")}}className=' w-full items-center mt-5 mb-9 px-1.5 py-1 cursor-pointer'>
            <PeopleAltIcon sx={{ color: '#C00B00' , fontSize:"30px" }}   />
          </div>
          </Tooltip>
    



<Tooltip placement="right" content={'Create Attribute Package'} color='invert' rounded >
     <div onClick={()=>{router.push("/attributes/Attributes")}} className='  w-full items-center mt-5 mb-9 px-1.5 py-1 cursor-pointer'>
            <ProductionQuantityLimitsOutlinedIcon sx={{ color: '#C00B00' , fontSize:"30px"}}   />
          </div>
          </Tooltip>
    
          <hr></hr>

          <SidebarOption  addChannel title='Add Room' Icon={<PlusOne sx={{ color: '#EA1E0A', fontSize:"30px" }}  />} />
          <hr></hr>

{Rooms?.map((r)=>(
          <SidebarOption className='icon'   Icon={<QueryStatsIcon sx={{ color: '#F6CF08' , fontSize:"30px"}}  />} title={r?.roomname} roomid={r?.roomid}/>

          ))}

<hr></hr>

    <Tooltip placement="right" content={'Profile'} color='invert' rounded >
    <div onClick={()=>{router.push("/profile")}} className='  w-full items-center mt-5 mb-9 px-1.5 py-1cursor-pointer'>
            <QueryStatsIcon sx={{ color: '#C00B00', fontSize:"30px" }} />
          </div>
          </Tooltip>






    
    <Tooltip placement="right" content={'Logout'} color='invert' rounded >
     <div  onClick={()=>{router.push("/")}}  className='  w-full items-center mt-5 mb-9 px-1.5 py-1 cursor-pointer'>
            <FaceIcon sx={{ color: '#C00B00', fontSize:"30px" }}  />
          </div>
          </Tooltip>
    
    <Tooltip placement="right" content={'Financials'} color='invert' rounded >
     <div className='  w-full items-center mt-5 mb-9 px-1.5 py-1 cursor-pointer'>
            <LogoutIcon sx={{ color: '#C00B00', fontSize:"30px" }}  />
          </div>
          </Tooltip>
    
    
    <Tooltip placement="right" content={'Creditors'} color='invert' rounded >
     <div className='  w-full items-center mt-5 mb-9 px-1.5 py-1 cursor-pointer'>
            <DescriptionIcon sx={{ color: '#C00B00' , fontSize:"30px"}}  />
          </div>
          </Tooltip>
    
         
    
     
    
          </div>
          </>
   
  );
};

export default SlimSidebar;












{/* <div className="bg-[#111111] h-full w-[5%] items-center space-y-5 px-3 cursor-pointer">


    <Tooltip placement="right" content={'Dashboard'} color='invert' rounded >
          <div onClick={()=>{router.push(`/home/${user?.userid}`)}} className=' data-tooltip-target="tooltip-right" data-tooltip-placement="right"  w-full items-center mt-5 mb-9 px-1.5 py-1 cursor-pointer'>
            <GridViewIcon sx={{ color: '#707070' }}  fontSize="large" />
          </div>
    </Tooltip>
    
    <Tooltip placement="right" content={'Feed'} color='invert' rounded >
    
          <div onClick={()=>{router.push("/users")}}className=' w-full items-center mt-5 mb-9 px-1.5 py-1 cursor-pointer'>
            <PeopleAltIcon sx={{ color: '#707070' }}  fontSize="large" />
          </div>
          </Tooltip>
    
    
    <Tooltip placement="right" content={'Chat'} color='invert' rounded >
     <div onClick={()=>{router.push("/Chat/0")}} className='  w-full items-center mt-5 mb-9 px-1.5 py-1 cursor-pointer'>
            <ProductionQuantityLimitsOutlinedIcon sx={{ color: '#707070' }}  fontSize="large" />
          </div>
          </Tooltip>
    
    
    
    
    <Tooltip placement="right" content={'Profile'} color='invert' rounded >
    <div onClick={()=>{router.push("/profile")}} className='  w-full items-center mt-5 mb-9 px-1.5 py-1cursor-pointer'>
            <QueryStatsIcon sx={{ color: '#707070' }}  fontSize="large" />
          </div>
          </Tooltip>



<li><SidebarOption  addChannel title='Add' Icon={<PeopleAltIcon className={styles.icon}/>} /></li>

{Rooms?.map((r)=>(
          <SidebarOption className='icon' title={r?.roomname} roomid={r?.roomid}/>

          ))}

          

    
    <Tooltip placement="right" content={'Logout'} color='invert' rounded >
     <div  onClick={()=>{router.push("/")}}  className='  w-full items-center mt-5 mb-9 px-1.5 py-1 cursor-pointer'>
            <FaceIcon sx={{ color: '#707070' }}  fontSize="large" />
          </div>
          </Tooltip>
    
    <Tooltip placement="right" content={'Financials'} color='invert' rounded >
     <div className='  w-full items-center mt-5 mb-9 px-1.5 py-1 cursor-pointer'>
            <LogoutIcon sx={{ color: '#707070' }}  fontSize="large" />
          </div>
          </Tooltip>
    
    
    <Tooltip placement="right" content={'Creditors'} color='invert' rounded >
     <div className='  w-full items-center mt-5 mb-9 px-1.5 py-1 cursor-pointer'>
            <DescriptionIcon sx={{ color: '#707070' }}  fontSize="large" />
          </div>
          </Tooltip>
    
         
    
     
    
          </div> */}