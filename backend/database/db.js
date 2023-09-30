const mongoose = require('mongoose')

const Connection =async()=>{
const URL = 'mongodb+srv://yogesh:soni@nesflix.pf8fw.mongodb.net/NESFLIX?retryWrites=true&w=majority'
 
// const URL = 'mongodb://abc_123:abcd_123456@nesflix-shard-00-00.pf8fw.mongodb.net:27017,nesflix-shard-00-01.pf8fw.mongodb.net:27017,nesflix-shard-00-02.pf8fw.mongodb.net:27017/NESFLIX?ssl=true&replicaSet=atlas-uksscp-shard-0&authSource=admin&retryWrites=true&w=majority';
// const URL = 'mongodb+srv://abc_123:abcd_123456@nesflix.pf8fw.mongodb.net/NESFLIX?retryWrites=true&w=majority';
try {
    await mongoose.connect(URL, {useNewUrlParser :true, useUnifiedTopology: true,useCreateIndex: true, useFindAndModify: false})
    console.log('database connected')
 } catch (error) {
     console.log(error)
 }
   
}





module.exports = Connection