// const express = require('express')
// const app = express()

// let runPy = new Promise(function(success, nosuccess) {

//     const { spawn } = require('child_process');
//     var code ='print("Hello World")\nprint("Hey Ravi",input())';
//     var input = ":)";
//     const pyprog = spawn('python', ['./hello.py',code, input]);

//     pyprog.stdout.on('data', function(data) {

//         success(data);
//         console.log(data);
//     });

//     pyprog.stderr.on('data', (data) => {

//         nosuccess(data);
//     });
// });

// app.get('/', (req, res) => {


//     //res.write('welcome\n');

//     runPy.then(function(fromRunpy) {
//         //console.log(fromRunpy.toString());
//         res.end(fromRunpy);
//     });
// })

// app.listen(4000, () => console.log('Application listening on port 4000!'))







// const express = require('express')
// const app = express()

// app.get('/', (req, res) => {

//     const { spawn } = require('child_process');
//     var code ='print("Hello World")\nprint("Hey Ravi",input())';
//     var input = ":)";
//     const pyprog = spawn('python', ['./hello.py',code, input]);

//     pyProg.stdout.on('data', function(data) {

//         console.log(data.toString());
//         res.write(data);
//         res.end('end');
//     });
// })

// app.listen(4000, () => console.log('Application listening on port 4000!'))
import { PythonShell } from 'python-shell';

import path from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
console.log(__filename)
// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);

console.log(__dirname)




export const myFun = (code) => {
    // const __filename = fileURLToPath(import.meta.url);
    // const __dirname = path.dirname(__filename);
    
        const runPy = async (code) => {
            const options = {
              mode: 'text',
              pythonOptions: ['-u'],
              scriptPath: "./src/services",
              args: [code],
            };
        
          // wrap it in a promise, and `await` the result
          const result = await new Promise((resolve, reject) => {
            PythonShell.run('hello.py', options, (err, results) => {
              if (err) return reject(err);
              
              return resolve(results);
            });
          });
          //console.log(result[0]);
          return result;


        };
        return runPy('print("HelloWorld"*10)');
        
}




var x = await myFun('print("HelloWorld"*10)');
console.log(x);