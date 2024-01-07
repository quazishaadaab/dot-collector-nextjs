import React, { useEffect } from "react";

import * as sha from "sha-1";

import { useDispatch } from "react-redux";
import { login } from "../../services/redux/userSlice.js";
import DataService from "../../services/service";



import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";



import { FRONT_END } from "../../utils/deployments";
import { useRouter } from "next/router";
import Image from "next/image";

import { gapi } from "gapi-script"

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
interface session {
  user_metadata: { name: String, email: String, picture: String }
}


function Login() {
  const supabase = createClient('https://ncejgpigjoseupkyrswi.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jZWpncGlnam9zZXVwa3lyc3dpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI3OTMzNzgsImV4cCI6MTk5ODM2OTM3OH0.EzCN2SJQxHhL6JwwoiHoCWoTqHsT_NvRA7WfK60sJyM')

  const [session, setSession] = React.useState<session>()
  const [token, setToken] = React.useState('')
  const dispatch = useDispatch();
  let sessionDoc: sessionDoc;
  const { asPath, query } = useRouter()


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



  const register = async (decodeToken: session) => {
    // console.log('useSession',session?.user?.email)

    //if first main login, we execute( the one in homepage)
    let redirectLink = `${FRONT_END}/home/${sha(`${decodeToken?.user_metadata?.email}`)}`



    // Update Redux and fill it with user data. Rest of app depends on this
    dispatch(
      login({
        userid: sha(`${decodeToken?.user_metadata?.email}`),
        username: decodeToken?.user_metadata?.name as String,
        userPhoto: decodeToken?.user_metadata?.picture as String,
        email: decodeToken?.user_metadata?.email as String,
        loggedIn: true,
      })
    );

    //Create a new user and post to mongoDB. If user already exists, mongodb wont create a new document
    const authDoc = {
      userid: sha(`${decodeToken?.user_metadata?.email}`),
      username: decodeToken?.user_metadata?.name as String,
      userPhoto: decodeToken?.user_metadata?.picture as String,
      email: decodeToken?.user_metadata?.email as String,

    };



    console.log("authdoc", authDoc)

    DataService.postUsersInUsers(authDoc);

    //redirect the user to their customized home page. This may be a 
    //bug , we may instead use next router
    window.location.href = redirectLink;


  };





  return (

    <>



      <div className='flex h-full w-full max-h-full rounded  '>

        <div className='md:flex-[67%] 2xl:flex-[74%] h-full rounded relative max-h-full  '>
          {/* 
<Image
      

                                    src="/login_gradient.jpg"
                                    alt="Picture of the author"
                                    width={100}
                                    height={100}
                                    
                                    className=' '
                                    layout='fill'
                                    objectFit='contain'

                                />  */}
          <img className='h-full w-full absolute ' src="https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"></img>

          <div className="h-full w-full relative backdrop-blur-sm bg-black/10 " >
           
            <div className=' h-[80%] w-full font-[400] text-white text-4xl top-[10%] text-center absolute  '>
            <div className="h-14 w-[80%] ml-[10%] pt-2 rounded-2xl backdrop-blur-sm bg-white/30  font-semibold antialiased text-yellow-300 tracking-tighter">View Demo</div>
              
              <div className="h-[80%] w-[80%] ml-[10%] mt-8 relative ">  
                                      <iframe className='w-full h-full absolute ' src="https://demo.arcade.software/udu2uUvgcHZzdsp7Tx8R?embed" title="version1" ></iframe>

              </div>


            </div>

          </div>



        </div>

        <div className='md:flex-[33%] 2xl:flex-[26%] bg-white md:py-28 md:px-10  2xl:py-44 2xl:px-12 text-slate-600 max-h-full rounded '>

          <div className=' md:text-2xl font-[600] pb-1'>Welcome to Upplif</div>

          <div className=' font-[400] text-slate-400 text-base '>Please sign-in to your account using any of the login options</div>


          <div className='flex gap-10 items-center justify-center p-2 h-[20%] mt-6'>


            <div className='w-[30%] h-[95%]  items-center  '>



              <img className='h-full w-full cursor-pointer '


                onClick={async (event) => {
                  const { data: d1, error: e1 } = await supabase.auth.signInWithOAuth({
                    provider: 'google',
                    options: {
                      redirectTo: `${FRONT_END}/login/Login`
                    }
                  })

                  //window.location.href = `http://localhost3002/home/${data?.session}`;

                }}
                src="https://icones.pro/wp-content/uploads/2021/02/google-icone-symbole-logo-png.png"></img>

            </div>


            <div className='w-[30%] h-[95%] items-center'></div>
            <div className=' w-[30%] h-[95%] items-center'></div>
          </div>


          {/* <form className="h-[30%] p-2">
  <div className="mb-3">
    <label form="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
    <input type="email"  id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" value='testuser@dotcollector.ca' required></input>
  </div>
  <div className="mb-6">
    <label form="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="testpassword" required></input>
  </div>

  <button type="submit"  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form> */}

        </div>
      </div>


    </>
  )
}

export default Login