import express from "express";
import bodyParser from "body-parser";
import cors from "cors";


const app = express();
const port = 4000;

// Middleware to parse JSON request bodies
app.use(cors()); 
app.use(bodyParser.json());


// Serve the static HTML file
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

var latitude="";
var longitude="";

// Handle the POST request to /submit-location
app.get('/get-location', (req, res) => {
    res.json({ latitude, longitude });
});

app.post('/submit-location', (req, res) => {
   

    latitude=req.body.latitude;
    longitude=req.body.longitude;

    console.log(`Received location: Latitude = ${latitude}, Longitude = ${longitude}`);

    res.json("Successfully done !!");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
