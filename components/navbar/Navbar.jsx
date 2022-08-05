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

const Navbar = () => {






  return (
    <div className={styles.navbar}>


<div className={styles.wrapper}>
<div className={styles.search}>

<input type="text" placeholder='Search..' />

<SearchIcon/>

</div>

<div className={styles.items}>

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
</div>

</div>


</div>
  )
}

export default Navbar