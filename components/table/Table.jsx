import styles from "../../styles/table.module.scss"

import * as React from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import DataService from "../../services/service"
import {useDispatch,useSelector} from "react-redux"

import {payload} from "../../pages/home/[home]"


let rows = []

const List = () => {




const [peers,setPeers]=React.useState([null])
const [rows,setRows]=React.useState([
  {customer:'',
  id:'',
  img:'',
method:'',
product:'',
status:''},])
const userdoc ={
  userid:payload?.userid

}

let peerdata
let array_size = peers?.length
React.useEffect( () => {

  //  DataService.getUserById(userdoc).then((response)=>{
  //  peerdata= response?.data?.peers
  //  setPeers(peerdata)
  //   }).then( ()=>{
     

  //   })

  //retrivePeers() here is optional but makes it slow, but basically we call mapPeers() first which basically uses the peer array to get user JSON data and stores it in rows.
mapPeers()


  }, [array_size])






const retrivePeers=async ()=>{
 await DataService.getUserById({userid:payload?.userid}).then((response)=>{

const peerdata=(response?.data?.peers)
     setPeers(peerdata)

     array_size = peers?.length

  })
  

}

// we repeatedly call retrivePeers to get the updated state of our app. if we were to put it inside useEffect, then it would only get called once.
// therefore, if we add or delete a peer, our peer list will automatically get updated without refreshing the page. if we want to only get the updated peer list,
//upon page refresh, then we basically need to put retrivePeers inside the useEffect hook.
retrivePeers()




const mapPeers= async ()=>{

  let buffer=[];

 peers?.map(async(peerid)=>{

  await DataService.getUserById({userid:peerid}).then(async (response)=>{
 
  const row={
 
     id:await response?.data?.userid,
     product: await response?.data?.username,
     img:await response?.data?.photoURL,
     customer: await response?.data?.username,
     // amount: Object.keys(response?.data?.dotCollection)?.length,
     status: "Approved",}
 buffer.push(row)

})
rows=buffer;

setRows(rows)



 })
}




  return (
    <div className="bg-white">



    <TableContainer className={styles.table} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
           <TableCell className="tableCell">Peer Id</TableCell>
           <TableCell className="tableCell">Name</TableCell>
           <TableCell className="tableCell">Customer</TableCell>
           <TableCell className="tableCell">Age</TableCell>
           <TableCell className="tableCell">Dots</TableCell>
           <TableCell className="tableCell">Friend Request Status</TableCell>

           
           
           </TableRow>
        </TableHead>


        <TableBody>
          {/* insert data key */}
          {
            
  rows?.map((row) => (
            
            <TableRow key={row?.id} >


              <TableCell className="tableCell">{row?.id}</TableCell>


              <TableCell className="tableCell">
              <div className={styles.cellWrapper}>
                  <img src={row?.img} alt="" className={styles.image}/>
                  {row?.product}

              </div>

              </TableCell>
              <TableCell className="tableCell">{row?.customer}</TableCell>
              <TableCell className="tableCell">{row?.date}</TableCell>
              <TableCell className="tableCell">{row?.amount}</TableCell>
              <TableCell className="tableCell">
             
             {/* the unique status enables us to change the color depending on the value, approved or pending */}
              
              {row?.status=='Approved'?(<span className={styles.statusApproved}> {row?.status}</span>):(<span className={styles.statusPending}> {row?.status}</span>
)}

              </TableCell>
              

            
            </TableRow>
          ))
  }
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    )
}

export default List

