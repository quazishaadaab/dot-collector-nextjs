import styles from "../../styles/chart.module.scss"
import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

import DataService2 from "../../services/dot-services";

import DataService from "../../services/service";
import {payload} from "../../pages/home/[home]"


const Chart = ({title,aspect,selectedAttribute}) => {



  
  const [ratings, setRatings] = React.useState([])
  const [avgDot, setAvgDot] = React.useState([])
  const [names,setNames] = React.useState([])
  const [data,setData]=React.useState([])


React.useEffect(() => {

  //no need to update ratings, the update has been called by widget
  // retriveRatings({ userid: payload?.userid })
  // // setAvgDot(widget_payload)
  //  getName()

   execute({ userid: payload?.userid })

  }, [payload?.userid,selectedAttribute])


const execute=async(userdoc)=>{
  let namelist=[]
  let avgDotList=[]

  const attributeNames= await DataService.getAttributeByAttributeId({"attributeid":selectedAttribute})
  setNames(attributeNames.data.attributes) 

  namelist=attributeNames.data.attributes

  await DataService2.getRatings(userdoc).then(result => {
    setRatings(result?.data)
    const rat =  result?.data
    //we need a search engine to match the selectedAttribute with the attributes in ratings
    //something like elastic search. we are now using a brute force method which is only ok for a small sample size
    //if/once selectedAttribute is chosen/appears, then run the search.
    selectedAttribute && (
    rat?.map(res=>{
      if(selectedAttribute && res?.attribute_id==selectedAttribute){
        // setAvgDot(res?.attribute_id)
        avgDotList=res?.dot
        setAvgDot(res?.dot)
      }
    })
    )
     //data is an array of each attribute_id
})

let temp_data=[]

if(selectedAttribute){
for (let i=0;i<namelist.length;i++){
  const doc = {
    "subject": namelist[i],
    "A":avgDotList[i]
  }
  temp_data.push(doc)
}

setData(temp_data)
}
  
}

    
  // const data = [
  //   {
  //     "subject": "Thinking ",
  //     "A": avgDot[0],
  //     // "B": 110,
  //     "fullMark": 10
  //   },
  //   {
  //     "subject": "Creativity",
  //     "A": avgDot[1],
  //     // "B": 130,
  //     "fullMark": 10
  //   },
  //   {
  //     "subject": "Assertiveness",
  //     "A": avgDot[2],
  //     // "B": 130,
  //     "fullMark": 10
  //   },
  //   {
  //     "subject": "Empathy",
  //     "A": avgDot[3],
  //     // "B": 100,
  //     "fullMark": 10
  //   }
  // ]
  return (
    <div className={styles.chart}>

<div className={styles.title}> {title}</div>
<ResponsiveContainer width="100%" aspect={aspect}>
<RadarChart outerRadius={90} width={730} height={250} data={data}>
  <PolarGrid />
  <PolarAngleAxis dataKey="subject" />
  <PolarRadiusAxis angle={30} domain={[0, 10]} />
  <Radar name={payload?.username} dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
  {/* <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} /> */}
  <Legend />
</RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart