import { FormControl, FormGroup, FormLabel, Typography, Input, Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import {getData} from '../services/api'
import {editData, uploadFile} from '../services/api'
import { useHistory } from 'react-router';
import { useParams } from 'react-router';

const AddMovie=()=>{


const {id} = useParams()

useEffect(()=>{
    editmovieData();
},[]);


    

        const [data, setData] = useState({
            name:'',
            ReleaseYear:'',
            Rating:'',
            picture:''
        })

        const editmovieData=async()=>{
            const response= await getData(id)
            setData (response.data)
    
    
        }

        const history = useHistory()
        const handleChange=(e)=>{
            const name = e.target.name;
            const value = e.target.value;
            setData ({...data, [name]: value})
            console.log(data)
        }

        const [file, setFile] = useState('');
        const [image, setImage] = useState([])
        
        useEffect(()=>{
            const getImage= async()=>{
                if(file){
                    const fdata = new FormData;
                    fdata.append('name', file.name)
                    fdata.append('file', file)
               const image = await uploadFile(fdata); 
                    data.picture = image.data       
                    setImage (image.data)
                }
            }
            getImage()
        }, [file])


        const handleSubmit=async ()=>{
            await editData(id, data)
            console.log(data)
            history.push('/all')
        }




    return(
        <>
        
        <FormGroup style={{margin:'5% 0 0 25%', width:'50%' }}>
        <Typography variant="h3">Edit movie</Typography><br></br>
            <FormControl>
                <FormLabel>Name</FormLabel>
                <Input type="text" name="name" value={data.name} onChange={handleChange}/>
            </FormControl>
            <FormControl>
            <FormLabel>Release Year</FormLabel>
                <Input type="text" name="ReleaseYear" value={data.ReleaseYear} onChange={handleChange}/>
            </FormControl>
            <FormControl>
            <FormLabel>Ratings</FormLabel>
                <Input type="text" name="Rating" value={data.Rating} onChange={handleChange}/>
            </FormControl><FormControl>
                <FormLabel>Image</FormLabel>
                <Input type="file" name="picture"  onChange={(e)=> setFile(e.target.files[0])}/>
            </FormControl><br></br>
            <Button variant="contained" color="error" onClick={(e)=>handleSubmit(e)}>Edit Movie</Button>
        </FormGroup>
        </>
    )
}

export default AddMovie;