const { Router } = require('express');
const express = require('express');
const movie = require('../schema/movies')
const upload = require ('../utils/upload.js')
 const route = express.Router();
const grid = require ('gridfs-stream')
const mongoose = require('mongoose')
const url = '/movies'

let gfs
const conn = mongoose.connection;
conn.once('open', ()=>{
    gfs = grid(conn.db, mongoose.mongo)
    gfs.collection( 'fs')
})


route.get('/',async(req,res)=>{
    try {
        const data = await movie.find()
        console.log(data)
        res.json(data)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

route.post('/add',async(req,res)=>{
    const mydata = req.body
    const data = new movie(mydata);

    try {
        await data.save();
        res.json(data)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

route.post('/file/upload', upload.single('file'), (req, res)=>{
    try {
        if (!req.file)
        return res.status(404).json('file not found')
    
        const imageurl = `${url}/file/${req.file.filename}`
        res.status(202).json(imageurl)
        console.log(imageurl + 'phle wala');
         
    } catch (error) {
        console.log(error)
    }
   
})

route.get('/file/:filename', async(req,res)=>{
    try {
       const myfile =  await gfs.files.findOne({filename: req.params.filename});
       console.log(req.params.filename + 'bad wala')
       const readStream =  gfs.createReadStream(myfile.filename)
       readStream.pipe(res)
    } catch (error) {
        console.log(error)
    }
})

route.get('/:id',async(req,res)=>{
    const id = req.params.id;
    
    try {
        const data = await movie.findById(id)
        res.json(data)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
    
})

route.put('/:id',async(req,res)=>{
    const id = req.params.id
    const data = req.body
    const editdata = new movie(data)
    try {
        await movie.updateOne({_id:id},editdata)
        res.json(editdata)
    } catch (error) {
        res.send(error)
    }
})


route.delete('/:id',async(req,res)=>{
    const id = req.params.id
    const data = req.body
    const deletedata = new movie(data)

 try {
     await movie.deleteOne({_id:id},deletedata)
     res.json(deletedata)
 } catch (error) {
     console.log(error)
     res.send(error)
 }
})


// route.post('/uploads', upload.single('file'),async (req,res)=>{
//     try {
        // const file = new movie({
        //     fileName: req.file.originalname,
        //     filePath: req.file.path,
        //     fileType: req.file.mimetype,
        //     fileSize: filesizeFormatter(req.file.size, 3)
        // })
        // const file = req.file
        // await file.save();
//         console.log(file)
//         res.status(201).send('file upload successfully')
//     } catch (error) {
//         res.send(error)
//     }
// })


// const filesizeFormatter =(bytes, decimal)=>{
//     if(bytes===0){
//         return '0 bytes'
//     }
//     const dm = decimal || 2;
//     const sizes = ['Bytes', 'KB', 'MB', 'GB'] 
//     const index = Math.floor(Math.log(bytes)/ Math.log(1000))
//     return parseFloat ((bytes/ Math.pow(1000, index)).toFixed(dm)) + '-' + sizes[index]
// }
  
module.exports = route