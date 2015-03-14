var fs = require("fs");
var path = require("path");

var compilerSources = [
    "src/typescript-modular-boilerplate.ts"
];

function ES5(xs) {
    return ['--target ES5'].concat(xs);
}

function AMD(xs) {
    return ['--module amd'].concat(xs);
}

function removeComments(xs) {
    return ['--removeComments'].concat(xs);
}

function outDir(outDir, xs) {
    return ['--outDir', outDir].concat(xs);
}

var args = AMD(ES5(compilerSources));

// The --out option does not apply when doing external module code generation.
desc("Builds the full libraries");
task('compile', {async:true}, function(target, options) {
    var cmd = "tsc " + options.join(" ");

    // console.log(cmd + "\n");
    var ex = jake.createExec([cmd]);

    // Add listeners for output and error
    ex.addListener("stdout", function(output) {
        process.stdout.write(output);
    });
    ex.addListener("stderr", function(error) {
        process.stderr.write(error);
    });
    ex.addListener("cmdEnd", function() {
        var time = new Date();
        var stamp = time.toLocaleTimeString();
        console.log(stamp + " done creating " + target);
        complete();
    });
    ex.addListener("error", function() {
        fs.unlinkSync(outFile);
        console.log("Compilation of " + target + " unsuccessful");
    });
    ex.run();
});

// Set the default task
task("default", function() {
   jake.Task['compile'].invoke("JavaScript", args);
   jake.Task['compile'].invoke("d.ts files", ['--declaration'].concat(outDir('dist', args)));
});
