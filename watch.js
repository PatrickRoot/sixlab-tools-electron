var process = require('child_process');
var fs = require('fs');

var building = false;

var path = "/Users/patrick/code_space/repos/sixlab-tools/src/";
fs.watch(path, {recursive: true}, function (eventType, filename) {
    if (filename.indexOf("___jb_") != -1) {
        return;
    }

    console.log("***************************************     modify :"+filename);
    if(!building){
        var begin = new Date();
        console.log("***************************************     building:"+ begin);
        building = true;

        let build = process.exec('yarn run build', "/Users/patrick/code_space/repos/sixlab-tools/");

        build.stdout.on('data', function (data) {
            if(data.indexOf("\n\n")!=-1){
                console.log("build >>> " + data.substring(0, data.length-2));
            }else{
                console.log("build >>> " + data);
            }
        });
        build.on('exit', function (code) {
            let end = new Date();
            let t = end.getTime() - begin.getTime();
            console.log('***************************************     build finish:'+ end);
            console.log('耗时：'+ t);
            building = false;
        });
    }
});