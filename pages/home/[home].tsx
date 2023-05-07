import * as React from "react";
import styles from "../../styles/home.module.scss"
import SlimSidebar from "../../components/sidebar/SlimSidebar";

import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import AttributeSelector from "../../components/widget/AttributeSelector";

import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import { useRouter } from "next/router";

import Table from "../../components/table/Table";
import NewTable from "../../components/table/NewTable";

import DataService2 from "../../services/dot-services.js"
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../services/redux/userSlice";

import {mainReducer} from "../../services/redux/store"

import {store_two} from "../../services/redux/store"

// import Search from "../../components/search/Search"; 
import dynamic from "next/dynamic";

// import CalculateAvgDot from "../../services/calculateAvgDot"

import { getSession, useSession } from "next-auth/react";


type id ={

  userid : String

}
type Payload ={

  userid: String,
  username: String ,
  userPhoto: String,
  loggedIn: boolean,
}




let payload :Payload;


//I think we should remove userid below because we are not passing anything to it
const Home = ({userid}:id ) => {

const data_unparsed : any = window.localStorage.getItem('persist:root')
const data_parsed = JSON.parse(data_unparsed)
const user_data = JSON.parse(data_parsed?.user)
const dispatch = useDispatch()
const router= useRouter()


 payload = {
  userid: user_data?.userid,
  username: user_data?.username as any,
  userPhoto: user_data?.userPhoto as any,
  loggedIn: false,
}

//this sets the current select attribute for the widget to show
const [selectedAttribute,setSelectedAttribute] = React.useState("")



React.useEffect(() => {

  // router.push( `/home/${userid}`)
  DataService2.launch()

  const data_unparsed : any = window.localStorage.getItem('persist:root')
  const data_parsed = JSON.parse(data_unparsed)
  const user_data = JSON.parse(data_parsed?.user)

  //update the widgets/ratings everytime home page renders

// calculateAvgDot(userid)


 
}, [userid])

const e=()=>{
  console.log('set')

}


console.log(store_two.getState())

 //     userid: user_data?.userid,
// username: user_data?.username as String,
// userPhoto: user_data?.userPhoto as String,
// loggedIn: true,
// console.log(userid)

//i dont think we are using this.maybe useless
const {query:{homeid}} = useRouter()

// add query verification logic to make sure the query id is a valid userid in the database.
// ....
console.log(router.query?.home) 





// const NoSSR_Search = dynamic(
//   ()=> import('../../components/search/Search'),{ssr:false}
// )


const childToParent=(selected:string)=>{
setSelectedAttribute(selected)
}






  return (

    <div className={styles.home}>

{/* <CalculateAvgDot/> */}


<SlimSidebar/>

      
      <div className={styles.homeContainer}>
        <Navbar />

{/* <NoSSR_Search searchtype={'peer'} roomid={null}/> */}


        <div className="px-2">



        <AttributeSelector userid={user_data?.userid} childToParent={childToParent}/>

        <div className={styles.widgets}>
          <Widget type="user" selectedAttribute={selectedAttribute} />
          {/* <Widget type="order" />
          <Widget type="earnings" />
          <Widget type="balance" /> */}
        </div>
        </div>



        {/* encloses everything except for widjet,sidebar,and navbar */}
        <div className="px-14">


        <div className={styles.charts}>
          <Featured />
          <Chart selectedAttribute={selectedAttribute} title={'Last 6 months'} aspect={2/1}/>
        </div>

        <div className="bg-white rounded-[15px] ">
        <div className={styles.listContainer}>
        
          <div className={styles.listTitle}>Friends</div>
        
        {/* <Table/> */}
<NewTable/>

        </div>
        </div>



</div> 
{/* above div contains featured,charts,and friends list */}

      </div>


    </div>
  );
};

export default Home;

export {payload}
