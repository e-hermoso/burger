var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

var port = process.env.PORT || 3000;

var app = express();
// server static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false}));
// override with post having ?_method=DELETE
app.use(methodOverride("_method"));
// set handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Import routes and give the server access to them.
var routes = require("./controllers/burgerController.js");
app.use("/", routes);
app.listen(port);
//
// // express rout that will post that inforamtion to the page
// app.get('/',function(req,res){
//   connection.query('SELECT * FROM burgers;',function(err,data){
//     res.render('index',{burger: data, dev: data});
//     // console.log(data[0].devoured);
//     // console.log(data[1].devoured);
//     // console.log(data[2].devoured);
//   });
// });
//
// app.post('/create', function(req,res){
//   connection.query('INSERT INTO burgers (burger_name, devoured) VALUES (?, FALSE);',[req.body.burger], function(err, result){
//     if (err){
//       throw err;
//     }
//     res.redirect("/");
//   })
// })
//
// app.put("/update", function(req, res) {
//   connection.query("UPDATE burgers SET devoured = TRUE WHERE id = ?", [ req.body.id
//   ], function(err, result) {
//     if (err) {
//       throw err;
//     }
//     res.redirect("/");
//   });
// });
//
// app.delete("/delete", function(req, res) {
//   connection.query("DELETE FROM burgers WHERE id = ?", [parseInt(req.body.id)], function(err, result) {
//     if (err) {
//       throw err;
//     }
//     res.redirect("/");
//   });
// });
