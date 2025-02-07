const http=require('http');
const fs=require('fs');
const path=require('path');

const port=3000;

const server=http.createServer((req,res)=>{
    /*The first part is for handling the request coming from the client and getting the file path */

    //path.join(__dirname) will give the current directory path and join it with the requested url
    const filePath=path.join(__dirname,req.url==='/'? 'index.html':req.url);
    //req.url will give the url requested by the client. Example: req.url='/about' will give the about page
    
    const extensionName=String(path.extname(filePath)).toLowerCase();
    
    console.log(filePath);
    
    //Mime Types -> to tell the browser what type of file it is
    const mimeTypes={
        '.html':'text/html',
        '.css':'text/css',
        '.js':'text/javascript',
        '.png':'image/png',
    }

    const contentType=mimeTypes[extensionName] || 'application/octet-stream';

    /* The second part is to read the file and send the response to the client */

    fs.readFile(filePath,(err,content)=>{
        if(err){
            //'ENOENT' means file not found
            if(err.code==='ENOENT'){
                res.writeHead(404,{'Content-Type':'text/html'});
                res.end('<h1>404 File Not Found Dude</h1>');
            }
        }else{
            res.writeHead(200,{'Content-Type':contentType}); //writeHead-> to write the response header and content type
            res.end(content,'utf-8'); //end is used to send the response to the client
        }
    });
});

server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});


/* Note: if you want to access the path without writing extension 
    example: /about instead of /about.html
    then use this:

    let requestedUrl = req.url === '/' ? 'index' : req.url;
    
    // Get the file extension (if any)
    let extensionName = path.extname(requestedUrl);

    // If there's no file extension, assume it's an HTML file
    if (!extensionName) {
        requestedUrl += '.html';
        extensionName = '.html';
    }

    // Construct the full file path
    const filePath = path.join(__dirname, requestedUrl);

    console.log(`Requested file: ${filePath}`);

*/