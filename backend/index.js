const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
const port= 3000;

var ks = require('node-key-sender');


io.on("connection", (socket) =>{
    console.log("a user connected.");
    socket.on("chat message",msg =>{
        //console.log(msg);
        if(msg == 'close'){
            socket.disconnect();
        }
        if(msg != 'close'){
            ks.sendKey(msg);
        }
    });
});
setTimeout(function() {
    ks.sendKeys(['a', 'b', 'c']);
}, 5000);
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