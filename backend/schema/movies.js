const mongoose = require ('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const movieSchema = mongoose.Schema(
    {
        name :{
            "type": String,
            "minLength": 2,
            'unique': true
        },
        ReleaseYear:{
            'type': Number,
            'minLength':4
        },
        Rating:{
            'type': Number,
           
        },
        picture:{
            type:String
        }
        
        
    }
)



autoIncrement.initialize(mongoose.connection);
movieSchema.plugin(autoIncrement.plugin, 'Movie');
const Movie = new mongoose.model('Movie', movieSchema);

module.exports = Movie