import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import env from "dotenv";

const app = express();
const port = 3000;


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
env.config();

const apiKey=process.env.apiKey;


function convertTimestampToPrettyString(unixTimestamp) {
  // Create a new Date object using the Unix timestamp
  const date = new Date(unixTimestamp * 1000);

  // Get the individual components of the date and time
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  const day = date.getUTCDate();
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();

  // Convert the 24-hour format to 12-hour format and determine AM/PM
  const period = hours >= 12 ? 'PM' : 'AM';
  const hours12 = hours % 12 || 12; // Convert 0 to 12 for midnight

  // Add leading zeros to minutes and seconds
  const paddedMinutes = String(minutes).padStart(2, '0');
  const paddedSeconds = String(seconds).padStart(2, '0');

  // Get the full month name
  const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const monthName = monthNames[month];

  // Function to determine the ordinal suffix for the day
  function getOrdinalSuffix(day) {
      if (day >= 11 && day <= 13) {
          return 'th';
      }
      switch (day % 10) {
          case 1:
              return 'st';
          case 2:
              return 'nd';
          case 3:
              return 'rd';
          default:
              return 'th';
      }
  }

  // Get the ordinal suffix for the day
  const ordinalSuffix = getOrdinalSuffix(day);

  // Construct the pretty date and time string
  const prettyString = `${monthName} ${day}${ordinalSuffix}, ${year} at ${hours12}:${paddedMinutes}:${paddedSeconds} ${period} UTC`;

  return prettyString;
}

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", async (req, res) => {
  var location=req.body.location;
  console.log(location);

  try{
    var result = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${apiKey}`);
    console.log(result.data);

    res.render("index.ejs",{
      data : result.data
    })

  }catch(err){
      console.log("Error While fetching location.");
      console.log(err);
  }

});

app.post("/locationWeather",async(req,res)=>{
  var coordinate=req.body.coordinate;
  console.log(coordinate);

  var latAndLon=coordinate.split(",");

  var lat=latAndLon[0];

  var lon=latAndLon[1];
  console.log(lat);
  console.log(lon);

  try{

    var result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${apiKey}`);
    console.log(result.data);
    console.log(result.data.weather);

    var temp=parseFloat(parseFloat(result.data.main.temp) - 273.15).toFixed(1);
    var tempFeel=parseFloat(parseFloat(result.data.main.feels_like) - 273.15).toFixed(1);

    var time = convertTimestampToPrettyString(result.data.dt);
    
    res.render("index.ejs",{
      data : result.data,
      time : time,
      temp : temp,
      tempFeel : tempFeel
    })

  }catch(err){
    console.log("Error while fetching weather data");
    console.log(err);
  }


});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
