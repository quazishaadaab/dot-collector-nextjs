import React from "react";
import styles from "../../styles/list.module.scss"
import Datatable from "../../components/datatable/Datatable";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Input, KeyCode } from "@nextui-org/react";
import { Card, Grid, Row, Text,Button } from "@nextui-org/react";
import { HeartIcon } from './HeartIcon';
import axios from "axios";


import retriveUserState from "../../utils/userPersist"
import { BASE_BACKEND } from "../../utils/deployments";
import { uuid } from "uuidv4";

const Attributes = () => {

  const [attributes,setAttributes]=React.useState([])
  const [attributePackageName,setAttributePackageName]=React.useState('')


  const {userid}=retriveUserState()

  const attributeid=uuid()

  function enterAttribute(Event){
    if(Event.key==='Enter'){
      Event.target.value.length>2 && setAttributes(current => [...current, Event.target.value]);
      Event.target.value=''
    }

  }

  function enterAttributePackageName(Event){

      Event.target.value.length>2 && setAttributePackageName(Event.target.value);

  }


  function submitAttributeArray(){

    try{
    axios.post(`${BASE_BACKEND}/postAttribute`,{attributeid:attributeid,authorid:userid, attributePackageName:attributePackageName,attributes:attributes})
    document.getElementById("name").value = "";
    setAttributes([])
  }
    catch(e){

    }

  }


  return (
    <div className={styles.list}>
      <Sidebar />
      <div className={styles.listContainer}>
        <Navbar />






        {/* <Datatable/> */}


        <div class="flex ml-5 mt-5 ">
  <div class="mb-3 xl:w-96 ">
    <label for="exampleText0" class="form-label inline-block mb-2 text-gray-700"></label>

    {/* old input square box */}
    {/* <input
      type="text"
      onKeyPress={enterAttribute}
      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="attributeInput"
      placeholder="thinking,creativity,assertiveness,..."
    /> */}
   


   <Input
          bordered
          label="Attribute Package Name"
          placeholder="standard"
          color="warning"
          onChange={enterAttributePackageName}
          type="text"
          size="lg"
          width="500px"
          className="mt-2 mb-4"
          id='name'
        />
       
   <Input
          bordered
          label="Attribute"
          placeholder="Success"
          color="secondary"
          onKeyPress={enterAttribute}
          type="text"
          size="lg"
          width="500px"
          className="mt-2"

          id='attribute'
        />
         

  </div>
</div>


{/* use this grid container for our rooms, (when adding peers) since it autoscales */}
<Grid.Container gap={2} justify="flex-start" direction="row">
      {attributes?.map((item, index) => (
        <Grid xs={6} sm={3} md={2} key={index}>
          <Card isPressable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={"https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/green_edupictthinking_1484335266-1.png"}
                objectFit="contain"
                width="100%"
                height={140}
                alt={item}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b>{item}</Text>
                <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
{/* add attributes importance , {attributeImportance} */}
                </Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      ))}

      
    </Grid.Container>


 
    <Button className="mt-3 ml-3 mb-3" icon={<HeartIcon fill="currentColor" />} color="success" onClick={submitAttributeArray}>
        Submit
      </Button>
      </div>
      
    </div>
    
  );
};

export default Attributes;

// const list = [
//   {
//     title: "Orange",
//     img: "/images/fruit-1.jpeg",
//     price: "$5.50",
//   },
//   {
//     title: "Tangerine",
//     img: "/images/fruit-2.jpeg",
//     price: "$3.00",
//   },
//   {
//     title: "Raspberry",
//     img: "/images/fruit-3.jpeg",
//     price: "$10.00",
//   },
//   {
//     title: "Lemon",
//     img: "/images/fruit-4.jpeg",
//     price: "$5.30",
//   },
//   {
//     title: "Advocato",
//     img: "/images/fruit-5.jpeg",
//     price: "$15.70",
//   },
//   {
//     title: "Lemon 2",
//     img: "/images/fruit-6.jpeg",
//     price: "$8.00",
//   },
//   {
//     title: "Banana",
//     img: "/images/fruit-7.jpeg",
//     price: "$7.50",
//   },
//   {
//     title: "Watermelon",
//     img: "/images/fruit-8.jpeg",
//     price: "$12.20",
//   },
// ];

// return (
//   <Grid.Container gap={2} justify="flex-start">
//     {list.map((item, index) => (
//       <Grid xs={6} sm={3} key={index}>
//         <Card isPressable>
//           <Card.Body css={{ p: 0 }}>
//             <Card.Image
//               src={"https://nextui.org" + item.img}
//               objectFit="cover"
//               width="100%"
//               height={140}
//               alt={item.title}
//             />
//           </Card.Body>
//           <Card.Footer css={{ justifyItems: "flex-start" }}>
//             <Row wrap="wrap" justify="space-between" align="center">
//               <Text b>{item.title}</Text>
//               <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
//                 {item.price}
//               </Text>
//             </Row>
//           </Card.Footer>
//         </Card>
//       </Grid>
//     ))}
//   </Grid.Container>
// );