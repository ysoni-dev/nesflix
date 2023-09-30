import React from 'react'
import { Grid, Typography, Box,  Card , CardMedia, IconButton,Stack,Chip,Divider} from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import  '../../App.css'
import { NavLink } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube'

const Mpost=(props)=>{
    const style = {
        width: '100%',
        maxWidth: 360,
        bgcolor: '#181818',
      };
    return(
        <>
        <div className='container' style={{backgroundColor:'#090909', height:'100vh'}}>
         <Box sx={{ flexGrow: 1 }} style={{paddingTop:'5rem', backgroundColor:'#090909'}}>
         
        
      
        <Grid container
         spacing={2}>
         <Grid item md={6} alignItems="center">
             <Card style={{backgroundColor:'#090909', paddingLeft:'1rem'}}>
         <Grid 
        container
        direction="column"
        justifyContent="space-between"
        alignItems="flex-start"
>
    
             <Grid><Typography sx={{
    fontSize: {
      lg: '6rem',
      md: '6rem',
      sm: '5rem',
      xs: '3rem'
    }
  }} style={{color:'white', fontFamily:'MyFont', }}>{props.name}</Typography></Grid>
             <Grid><Typography variant='h4' style={{color:'white'}}>Ratings {props.rating}/5 ✰</Typography></Grid>
             <Grid><Typography variant='h4' style={{color:'white'}}>Release Year {props.year}</Typography></Grid>
             </Grid>
             <Grid style={{paddingTop:'3rem',}}>
             <Typography variant='h4' style={{color:'#F3CE13'}}>IMDb Rating {props.imdb}/10 ✰</Typography>
             <Typography variant='caption' style={{color:'#F3CE13'}}>1h 52m</Typography>
             </Grid>
             </Card>
            

        
         </Grid>
         {/* rigt side */}
         <Grid item md={6}>
         <Card sx ={{bgcolor:'#090909', height:'400', color:'white', }}>
        <Stack direction="row" spacing={1} >
          <Chip style={{color:'white'}} variant="outlined" label="Action" />
          <Chip style={{color:'white'}} variant="outlined" label="Adventure" />
          <Chip style={{color:'white'}} variant="outlined" label="Thriller" />
          <Chip style={{color:'white'}} variant="outlined" label="Hard" />
        </Stack>
           {/* <Card style={{paddingTop:'2rem',backgroundColor:'#090909', color:'white'}}>
               <Typography style={{fontSize:'1.5rem'}}>Director :</Typography>
               <Divider sx={{bgcolor:'white'}} />
               <Typography style={{fontSize:'1.5rem'}}>Writers:</Typography>
               <Divider sx={{bgcolor:'white'}} />
               <Typography style={{fontSize:'1.5rem'}}>Stars:</Typography>
           </Card> */}
        </Card>
             <Card sx ={{bgcolor:'#090909', height:'400'}} style={{paddingTop:'1rem'}}>
             <CardMedia sx={{width:0.8}}
        component="img"
        image={props.image} 
        alt="Live from space album cover"
      /></Card>
            </Grid>
        </Grid>
         {/* tailer */}
         <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            
            <PlayArrowIcon sx={{ height: 58, width: 48, color:'white' }} />
          
          <Typography variant="button" style={{color:'white'}}>Watch Trailer</Typography>
          </Box>
        {/* after grid */}
        <ReactPlayer
    url={props.trailer}
    controls
    playbackRate = {1}
    width = '1/2rem'
    height = "504px"
/>
        <div style={{alignItems:'center', textAlign:'center',paddingTop:'3rem'}}>
        <Typography variant="overline" style={{color:'white', }}>Ⓒ 1990-2022 by nesflix.com, Inc </Typography>
        </div>
        </Box>
        </div>
        </>
    )
}

export default Mpost