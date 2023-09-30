import React from'react'
import img from '../../Images/war.jpg'
import Mpost from './Mpost'
const Eight=()=>{
    return(
        <>
         <Mpost 
        name="Warcraft" 
        rating="4.4"
        year="2016"
        image={img}
        imdb="6.8"
        trailer="https://www.youtube.com/watch?v=2Rxoz13Bthc"/>
        </>
    )
}

export default Eight