// const rp = require('request-promise');
// const path = require('path');
// const fs = require('fs');


// rp('http://reddit.com/r/popular.json').then((res) => {
//     let items = JSON.parse(res).data.children.map((child) => {
//         if (path.extname(child.data.url) == '.jpg' || 
//              path.extname(child.data.url) == '.png' || 
//              path.extname(child.data.url) == '.gifv') {
//             let imageDetails = {
//                 encoding: 'base64',
//                 url: child.data.url
//             };

//             rp(imageDetails)
//                 .then((image) => {
//                     fs.writeFile(`./downloads/${child.data.id}${path.extname(child.data.url)}`, image)
//                 })
//         }
//     })
// })

// I think I got pretty close here but it's still busted. 