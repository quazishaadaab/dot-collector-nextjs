import React from 'react'
import styles from "../../styles/navbar.module.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

import { useDispatch, useSelector } from "react-redux";
import {payload} from "../../pages/home/[home]"
// import Search from '../../components/search/Search';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const Navbar = () => {

  const NoSSR_Search = dynamic(
    ()=> import('../../components/search/Search'),{ssr:false}
  )
  

  console.log('hare rama ', payload)



  return (
    <div className={styles.navbar}>


<div className={styles.wrapper}>


<div className="mb-3 ml-[20%] items-center   pt-4 flex">
<NoSSR_Search  searchtype={'peer'} roomid={null}/>
{/* <SearchIcon/> */}
</div>
<div className="mb-3 mt-3 ">{payload?.username}</div>

<Image 
layout='fixed'
width={40}
height={40}
className="rounded-3xl"
src={`${payload?.userPhoto}`}
/>


{/* <div className={styles.items}>

    <div className={styles.item}>
    <LanguageIcon className={styles.icon}/>
    English
    </div>

    <div className={styles.item}>
    <DarkModeOutlinedIcon className={styles.icon}/>
    
    </div>

    <div className={styles.item}>
    <FullscreenExitOutlinedIcon className={styles.icon}/>
    
    </div>

    <div className={styles.item}>
    <NotificationsNoneOutlinedIcon className={styles.icon}/>
    <div className={styles.counter}>1</div>
    </div>

    <div className={styles.item}>
    <ChatBubbleOutlineOutlinedIcon className={styles.icon}/>
    <div className={styles.counter}>2</div>

    </div>

    <div className={styles.item}>
    <ListOutlinedIcon className={styles.icon}/>
    
    </div>
    
    <div className={styles.item}>
<img src={`${payload?.userPhoto}`} alt="" className={styles.avatar} />  
    </div>
</div> */}

</div>


</div>
  )
}

export default Navbar