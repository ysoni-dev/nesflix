import React from 'react'
import {AppBar, Toolbar, Typography} from '@mui/material'
import { NavLink, Link } from 'react-router-dom'
import '../App.css'

const Navi=()=>{
    return(
        <>
        <AppBar position="static" style={{backgroundColor:'black'}}>
        <Toolbar>
        <Typography style={{textDecoration:'none', color:'red',fontFamily:'MyFont'}} variant="h3" component="div" sx={{ flexGrow: 1 }} component={Link}  to="/">
            Nesflix
          </Typography>
          <NavLink to="/add" style={{textDecoration:'none',color:'white',fontFamily:'MyFont',marginRight:'2%'}}>Add Movie</NavLink>
          <NavLink to="/all" style={{textDecoration:'none',color:'white',fontFamily:'MyFont'}}>Show Movie</NavLink>
        </Toolbar>
        </AppBar>
        </>
    )
}

export default Navi;