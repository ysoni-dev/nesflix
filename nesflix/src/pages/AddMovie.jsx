import { FormControl, FormGroup, FormLabel, Typography, Input, Button, Box } from '@mui/material';
import React, { useState , useEffect} from 'react'
import {addData, uploadFile} from '../services/api'
import { useHistory } from 'react-router';

const AddMovie=()=>{

    

        const [data, setData] = useState({
            name:'',
            ReleaseYear:'',
            Rating:'',
            picture:''
        })

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
            await addData(data)
            console.log(data)
            history.push('./all')
        }




    return(
        <>
            {/* <Box>
                <img src = {url} height="300px"></img>
            </Box> */}
        <FormGroup style={{margin:'5% 0 0 25%', width:'50%' }} encType="multipart/form-data">
        <Typography variant="h3">Add movie</Typography><br></br>
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
            </FormControl>
            <FormControl>
                <FormLabel>Image</FormLabel>
                <Input type="file" name="picture"  onChange={(e)=> setFile(e.target.files[0])}/>
            </FormControl><br></br>
            <Button variant="contained" color="error" onClick={(e)=>handleSubmit(e)}>Add Movie</Button>
        </FormGroup>
        </>
    )
}

export default AddMovie;