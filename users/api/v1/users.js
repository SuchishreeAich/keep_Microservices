const fs = require('fs');

let getUsers = (request, response) => {
 
  fs.readFile('api/db.json', (error, data) => {
    
    if (error) {
      throw error;
    }

    let users = JSON.parse(data);

    response.send(users);
  });

};

let getUserById = (request, response) => {

  fs.readFile('api/db.json', (error, data) => {
    
    if (error) {
      throw error;
    }

    let userList = JSON.parse(data);

    let user = userList.users.find((ele) => ele.userId === request.params.userId);

    response.send(user);
  });
};


module.exports = {
  getUsers,
  getUserById
};
