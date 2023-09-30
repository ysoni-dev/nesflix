import axios from 'axios'

    // const url = 'http://localhost:5000/movies'
    const url = '/movies';




export const getData = async (id)=>{
    id=id || ''
    return await axios.get(`${url}/${id}`)
}

export const addData = async (data)=>
     await axios.post(`${url}/add`, data)

export const editData=(id,data)=>{
    return axios.put(`${url}/${id}`,data)
}

export const deleteData = async(id)=>{
    return await axios.delete(`${url}/${id}`)
}

export const uploadFile = async(data)=>{
    try {
        return await axios.post(`${url}/file/upload`, data)
    } catch (error) {
        console.log('error while uploading image', error)
    }
   
}

// export const getuploadedFIle = async (filename,fdata)=>{
//     try {
//         const data = await axios.get(`${url}/file/${filename}`, fdata)
//         return data
//     } catch (error) {
//         console.log(error)
//     }
// }


