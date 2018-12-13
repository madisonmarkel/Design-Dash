//https://medium.freecodecamp.org/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//=================================================================================================================

app.get('/pixabay', (req, response) => {
  //res.send({ express: 'Hello From Express' });
  $( "#pixabay_submit" ).click(function() {
    event.preventDefault();
    var userInput = $("#pixabay_user_input").val().trim();

    var queryURL = 'https://pixabay.com/api/?key="' + process.env.PIXABAY_API_KEY + "&q=" + userInput + '"&image_type=photo"';
    $.ajax({
        method: "GET",
        url: queryURL,
        data: {

        }
    }).then(function(response) {
        console.log(response);
        var results = response.data;

        for (var i=0; i < results.length; i++) {
        }
    });
  });
});

app.get('/api/pixabay', (req, res) => {
    
})
// //COLORMIND.IO: http://colormind.io/api-access/
// var url = "http://colormind.io/api/";
// var data = {
//   model: "default",
//   input: [
//     [44, 43, 44],
//     [90, 83, 82], "N", "N", "N"
//   ]
// }

// var http = new XMLHttpRequest();

// http.onreadystatechange = function () {
//   if (http.readyState == 4 && http.status == 200) {
//     var palette = JSON.parse(http.responseText).result;
//   }
// }

http.open("POST", url, true);
http.send(JSON.stringify(data));

app.post('/brand', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));