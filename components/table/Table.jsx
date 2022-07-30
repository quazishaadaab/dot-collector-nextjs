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


let rows = []

const List = () => {



const { user } = useSelector((state) => state.user);

const [p,setP]=React.useState([''])
// const [rows,setRows]=React.useState([])
const userdoc ={
  userid:user?.userid

}

let peerdata
React.useEffect( () => {

   DataService.getUserById(userdoc).then((response)=>{
   peerdata= response?.data?.peers
   setP(peerdata)

    })

  }, [user?.userid,p])


console.log(peerdata)

// const retrivePeers=async ()=>{

//  await DataService.getUserById({userid:user?.userid}).then((response)=>{
//   console.log(response?.data?.peers)
// const peerdata= response?.data?.peers
//      setPeers(peerdata)
//   })
  

// }

// const mapPeers=async ()=>{

//   let buffer=[];

//  peers?.map(async(peerid)=>{

//   await DataService.getUserById({userid:peerid}).then(async (response)=>{
 
//   const row={
 
//      id:await response?.data?.userid,
//      product: await response?.data?.username,
//      img:await response?.data?.photoURL,
//      customer: await response?.data?.username,
//      // amount: Object.keys(response?.data?.dotCollection)?.length,
//      method: "Cash on Delivery",
//      status: "Approved",}
//  buffer.push(row)

// })
// rows=buffer;

//  })
// }






  return (

    <TableContainer className={styles.table} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
           <TableCell className="tableCell">Peer Id</TableCell>
           <TableCell className="tableCell">Name</TableCell>
           <TableCell className="tableCell">Customer</TableCell>
           <TableCell className="tableCell">Age</TableCell>
           <TableCell className="tableCell">Dots</TableCell>
           <TableCell className="tableCell">Years Known</TableCell>
           <TableCell className="tableCell">Friend Request Status</TableCell>

           
           
           </TableRow>
        </TableHead>


        <TableBody>
          {/* insert data key */}
          {rows?.map((row) => (
            
            <TableRow key={row?.id} >


              <TableCell className="tableCell">{row?.id}</TableCell>


              <TableCell className="tableCell">
              <div className={styles.cellWrapper}>
                  <img src={row?.img} alt="" className={styles.image}/>
                  {row?.product}

              </div>

              </TableCell>
              {console.log("render"+ row?.id)}
              <TableCell className="tableCell">{row?.customer}</TableCell>
              <TableCell className="tableCell">{row?.date}</TableCell>
              <TableCell className="tableCell">{row?.amount}</TableCell>
              <TableCell className="tableCell">{row?.method}</TableCell>
              <TableCell className="tableCell">
             
             {/* the unique status enables us to change the color depending on the value, approved or pending */}
              
              {row?.status=='Approved'?(<span className={styles.statusApproved}> {row?.status}</span>):(<span className={styles.statusPending}> {row?.status}</span>
)}

              </TableCell>
              

            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    )
}

export default List