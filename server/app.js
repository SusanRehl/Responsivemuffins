var express=require('express');  // sets up express
var app=express();
var router = express.Router();
var path=require('path');  // sets up paths

app.use('/', router);

app.set("port", (process.env.PORT || 3000));

app.get("/*", function( req, res ){
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "./public", file));
});

app.listen(app.get("port"), function(){
      console.log("Listening on port: ", app.get("port"));
  });

module.exports=app;
