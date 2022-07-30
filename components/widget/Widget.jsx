import * as React from "react";
import styles from "../../styles/widget.module.scss"
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DataService2 from "../../services/dot-services";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';


import { useDispatch, useSelector } from "react-redux";


const Widget = ({type}) => {

  let data;
//temporary
const amount = 100
const diff = 20

const { user } = useSelector((state) => state.user);


const [avgDot,setAvgDot] = React.useState([])



React.useEffect(() => {
retriveAvgDot(userDoc)
}, [avgDot,user.userid])


const userDoc={

  userid:user.userid

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
          link:"See a all users",
          icon:<PeopleAltIcon className={styles.icon} style={{color:"crimson",backgroundColor:"rgba(9255,0,0,0.2)"}}/>,
          value:avgDot[0]
          
        };
        break;
        case "order" :
        data={
          title:"CREATIVITY",
          isMoney:false,
          link:"See a orders",
          icon:<AddShoppingCartIcon className={styles.icon}  style={{color:"goldenrod",backgroundColor:"rgba(218,165,32,0.2)"}}/>,
          value:avgDot[1]

          
        };
        break;
        case "earnings" :
        data={
          title:"ASSERTIVENESS",
          isMoney:true,
          link:"View earnings",
          icon:<AttachMoneyIcon className={styles.icon}  style={{color:"green",backgroundColor:"rgba(0,128,0,0.2)"}}/>,
          value:avgDot[2]

          
        };
        break;

        case "balance" :
          data={
            title:"EMPATHY",
            isMoney:true,
            link:"View balance",
            icon:<AccountBalanceWalletIcon className={styles.icon}  style={{color:"purple",backgroundColor:"rgba(128,0,128,0.2)"}}/>,
            value:avgDot[3]

            
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

