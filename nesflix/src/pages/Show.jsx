import { TableBody, TableHead, TableRow, Table, TableCell, TableContainer, Paper, Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import {getData} from '../services/api'
import { useParams} from 'react-router'
import {deleteData, getuploadedFIle} from '../services/api'
import { Link } from 'react-router-dom'
import { Grid, Typography, Box,  Stack , Divider,Card} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update'

const Show=()=>{
   


    useEffect(()=>{
            getmovieData()
            // getSingleFileList()
            
    }, [])

    const [movie,setMovie] = useState([])  


// const [singleFiles, setSingleFiles] = useState([])


// const getSingleFileList= async()=>{
//     try {
//         const filelist = await getuploadedFIle();
//         setSingleFiles(filelist)
//     } catch (error) {
//         console.log(error)
//     }
// }


const {id} = useParams()

    const getmovieData= async ()=>{
        const response = await getData()
        console.log(response.data)
        setMovie (response.data)
        
    }
    console.log(movie + 'dkehle')
    // const deletemovieData=async(id)=>{
    //     await deleteData(id);
    //     getmovieData();
    // }


    return(
        <>
        {/* <h3 style={{textAlign:'center'}}>List All Movies</h3>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }}>
            <TableHead>
                <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Movie</TableCell>
                <TableCell>Release Year</TableCell>
                <TableCell>Ratings</TableCell>
                <TableCell>Image</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {movie.map((ml)=>(
                    <TableRow>
                        
                        <TableCell>{ml._id}</TableCell>
                        <TableCell>{ml.name}</TableCell>
                        <TableCell>{ml.ReleaseYear}</TableCell>
                        <TableCell>{ml.Rating}</TableCell>
                        <TableCell>
                            <img src={ml.picture} height="200px" width="200px" alt="img"></img>
                       </TableCell>
                        <TableCell component={Link} to={`/edit/${ml._id}`}>Edit</TableCell>
                        
                        <TableCell><Button onClick={()=>deletemovieData(ml._id)}>Delete</Button></TableCell>
                        </TableRow>
                       
                ))}
            </TableBody>
        </Table>
       
        </TableContainer> */}
        <div className='container' style={{backgroundColor:'black', height:'100vh'}}>
         <Box sx={{ flexGrow: 1 }} style={{paddingTop:'5rem', backgroundColor:'black'}}>
         {movie.map((ml)=>(
        
            <>
            <div> <img src={ml.picture} height="300px" width="300px" alt="img"></img>
                </div>
            </>
            
          ))}
        </Box>
        </div>


       
        </>
    )
}

export default Show;