const fs = require('fs');

function getNotesForUserId(request, response) {
  
  fs.readFile('api/db.json', (error, data) => {
    
    if (error) {
      throw error;
    }

    let notesList = JSON.parse(data);

    const userId = request.query.userId;

    if (userId) {
        
      let note = notesList.notes.find((ele) => ele.userId === userId);
      response.send(note);

    } else {
      response.send('Invalid UserID');
    }

  });

}

module.exports = {
  getNotesForUserId
};

