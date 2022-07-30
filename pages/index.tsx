import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'




import React from "react";
import { useEffect, useState } from "react";

import Home from "./home/Home";
// import Grids from "./Grids.js"
// import ScriptTag from 'react-script-tag';
// import Test from "./Test.js"
// import Sketch fro./Sketch2.js.js';
// import './components/src/sketch.js';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login/Login";
import List from "./list/List";

import Rooms from "./rooms/Room";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
// import Search from "../components/search/Search"


import { SessionProvider } from "next-auth/react";

const App: NextPage = () => {


  const uid = uuid();

  //specify the name of the slice( in this case it is user)
  // const user=useSelector((state)=>state.user)

  const [userData, setUserData] = useState();

  // must be named after the slice name( const {user} has to be the same name as slice name)
  // const { user } =  useSelector((state) => state?.user);
  //very important to add the question mark here. if we dont, then a bug will occur since the question mark verifies if the user object exits or not before accessing the userid label

  // console.log(user?.userid);
  // let userid = user?.userid;

  useEffect(() => {
    // setUserData(userid);
  }, []);
  return (
    <>

      <BrowserRouter>
        {/* {!userid ? (
          <Login /> */}
        {/* // ) : ( */}
          <>  
          <div>hello</div>
          {/* <Home userid={userid} /> */}
            {/* <Routes> */}
              {/* <Route path="/">
                <Route index element={<Home userid={userid} />}/>
                <Route path="login" element={<Login />} />
                <Route path=":id" element={<Home userid={userid} />} /> */}

                {/* <Route path="users">
                  <Route index element={<List />} />
                  <Route path=":userId" element={<List />} />
                </Route> */}

                {/* <Route path="products">
                  <Route index element={<List />} /> */}
                  {/* <Route path="new" element={<Search />} /> */}
                {/* </Route> */}

                {/* <Route path="rooms">
                  <Route path=":roomId" element={<Rooms unique_id={uid} />} />
                </Route>
              </Route>
            </Routes> */}




          </>
        {/* )} */}
      </BrowserRouter>

      {/* <div dangerouslySetInnerHTML={iframe()} /> */}

    </>
  );
}

export default App
  


