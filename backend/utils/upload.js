const multer = require ('multer')
const  {GridFsStorage} = require ('multer-gridfs-storage')


const url = 'mongodb://user1:nesflixapp@nesflix-shard-00-00.pf8fw.mongodb.net:27017,nesflix-shard-00-01.pf8fw.mongodb.net:27017,nesflix-shard-00-02.pf8fw.mongodb.net:27017/NESFLIX?ssl=true&replicaSet=atlas-uksscp-shard-0&authSource=admin&retryWrites=true&w=majority'

const storage = new GridFsStorage({
    url ,
    options: {useNewUrlParser :true, useUnifiedTopology: true},
    file:(req, file)=>{
        const match = ['image.png', 'image.jpg'];
        if(match.indexOf(file.mimetype) === -1)
            return `${Date.now()}-movie-${file.originalname}`;

            return{
                bucketName : 'photos',
                filename : `${Date.now()}-movie-${file.originalname}`
            }
        
    }
})

module.exports =  multer({storage})