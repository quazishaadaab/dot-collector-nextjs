import React from "react";
import styles from "../../styles/login.module.scss"




import {useDispatch} from "react-redux"
import {login} from "../../services/redux/userSlice.js"
import DataService from "../../services/service";


import { signIn,signOut,useSession} from "next-auth/react"

const Login = () => {

let email;
let password;

const dispatch=useDispatch();

// const signIn =()=>{
//   auth.signInWithPopup(provider).then(result=>{

//     console.log(result)
//     dispatch(login({

//       userid:result.user.uid,
//       username:result.user.displayName,
//       userPhoto:result.user.photoURL,
//       loggedIn:true,
      
//     }))


// const authDoc={
// userid:result.user.uid,
// username:result.user.displayName,
// userPhoto:result.user.photoURL,

// }


// DataService.postUsersInUsers(authDoc)

//   })


// }

const {data:session}=useSession();

if(session){
  console.log(session)
}

  return (
    <div className={styles.login}>
      <div className={styles.left}>
        <div className={styles.DotCollector-title}> DotCollector</div>
        <img
          id="login-image"
          src="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-1/images/pages/auth-v2-login-illustration-light.png"
        ></img>
                    <img alt="mask" src="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-2/images/pages/auth-v2-mask-light.png" class="bottom-diagonal"></img>
                    <img alt="tree" src="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-2/images/pages/tree.png" class="bottom-plant"></img>
      </div>

      <div className={styles.right}>
        <div className={styles.top}>
        <div className={styles.top-container}>
        <div className={styles.login-label}>Welcome to DotCollector</div>
          <div className={styles.login-label-2}>Please sign into your account</div>

        </div>
          
        </div>

        {/* <div className="center">
          <form action="" className="login-form">
            <input type="email" placeholder="email" value={email} />

            <input type="password" placeholder="password" value={password} />
          </form>
        </div> */}

        <div className={styles.bottom}>
            {/* <Button onClick={signIn}> Sign in With Google</Button> */}

            <div className={styles.bottom-container}>
            <img onClick={()=>signIn()} className={styles.google-icon} src="https://icones.pro/wp-content/uploads/2021/02/google-icone-symbole-logo-png.png"></img>
            </div>
            {console.log('the session',session)}

        </div>

      </div>
    </div>
  );
};

export default Login;
