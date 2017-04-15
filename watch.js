var process = require('child_process');
var fs = require('fs');

var building = false;
var buildingQueue = [];

var path = "/Users/patrick/code_space/repos/sixlab-tools/src/";
fs.watch(path, {recursive: true}, function (eventType, filename) {
    if (filename.indexOf("___jb_") != -1) {
        return;
    }

    console.log("***************************************     modify :"+filename);
    buildingQueue.push("wait");
    if(!building){
        console.log("***************************************     building");
        build();
    }
});

function build() {
    var begin = new Date();
    building = true;
    buildingQueue = ["building"];

    let buildProcess = process.exec('yarn run build', "/Users/patrick/code_space/repos/sixlab-tools/");

    buildProcess.stdout.on('data', function (data) {
        if (data.indexOf("\n\n") != -1) {
            console.log("build >>> " + data.substring(0, data.length - 2));
        } else {
            console.log("build >>> " + data);
        }
    });
    buildProcess.on('exit', function (code) {
        let end = new Date();
        let t = end.getTime() - begin.getTime();
        console.log('***************************************     build finish:' + end);
        console.log('耗时：' + t);
        building = false;
        buildingQueue.pop();
        if(buildingQueue.length > 0 ){
            build();
        }
    });
}

build();