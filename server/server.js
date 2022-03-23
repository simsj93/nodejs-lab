const path = require('path');
const fs = require('fs');

let chirps = [
    { name: 'Lom', msg: 'This is message 1.' },
    { name: 'Merkin', msg: 'This is message 2.' },
    { name: 'Francis', msg: 'This is message 3.' },
    { name: 'Shawn', msg: 'This is message 4.' },
    { name: 'Hammo', msg: 'This is message 5.' }
]

// establishes pathway to chirps.json

let pathway = path.join(__dirname, '../chirps.json'); 

// converts chirps array into JSON and writes it to chirps.json

// fs.writeFile(pathway, JSON.stringify(chirps), err => {
//     if(err){
//         console.log(err); 
//     }
// }); 

// uses pathway to encode content and log to console (logs chirps)

fs.readFile(pathway, {
    encoding: "utf-8"
}, (err, data) => {
    if(err) {
        console.log(err);
    }
    console.log(data);
})