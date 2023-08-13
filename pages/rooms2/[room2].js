import { SettingsRemote } from '@mui/icons-material';
import { useRouter } from 'next/router';
import React from 'react'
import SlimSidebar from "../../components/sidebar/SlimSidebar";
import { FRONT_END} from "../../utils/deployments";
import retriveUserState from "../../utils/userPersist"
import SecondLogin from "../login/SecondLogin"
import Canvas from "../../components/canvas/Canvas"
import { BASE_BACKEND } from '../../utils/deployments';
import axios from 'axios';

var count = 0;

function Rooms2({url}) {

  //display sidebar true initially
const [sidebar,setSidebar] = React.useState(true)
//get login status. if not logged in , secondLogin component will be execute
const { userid,loggedIn } = retriveUserState()


React.useEffect(() => {
 //useless since nothing is in here
}, [sidebar])





// if toggle is true, then display sidebar. Else , dont display
const router = useRouter()

const roomId = router.query?.room2

  const iframe =()=> {
    
    return {
      __html: `<iframe src="${FRONT_END}/rooms/${roomId}"} width="100%" overflow="scroll" height="100%" border="0" frameborder="0" position="absolute"  ></iframe>`
    }
  }


  localStorage.setItem('roomid',roomId)

  
  
  
return(
<>


{loggedIn?(
<div className="flex w-[100%] h-screen    ">


{sidebar &&(  <SlimSidebar />)}


  {/* once hamburger menu clicked, make sidebar false. */}


<div className="relative h-full">
 <div className=" w-[50px] h-[40px] ml-4 mt-2 pl-3  absolute text-5xl cursor-pointer" onClick={()=>{
  setSidebar(!sidebar)


  }}>≡</div> 
    
    </div>
  

<div id='dangerousHtml' className='bg-gray-100 w-[100%] h-screen' dangerouslySetInnerHTML={ 


   iframe()

  
  } />
</div>)
:(
  //Send the truefgfg flag to login to activate teh secondLogin component
  //Send the roomid to login so secondLogin component can redirect back to our unique room.
<>
{()=>{  localStorage.setItem('roomid',roomId)}}
<SecondLogin roomid={roomId}/></>

)
}
</>

)

}

export default Rooms2