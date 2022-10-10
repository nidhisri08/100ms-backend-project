var axios = require('axios');
const { authObj } = require('../auth/management-token.js');
const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile('/Users/srinidhi/Desktop/100ms-rtmps/client/index.html');
  authObj.makeManagementToken();
});

app.get('/get-rooms', async (req, res) => {

  res.send(await getAllRooms());
});

async function getAllRooms(){
  var axios = require('axios');
  var token = authObj.getManagementToken();
var config = {
  method: 'get',
  url: 'https://api.100ms.live/v2/rooms',
  headers: { 
    'Authorization': `Bearer ${token}`
  }
};

let data =axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  return JSON.stringify(response.data);
})
.catch(function (error) {
  console.log(error);
});

return data;

}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

