import React from 'react'
import Mpost from './Mpost'
import img from '../../Images/extrac.jpg'
const Five =()=>{

     return(
        <>
        <Mpost 
        name="Extraction" 
        rating="4.7"
        year="2020"
        image={img}
        imdb="6.7"
        trailer="https://www.youtube.com/watch?v=L6P3nI6VnlY"/>
        </>
    )
}
export default Five