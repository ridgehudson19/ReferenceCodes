const exec = require("child_process").exec
exec("bwip-js code128 012345678 mycode128.png", (error, stdout, stderr) => {
 //do whatever here
 console.log('barcode created');
});