import * as React from "react";

import styles from "../../styles/featured.module.scss"
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DataService2 from "../../services/dot-services";
import { useDispatch, useSelector } from "react-redux";
import {payload} from "../../pages/home/[home]"
import { GridArrowUpwardIcon } from "@mui/x-data-grid";




const Featured = () => {

  const countDoc={
userid:payload?.userid
  }

const [dotCollection,setDotCollection]=React.useState(0)

React.useEffect(() => {
  
DataService2.getDotCollectionCount(countDoc).then( r=>{
  setDotCollection( r?.data?.count)
  
})


}, [payload?.userid,dotCollection])

let count;

// if dotCollection exits then count has a value, otherwise, it is 0. this solves the problem when users are deleted.
dotCollection?(count=Object.keys(dotCollection).length):(count=0);


  return (
    <div className={styles.featured}>
      Featured
      <div className={styles.top}>
        <div className={styles.title}>Total Dots</div>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className={styles.bottom}>

        <div className={styles.featuredChart}>

        <CircularProgressbar strokeWidth={1} value={count*10} text={`${count*10}%`} />;

        </div>

        <p className={styles.title}>Total meetings made so far</p>
      <p className={styles.amount}>{count}</p>
      <p className={styles.desc}>Previous transactions processing.Last payments may not be included.</p>
      
<div className={styles.summary}>

    <div className={styles.item}>

            <div className={styles.itemTitle}>Yesterday</div>

            <div className={styles.itemResultpositive}>
              <ArrowDropDownIcon fontSize="small"/>
                <div className="text-lg text-green-600 ml-3">1</div>
            </div>

    </div>


    <div className={styles.item}>

            <div className={styles.itemTitle}>Last Week</div>

            <div className={styles.itemResultnegative}>
              <GridArrowUpwardIcon fontSize="small"/>
              <div className="text-lg text-green-600 ml-3">2</div>
            </div>

    </div>


    

    <div className={styles.item}>

            <div className={styles.itemTitle}>Last Month</div>

            <div className={styles.itemResultpositive}>
              <ArrowDropDownIcon fontSize="small"/>
              <div className="text-lg text-green-600 ml-3">1</div>
            </div>

    </div>


</div>




      
      </div>
    </div>
  );
};

export default Featured;
