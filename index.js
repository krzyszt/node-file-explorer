var fs = require('fs');
var stdin = process.stdin;
var stdout = process.stdout;



fs.readdir(process.cwd(), function(err, files) {
   process.stdout.write('\n');

   if (!files.length) {
      return console.log(' \033[31m No files to show!\033[39m\n');
   }
   function file(i) {
      var filename = files[i];

      fs.stat(__dirname + '/' + filename, function(err, stat)
      {
         if (stat.isDirectory()) {

            console.log(' ' + i + ' \033[36m' + filename + '/\033[39m');

         } else {

            console.log(' ' + i + ' \033[90m' + filename + '\033[39m');
         }


         if (++i === files.length) {

            read();

         } else {
            file(i);
         }
      });

   }


   function read() {

      console.log('');

      stdout.write(' \033[33mEnter your choice: \033[39m');

      stdin.resume();

      stdin.setEncoding('utf8');

      stdin.on('data', option);
   }

   function option(data) {
      
      if (!files[Number(data)]) {
         stdout.write(' \033[33mEnter your choice: \033[39m');
      } else {
         stdin.pause();
      }
   }

   file(0);
});
