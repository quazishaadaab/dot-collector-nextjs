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

import { SidebarOption } from "./SidebarOption";
import Rooms from "../../pages/rooms/[room]";

import DataService from "../../services/service";
import DataService2 from "../../services/dot-services";

import { useDispatch, useSelector } from "react-redux";
import  Link  from "next/link";

import {logout} from "../../services/redux/userSlice.js"

import {payload} from "../../pages/home/[home]"



const Sidebar = () => {

const [Rooms,setRooms]= React.useState([]);
const [room_ids,setRoom_Ids]=React.useState('')
// const [userid,setUserid]=React.useState()


const [user,setUser] = React.useState({})

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

    <div className={styles.sidebar} >
      <div className={styles.top}>
        <span className={styles.logo}>DotCollector</span>
      </div>

<hr/>

      <div className={styles.center}>
        <ul>
        <p className={styles.title}>MAIN</p>

        <Link href={`/home/${user?.userid}`} style={{ textDecoration: 'none' }} > 
          <li><GridViewIcon className={styles.icon} /><span>Dashboard</span></li>
          </Link>

          <p className={styles.title} >PEERS</p>

          <Link href="/users" style={{ textDecoration: 'none' }} > 

          <li ><PeopleAltIcon className={styles.icon}/><span>Peers</span></li>
          </Link>

        {/* search functionality required */}
          <li><ProductionQuantityLimitsOutlinedIcon className={styles.icon}/><span>Search Peers</span></li>
          {/* <li><BorderColorIcon className={styles.icon}/><span>Orders</span></li>
          <li><DeliveryDiningIcon className="icon"/><span>Delivery</span></li> */}
          <p className={styles.title}>CHAT</p>
         

        {/* link this to chat module */}
          <li><QueryStatsIcon className={styles.icon}/><span>Chat</span></li>
        {/* need a notifications page */}
          <li><NotificationsActiveIcon className={styles.icon} /><span>Notifications</span></li>
         
          <p className={styles.title} >ROOMS</p>

         <li><SidebarOption  addChannel title='Add' Icon={<PeopleAltIcon className={styles.icon}/>} /></li>
          {/* <li><HealthAndSafetyIcon className="icon"/><span>Create Room</span></li> */}
          
          
          {Rooms?.map((r)=>(
          <SidebarOption className='icon' title={r?.roomname} roomid={r?.roomid}/>

          ))}
          


{/* keep these for the future */}
          <li><LoginIcon className={styles.icon}/><span>Join Room</span></li>
          <li><SettingsIcon className={styles.icon}/><span>Delete Room</span></li>
          
          <p className={styles.title} >USER</p>
{/* create profile page */}
        <Link href="/profile" style={{ textDecoration: 'none' }} > 

          <li><FaceIcon className={styles.icon}/><span>Profile</span></li>
          </Link>
          {/* create login page */}

        <div onClick={signOut} className={styles.logout_option}>
        <Link href="/" style={{ textDecoration: 'none' }}>
        <li><LogoutIcon  className={styles.icon}/><span>Logout</span></li>
        
        </Link>
          </div>
          
        </ul>
      </div>
    
        <div className={styles.bottom}>

            <div className="colorOption"></div>
            <div className="colorOption"></div>
            <div className="colorOption"></div>


            </div>
     </div>
   
  );
};

export default Sidebar;
