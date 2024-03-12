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
            <div className="bg-[url('/qama.png')] bg-cover bg-no-repeat  absolute h-[500%] w-full  ">

                <div className=" bg-roed-500  h-[3%] w-full p-3 rounded-3x flex relative ">

                    {/* header */}
                    {/* 
                    <div className="mt-4 ml-3 "><Text size={20}>features</Text></div>
                    <div className="mt-4 ml-3"><Text size={20}>pricing</Text></div>
                    <div className="mt-4 ml-3"><Text size={20}>demo</Text></div> */}

                    {/* landing page */}
                    <div className="w-[10%] h-[100%] ml-12 ">
                        <Image
                            layout='fixed'
                            width={100}
                            height={100}
                            className="rounded-xl"
                            src="/logo.png"
                        />
                    </div>



                    <div className="hidden md:block ml-[80%] mt-5  absolute ">

                        <Button shadow size="lg" color="secondary" auto onClick={() => { location.href = "/login/Login"; }}>
                            Get Started
                        </Button>

                    </div>

                    <div className="visible md:hidden ml-[60%] mt-5  absolute ">

                        <Button shadow size="sm" color="secondary" auto onClick={() => { location.href = "/login/Login"; }}>
                            Get Started
                        </Button>

                    </div>


                    {/*     
<Button shadow size="lg" color="gradient" auto onClick={()=>{signIn()}}>
          Get Started
        </Button></div> */}




                </div>



                <div className="  bg-ried-300 h-[25%] relative w-full md:h-[20%]  pt-10   flex" >


                    {/* <h1 className=' text-2xl h-[8%] ml-12 bg-red-300  md:text-7xl  text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-[700] tracking-tighter md:ml-[18%] mb-[3%] xl:ml-[20%] 2xl:ml-[25%]  '> People analytics on demand</h1> */}

                    {/* <div className=" text-center   text-lg md:text-xl font-[200] text-gray-700  tracking-tight">The first Continuous Feedback, Continuous Improvement Platform</div> */}



                    <div className="bg-rkd-300   w-[50%] h-full px-14 xl:py-6 2xl:py-14">
                        <Button color="warning" size={'lg'} bordered className='mb-5'>
                            REAL-TIME FEEDBACK
                        </Button>
                        <div className="bg-yelklow-200 w-full h-[50%]  text-left  xl:h-[44%] xl:mb-[5%]  2xl:h-[40%] 2xl: mb-[5%] text-6xl xl:text-7xl  2xl:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-[700] tracking-tighter  ">The most complete AI powered micro-feedback platform</div>
                        <div className="bg-grkeen-200 w-full h-[30%] text-left xl:text-2xl 2xl:text-3xl font-[300] tracking-tighter text-white">Upplif is a platform to collect and share micro-feedback to team members for fostering a continuous growth culture in an agile organization.

                            <Button color="error" size={'lg'} solid auto className='mt-7'>
                                Get Started For Free
                            </Button>
                        </div>

                    </div>

                    <div className="bg-ggreen-300 relative w-[50%] h-full xl:pt-[5.5%] xl:mr-6 2xl:pt-[2%] 2xl:mr-6 ">

                        <div className="bg-[url('/attribute_canvas.svg')] bg-cover rounded-[5%]	bg-no-repeat bg-red-300	bg-no-repeat h-[100%] w-[100%] md:h-[100%]  pt-10 " >
                        </div>

                    </div>




                </div>


                <div className=" hidden md:block bg-gra4y-200  w-full h-[25%]  relative pt-20	   " >


                    <h1 className="text-4xl font-[700]  w-[50%] h-[10%] pt-9  ml-[25%] text-center text-transparent text-black tracking-tight">How Upplif Works</h1>

                    <h1 className="text-4xl font-[500] text-gray-700  w-[50%] h-[2%]  ml-[25%] text-center	 tracking-tight">Get Started in 4 Easy Steps</h1>



                    <div className=" mt-5 flex w-full h-[80%] gap-x-[3%] px-8 py-[4%] pl-[10%] ">

                        <div className=" w-[20%] h-[100%] rounded-3xl 	bg-white 	px-2	  ">


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

                            <div className=" w-full  text-center mt-12 px-2 racking-tight text-xl  text-gray-700 font-[700]">

                                1 . Create custom skill set list

                            </div>



                            <div className=" w-full  text-center mt-2 px-2 racking-tight text-md  text-gray-700 font-[200]">

                                Create your skill set package to use for your sessions/meetings. These skills are what's people are going to be measured on.
                            </div>
                        </div>



                        <div className="w-[20%] h-[100%] rounded-3xl 	bg-white px-2   ">

                            <div className=" w-[full] h-[60%]">

                                <Slider />

                            </div>

                            <div className=" w-full  text-center mt-12 px-2 racking-tight text-xl font-[700] text-gray-700">

                                2 . Create session and invite teammembers

                            </div>
                            <div className=" w-full  text-center mt-2 px-2 racking-tight text-md  text-gray-700 font-[200]">

                                Create your one-time session , choose which skill package you want, and invite your teammates through email.
                            </div>
                        </div>


                        <div className=" w-[20%] h-[100%] rounded-3xl 	bg-white   ">

                            <div className=" w-full h-[60%] pt-3 ">
                                <img className='rounded-3xl w-[90%] h-[80%] ml-4 mt-8   ' src='Step3.png'></img>
                            </div>

                            <div className=" w-full  text-center mt-12 px-2 racking-tight text-xl font-[700] text-gray-700">

                                3 . Collect dots

                            </div>
                            <div className=" w-full  text-center mt-2 px-2 racking-tight text-md  text-gray-700 font-[200]">


                                Once all teammates are joined, select the person to grade, and start measuring their skills by creating dots.
                            </div>
                            <div className=" w-full  text-center mt-2 px-2 racking-tight text-md  text-gray-700 font-[200]">


                            </div>
                        </div>


                        <div className=" w-[20%] h-[100%] rounded-3xl 	bg-white    ">

                            <div className=" w-full h-[60%] pt-32">

                                <Slider_2 />

                            </div>

                            <div className=" w-full  text-center mt-12 px-2 racking-tight text-xl font-[700] text-gray-700">

                                4 . View results

                            </div>
                            <div className=" w-full  text-center mt-2 px-2 racking-tight text-md  text-gray-700 font-[200]">

                                Head over to the dashboard to see your results . View the powerful radar chart to see your strengths and weaknesses.
                            </div>
                        </div>



                    </div>

                </div>



                {/* for mobile */}
                <div className="visible md:hidden bg-gray-200  w-full h-[350%] pt-5  ">



                    <h1 className="text-xl font-[700]  w-[50%] h-[3%] pt-9  ml-[25%] text-center text-transparent bg-clip-text bg-gradient-to-r	 from-indigo-500 via-purple-500 to-pink-500   tracking-tight">How Upplif Works</h1>

                    <h1 className="text-sm font-[200] text-gray-700  w-[50%] h-[2%]  ml-[25%] text-center	 tracking-tight">Get Started in 4 Easy Steps</h1>

                    <div className=" mt-5  w-full h-full gap-x-[3%] px-8 py-[4%] pl-[10%]   ">

                        <div className=' mb-16'>
                            <div className="mx-[9%] w-[80%] h-[10%]    ">


                                <div className=" w-full h-[100%] ml-5  ">
                                    <Image
                                        src="/Step1.png"
                                        alt="Picture of the author"
                                        width={300}
                                        height={300}
                                        className='rounded-xl'

                                    />
                                </div>

                                <div className=" w-full  text-center mt-10 px-2 racking-tight text-xl  text-gray-700 font-[700]">

                                    1 . Create custom skill set list

                                </div>

                                <div className=" w-full  text-center mt-2 px-2 racking-tight text-md  text-gray-700 font-[200]">

                                    Create your skill set package to use for your sessions/meetings. These skills are what's people are going to be measured on.
                                </div>
                            </div>
                        </div>




                        <div className=' mb-6'>
                            <div className="mx-[9%] w-[80%] h-[10%]  ">

                                <div className=" w-full h-[100%] ">

                                    <Slider />

                                </div>

                                <div className=" w-full  text-center mt-12 md:mt-20 px-2 racking-tight text-xl font-[700] text-gray-700">

                                    2 . Create session and invite teammembers

                                </div>
                                <div className=" w-full  text-center mt-2 px-2 racking-tight text-md  text-gray-700 font-[200]">

                                    Create your one-time session , choose which skill package you want, and invite your teammates through email.
                                </div>
                            </div>

                        </div>

                        <div className="mb-6">
                            <div className="mx-[9%] w-[80%] h-[10%] md:w-[20%] md:h-[100%] ">

                                <div className=" w-full h-[60%] pt-3 ">
                                    <img className='rounded-3xl w-[90%] h-[80%] ml-4 mt-8   ' src='Step3.png'></img>
                                </div>

                                <div className=" w-full  text-center mt-12 px-2 racking-tight text-xl font-[700] text-gray-700">

                                    3 . Collect dots

                                </div>
                                <div className=" w-full  text-center mt-2 px-2 racking-tight text-md  text-gray-700 font-[200]">


                                    Once all teammates are joined, select the person to grade, and start measuring their skills by creating dots.
                                </div>
                                <div className=" w-full  text-center mt-2 px-2 racking-tight text-md  text-gray-700 font-[200]">


                                </div>
                            </div>
                        </div>


                        <div className=" mb-6">


                            <div className=" mx-[9%] w-[80%] h-[10%] md:w-[20%] md:h-[100%]  ">

                                <div className=" w-full h-[60%] pt-10 md:pt-32">

                                    <Slider_2 />

                                </div>

                                <div className=" w-full  text-center mt-12 px-2 racking-tight text-xl font-[700] text-gray-700">

                                    4 . View results

                                </div>
                                <div className=" w-full  text-center mt-2 px-2 racking-tight text-md  text-gray-700 font-[200]">

                                    Head over to the dashboard to see your results . View the powerful radar chart to see your strengths and weaknesses.
                                </div>
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

                {/* Master removing bias */}
                <div className="w-full backdrop-blur-md bg-gray-400/25 border-none	 w-[90%] ml-[5%] rounded-3xl border-4
                 h-[5%] text-4xl xl:text-[300%] 2xl:text-[400%]  content-center pt-20 xl:pt-20 2xl:pt-24  font-[500] tracking-tight  flex">


                    <p className="w-auto h-full ml-32 xl:ml-32 2xl:ml-36 text-white"> Instantly&nbsp;</p>
                    <p className="w-auto h-full text-[800] underline decoration-wavy	decoration-black	 text-gray-400">remove bias&nbsp;</p>
                    <div className="w-auto h-full text-white">  from your desision making </div>
                </div>

                {/* Feature Slides v2*/}


                <div className="SECTOR CHAMPS bg-grepen-300 w-full h-[18%] flex   mt-10 px-24 shadow-2xl">

                    {/* bg-[url('/champions.png')] bg-cover */}
                    <div className="bg-yellpow-300 w-[50%] h-full py-14 ">

                        {/* <div  className=" bg-[url('/champions.png')] bg-fill 	bg-no-repeat  w-[20%]  h-[20%] rounded-3xl mt-6"></div> */}
                        <img src='/champions.png' className='w-[95%] 2xl:h-auto xl:w-[95%]  2xl:w-[80%]  xl:ml-[1%] 2xl:ml-[12%] '></img>
                    </div>

                    <div className="bg-blpue-300 w-[50%] h-full py-28 pl-12 2xl:py-42 ">

                        <h1 className="bg-blfue-400 text-left  text-7xl 2xl:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-[700] tracking-tighter ">Easily identify top talent in each attribute</h1>
                        <p className="bg-slafte-400 text-left text-3xl mt-6 2xl:text-3xl 2xl:mt-9   text-gray-300 font-[300] tracking-tight ">Find the sector champions in your organziation and reward greatness. Use these results to pick the right people for a project. Leverage the champions as a benchmark for others employees to strive for. </p>

                    </div>

                </div>


                <div className="MASTER REMOVING BIAS bg-gfreen-300 w-full h-[18%] flex  px-24 shadow-2xl">

                    {/* bg-[url('/champions.png')] bg-cover */}

                    <div className="bg-bflue-300 w-[50%] h-full py-28 xl:pr-7 2xl:py-42 2xl:pr-16 ">

                        <h1 className="bg-blfue-400 text-right  text-7xl 2xl:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-[700] tracking-tighter ">Master removing bias by developing a checklist</h1>
                        <p className="bg-slatfe-400 text-right text-3xl mt-6 2xl:text-3xl 2xl:mt-9   text-gray-300 font-[300] tracking-tight ">Develop checklists or guidelines for idea evaluation. These can include criteria that are based on the goals and objectives of the project rather than personal preferences. </p>

                    </div>

                    <div className="bg-yellpow-300 w-[50%] h-full py-14 ">

                        {/* <div  className=" bg-[url('/champions.png')] bg-fill 	bg-no-repeat  w-[20%]  h-[20%] rounded-3xl mt-6"></div> */}
                        <img src='/elim_bias.png' className='w-[95%] 2xl:h-auto xl:w-[95%]  2xl:w-[80%]  xl:ml-[8%] 2xl:ml-[6%] '></img>
                    </div>


                </div>


                <div className="ASK AI bg-black w-full h-[18%] flex  pr-24 shadow-2xl">

                    {/* bg-[url('/champions.png')] bg-cover */}
                    <div className="bg-yelglow-300 w-[70%] h-full py-14 mt-24 2xl:mt-10 ">

                        {/* <div  className=" bg-[url('/champions.png')] bg-fill 	bg-no-repeat  w-[20%]  h-[20%] rounded-3xl mt-6"></div> */}
                        <img src='/AI.png' className='w-[95%] 2xl:h-[50%] 2xl:w-[100%] xl:w-auto xl:h-auto  xl:ml-[1%] 2xl:msl-[1%] '></img>
                    </div>

                    <div className="bg-bluge-300 w-[50%] h-full py-28 pl-12 2xl:py-42 ">

                        <h1 className="bg-blgue-400 text-left h-[47%] text-7xl 2xl:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-[700] tracking-tighter ">Ask A.I for the best people for a job</h1>
                        <p className="bg-slagte-400 text-left text-3xl mt-9 2xl:text-3xl 2xl:mt-9   text-gray-300 font-[300] tracking-tight ">Ask AI to choose the best people who match the criteria requested for a certain role or project. </p>

                    </div>

                </div>



                <div className="USE PREBUILT  bg-black w-full h-[18%] flex  px-24 shadow-2xl">

                    {/* bg-[url('/champions.png')] bg-cover */}

                    <div className="bg-bflue-300 w-[50%] h-full py-28 xl:pr-7 2xl:py-42 2xl:pr-16 ">

                        <h1 className="bg-blfue-400 text-right  text-7xl 2xl:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-[700] tracking-tighter ">Get started right away by using 75+ prebuilt attributes</h1>
                        <p className="bg-slatfe-400 text-right text-3xl mt-6 2xl:text-3xl 2xl:mt-9   text-gray-300 font-[300] tracking-tight ">There are over 75 pre-built attributes you can choose from that have been well researched by experts that demonstrate their importance in the workplace.</p>

                    </div>

                    <div className="bg-yellpow-300 w-[50%] h-full py-14 ">

                        {/* <div  className=" bg-[url('/champions.png')] bg-fill 	bg-no-repeat  w-[20%]  h-[20%] rounded-3xl mt-6"></div> */}
                        <img src='/champions.png' className='w-[95%] 2xl:h-auto xl:w-[95%]  2xl:w-[80%]  xl:ml-[8%] 2xl:ml-[6%] '></img>
                    </div>


                </div>




                <div className="MEASURE AND VISUALIZE bg-black w-full h-[18%] flex px-24 shadow-2xl">

                    {/* bg-[url('/champions.png')] bg-cover */}
                    <div className="bg-yellpow-300 w-[50%] h-full py-14 ">

                        {/* <div  className=" bg-[url('/champions.png')] bg-fill 	bg-no-repeat  w-[20%]  h-[20%] rounded-3xl mt-6"></div> */}
                        <img src='/champions.png' className='w-[95%] 2xl:h-auto xl:w-[95%]  2xl:w-[80%]  xl:ml-[1%] 2xl:ml-[12%] '></img>
                    </div>

                    <div className="bg-blpue-300 w-[50%] h-full py-28 pl-12 2xl:py-42 ">

                        <h1 className="bg-blfue-400 text-left h-[44%] text-7xl 2xl:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-[700] tracking-tighter ">Measure and visualize your feedback data</h1>
                        <p className="bg-slafte-400 text-left text-3xl mt-6 2xl:text-3xl 2xl:mt-9   text-gray-300 font-[300] tracking-tight ">Powerful charts and widgets make it easy to hold everyone accountable and visualize continous improvement. </p>

                    </div>

                </div>

                {/* The most complete platform */}

                <div className="bg-black h-[5%] w-full py-6 ">
                    <div className="w-full backdrop-blur-md bg-gray-400/25 border-none 	 w-[90%] ml-[5%] rounded-3xl border-4
                 h-[100%] text-2xl xl:text-[220%] 2xl:text-[290%]  content-center pt-12 xl:pt-14 2xl:pt-20  font-[500] tracking-tight  flex">


                        <p className="w-auto h-full ml-[3%] 2xl:ml-[5%] text-white"> The most&nbsp;</p>
                        <p className="w-auto h-full text-[800] underline decoration-wavy	decoration-red-600 text-transparent	bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-[700] tracking-tighter">complete & powerful&nbsp;</p>
                        <div className="w-auto h-full text-white">people analytics platform you will ever use </div>

                    </div>

                </div>





                {/* The most complete platform */}

                <div className="bg-black h-[10%] w-full py-6 ">
                    <div className="w-full backdrop-blur-md bg-gray-400/25 border-none 	 w-[90%] ml-[5%] rounded-3xl border-4
                 h-[100%] xl:text-[220%] 2xl:text-[290%]  content-center   font-[500] tracking-tight  flex">

                        <div className="bg-repd-300 w-[33%] h-full px-8 pt-28 content-center text-center text-white">
                            <h1 className='text-6xl xl:text-6xl 2xl:text-9xl font-[900] mb-2'>10x</h1>
                            <h1 className='bg-groeen-900 h-auto xl:h-[40%] 2xl:h-[30%] text-4xl xl:text-5xl 2xl:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 tracking-tighter'>your productivity</h1>
                        </div>

                        <div className="bg-repd-300 w-[33%] h-full px-8 pt-28 content-center text-center text-white">
                            <h1 className='text-6xl xl:text-6xl 2xl:text-9xl font-[900] mb-2'>10x</h1>
                            <h1 className='bg-groeen-900 h-auto xl:h-[40%] 2xl:h-[40%] text-4xl xl:text-5xl 2xl:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 tracking-tighter'>your research quality</h1>
                        </div>

                        <div className="bg-repd-300 w-[33%] h-full px-8 pt-28 content-center text-center text-white">
                            <h1 className='text-6xl xl:text-6xl 2xl:text-9xl font-[900] mb-2'>10x</h1>
                            <h1 className='bg-groeen-900 h-auto xl:h-[40%] 2xl:h-[30%] text-4xl xl:text-5xl 2xl:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 tracking-tighter'>your people data</h1>
                        </div>

                    </div>

                </div>


                {/* Upplif digital transformation */}
                {/* The most complete platform */}

                <div className="bg-black h-[10%] w-full py-6 ">
                    <div className="w-full backdrop-blur-md bg-gray-400/25 border-none 	 w-[90%] ml-[5%] rounded-3xl border-4
                 h-[100%] xl:text-[220%] 2xl:text-[290%]  content-center   font-[500] tracking-tight xl:px-1 2xl:px-8 px-10 pt-20 ">

                        <div className="bg-repd-300 h-[40%] w-auto px-8 pt-10 content-center text-center text-white flex">
                            <p className='text-6xl xl:text-[130%] 2xl:text-6xl font-[500] mb-2 tracking-tighter'>Upplif will serve as your best tool to lead a&nbsp; </p>
                            <p className='text-6xl xl:text-[130%] 2xl:text-6xl font-[500] mb-5 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>big data revolution&nbsp; </p>
                        </div>

                        <div className=' h-[25%] w-auto px-8 pt-2 content-center text-center flex ml-[10%]'>
                            <p className='text-6xl xl:text-[130%] 2xl:text-6xl font-[500] mb-2 tracking-tighter text-white'>and</p>
                            <p className='text-6xl xl:text-[130%] 2xl:text-6xl font-[500] mb-2 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>&nbsp;digital transformation&nbsp;</p>
                            <p className='text-6xl xl:text-[130%] 2xl:text-6xl font-[500] mb-2 tracking-tighter text-white'>in your organization</p>

                        </div>
                        {/* <div className='flex'>
                            <p className='bg-groeen-900 h-auto w-auto text-4xl xl:text-6xl 2xl:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 tracking-tighter'>transformation</p>
                        </div> */}






                    </div>

                </div>



        

                {/* footer */}

                <div className=" bg-black  hidden md:block flex w-full h-[15%] px-28  pt-20 ">

                    <footer className=" text-white py-10 ml-[55%] mt-[5%]">
                        <div className="container mx-auto flex flex-wrap justify-between">
                            <div className="w-full md:w-1/4 mb-4 md:mb-0  ">
                                <p className="text-gray-200 mt-2 ">People analytics on demand.</p>
                            </div>
                            <div className="w-full md:w-1/4 mb-4 md:mb-0">
                                <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                                <ul className="text-gray-200">
                                    <li><a href="#home" className="hover:text-white">Home</a></li>
                                    <li><a href="#services" className="hover:text-white">Features</a></li>
                                    <li><a href="#portfolio" className="hover:text-white">Pricing</a></li>
                                    <li><a href="#contact" className="hover:text-white">Contact</a></li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/4 mb-4 md:mb-0">
                                <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                                <p className="text-gray-200">Email: <a href="mailto:Upplif@gmail.com" className="hover:text-white">Upplif@gmail.com</a></p>
                                <p className="text-gray-200">Phone: <a href="tel:+1234567890" className="hover:text-white">+1 (234) 567-890</a></p>
                            </div>
                        </div>
                        <div className="border-t border-gray-700 mt-8  text-center">
                            <p className="text-gray-300 ml-[30%]">&copy; 2023 , Upplif. All rights reserved.</p>
                        </div>
                    </footer>



                </div>



                {/* for mobile */}

                <div className="  visible md:hidden flex w-full h-[100%] px-2 bg-gradient-to-t g-gradient-to-t from-purple-600 via-blue-600 to-gray-200 pt-20 ">

                    <footer className="mt-24 text-white py-10 ml-[1%] mt-[5%]">

                        <div className="container mx-auto flex flex-wrap justify-between">
                            <div className="w-full md:w-1/4 mb-4 md:mb-0  ">
                                <p className="text-gray-200 mt-2 ">People analytics on demand.</p>
                            </div>
                            <div className="w-full md:w-1/4 mb-4 md:mb-0">
                                <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                                <ul className="text-gray-200">
                                    <li><a href="#home" className="hover:text-white">Home</a></li>
                                    <li><a href="#services" className="hover:text-white">Features</a></li>
                                    <li><a href="#portfolio" className="hover:text-white">Pricing</a></li>
                                    <li><a href="#contact" className="hover:text-white">Contact</a></li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/4 mb-4 md:mb-0">
                                <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                                <p className="text-gray-200">Email: <a href="Upplif@gmail.com" className="hover:text-white">Upplif@gmail.com</a></p>
                                <p className="text-gray-200">Phone: <a href="tel:+1234567890" className="hover:text-white">+1 (234) 567-890</a></p>
                            </div>
                        </div>







                        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                            <p className="text-gray-300 ">&copy; 2023 , Upplif. All rights reserved.</p>
                        </div>
                    </footer>



                </div>










            </div>






        </>


    )
}

export default Landing

