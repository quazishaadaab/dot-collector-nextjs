import React from 'react'
import SlimSidebar from "../../components/sidebar/SlimSidebar";

function Rooms2({url}) {

  //display sidebar true initially
const [sidebar,setSidebar] = React.useState(true)

React.useEffect(() => {
  
}, [sidebar])

// if toggle is true, then display sidebar. Else , dont display



  const iframe =()=> {
    
    return {
      __html: `<iframe src=${"http://localhost:3000/rooms/13916c5c-aab3-4ae0-a292-a3ff6fe780f1"} width="100%" overflow="scroll" height="100%" border="0" frameborder="0" position="absolute"  ></iframe>`
    }
  }



  
  
return(
<>



<div className="flex w-[100%] h-screen    ">



{sidebar &&(  <SlimSidebar />)}


  {/* once hamburger menu clicked, make sidebar false. */}


<div className="relative h-full">
 <div className=" w-[50px] h-[40px] ml-4 mt-2 pl-3  absolute text-5xl cursor-pointer" onClick={()=>{
  setSidebar(!sidebar)
  }}>≡</div> 
    
    </div>


<div id='dangerousHtml' className='bg-gray-100 w-[100%] h-screen' dangerouslySetInnerHTML={ iframe()} />
</div>

</>
)

}

export default Rooms2