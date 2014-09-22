var express = require("express");
var app = express();
var port = 4000;
app.listen(port);







app.set('views', __dirname + '/tpl');
app.set('view engine', "jade");
app.engine('jade', require('jade').__express);
app.get("/", function(req, res){
    res.render("index");
});

app.use(express.static(__dirname + '/public'));



console.log("Listening on port " + port);

