import React from 'react'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import Card from '@mui/material/Card';

import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
const ProfileCard = ({name,img,id}) => {




  return (


    <div >

    
    <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>

        <Card variant='outlined' sx={{ maxWidth: 200, maxHeight:200 }}>

      <CardActionArea>

        <CardMedia 
          component="img"
          height="50"
          image={img}
          alt="profile picture"
        /> 

        <CardContent>

       <div id={id} className="cardName">{name}</div>

        </CardContent>

      </CardActionArea>
      
    </Card>


        

       </Stack>
  
  </div>
  )
}

export default ProfileCard