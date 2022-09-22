import React, { useEffect } from "react";
    import styles from "../../styles/login.module.scss";
    
    import * as sha from "sha-1";
    
    import { useDispatch } from "react-redux";
    import { login } from "../../services/redux/userSlice.js";
    import DataService from "../../services/service";
    
    import { getSession, signIn, signOut, useSession } from "next-auth/react";
    import { registerStyles } from "@emotion/utils";
    import { useSelector } from "react-redux";
import { FRONT_END } from "../../utils/deployments";

     
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
      
function Login() {


      const dispatch = useDispatch();
      // const  {user}  = useSelector((state: any) => state?.user);
      const { data: session } = useSession();
      let sessionDoc: sessionDoc;
    
      useEffect(() => {
        if (session) {
          sessionDoc = {
            userid: sha(`${session?.user?.email}`),
            username: session?.user?.name as String,
            userPhoto: session?.user?.image as String,
            loggedIn: true,
          };
        }
        console.log(sessionDoc);
      }, [session?.user?.email]);
    
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
    
      const register = () => {
        signIn("google", {
          callbackUrl: `${FRONT_END}/home/${sha(
            `${session?.user?.email}`
          )}`,
        }).then(async (result) => {
          const session = await getSession();
         
          dispatch(
            login({
              userid: sha(`${session?.user?.email}`),
              username: session?.user?.name as String,
              userPhoto: session?.user?.image as String,
              email : session?.user?.email as String,
              loggedIn: true,
            })
          );
    
    
          const authDoc = {
            userid: sha(`${session?.user?.email}`),
            username: session?.user?.name as String,
            userPhoto: session?.user?.image as String,
            email : session?.user?.email as String,

          };
    
          DataService.postUsersInUsers(authDoc);
        });
      };
    





  return (
    <div className='flex h-full w-full max-h-full rounded '>

<div className='md:flex-[67%] 2xl:flex-[74%] bg-slate-100 h-full rounded pl-7  '> <img className='h-full w-[90%]  p-32 md:p-16' src="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-1/images/pages/auth-v2-login-illustration-light.png"></img> </div>

<div className='md:flex-[33%] 2xl:flex-[26%] bg-white md:py-28 md:px-10  2xl:py-44 2xl:px-12 text-slate-600 max-h-full rounded '>

<div className=' md:text-2xl font-[600] pb-1'>Welcome to DotCollector</div>

<div className=' font-[400] text-slate-400 text-base '>Please sign-in to your account using any of the login options</div>

<div className='bg-purple-300 h-[18%] w-[full] rounded p-4 mt-5 2xl:p-4  2xl:h-[15%] items-center'>

<div className='text-sm text-white mb-1 2xl:mb-2'>Admin:admin@dotcollector.ca / Pass:admin</div>
<div className='text-sm text-white'>Admin:admin@dotcollector.ca / Pass:admin</div>

</div>

<div className='flex gap-10 items-center justify-center p-2 h-[20%] mt-6'>


<div className='w-[30%] h-[95%]  items-center  '>
<img  className='h-full w-full cursor-pointer' onClick={register} src="https://icones.pro/wp-content/uploads/2021/02/google-icone-symbole-logo-png.png"></img>
</div>


<div className='w-[30%] h-[95%] items-center'></div>
<div className=' w-[30%] h-[95%] items-center'></div>
</div>


<form className="h-[30%] p-2">
  <div className="mb-3">
    <label form="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
    <input type="email"  id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" value='testuser@dotcollector.ca' required></input>
  </div>
  <div className="mb-6">
    <label form="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="testpassword" required></input>
  </div>

  <button type="submit"  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>



</div>



    </div>
  )
}

export default Login