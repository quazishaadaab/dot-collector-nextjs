import styles from "../../styles/chart.module.scss"
import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { useDispatch, useSelector } from "react-redux";

import DataService2 from "../../services/dot-services";
import {payload} from "../../pages/home/[home]"

import {widget_payload} from "../../services/calculateAvgDot"

const Chart = ({title,aspect}) => {



  


const [avgDot,setAvgDot] = React.useState([1,2,3,4,5])



React.useEffect(() => {
 retriveAvgDot(userDoc)
}, [avgDot,payload?.userid])


const userDoc={
  userid:payload?.userid
}


const retriveAvgDot=async (userdoc)=>{
  await DataService2.getAvgDot(userdoc).then(r=>{
    setAvgDot(r.data)

  })
setAvgDot(widget_payload)
}



    
  const data = [
    {
      "subject": "Thinking ",
      "A": avgDot[0],
      // "B": 110,
      "fullMark": 10
    },
    {
      "subject": "Creativity",
      "A": avgDot[1],
      // "B": 130,
      "fullMark": 10
    },
    {
      "subject": "Assertiveness",
      "A": avgDot[2],
      // "B": 130,
      "fullMark": 10
    },
    {
      "subject": "Empathy",
      "A": avgDot[3],
      // "B": 100,
      "fullMark": 10
    }
  ]
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