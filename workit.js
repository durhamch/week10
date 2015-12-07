var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var mysql = require('mysql');
var pool = mysql.createPool({
  host  : 'localhost',
  user  : 'student',
  password: 'default',
  database: 'student'
});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3000);

app.get('/',function(req,res,next){
  var context = {};
  pool.query('SELECT * FROM workit', function(err, rows, fields){
    if(err){
      next(err);
      return;
    }
    context.results = JSON.stringify(rows);

    res.render('home', context);
  });
});

/*
app.get('/',function(req,res,next){
  var context = {};
  mysql.pool.query("INSERT INTO todo (`name`) VALUES (?)", [req.query.c], function(err, result){
    if(err){
      next(err);
      return;
    }
    context.results = "Inserted id " + result.insertId;
    res.render('home',context);
  });
});
*/

app.post('/',function(req, res){
  if(req.body['Add Item']){
    var context = {};
    pool.query("INSERT INTO workit (`name`),(`reps`),(`weight`),(`date`),(`lbs`) VALUES (?),(?),(?),(?),(?)", [req.body.name], [req.body.reps], [req.body.weight], [req.body.date], [req.body.units], function(err, result){
      /*if(err){
        next(err);
        return;
      }*/
    //context.results = "Inserted id " + result.insertId;
    //res.render('home',context);
    });

    console.log({"name":req.body.name,"reps":req.body.reps,"weight":req.body.weight,"date":req.body.date,"unit":req.body.unit});
  }
  res.render('home');
});


// error handling
app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});