const neo4j = require('neo4j-driver');
//const base64Img = require('base64-img');
const uri = 'bolt://localhost:7687';
const dbuser = 'neo4j';
const dbpassword = 'fucksluts';
const driver = neo4j.driver(uri, neo4j.auth.basic(dbuser, dbpassword), { disableLosslessIntegers: true });
const session = driver.session();
// {
//   database: 'memewar2',
//   defaultAccessMode: neo4j.session.WRITE
// });
//const fetch = require('node-fetch');
const express = require('express');
const app = express();
const path = require('path');
var ObjectId = require('node-time-uuid');
//const sanitizeHtml = require('sanitize-html');
//const fileUpload = require('express-fileupload');
var multer  = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb){
    cb(null, __dirname+path.sep+'uploaded');
    console.log(__dirname+path.sep+'uploaded');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-';
    //cb(null, file.fieldname + '-' + uniqueSuffix + '.jpg');  + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix+file.originalname);
  }
});
var upload = multer({storage:storage});

var fs = require('fs');
//var credentials = {key:fs.readFileSync('key.pem','utf8'), cert:fs.readFileSync('cert.pem', 'utf8')};
//var httpsServer = require('https').createServer(credentials, app);
//const io = require('socket.io')(httpsServer);

const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer);
app.use(express.static(__dirname));

io.on('connection', function(socket) {
  console.log("connection");
  //requestTop20Posts(socket);

  // socket.on('retrievePostsForMarket', function(){
  //   requestTop20Posts(socket);
  // });

  socket.on('retrieveDatabase', function(){
    retrievePosts(socket);
  });
});


function retrievePosts(socket){
	var topPosts = [];
    var topPostQuery = `
    MATCH (p:Post)
    WITH p ORDER BY p.upvotes-p.downvotes DESC
    OPTIONAL MATCH (p)-[ta:TAGGEDAS]->(t:Tag)
    OPTIONAL MATCH (:Post)-[rt:REPLYTO]->(p)
    RETURN p AS posts, COLLECT(DISTINCT [t.name, ta.upvotes]) AS tags, COUNT(DISTINCT rt) AS replies`;
    //SKIP `+String(PAGESIZE*pagenum)+` LIMIT `+String(PAGESIZE);
    //`;

    session
      .run(topPostQuery)
      .then(function(result){
        var dataForClient = [];
        result.records.forEach(function(record){
          var processedPostObject = record["_fields"][0]["properties"];
          record["_fields"][1].forEach(function(tagAndVote){
            processedPostObject.tagnames = tagAndVote[0];
            processedPostObject.tagvotes = tagAndVote[1];
          });
          processedPostObject.replycount = record["_fields"][2];
          dataForClient.push(processedPostObject);
          socket.emit('receivedPostData', topPosts);
        });
      })
      .catch(function(error){
        console.log(error);
      });
}

httpServer.listen(3000,function(){console.log('Meme War app listeningn on port 3000 like a prude!');});