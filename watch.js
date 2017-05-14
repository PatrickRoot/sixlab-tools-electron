var process = require('child_process');
var fs = require('fs');
var moment = require('moment');

var buildingQueue = [];

let buildProcess;

var path = "/Users/patrick/code_space/repos/sixlab-tools-electron/src/";
fs.watch(path, {recursive: true}, function (eventType, filename) {
    if (filename.indexOf("___jb_") != -1) {
        return;
    }

    console.log("***************************************     modify :"+filename);
    buildingQueue.push("wait");
    if(!buildProcess){
        console.log("***************************************     building");
        build();
    }else{
        buildProcess.kill();
        console.log("***************************************     building");
        build();
    }
});

function build() {
    var begin = moment().unix();
    buildingQueue = ["building"];

    buildProcess = process.exec('yarn run build', "/Users/patrick/code_space/repos/sixlab-tools-electron/");

    console.log("build >>> pid:" + buildProcess.pid);

    buildProcess.stdout.on('data', function (data) {
        if (data.indexOf("\n\n") != -1) {
            console.log("build >>> data1:" + data.substring(0, data.length - 2));
        } else if(data){
            console.log("build >>> data2:" + data);
        }
    });
    buildProcess.on('exit', function (code) {
        let end = moment().unix();
        let t = end - begin;
        console.log('耗时：' + t);

        end = moment().format("YYYY-MM-DD HH:mm:ss");
        if(code === 0){
            console.log('***************************************     build finish:' + end);
            buildProcess = null;
            buildingQueue.pop();
            if (buildingQueue.length > 0) {
                build();
            }
        }else{
            console.log('***************************************     build interrupt:' + end);
        }
    });
}

build();