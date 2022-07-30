import * as React from "react";
import styles from "../../styles/sidebar.module.scss"
import GridViewIcon from '@mui/icons-material/GridView';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import LoginIcon from '@mui/icons-material/Login';
import SettingsIcon from '@mui/icons-material/Settings';
import FaceIcon from '@mui/icons-material/Face';
import LogoutIcon from '@mui/icons-material/Logout';

import { SidebarOption } from "./SidebarOption";
import Rooms from "../../pages/rooms/Room";

import DataService from "../../services/service";
import DataService2 from "../../services/dot-services";

import { useParams } from 'react-router'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import {logout} from "../../services/redux/userSlice.js"


const Sidebar = () => {

const [Rooms,setRooms]= React.useState([{}]);
// const [userid,setUserid]=React.useState()
const navigate= useNavigate()

const { user } = useSelector((state) => state.user);

React.useEffect(() => {

// setUserid(uid)
retriveRooms()
DataService2.launch()

}, [Rooms])



// const uid=useParams()

const retriveRooms=()=>{

  DataService.getAllRooms().then((response)=>{
        // console.log(response.data)
        setRooms(response.data)

  })


}

const dispatch=useDispatch()


const signOut=()=>{
dispatch(logout())
}


  return (
    <div className={styles.sidebar}>

      <div className={styles.top}>
        <span className={styles.logo}>DotCollector</span>
      </div>

<hr/>

      <div className={styles.center}>
        <ul>
        <p className={styles.title}>MAIN</p>

        <Link to={`/${user?.userid}`} style={{ textDecoration: 'none' }} > 
          <li><GridViewIcon className={styles.icon}/><span>Dashboard</span></li>
          </Link>

          <p className={styles.title}>PEERS</p>

          <Link to="/users" style={{ textDecoration: 'none' }} > 

          <li ><PeopleAltIcon className={styles.icon}/><span>Peers</span></li>
          </Link>

        {/* search functionality required */}
          <li><ProductionQuantityLimitsOutlinedIcon className={styles.icon}/><span>Search Peers</span></li>
          {/* <li><BorderColorIcon className="icon"/><span>Orders</span></li>
          <li><DeliveryDiningIcon className="icon"/><span>Delivery</span></li> */}
          <p className={styles.title}>CHAT</p>
         

        {/* link this to chat module */}
          <li><QueryStatsIcon className={styles.icon}/><span>Chat</span></li>
        {/* need a notifications page */}
          <li><NotificationsActiveIcon className={styles.icon}/><span>Notifications</span></li>
         
          <p className={styles.title}>ROOMS</p>

         <li><SidebarOption  addChannel title='Add' Icon={<PeopleAltIcon className={styles.icon}/>} /></li>
          {/* <li><HealthAndSafetyIcon className="icon"/><span>Create Room</span></li> */}
          
          
          {Rooms.map((r)=>(
          <SidebarOption className={styles.icon} title={r.roomname} roomid={r.roomid}/>

          ))}
          


{/* keep these for the future */}
          <li><LoginIcon className={styles.icon}/><span>Join Room</span></li>
          <li><SettingsIcon className={styles.icon}/><span>Delete Room</span></li>
          
          <p className={styles.title}>USER</p>
{/* create profile page */}
        <Link to="/profile" style={{ textDecoration: 'none' }} > 

          <li><FaceIcon className={styles.icon}/><span>Profile</span></li>
          </Link>
          {/* create login page */}

        <div onClick={signOut} className={styles.logout-option}>
        <Link to="/" style={{ textDecoration: 'none' }}>
        <li><LogoutIcon  className={styles.icon}/><span>Logout</span></li>
        
        </Link>
          </div>
          
        </ul>
      </div>
    
        <div className={styles.bottom}>

            <div className={styles.colorOption}></div>
            <div className={styles.colorOption}></div>
            <div className={styles.colorOption}></div>


            </div>
     </div>
  );
};

export default Sidebar;
