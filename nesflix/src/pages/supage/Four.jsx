import React from 'react'
import Mpost from './Mpost'
import img from '../../Images/abomin.jpg'
const Four =()=>{

   
    return(
        <>
        <Mpost 
        name="Abominable" 
        rating="4.7"
        year="2019"
        image={img}
        imdb="7.0"
        trailer="https://www.youtube.com/watch?v=XrgVtuDRBjM"/>
        </>
    )
}
export default Four