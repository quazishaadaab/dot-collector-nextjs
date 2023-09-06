import React from 'react'

import { Dropdown } from "@nextui-org/react";
import DataService2 from "../../services/dot-services";
import DataService from "../../services/service";

function AttributeSelector({userid,childToParent}) {

    const [attributes,setAttributes]=React.useState([])

    React.useEffect(() => {

    retriveAttributes()
    }, [attributes])
    

    const retriveAttributes=async()=> {
       const result=await DataService2.getRatings({"userid":userid})
       const ratings=result?.data
       
       //this is not like python. Object here is just the index of the objects inside ratings array
       let attribute_buffer =[] // this is just the buffer that loads all the unique attribute ids in the ratings objects
       for (let i =0 ; i<ratings?.length;i++){

       //we now need to get the names of the attribute ids by sending an API call.
        const name= await DataService.getAttributeByAttributeId({"attributeid":ratings[i]?.attribute_id})

        const menuDoc={key:name?.data?.attributeid, name:name?.data?.name}
        
        attribute_buffer?.push(menuDoc)//name is actually an object that houses all data related to the attribute(like the skills array,name,authorid,etc) we should add a type here for tsx integration
        // setAttributes(current => [...current,ratings[i].attribute_id])

       }

       setAttributes(attribute_buffer) //we set the global variable attributes to the buffer that we just loaded
    }

    let menuItems=[]
    const createMenuItems=()=>{


    }

    // const menuItems = [
    //     { key: "new", name: "New File" },
    //     { key: "copy", name: "Copy Link" },
    //     { key: "edit", name: "Edit File" },
    //     { key: "delete", name: "Delete File" },
    //   ];

  return (
    <div>


<Dropdown>
  <div className='mt-2'>
<Dropdown.Button flat >Attributes</Dropdown.Button>
</div>
<Dropdown.Menu aria-label="Dynamic Actions" items={attributes}  onAction={(key)=>{childToParent(key)}}>
    
        {(item) => (
          <Dropdown.Item key={item?.key}  >
            {item?.name}
            
          </Dropdown.Item>
          
        )}
    
</Dropdown.Menu>
</Dropdown>



    </div>
  )
}

export default AttributeSelector