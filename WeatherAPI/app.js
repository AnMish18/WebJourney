const express=require("express");
const https=require("https");
const bodyParser= require("body-parser");

//native node module hence its installation is not required
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
res.sendFile(__dirname + "/index.html");
});
app.post("/", function(req,res){
  const query= req.body.cityname;
  const apiKey="6f2bd8257cdc0ac54847ab252015a80d";
  const unit="metric";
  const url="https://api.openweathermap.org/data/2.5/weather?q=" + query + ",India&appid=" + apiKey + "&units=" + unit;
  https.get(url,function(response){
    console.log(response.statusCode);
    response.on("data", function(data){
      console.log(data);
      // const WeatherData= JSON.parse(data);
      // to convert a string object into human readable form
      // const temp= WeatherData.main.temp;
      // res.send("<h1>The temperature in Khordha is " + temp + "celcius</h1>");
      // const desc=WeatherData.weather.description;
      // res.send("<h3> The weather is now " + desc + " meow </h3>");
      // res.write is used to write multiple lines then send them with a single res.send method
      // const object={
      //   name:"Anwesha",
      //   hobby:"singing"
      // }
      // console.log(JSON.stringify(object));
      // does the reverse operation of parse
    })
  });
});

// res.send("Server maumau h")
app.listen(3000,function(){
  console.log("Server at 3000")
});
//in one js file there cannot be two or more res.send operation as this would create an ambiguity for the server
