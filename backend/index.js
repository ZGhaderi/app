const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
const port = 8000;
const {spawn} = require('child_process')
var ks = require('node-key-sender');
// var robot = require("kbm-robot");
// robot.startJar();

// //Get the mouse position, retuns an object with x and y. 
// var mouse=robot.getMousePos();
// console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y);

// //Move the mouse down by 100 pixels.
// robot.moveMouse(mouse.x,mouse.y+100);

// //Left click!
// robot.mouseClick();
// app.listen(3000,function(){
//     console.log("run on 3000");
// })
// app.get('/name', func);
// function func(req,res){
//     var spawn = require("child_process").spawn;
//     var process = spawn('python',["./mouse.py",req.query.firstname,
//     req.query.lastname]);

//     process.stdout.on("data",function(data){
//         res.send(data.toString());
//     })
//  }
var z = 0 , w = 0;
io.on("connection", (socket) =>{
    console.log("a user connected.");
    socket.on("chat message",msg =>{
        console.log(msg);
        io.emit("send","msg");
        
        if(msg == 'close'){
            socket.disconnect();
        }
        if(msg != 'close'){
            ks.setOption('startDelayMillisec',10);
            ks.setOption('globalDelayBetweenMillisec', 10);
            ks.setOption('globalDelayPressMillisec', 10);
            ks.sendKeys(msg);
        }
    });

    socket.on("mouse location",msg =>{
        //console.log("rec");
        
        var x = String(msg).split(' ')[0];
        var y = String(msg).split(' ')[1];
        z = x;
        w = y;
        spawn('python', ["./serve.py",z,w]);
        console.log(x +','+y);
        //var spawn = require("child_process").spawn;
        //var process = spawn('python',["./serve.py",x,y]);
        //robot.mouseMove(x,y);
       // robot.typeString("zahra");
    });
});
// setTimeout(function() {
//     ks.sendKeys(['a', 'b', 'c']);
// }, 5000);
server.listen(port,()=> {console.log("server run on port: " + port)});

// module.execute = function(arrParams) {
//     return new Promise(function(resolve, reject) {
//         var jarPath = path.join(__dirname, 'jar', 'key-sender.jar');

//         var command = 'java -jar \"' + jarPath + '\" ' + arrParams.join(' ') + module.getCommandLineOptions();

//         return exec(command, {}, function(error, stdout, stderr) {
//             if (error == null) {
//                 resolve(stdout, stderr);
//             } else {
//                 reject(error, stdout, stderr);
//             }
//         });
//     });
// };



//process.stdin.on('keypress', msg);
        // process.stdin.on()
        // sendkeys('foobar')
        // .then(() => console.log('success'))
 
        // sendkeys.sync('this is synchronous')
        //input.push(msg);
        // module.sendKey = function(msg) {
        //     return module.execute([msg]);
        // };
        //ks.sendKey(msg);
        //io.emit("chat message",msg);


// var exec = require('child_process').exec;
// var path = require("path");
// var input = [];
//const sendKeys = require('sendkeys');
//import sendKeys from 'sendkeys';