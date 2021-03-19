class Controller {
    // If user uses GET method = READ
    get(req, res) {
      console.log("get data");
      if(req.params.name === `risa`) res.send(`Azka Farisa is here`);
      else res.send(`No response..`);
    }
  
    // If user uses POST method = CREATE
    post(req, res) {
      console.log("post data");
      if(req.params.name === `risa`) res.send(`Azka Farisa is here`);
      else res.send(`No response..`);
    }
  
    // If user uses PUT method = UPDATE
    put(req, res) {
      console.log("put data");
      if(req.params.name === `risa`) res.send(`Azka Farisa is here`);
      else res.send(`No response..`);
    }
  
    // If user uses DELETE method = DELETE
    delete(req, res) {
      console.log("delete data");
      if(req.params.name === `risa`) res.send(`Azka Farisa is here`);
      else res.send(`No response..`);
    }
  }
  
  module.exports = new Controller();
  