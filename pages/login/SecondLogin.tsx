import React, { useEffect } from "react";
    
    import * as sha from "sha-1";
    
    import { useDispatch } from "react-redux";
    import { login } from "../../services/redux/userSlice.js";
    import DataService from "../../services/service";
    


    import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";

 

import { FRONT_END } from "../../utils/deployments";
import { useRouter } from "next/router";
import Image from "next/image";

import {gapi} from "gapi-script"

import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'


type user_data = {
  name: String;
  image: String;
  email: String;
};

type sessionDoc = {
  userid: String;
  username: String;
  userPhoto: String;
  loggedIn: boolean;
};
interface session{
 user_metadata:{name:String,email:String,picture:String}
}

    //  This login method is for when user clicks link in their email and logs in. The redirect URL is different as it points to the room instead of the homepage.
function SecondLogin({roomid}:any) {
  const supabase = createClient('https://ncejgpigjoseupkyrswi.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jZWpncGlnam9zZXVwa3lyc3dpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI3OTMzNzgsImV4cCI6MTk5ODM2OTM3OH0.EzCN2SJQxHhL6JwwoiHoCWoTqHsT_NvRA7WfK60sJyM')

  const [session,setSession] = React.useState<session>()
  const [token,setToken] = React.useState('')
  const dispatch = useDispatch();
  let sessionDoc: sessionDoc;
  const {asPath,query}= useRouter()


  useEffect(() => {

    //const rawSession :any = localStorage.getItem('sb-ncejgpigjoseupkyrswi-auth-token')
    //const session : session = JSON.parse(rawSession)
          setToken(window.location.hash.substr(14))

     // alert(JSON.parse(sesh)?.user?.id)
     if (token) {
       const decodeToken = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
       setSession(decodeToken)

       sessionDoc = {
         userid: sha(`${decodeToken?.user_metadata?.email}`),
         username: decodeToken?.user_metadata?.name as String,
         userPhoto: decodeToken?.user_metadata?.picture as String, //need to change this to imageUrl 
         loggedIn: true,
       };
       //this will register authenticated user into Redux, create a user document in mongo(if already exists, then it wont), and it 
       //will redirect user to customized hompage

       //the only bug here is that it goes back to the login page, and then redirects for a short 1s interval.
       register(decodeToken)
     }
     console.log(sessionDoc);
   }, [token]);
 


   const register = async(decodeToken:session) => {
    // console.log('useSession',session?.user?.email)
  
    //if first main login, we execute( the one in homepage)
    let redirectLink = `${FRONT_END}/rooms2/${localStorage.getItem('roomid')}`

  // Update Redux and fill it with user data. Rest of app depends on this
            dispatch(
              login({
                userid:  sha(`${decodeToken?.user_metadata?.email}`),
                username:  decodeToken?.user_metadata?.name as String,
                userPhoto:  decodeToken?.user_metadata?.picture as String,
                email : decodeToken?.user_metadata?.email as String,
                loggedIn: true,
              })
            );
      
            //Create a new user and post to mongoDB. If user already exists, mongodb wont create a new document
            const authDoc = {
              userid: sha(`${decodeToken?.user_metadata?.email}`),
              username: decodeToken?.user_metadata?.name as String,
              userPhoto: decodeToken?.user_metadata?.picture as String,
              email : decodeToken?.user_metadata?.email as String,
  
            };
  
  
  
            console.log("authdoc",authDoc)
      
            DataService.postUsersInUsers(authDoc);
  
            //redirect the user to their customized home page. This may be a 
            //bug , we may instead use next router
            window.location.href = redirectLink;
  
  
        };





  return (

<>
{/* if second login is true in the prop,then we show the second login( the special login for users that have clicked a link in their email) */}
{/* otherwise, if secondlogin is empty or false, then we just show the normal login upon startup */}


<div >
 

      <Modal
        width="700px"
        closeButton
        blur
        open={true}
        preventClose
        aria-labelledby="modal-title"
      >
        <Modal.Header>
          <Text id="modal-title" size={25}>
            Login with any account to  {``}
            <Text b size={25}>
            access this room
            </Text>
          </Text>
        </Modal.Header>


        <Modal.Body>

        <div className='w-[30%] h-[95%]  items-center ml-56 '>
<img  className='h-full w-full cursor-pointer' onClick={async(event)=>{
  const {data:d1,error:e1} = await supabase.auth.signInWithOAuth({
    provider:'google',
    options: {
      redirectTo: `${FRONT_END}/login/SecondLogin`
    }
  })


  // window.location.href =`${FRONT_END}/rooms2/${roomid}`


}} src="https://icones.pro/wp-content/uploads/2021/02/google-icone-symbole-logo-png.png"></img>


</div>
          {/* <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            // contentLeft={<Mail fill="currentColor" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            // contentLeft={<Password fill="currentColor" />}
          /> */}

          <Row justify="space-between">
          </Row>

          <Row justify="space-between">
          </Row>
          <Row justify="space-between">
          </Row>
      
        </Modal.Body>


        <Modal.Footer>
          {/* <Button auto flat color="error" >
            Close
          </Button>
          <Button auto >
            Sign in
          </Button> */}
        </Modal.Footer>


      </Modal>
    </div>


</>
  )
}

export default SecondLogin