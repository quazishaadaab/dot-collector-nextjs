import React, { useEffect } from "react";
import styles from "../../styles/login.module.scss";

import * as sha from "sha-1";

import { useDispatch } from "react-redux";
import { login } from "../../services/redux/userSlice.js";
import DataService from "../../services/service";

import { getSession, signIn, signOut, useSession } from "next-auth/react";
import { registerStyles } from "@emotion/utils";
import { useSelector } from "react-redux";

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

const Login = () => {
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
      callbackUrl: `http://localhost:3000/home/${sha(
        `${session?.user?.email}`
      )}`,
    }).then(async (result) => {
      const session = await getSession();
     
      dispatch(
        login({
          userid: sha(`${session?.user?.email}`),
          username: session?.user?.name as String,
          userPhoto: session?.user?.image as String,
          loggedIn: true,
        })
      );


      const authDoc = {
        userid: sha(`${session?.user?.email}`),
        username: session?.user?.name as String,
        userPhoto: session?.user?.image as String,
      };

      DataService.postUsersInUsers(authDoc);
    });
  };

  return (
    <div className={styles.login}>
      <div className={styles.left}>
        <div className={styles.DotCollector_title}> DotCollector</div>
        <img
          id="login-image"
          src="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-1/images/pages/auth-v2-login-illustration-light.png"
        ></img>
        <img
          alt="mask"
          src="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-2/images/pages/auth-v2-mask-light.png"
          className={styles.bottom_diagonal}
        ></img>
        <img
          alt="tree"
          src="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-2/images/pages/tree.png"
          className={styles.bottom_plant}
        ></img>
      </div>

      <div className={styles.right}>
        <div className={styles.top}>
          <div className={styles.top_container}>
            <div className={styles.login_label}>Welcome to DotCollector</div>
            <div className={styles.login_label_2}>
              Please sign into your account
            </div>
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

          <div className={styles.bottom_container}>
            <img
              onClick={register}
              className={styles.google_icon}
              src="https://icones.pro/wp-content/uploads/2021/02/google-icone-symbole-logo-png.png"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
