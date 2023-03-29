const request = require('request');
const breed  = process.argv.slice(2);


request(`https://api.thecatapi.com/v1/breeds/search?q=${breed[0]}`, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  if(error) {
    console.log("you broke the link!");
    return
  }
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  const data = JSON.parse(body);

if (data.length === 0) {
    console.log("We couldn't find the breed");
  } else {
    console.log(data[0].description);
  }
});
