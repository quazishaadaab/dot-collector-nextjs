import * as React from "react";
import styles from "../../styles/widget.module.scss"
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DataService2 from "../../services/dot-services";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { payload } from "../../pages/home/[home]"

import { widget_payload } from "../../services/calculateAvgDot"
import { useDispatch, useSelector } from "react-redux";

import { Container, Card, Row, Text } from "@nextui-org/react";
import { renderBooleanCell } from "@mui/x-data-grid";

const Widget = ({ type ,selectedAttribute}) => {

  let data;
  //temporary
  const amount = 100
  const diff = 20



  const [ratings, setRatings] = React.useState([])
  const [avgDot, setAvgDot] = React.useState([])




  console.log(widget_payload)

  React.useEffect(() => {


    DataService2.updateRatings({ "userid": payload?.userid })


    retriveRatings({ userid: payload?.userid })
    // setAvgDot(widget_payload)


    //selectedAttribute is a dependency because the search engine in retriveRatings will fire once the selectedAttribute is chosen/appear
  }, [JSON.stringify(ratings),selectedAttribute]) 


  const retriveRatings = async (userdoc) => {

    await DataService2.getRatings(userdoc).then(result => {
      setRatings(result?.data)


      const rat = result?.data

      //we need a search engine to match the selectedAttribute with the attributes in ratings
      //something like elastic search. we are now using a brute force method which is only ok for a small sample size
      
      //if/once selectedAttribute is chosen/appears, then run the search.
      selectedAttribute && (
      rat?.map(res=>{
        if(selectedAttribute && res?.attribute_id==selectedAttribute){
          // setAvgDot(res?.attribute_id)
          setAvgDot(res?.dot)
          

        }
      })

      )



      
       //data is an array of each attribute_id

    })

  }




const elements={
  "atheltics":3,
  "inquiry":2,
  "jump":1,
  "defense":2,
  "BIQ":3
}






  // switch(type){

  //     case "user" :
  //         data={
  //           title:"THINKING",
  //           isMoney:false,
  //           link:"See Dots",
  //           icon:<PeopleAltIcon className={styles.icon} style={{color:"crimson",backgroundColor:"rgba(9255,0,0,0.2)"}}/>,
  //           value:avgDot[0]?.toFixed()

  //         };
  //         break;
  //         case "order" :
  //         data={
  //           title:"CREATIVITY",
  //           isMoney:false,
  //           link:"See Dots",
  //           icon:<AddShoppingCartIcon className={styles.icon}  style={{color:"goldenrod",backgroundColor:"rgba(218,165,32,0.2)"}}/>,
  //           value:avgDot[1]?.toFixed()


  //         };
  //         break;
  //         case "earnings" :
  //         data={
  //           title:"ASSERTIVENESS",
  //           isMoney:true,
  //           link:"See Dots",
  //           icon:<AttachMoneyIcon className={styles.icon}  style={{color:"green",backgroundColor:"rgba(0,128,0,0.2)"}}/>,
  //           value:avgDot[2]?.toFixed()


  //         };
  //         break;

  //         case "balance" :
  //           data={
  //             title:"EMPATHY",
  //             isMoney:true,
  //             link:"See Dots",
  //             icon:<AccountBalanceWalletIcon className={styles.icon}  style={{color:"purple",backgroundColor:"rgba(128,0,128,0.2)"}}/>,
  //             value:avgDot[3]?.toFixed()
  //           };
  //           break;
  //         default:
  //           break;
  //   }

  return (
    // <div className={styles.widget}>
 

    //   <div className={styles.left}>
    //     <span className={styles.title}>{data.title}</span>
    //     <span className={styles.counter}># {data.value}</span>
    //     <span className={styles.link}>{data.link}</span>
    //   </div>
    //   <div className={styles.right}>
    //     <div className={styles.percentagepositive}>
    //       <ArrowDropUpIcon />
    //     {diff}%
    //     </div>

    //     {data.icon}
    //   </div>

    // </div>

    <div className="  flex w-[100%] h-[100px] mb-2 overflow-x-scroll">

      {avgDot?.map(
(res)=>(<>
<div className='mr-[20px] flex h-full  p-5 justify-between rounded-3xl bg-white'>

<div className='flex-col flex justify-between w-[100px]'>
   <span className='font-bold text-[14px] text-[#a0a0a0]'>thinking</span>
   <span className='text-[28px] font-[300]'>{res.toFixed(2)}</span>
   <span className={styles.link}></span>
 </div>
<div className='flex-col flex justify-between'>
   <div className='flex align-center text-[14px] text-green-600'>
     <ArrowDropUpIcon />
   {diff}%
   </div>

{/* //     {data.icon} */}
</div>

</div>

</>)

    )}
    
    </div>



  
      


  );
};

export default Widget;

