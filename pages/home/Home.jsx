import * as React from "react";
import styles from "../../styles/home.module.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import { useNavigate } from "react-router-dom";

import Table from "../../components/table/Table";
import DataService2 from "../../services/dot-services.js"

// import Search from "../../components/search/Search"; 

// import CalculateAvgDot from "../../services/calculateAvgDot"

const Home = ({userid}) => {

const navigate= useNavigate()
React.useEffect(() => {

  navigate( `/${userid}`)
  DataService2.launch()


 
}, [userid])

  
  return (

    <div className={styles.home}>

{/* <CalculateAvgDot/> */}
      <Sidebar />
      <div className={styles.homeContainer}>
        <Navbar />

        {/* <Search/> */}
        <div className={styles.widgets}>
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>

        <div className={styles.charts}>
          <Featured />
          <Chart title={'Last 6 months'} aspect={2/1}/>
        </div>

        <div className={styles.listContainer}>
          <div className={styles.listTitle}>Latest Transactions</div>
        
        <Table/>
        </div>
      </div>
    </div>
  );
};

export default Home;
