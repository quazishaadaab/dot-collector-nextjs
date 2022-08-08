import * as React from "react";
import styles from "../../styles/widget.module.scss"
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DataService2 from "../../services/dot-services";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import {payload} from "../../pages/home/[home]"

import {widget_payload} from "../../services/calculateAvgDot"
import { useDispatch, useSelector } from "react-redux";


const Widget = ({type}) => {

  let data;
//temporary
const amount = 100
const diff = 20



const [avgDot,setAvgDot] = React.useState([])

console.log(widget_payload)

React.useEffect(() => {


// retriveAvgDot(userDoc)
setAvgDot(widget_payload)

}, [widget_payload.length])


const userDoc={

  userid:payload?.userid

}


const retriveAvgDot=async (userdoc)=>{

  await DataService2.getAvgDot(userdoc).then(r=>{
    setAvgDot(r.data)

  })


}






switch(type){

    case "user" :
        data={
          title:"THINKING",
          isMoney:false,
          link:"See Dots",
          icon:<PeopleAltIcon className={styles.icon} style={{color:"crimson",backgroundColor:"rgba(9255,0,0,0.2)"}}/>,
          value:avgDot[0]?.toFixed()
          
        };
        break;
        case "order" :
        data={
          title:"CREATIVITY",
          isMoney:false,
          link:"See Dots",
          icon:<AddShoppingCartIcon className={styles.icon}  style={{color:"goldenrod",backgroundColor:"rgba(218,165,32,0.2)"}}/>,
          value:avgDot[1]?.toFixed()

          
        };
        break;
        case "earnings" :
        data={
          title:"ASSERTIVENESS",
          isMoney:true,
          link:"See Dots",
          icon:<AttachMoneyIcon className={styles.icon}  style={{color:"green",backgroundColor:"rgba(0,128,0,0.2)"}}/>,
          value:avgDot[2]?.toFixed()

          
        };
        break;

        case "balance" :
          data={
            title:"EMPATHY",
            isMoney:true,
            link:"See Dots",
            icon:<AccountBalanceWalletIcon className={styles.icon}  style={{color:"purple",backgroundColor:"rgba(128,0,128,0.2)"}}/>,
            value:avgDot[3]?.toFixed()
          };
          break;
        default:
          break;
  }

  return (
    <div className={styles.widget}>
      <div className={styles.left}>
        <span className={styles.title}>{data.title}</span>
        <span className={styles.counter}># {data.value}</span>
        <span className={styles.link}>{data.link}</span>
      </div>
      <div className={styles.right}>
        <div className={styles.percentagepositive}>
          <ArrowDropUpIcon />
        {diff}%
        </div>

        {data.icon}
      </div>
    </div>
  );
};

export default Widget;

