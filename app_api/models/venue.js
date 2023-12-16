var mongoose = require("mongoose");

var hour = new mongoose.Schema(
{
days:{type:String,required:true},
open:String,
close:String,
kapali:{type:Boolean,required:false}
});

var comment = new mongoose.Schema(
    {
        author:{type:String,required:true},
        rating:{type:Number,required:true,min:0,max:5},
        text:{type:String,required:true},
        date:{type:Date,default:Date.now}
    }
);

var venue = new mongoose.Schema({
    name:{type:String,required:true},
    address:String,
    rating:{type:Number,min:0,max:5,default:0},
    coordinates: {type: [Number], index: '2dsphere'},
    foodanddrink:[String],
    hours:[hour],
    comments:[comment]
 });
 mongoose.model("venue",venue,"venues");


 /*

 
const database= 'mekanbul';
use(database);
db.venues.insertOne(
{
"name":"Starbucks",
"address":"Centrum Garden",
"rating":4,
"foodanddrink":[
    "çay","kahve","pasta"
],
"coordinates":[38.88888,30.55555],
"hours":[
    {
        "days":"Pazartesi-Cuma",
        "open":"9:00",
        "close":"23:00",
        "kapali":false
    },
    {
        "days":"Cumartesi-Pazar",
        "open":"11:00",
        "close":"18:00",
        "kapali":false
    }
]

}
);


const database= 'mekanbul';
use(database);
db.venues.updateOne(
{"name":"Starbucks"},
{$push:{"comments":
{
    "id":ObjectId(),
    "author":"Sinan",
    "rating":5,
    "text":"Kahveler Harika",
    "date":new Date()  
}
}
}
)


https://cloud.mongodb.com
kemalkasli@yahoo.com

username
kemalkasli
password
Dou3cKEjwnurldMr

mongodb+srv://kemalkasli:<password>@cluster0.ulksed5.mongodb.net/?retryWrites=true&w=majority

mongodb+srv://kemalkasli:Dou3cKEjwnurldMr@cluster0.ulksed5.mongodb.net/?retryWrites=true&w=majority
mongodb+srv://kemalkasli:Dou3cKEjwnurldMr@cluster0.ulksed5.mongodb.net/?retryWrites=true&w=majority

Replace <password> with the password for the kemalkasli user. 



const database = 'mekanbul';
const collection = 'mekanlar';
use(database);
db.createCollection(collection);



*/