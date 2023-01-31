import React from 'react'
import { Progress, Grid, Avatar } from "@nextui-org/react";
import retriveUserState from '../../utils/userPersist';
import Image from 'next/image';


interface profile {
userid : String,
username: String,
userPhoto: String,
email : String,
loggedIn : String

}
function Profile() {


const [profile,setProfile] = React.useState<profile>() // This is going to hold all our profile data related to user

React.useEffect(()=>{

    setProfile(retriveUserState())


},[profile])





    return (

        <div className=" bg-gray-100 h-full w-full flex px-8 py-10  ">

            <div className="bg-white w-[35%] h-[95%] px-10 py-1  mt-10 ml-8 rounded-3xl"> {/* Profile Epic */}

                <div className="h-[30%] w-[full] px-20 pt-8  "> {/* Name/Avatar Section */}
                        <img className="w-[100%] h-[90%] h-full rounded-3xl border " src={`${profile?.userPhoto}`}/>

                </div>

                <div className=" w-full  mt-3 rounded-2xl text-center pt-[3px] text-3xl tracking-tighter text-gray-500 font-[200] ">{profile?.username}</div>


                <div className=" mt-3 w-full h-[15%] flex px-2 py-2 gap-x-2"> {/* Statistical Section */}

                    

                    <div className=" w-[60%] h-[60%] rounded-2xl mt-6">d</div> {/* Check Icon */}

                    <div className="bg-white w-[25%] h-[100%] mr-5 ">

                        <div className=" p-2 w-full h-full">

                            <div className="w-full h-[40%] text-3xl text-gray-600"> 1.23k</div> {/* Dot Count */}

                            <div className="w-full h-[50%] mt-2  text-gray-300"> Total Dots</div> {/* Caption  */}

                        </div>

                    </div>


                    <div className="w-[60%] h-[60%] rounded-2xl mt-6">d</div> {/* Check Icon */}

                    <div className="bg-white w-[25%] h-[100%] mr-5 ">

                        <div className=" p-2 w-full h-full">

                            <div className="w-full h-[40%] text-3xl text-gray-600"> 1.23k</div> {/* Dot Count */}

                            <div className="w-full h-[50%] mt-2  text-gray-300"> Total Dots</div> {/* Caption  */}

                        </div>

                    </div>


                </div>


                <div className=" mt-8 h-[45%] "> {/* Details Section  */}

                    <div className="w-full h-[5%] text-2xl text-gray-400 mb-8">Details</div>

                    <hr />

                    <div className="text-base mt-4">
                        <div className="w-full h-[5%] text-gray-400 mb-2 font-[200] ">Username : @{profile?.username}</div>

                        <div className="w-full h-[5%] text-gray-400 mb-2 font-[200]"> Email : {profile?.email}</div>

        
                    </div>

  



                </div>


            </div>



            <div className=" h-[100%] w-[85%] max-w-[85%] mt-10 ml-10 mr-8 rounded-3xl ">{/* Badges/gauge Section  */}


            <div className=" h-[5%] w-full text-sm rounded-3xl items-start pt-0 px-0 flex gap-x-3 "> {/* Overview/badge option selector  */}

                <div className="  w-[12%] h-full text-center p-2 pt-2 rounded-xl   text-white tracking-tight bg-purple-500 "> OVERVIEW</div> {/* overview title  */}
                <div className="  w-[12%] h-full text-center p-2 pt-2 rounded-xl   text-gray-400 tracking-tight  "> BADGES</div> {/* overview title  */}

            </div>



            <div className=" bg-white h-[75%] w-full mt-6 rounded-3xl pt-5 px-6">{/* Gauge/badge visual Section  */}
                
                <div className="w-full h-[10%]  text-xl tracking-tighter text-gray-400 mb-5 "> Statistical Gauges </div>


{/* max 9 badges */}
                    <div className=" w-full h-[15%] flex gap-x-2 overflow-x-hidden mb-3"> {/* Badge Container */}

                    <div className=" w-[10%] h-[80%] rounded-2xl mt-3">d</div> {/* Check Icon */}
                    <div className=" w-[10%] h-[80%] rounded-2xl mt-3">d</div> {/* Check Icon */}
                    <div className=" w-[10%] h-[80%] rounded-2xl mt-3">d</div> {/* Check Icon */}
                    <div className=" w-[10%] h-[80%] rounded-2xl mt-3">d</div> {/* Check Icon */}
                    <div className=" w-[10%] h-[80%] rounded-2xl mt-3">d</div> {/* Check Icon */}
                    <div className=" w-[10%] h-[80%] rounded-2xl mt-3">d</div> {/* Check Icon */}
                    <div className=" w-[10%] h-[80%] rounded-2xl mt-3">d</div> {/* Check Icon */}
                    <div className=" w-[10%] h-[80%] rounded-2xl mt-3">d</div> {/* Check Icon */}
                    <div className=" w-[10%] h-[80%] rounded-2xl mt-3">d</div> {/* Check Icon */}

                    </div>


                    <Grid>
              
                <div className="mb-3 w-[60%]  flex items-center ">
                    <div className="w-[30%] h-5 text-black text-center text-lg text-gray-400 tracking-wider"> Skills</div>
                    <Progress size="lg" value={50}  shadow color="primary" status="primary" />
                </div>

                <div className="mb-3 w-[60%]  flex items-center">
                    <div className="w-[30%] h-5 text-black  text-center text-lg  text-gray-400 tracking-wider"> Skills</div>
                    <Progress  size="lg" value={50}  shadow color="secondary" status="primary" />
                </div>

                <div className="mb-3 w-[60%]  flex items-center">
                    <div className="w-[30%] h-5 text-black  text-center  text-lg text-gray-400 tracking-wider"> Skills</div>
                    <Progress  size="lg" value={50}  shadow color="warning" status="primary" />
                </div>

                <div className="mb-3 w-[60%]  flex items-center">
                    <div className="w-[30%] h-5 text-black  text-center  text-lg text-gray-400 tracking-wider"> Skills</div>
                    <Progress size="lg"  value={50}  shadow color="error" status="primary" />
                </div>

                <div className="mb-3 w-[60%]  flex items-center">
                    <div className="w-[30%] h-5 text-black  text-center text-lg text-gray-400 tracking-wider"> Skills</div>
                    <Progress size="lg"  value={50}  shadow color="success" status="primary" />
                </div>

                <div className="mb-3 w-[60%]  flex items-center">
                    <div className="w-[30%] h-5 text-black  text-center text-lg  text-gray-400 tracking-wider"> Skills</div>
                    <Progress  size="lg" value={50}  shadow color="warning" status="primary" />
                </div>
               

                    </Grid>
                
            </div>

     

            </div>



        </div>



    )
}

export default Profile