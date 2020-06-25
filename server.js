/*Server.js is the web server created using express which handles every get and post request 
in our "Myproject" web application*/

//Middleware
const exp = require('express') //instantiating an object from express
var bodyParser = require('body-parser');
const app = exp()

const port = 4004 //my server will run on port 3000

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// in latest body-parser use like below.
app.use(bodyParser.urlencoded({ extended: true }));

//Calling the get method of Http protocol
app.get('/', (request, response) => {
 
    response.sendfile("index.html")
    /*var t = 25;
    var y = 67;
    var sum = t + y;
    response.send("Sum "+ sum);*/
});

app.get('/aboutus.gik', (request, response) => response.sendfile("aboutus.html"))

app.get('/login.process', (request, response) => response.sendfile("login.html"))

app.get('/contactus.pg', (req, res) => res.sendfile("contactus.html"))

app.get("/formdata", (request, response) => {
  let formdata = request.body;
  //Logic to save data to the database!
   console.log(request);
   //if data saves correctly 
   response.send("Form submitted successfully!" + JSON.stringify(formdata));

});

app.post("/profilepage", (request, response) => {
  let formdata = request.body;
  console.log(formdata);
  if(formdata.Username == "Tamara" && formdata.Password == "tamara" )
  {
    response.send("Login was successful!");
  }
  else
  {
    response.send(`
    <center>
    <p>Invalid Login!</p>
    <br>
    <a href="/login.process">Go back to Login</a>
    </center>`);
  }

});

//This line is creating your webserver!
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))