import Image from 'next/image'
import React from 'react'


import room from "../public/room.png"
import dot from "../public/dot.png"
import Slider from '../components/Slider'

function Landing() {


    return (



        <div className='h-full w-full'>

            <div className="bg-green-300 w-full h-[80%] px-8 relative">


                <div className="h-64 w-[50%]  bg-red-400 absolute mt-32">
                    <div className='text-4xl text-black font-[700] '>The DotCollector</div>

                    <div className="text-lg">The DotCollector is the best people analytics tool designed for teams to get a clear,transparent measure of their peer's skills and abilities.
                        The DotCollector does this by leveraging a 2-D grid where teams place "dots" on an attribute/skill. The dots place a numerical value from 1-10 on a particular skill of the member.
                        These dots are then processed by algorithims to give the best picture of a candidates/team members skills/attributes.</div>

                </div>

                <div className="absolute h-[70%] w-[40%] ml-[55%] mt-16 pt-5 ">

                    <Image src={room} layout='responsive' objectFit='contain' className='rounded-3xl' />

                </div>



            </div>




            <div className="bg-blue-300 flex w-full h-[80%] ">


                <div className="h-64 w-[50%]  bg-red-400  ml-8 mt-32">
                    <div className='text-4xl text-black font-[700] '>Post live "dots" to measure team member skills and attributes</div>

                    <div className="text-lg">The DotCollector is the best people analytics tool designed for teams to get a clear,transparent measure of their peer's skills and abilities.
                        The DotCollector does this by leveraging a 2-D grid where teams place "dots" on an attribute/skill. The dots place a numerical value from 1-10 on a particular skill of the member.
                        These dots are then processed by algorithims to give the best picture of a candidates/team members skills/attributes.</div>

                </div>




                <div className='h-full w-[50%]  rounded-3xl p-16 pt-24'>
                    <img src="dot.png" className='rounded-3xl'></img>
                </div>


            </div>



            <div className="bg-yellow-400 flex w-full h-[80%] ">


                <div className="h-64 w-[50%]  bg-red-400  ml-8 mt-32">
                    <div className='text-4xl text-black font-[700] '>All dots get averaged and showcased in your dashboard for you and your team members to see.</div>

                    <div className="text-lg">The DotCollector is the best people analytics tool designed for teams to get a clear,transparent measure of their peer's skills and abilities.
                        The DotCollector does this by leveraging a 2-D grid where teams place "dots" on an attribute/skill. The dots place a numerical value from 1-10 on a particular skill of the member.
                        These dots are then processed by algorithims to give the best picture of a candidates/team members skills/attributes.</div>

                </div>




                <div className='h-full w-[50%]  rounded-3xl px-3 pt-48'>
                    <img src="widget.png" className='rounded-3xl'></img>
                </div>


            </div>



            <div className="bg-purple-400 flex w-full h-[80%] ">


                <div className="h-64 w-[50%]  bg-red-400  ml-8 mt-32">
                    <div className='text-4xl text-black font-[700] '>Leverage features that let you visualize your ratings/dots through radar charts. View your total dots collected </div>

                    <div className="text-lg">The DotCollector is the best people analytics tool designed for teams to get a clear,transparent measure of their peer's skills and abilities.
                        The DotCollector does this by leveraging a 2-D grid where teams place "dots" on an attribute/skill. The dots place a numerical value from 1-10 on a particular skill of the member.
                        These dots are then processed by algorithims to give the best picture of a candidates/team members skills/attributes.</div>

                </div>




                <div className='h-full w-[50%] flex rounded-3xl relative  pt-20'>
                    

                    <div className='h-full w-full absolute ml-40'><Slider/></div>
                    

                </div>


            </div>



            <div className="bg-orange-300 flex w-full h-[80%]">

            <div className="h-64 w-[50%]  bg-red-400  ml-8 mt-32">
                    <div className='text-4xl text-black font-[700] '>All analytics about you and your team are showcased in a feature rich,modern, and responsive dashboard </div>

                    <div className="text-lg">The DotCollector is the best people analytics tool designed for teams to get a clear,transparent measure of their peer's skills and abilities.
                        The DotCollector does this by leveraging a 2-D grid where teams place "dots" on an attribute/skill. The dots place a numerical value from 1-10 on a particular skill of the member.
                        These dots are then processed by algorithims to give the best picture of a candidates/team members skills/attributes.</div>

                </div>



                <div className='h-[40%] w-[40%] mt-16 ml-5 '>
                      <img src='dashboard.png' className=' rounded-tr-3xl rounded-tl-3xl'></img>
                     <img src='friends.png' className='rounded-b-3xl'></img>
                </div>
               

            </div>

        </div>



    )
}

export default Landing


