var p = console.log;
var fs = require('fs');
var file = "c:/_t/_ping.log"
var watcher = fs.watch(file);
watcher.on('rename', function(event, filename) {
    console.log((new Date())+" - file rename detected")
});

watcher.on('change', function(event, filename) {
    console.log((new Date())+" - file change detected")
});