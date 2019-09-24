const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');
const action = (data) => {
 if (data === "\u0003") {
     console.log("Thanks for using me, ciao!");
     process.exit();
   }
 if (data === 'b') {
   process.stdout.write('\x07');
 }
 if (data >= 1 && data <= 9){
   setTimeout(() => {
     process.stdout.write('\x07');
   }, data * 1000);
   console.log(`setting timer for ${data} seconds...`)
 }
}
stdin.on('data', action);