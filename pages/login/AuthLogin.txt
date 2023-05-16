import React, { useEffect } from "react";
    import styles from "../../styles/login.module.scss";
    
    import * as sha from "sha-1";
    
    import { useDispatch } from "react-redux";
    import { login } from "../../services/redux/userSlice.js";
    import DataService from "../../services/service";
    
    import { getSession, signIn, signOut, useSession } from "next-auth/react";
    import { registerStyles } from "@emotion/utils";
    import { useSelector } from "react-redux";

    import {logout} from "../../services/redux/userSlice.js"

    import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";

 

import { FRONT_END } from "../../utils/deployments";
import { useRouter } from "next/router";
import Image from "next/image";

import {gapi} from "gapi-script"

import { GoogleOAuthProvider } from '@react-oauth/google';
import {GoogleLogin} from "react-google-login"


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

function AuthLogin() {

  const supabase = createClient('https://ncejgpigjoseupkyrswi.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jZWpncGlnam9zZXVwa3lyc3dpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI3OTMzNzgsImV4cCI6MTk5ODM2OTM3OH0.EzCN2SJQxHhL6JwwoiHoCWoTqHsT_NvRA7WfK60sJyM')

      const [session,setSession] = React.useState<session>()
      const [token,setToken] = React.useState('')
      const dispatch = useDispatch();
      let sessionDoc: sessionDoc;


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
    
      // const signIn =()=>{
      //   auth.signInWithPopup(provider).then(result=>{
    
      //     console.log(result)
      // dispatch(login({
    
      //   userid:result.user.uid,
      //   username:result.user.displayName,
      //   userPhoto:result.user.photoURL,
      //   loggedIn:true,
    
      // }))
    
      // const authDoc={
      // userid:result.user.uid,
      // username:result.user.displayName,
      // userPhoto:result.user.photoURL,
    
      // }
    
      // DataService.postUsersInUsers(authDoc)
    
      //   })
    
      // }

      
     


      const register = async(decodeToken:session) => {
  // console.log('useSession',session?.user?.email)

  //if first main login, we execute( the one in homepage)
    let redirectLink = `${FRONT_END}/home/${sha(`${decodeToken?.user_metadata?.email}`)}`
         

     //if its a login through email or unauthenticated screen, we use second html/css style login setup
     if(secondLogin){
      redirectLink =`${FRONT_END}${asPath}`
     }

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
    <div>Auth</div>
  )
}

export default AuthLogin