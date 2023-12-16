var mongoose = require("mongoose");
//var dbURI ="mongodb://localhost/mekanbul";
var dbURI="mongodb+srv://kemalkasli:Dou3cKEjwnurldMr@cluster0.ulksed5.mongodb.net/?retryWrites=true&w=majority";
//mongodb+srv://kemalkasli:Dou3cKEjwnurldMr@cluster0.ulksed5.mongodb.net/?retryWrites=true&w=majority

mongoose.connect(dbURI);
// Bağlandığında konsola bağlantı bilgilerini yazdır.
mongoose.connection.on("connected", function(){
console.log(dbURI+"adresindeki veritabanına bağlanıldı.!\n");
});
//Bağlantı hatası olduğunda konsola hata bilgisini yazar
mongoose.connection.on("error", function(){
console.log("Bağlantı Hatası \n");
});
//Bağlantı kesildiğinde konsola kesilme bilgisini yaz
mongoose.connection.on("disconnected",function(){
    console.log("Bağlantı Kesildi.!\n");
});
//uygulama kapandığında kapat.
process.on("SIGINT",function(){
    mongoose.connection.close();
    close.log("Bağlantı Kapatıldı");
    process.exit(0);
});
require("./venue");