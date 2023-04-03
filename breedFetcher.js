const request = require('request');
// request(`https://api.thecatapi.com/v1/breeds/search?q=${breed[0]}`, (error, response, body) => {
//   console.log('error:', error); // Print the error if one occurred
//   if (error) {
//     console.log("you broke the link!");
//     return;
//   }
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   // console.log('body:', body); // Print the HTML for the Google homepage.
//   const data = JSON.parse(body);

//   if (data.length === 0) {
//     console.log("We couldn't find the breed");
//   } else {
//     console.log(data[0].description);
//   }
// });

const fetchBreedDescription = function(breedName, callback) {
   request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, _, body) => {//read on convention )
    // console.log('error:', error); // Print the error if one occurred
    if (err) {
      callback(err, null)
      return;
    }
    const data = JSON.parse(body);
  
    if (data.length === 0) {
      callback("We couldn't find the breed", null);
    } else {
      callback(null, (data[0].description));
    }
  })
};

module.exports = {fetchBreedDescription};
//look at entry point index.js
//