import { Grid, Typography, Box, Button, Stack , Avatar} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import Facebook from '@mui/icons-material/Facebook'
import { NavLink } from 'react-router-dom'
import React from 'react'
import pic from '../Images/Venom.png'
import pic1 from '../Images/ff.jpg'
import pic2 from '../Images/loveh.jpg'
import pic3 from '../Images/abomin.jpg'
import pic4 from '../Images/extrac.jpg'
import pic5 from '../Images/trans.jpg'
import pic6 from '../Images/army.jpg'
import pic7 from '../Images/war.jpg'
import './Home.css'

const Mdata=()=>{

    
    return(
        <>
        <div className='container' style={{backgroundColor:'#181818', height:'100vh'}}>
            <div style={{paddingLeft:'2rem',paddingTop:'2rem'}}><Typography variant={'h5'} style={{color:'white',}}>
                Hollywood Movies</Typography></div>
         <Box sx={{ flexGrow: 1 }} style={{ backgroundColor:'#181818',paddingTop:'1rem', paddingLeft:'1rem'}}>
        <Grid container
         spacing={2}>
            
         <Grid item md={3}>
             <NavLink to="/one">
         <img src={pic} height="200px" width="300px"  ></img></NavLink>
         <Typography style={{color:'white', paddingLeft:'2rem', fontSize:'0.8rem'}} variant={'overline'}>Venom</Typography>
         </Grid>
         <Grid item md={3}>
         <NavLink to="/two">
             <img src={pic2} height="200px" width="300px"></img></NavLink>
             <Typography style={{color:'white', paddingLeft:'2rem',fontSize:'0.8rem'}} variant={'overline'}>Love Hard</Typography>
         </Grid>
         <Grid item md={3}>
         <NavLink to="/three">
             <img src={pic1} height="200px" width="300px"></img></NavLink>
             <Typography style={{color:'white', paddingLeft:'2rem',fontSize:'0.8rem'}} variant={'overline'}>Hobbs & Shaw</Typography>
         </Grid>
         <Grid item md={3}>
         <NavLink to="/four">
             <img src={pic3} height="200px" width="300px"></img></NavLink>
             <Typography style={{color:'white', paddingLeft:'2rem',fontSize:'0.8rem'}} variant={'overline'}>Abominable</Typography>
         </Grid>
        </Grid>
        </Box>

        {/* 2nd */}
        <div style={{paddingLeft:'2rem',paddingTop:'2rem'}}><Typography variant={'h5'} style={{color:'white',}}>
                Action Movies</Typography></div>
         <Box sx={{ flexGrow: 1 }} style={{ backgroundColor:'#181818',paddingTop:'1rem', paddingLeft:'1rem'}}>
        <Grid container
         spacing={2}>
            
         <Grid item md={3}>
         <NavLink to="/five">
         <img src={pic4} height="200px" width="300px"></img></NavLink>
         <Typography style={{color:'white', paddingLeft:'2rem', fontSize:'0.8rem'}} variant={'overline'}>Extraction</Typography>
         </Grid>
         <Grid item md={3}>
         <NavLink to="/six">
             <img src={pic5} height="200px" width="300px"></img></NavLink>
             <Typography style={{color:'white', paddingLeft:'2rem',fontSize:'0.8rem'}} variant={'overline'}>Transformers:5</Typography>
         </Grid>
         <Grid item md={3}>
         <NavLink to="/seven">
             <img src={pic6} height="200px" width="300px"></img></NavLink>
             <Typography style={{color:'white', paddingLeft:'2rem',fontSize:'0.8rem'}} variant={'overline'}>Army Of The Dead</Typography>
         </Grid>
         <Grid item md={3}>
         <NavLink to="/eight">
             <img src={pic7} height="200px" width="300px"></img></NavLink>
             <Typography style={{color:'white', paddingLeft:'2rem',fontSize:'0.8rem'}} variant={'overline'}>Warcraft</Typography>
         </Grid>
        </Grid>
        <div style={{alignItems:'center', textAlign:'center',paddingTop:'4rem'}}>
        <Typography variant="overline" style={{color:'white', }}>Ⓒ 1990-2022 by nesflix.com, Inc </Typography>
        </div>
        </Box>
        </div>
        </>
    )
}

export default Mdata