import React from 'react'
import Mpost from './Mpost'

const One =()=>{

    const img = "https://assets.whatsnewonnetflix.com/external_assets/sggkh+%5B%5Blxx*9*141*8276_8_muochl_mvg%5Bwmn%5Bzkr%5Be3%5BC805vQhtDYWV7zJyzMwnXCTFK*B%5BZZZZYxhRKh7gqUA%5DncKrbnzp8bTCx0AnNnvn7AUC61*wpqePdEMJijISInLlou9Cwr28a4ig0a79pJUxlVQOaTUEJPgRpMd.jpg"
    return(
        <>
        <Mpost 
        name="Venom" 
        rating="4.7"
        year="2019"
        image={img}
        imdb="6.7"
        trailer="https://www.youtube.com/watch?v=xLCn88bfW1o"/>
        </>
    )
}
export default One