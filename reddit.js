const rp = require('request-promise'); 
const path = require('path'); 
const fs = require('fs'); 

let pathway = path.join(__dirname,'./popular-articles.json'); 

let array = []; 

rp('http://reddit.com/r/popular.json', (err, res, body) => {
        if(err){
            console.log(err); 
        };
        JSON.parse(body).data.children.forEach(item => {
            // console.log(item.data.title);
            // console.log(item.data.url);
            // console.log(item.data.author_fullname); 
            array.push(item.data.title); 
        }) 
     
        fs.writeFileSync(pathway, JSON.stringify(array));

        //  console.log(array);
});  