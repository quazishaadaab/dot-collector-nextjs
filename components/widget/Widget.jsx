import * as React from "react";
import styles from "../../styles/widget.module.scss"
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DataService2 from "../../services/dot-services";
import DataService from "../../services/service";

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
  const [names,setNames] = React.useState([])



  console.log(widget_payload)

  React.useEffect(() => {


    DataService2.updateRatings({ "userid": payload?.userid })


     retriveRatings({ userid: payload?.userid })
    // setAvgDot(widget_payload)
     getName()


    
//selectedAttribute is a dependency because the search engine in retriveRatings will fire once the selectedAttribute is chosen/appear
  }, [JSON.stringify(ratings),selectedAttribute]) 

  const getName=async()=>{

    const attributeNames= await DataService.getAttributeByAttributeId({"attributeid":selectedAttribute})
     
     setNames(attributeNames.data.attributes)
   }
   
  const retriveRatings = async (userdoc) => {

    await DataService2.getRatings(userdoc).then(result => {
      setRatings(result?.data)


      const rat =  result?.data

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

{()=>{

for (var i=0;i++;i<4){
  hashMap.set(avgDot[i],names[i])
}

}}

      {avgDot?.map(
(res,index)=>(<>
<div className='mr-[20px] flex h-full  p-5 justify-between rounded-3xl bg-white'>

<div className='flex-col flex justify-between w-[100px]'>
   <span className='font-regular text-[10px] antialiased tracking-tight text-purple-500'>{names[index]}</span>
   <span className='text-[28px] font-[300]'>{res}</span>
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

