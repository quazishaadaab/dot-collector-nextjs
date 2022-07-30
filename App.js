import React from "react";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";

import Home from "./pages/home/Home";
// import Grids from "./Grids.js"
// import ScriptTag from 'react-script-tag';
// import Test from "./Test.js"
// import Sketch fro./Sketch2.js.js';
// import './components/src/sketch.js';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";

import Rooms from "./pages/rooms/Room";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import Search from "./components/search/Search"


import {generatePath} from "react-router"
import { SessionProvider } from "next-auth/react";




// function iframe() {
//   return {
//       __html: '<iframe src="http://127.0.0.1:5500/front/src/components/src/home.html" width="900" height="900"></iframe>'
//   }
// }

{
  /* <div dangerouslySetInnerHTML={iframe()} /> */
}

 function App({ Component,  session, ...pageProps }) {


  const uid = uuid();

  //specify the name of the slice( in this case it is user)
  // const user=useSelector((state)=>state.user)

  const [userData, setUserData] = useState();

  // must be named after the slice name( const {user} has to be the same name as slice name)
  const { user } =  useSelector((state) => state?.user);
  //very important to add the question mark here. if we dont, then a bug will occur since the question mark verifies if the user object exits or not before accessing the userid label

  console.log(user?.userid);
  let userid = user?.userid;

  useEffect(() => {
    setUserData(userid);
  }, []);



    

  return (
    <>
          <SessionProvider session={session}>

      <BrowserRouter>
        {!userid ? (
          <Login />
        ) : (
          <>  
          {/* <Home userid={userid} /> */}
            <Routes>
              <Route path="/">
                <Route index element={<Home userid={userid} />}/>
                <Route path="login" element={<Login />} />
                <Route path=":id" element={<Home userid={userid} />} />

                <Route path="users">
                  <Route index element={<List />} />
                  <Route path=":userId" element={<List />} />
                  <Route path="new" element={<New />} />
                </Route>

                <Route path="products">
                  <Route index element={<List />} />
                  <Route path=":productId" element={<Single />} />
                  <Route path="new" element={<Search />} />
                </Route>

                <Route path="rooms">
                  <Route path=":roomId" element={<Rooms unique_id={uid} />} />
                </Route>
              </Route>
            </Routes>




          </>
        )}
      </BrowserRouter>

      {/* <div dangerouslySetInnerHTML={iframe()} /> */}
      </SessionProvider>

    </>
  );
}

export default App;
{
  /* 
<head>
  <meta charset='utf-8'/>
  <title>HTML Canvas Demo</title>
 
  </head>
 




  <body>
  <canvas className="mycanvas" onClick="mousePressed(event)">
  <Helmet>
 
  <script src="sketch.js" type="text/javascript"/>
    <script src="visualizer.js" type="text/javascript"/>
</Helmet>

</canvas>

  </body>


 */
}
