


import styles from "../../styles/table.module.scss"

import * as React from 'react';
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import DataService from "../../services/service"
import {useDispatch,useSelector} from "react-redux"

import {payload} from "../../pages/home/[home]"

import { Table, Row, Col, Tooltip, User, Text } from "@nextui-org/react";

import { styled } from '@nextui-org/react';

let rows = []

//   const columns = [
//     { name: "NAME", uid: "name" },
//     { name: "ROLE", uid: "role" },
//     { name: "STATUS", uid: "status" },
//     { name: "ACTIONS", uid: "actions" },
//   ];




const StyledBadge = styled('span', {
    display: 'inline-block',
    textTransform: 'uppercase',
    padding: '$2 $3',
    margin: '0 2px',
    fontSize: '10px',
    fontWeight: '$bold',
    borderRadius: '14px',
    letterSpacing: '0.6px',
    lineHeight: 1,
    boxShadow: '1px 2px 5px 0px rgb(0 0 0 / 5%)',
    alignItems: 'center',
    alignSelf: 'center',
    color: '$white',
    variants: {
      type: {
        active: {
          bg: '$successLight',
          color: '$successLightContrast'
        },
        paused: {
          bg: '$errorLight',
          color: '$errorLightContrast'
        },
        vacation: {
          bg: '$warningLight',
          color: '$warningLightContrast'
        }
      }
    },
    defaultVariants: {
      type: 'active'
    }
  });

const IconButton = styled('button', {
    dflex: 'center',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    padding: '0',
    margin: '0',
    bg: 'transparent',
    transition: '$default',
    '&:hover': {
      opacity: '0.8'
    },
    '&:active': {
      opacity: '0.6'
    }
  });
const NewTable = () => {




    const [peers,setPeers]=React.useState([null])
    const [rows,setRows]=React.useState([
      {id:'',
        name:'',
        image:'',
      
    role:'',
    division:'',
    email:'',
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
         id :1,
         name: await response?.data?.username,
         image:await response?.data?.photoURL,
         role:'CEO',
         division:'Finance',
         email:'asda@gmail.com',
         // amount: Object.keys(response?.data?.dotCollection)?.length,
         status: "active",}
     buffer.push(row)
    
    })
    rows=buffer;
    
    setRows(rows)
    
    
    
     })
    }






    const columns = [
            { name: "NAME", uid: "name" },
            { name: "ROLE", uid: "role" },
            { name: "STATUS", uid: "status" },
            { name: "ACTIONS", uid: "actions" },
          ];
          const users = [
            {
              id: 1,
              name: "Tony Reichert",
              role: "CEO",
              team: "Management",
              status: "active",
              age: "29",
              avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
              email: "tony.reichert@example.com",
            },
            {
              id: 2,
              name: "Zoey Lang",
              role: "Technical Lead",
              team: "Development",
              status: "paused",
              age: "25",
              avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
              email: "zoey.lang@example.com",
            },
            {
              id: 3,
              name: "Jane Fisher",
              role: "Senior Developer",
              team: "Development",
              status: "active",
              age: "22",
              avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
              email: "jane.fisher@example.com",
            },
            {
              id: 4,
              name: "William Howard",
              role: "Community Manager",
              team: "Marketing",
              status: "vacation",
              age: "28",
              avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
              email: "william.howard@example.com",
            },
            {
              id: 5,
              name: "Kristen Copper",
              role: "Sales Manager",
              team: "Sales",
              status: "active",
              age: "24",
              avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
              email: "kristen.cooper@example.com",
            },
          ];
          const renderCell = (user, columnKey) => {
            const cellValue = user[columnKey];
            switch (columnKey) {
              case "name":
                return (



                    <Tooltip content={user?.name}>
                    <User squared src={user?.image} name={cellValue} css={{ p: 0 }}>
                    {user?.email}
                  </User>
                  </Tooltip>
                );
              case "role":
                return (
                  <Col>
                    <Row>
                      <Text b size={14} css={{ tt: "capitalize" }}>
                        {cellValue}
                      </Text>
                    </Row>
                    <Row>
                      <Text b size={13} css={{ tt: "capitalize", color: "$accents7" }}>
                        {user?.division}
                      </Text>
                    </Row>
                  </Col>
                );
              case "status":
                return <StyledBadge type={user?.status}>{cellValue}</StyledBadge>;
        

                // make sure these actions work , as of now you cant edit delete or view
              case "actions":
                return (
                  <Row justify="center" align="center">
                    <Col css={{ d: "flex" }}>
                      <Tooltip content="Details">
                        <IconButton onClick={() => console.log("View user", user?.name)}>
                        </IconButton>
                      </Tooltip>
                    </Col>
                    <Col css={{ d: "flex" }}>
                      <Tooltip content="Edit user">
                        <IconButton onClick={() => console.log("Edit user", user?.name)}>
                        </IconButton>
                      </Tooltip>
                    </Col>
                    <Col css={{ d: "flex" }}>
                      <Tooltip
                        content="Delete user"
                        color="error"
                        onClick={() => console.log("Delete user", user?.name)}
                      >
                        <IconButton>
                        </IconButton>
                      </Tooltip>
                    </Col>
                  </Row>
                );
              default:
                return cellValue;
            }
          };




  return (
<>

    <Table
      aria-label="Example table with custom cells"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
      selectionMode="none"
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column
            key={column.uid}
            hideHeader={column.uid === "actions"}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </Table.Column>
        )}
      </Table.Header>
      <Table.Body items={rows}>
        {(item) => (
          <Table.Row>
            {(columnKey) => (
              <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
            )}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
    </>
  )

  
}

export default NewTable














