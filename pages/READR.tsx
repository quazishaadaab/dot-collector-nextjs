import Image from 'next/image'
import React from 'react'


import room from "../public/room.png"
import dot from "../public/dot.png"
import Slider from '../components/Slider'
import Slider_2 from '../components/Slider_2'

import { Button, Grid } from "@nextui-org/react";
import { Text } from "@nextui-org/react";
//import Login from './login/Login'
import { getSession, signIn, signOut, useSession } from "next-auth/react";

import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { FRONT_END } from '../utils/deployments'

import ReactAudioPlayer from 'react-audio-player';


function Landing() {

    // const { data: session, status } = useSession()
    const supabase = createClient('https://ncejgpigjoseupkyrswi.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jZWpncGlnam9zZXVwa3lyc3dpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI3OTMzNzgsImV4cCI6MTk5ODM2OTM3OH0.EzCN2SJQxHhL6JwwoiHoCWoTqHsT_NvRA7WfK60sJyM')
    const [session, setSession] = React.useState('')
    const signIn = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google'

        })

    }

    const iframe = () => {

        return {
            __html: `<iframe src="${FRONT_END}/rooms/a2883fc6-aaad-4de8-acf4-ebfde60c1420" width="100%"  ; overflow-y="hidden"   ;  height="100%"; border="0"; frameborder="0"; position="absolute"  ></iframe>`
        }
    }
    return (


        //     <div className=" h-[70%] w-[40%] ml-[55%] mt-16 pt-5 ">


        // </div>

        <>
            <div className='h-full w-full '>
                <div className=" bg-gradient-to-b from-purple-400 to-gray-100  h-[15%] w-full p-3 rounded-3x flex relative ">

                    {/* header */}

                    <div className="mt-4 ml-3 "><Text size={20}>features</Text></div>
                    <div className="mt-4 ml-3"><Text size={20}>pricing</Text></div>
                    <div className="mt-4 ml-3"><Text size={20}>demo</Text></div>

                    {/* landing page */}

                    <div className="ml-[80%] mt-5  absolute ">


                        <Button shadow size="lg" color="gradient" auto onClick={() => { location.href = "/login/Login"; }}>
                            Get Started
                        </Button></div>


                    {/*     
<Button shadow size="lg" color="gradient" auto onClick={()=>{signIn()}}>
          Get Started
        </Button></div> */}




                </div>

                <div className="bg-gray-100 w-full h-[150%] pt-10 pb-8 ">



                    <h1 className='text-7xl  text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-[700] tracking-tighter  mb-[3%] 2xl:ml-[45%]'> READr</h1>

                    <div className="text-xl font-[200] text-gray-700  2xl:ml-[30%] tracking-tight">READr is the first audiobook platform that provides multi-voice actors for each character in a novel</div>

{/* Reactivate when iframe is ready and doesnt need authentication */}
                    {/* <div id='dangerousHtml' className='  w-[70%] h-[61.8%] ml-[15%] overflow-hidden	' dangerouslySetInnerHTML={iframe()} /> */}
                    <div id='dangerousHtml' className='  w-[70%] h-[61.8%] 2xl:ml-[42%] 2xl:mt-10 overflow-hidden	'>
                    <ReactAudioPlayer
  src="my_audio_file.ogg"
  autoPlay
  controls
/>

                    </div>
               
                    {/* <h1 className='text-7xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-[700] mb-8 tracking-tighter  '> READr</h1> */}

                    {/* <div className="text-lg text-left font-[200]">The DotCollector is the best people analytics tool designed for teams to get a clear,transparent measure of their peer's skills and abilities.
                        The DotCollector does this by leveraging a 2-D grid where teams place "dots" on an attribute/skill. The dots place a numerical value from 1-10 on a particular skill of the member.
                        These dots are then processed by algorithims to give the best picture of a candidates/team members skills/attributes.</div>

                </div> */}

                    {/* <div className="text-2xl  text-left font-[200]">A people analytics tool that measures peer skills, makes capabilities transparent, and ranks strengths/weaknessses.</div> */}




                    {/* <div className='h-[80%] w-[70%]  mt-30 ml-8 mr-8 '>
               
                </div> */}


                </div>




                <div className=" bg-gray-200  w-full h-full pt-5  ">



                    <h1 className="text-4xl font-[700] text-gray-700  w-[50%] h-[10%] pt-9  ml-[25%] text-center	 tracking-tight">How READr Works</h1>

                    <h1 className="text-lg font-[200] text-gray-700  w-[50%] h-[2%]  ml-[25%] text-center	 tracking-tight">Get Started in 4 Easy Steps</h1>

                    <div className=" mt-5 flex w-full h-[80%] gap-x-[12%] px-2 py-[4%] pl-[10%] ">

                        <div className=" w-[20%] h-[100%]  ">


                            <div className=" w-full h-[60%]  ">
                                <Image
                                    src="/Step1.png"
                                    alt="Picture of the author"
                                    width={100}
                                    height={110}
                                    className='rounded-3xl'
                                    layout='responsive'
                                    objectFit='fill'

                                />
                            </div>

                            <div className=" w-full  text-center mt-16 px-2 racking-tight text-xl  text-gray-700 font-[700]">

                                1 . Visit library

                            </div>



                            <div className=" w-full  text-center mt-2 px-2 racking-tight text-md  text-gray-700 font-[200]">

                                Visit the READr library and choose which novel you want to listen to.
                            </div>
                        </div>
                        <div className="w-[20%] h-[100%] ">

                            <div className=" w-full h-[60%]">

                                <Slider />

                            </div>

                            <div className=" w-full  text-center mt-16 px-2 racking-tight text-xl font-[700] text-gray-700">

                                2 . Easily swap in preferred voices

                            </div>
                            <div className=" w-full  text-center mt-2 px-2 racking-tight text-md  text-gray-700 font-[200]">

                                Next, select which voice actors you want to narrate certain characters or just accept the default.
                            </div>
                        </div>


                        <div className=" w-[20%] h-[100%] ">

                            <div className=" w-full h-[60%] pt-3 ">
                                <img className='rounded-3xl w-[90%] h-[80%] ml-4 mt-8   ' src='Step3.png'></img>
                            </div>

                            <div className=" w-full  text-center mt-16 px-2 racking-tight text-xl font-[700] text-gray-700">

                                3 . Download audiofile

                            </div>
                            <div className=" w-full  text-center mt-2 px-2 racking-tight text-md  text-gray-700 font-[200]">


                                Once your are satisfied with your audio, simply click download and receive a high quality mp3 file.

                            </div>
                            <div className=" w-full  text-center mt-2 px-2 racking-tight text-md  text-gray-700 font-[200]">


                            </div>
                        </div>



                    </div>
                    {/* <div className="h-64 w-[50%]    ml-8 mt-32 ">
                    <div className='text-5xl text-black font-[700] mb-8 tracking-tighter'>Post live "dots" to measure team member skills and attributes</div>

                    <div className="text-xl font-[200] text-gray-700   tracking-tight">The DotCollector is the best people analytics tool designed for teams to get a clear,transparent measure of their peer's skills and abilities.
                        The DotCollector does this by leveraging a 2-D grid where teams place "dots" on an attribute/skill. The dots place a numerical value from 1-10 on a particular skill of the member.
                        These dots are then processed by algorithims to give the best picture of a candidates/team members skills/attributes.</div>

                </div>




                <div className='h-full w-[50%]  rounded-3xl p-16 pt-24'>
                    <img src="dot.png" className='rounded-3xl'></img>
                </div> */}


                </div>



                <div className=" w-full h-full  bg-gray-100 relative pt-4 ">



                    <h1 className="text-4xl font-[700] text-gray-700  w-[50%] h-[10%] pt-9  ml-[25%] text-center	 tracking-tight  mt-8 mb-5">Dots Top Features</h1>

                    <div className="bg-blue-300 flex w-full h-full relative ">

                        <div className="bg-yellow-300 w-[50%] h-[100%]  ">

                            <div className="bg-red-300 h-[50%] w-full pt-3">
                                <div className="bg-orange-100 w-[40%] h-[40%] ml-[30%] mb-3 pt-3">Picture</div>
                                <div className="bg-red-300 text-center text-bold font-[700] text-xl mb-3">Detach From Yourself</div>

                                <div className="bg-green-300 text-center text-lg font-[200]">Dots forces you to emphasize the impermanent nature of all skills and work.
                                    Dots makes holding onto things impermanent by giving you an objective view of yourself and naturally kills your ego .
                                    The feeling of detachment Dots culativates involves not identifying one's sense of self-worth, happiness, or identity with external conditions, like a bad grade/dot.</div>

                            </div>

                            <div className="bg-purple-200 h-[50%] w-full pt-3">
                                <div className="bg-orange-100 w-[40%] h-[40%] ml-[30%] mb-3 pt-3">Picture</div>
                                <div className="bg-red-300 text-center text-bold font-[700] text-xl mb-3">Know Yourself</div>

                                <div className="bg-green-300 text-center text-lg font-[200]">With all the quantitive feedback recieved from teammates, Dots provides a platform that you can use to analyze and diagnose your weaknesses so you know exactly where you need to improve.  </div>

                            </div>
                        </div>


                        <div className="bg-yellow-300 w-[50%] h-[100%]  ">

                            <div className="bg-red-300 h-[50%] w-full pt-3">
                                <div className="bg-orange-100 w-[40%] h-[40%] ml-[30%] mb-3 pt-3">Picture</div>
                                <div className="bg-red-300 text-center text-bold font-[700] text-xl mb-3">Proactively Observe</div>

                                <div className="bg-green-300 text-center text-lg font-[200]">Since the Dots platform facilitates an agile continous process of feedback and improvement (CF/CI), the way you operate becomes a beautiful proactive process instead of a painful reactive one.   </div>

                            </div>

                            <div className="bg-purple-200 h-[50%] w-full pt-3">
                                <div className="bg-orange-100 w-[40%] h-[40%] ml-[30%] mb-3 pt-3">Picture</div>
                                <div className="bg-red-300 text-center text-bold font-[700] text-xl mb-3">Radical Transparency and Accountability</div>

                                <div className="bg-green-300 text-center text-lg font-[200]">Dots gives you a platform to be radically transparent with one another. If you have something to say about a person , express it with a dot ! This forces a team to hold each other accountable . </div>

                            </div>
                        </div>



                    </div>





                </div>


                <div className=" flex w-full h-[50%] px-28 bg-gradient-to-t g-gradient-to-t from-purple-600 via-blue-600 to-gray-200 pt-20 ">

                    <footer className=" text-white py-10 ml-[55%] mt-[5%]">
                        <div className="container mx-auto flex flex-wrap justify-between">
                            <div className="w-full md:w-1/4 mb-4 md:mb-0">
                                <p className="text-gray-200 mt-2">READr.</p>
                            </div>
                            <div className="w-full md:w-1/4 mb-4 md:mb-0">
                                <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                                <ul className="text-gray-200">
                                    <li><a href="#home" className="hover:text-white">Home</a></li>
                                    <li><a href="#services" className="hover:text-white">Services</a></li>
                                    <li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
                                    <li><a href="#contact" className="hover:text-white">Contact</a></li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/4 mb-4 md:mb-0">
                                <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                                <p className="text-gray-200">Email: <a href="mailto:info@example.com" className="hover:text-white">info@example.com</a></p>
                                <p className="text-gray-200">Phone: <a href="tel:+1234567890" className="hover:text-white">+1 (234) 567-890</a></p>
                            </div>
                        </div>
                        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                            <p className="text-gray-300 ml-[30%]">&copy; 2023 , Dots. All rights reserved.</p>
                        </div>
                    </footer>



                </div>











            </div>






        </>


    )
}

export default Landing


