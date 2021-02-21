// console.log("Hello world");

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    // res.end('This is Rohan Das');
    res.end(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> Pseudo selectros and more designing</title>
        <style>
            .container {
                border: 2px solid red;
                background-color: chartreuse;
                padding: 34px;
                margin: 34px auto;
                width: 666px;
    
            }
    
            a {
                text-decoration: none;
                color: rgb(251, 255, 0);
            }
    
            a:hover {
                color: black;
                background-color: darkorange;
            }
    
            a:visited {
                color:  black;
                background-color:  rgb(5, 226, 255);
            }
            a:active{
            background-color:blue;
            }
    
            .btn {
                font-family:cursive;
                font-weight: bold;
                           background-color: rgb(255, 0, 0);
                padding: 6px;
                border: none;
                cursor: pointer;
                font-size: 13px;
                border-radius: 4px;
            }
            .btn:hover{
                background-color: pink;
                border: 3px solid  blue;
            }
        </style>
    </head>
    
    <body>
        <div class="container" id="contl">
            <h3>This is my heading</h3>
    
            <p>
    
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eveniet hic vitae deserunt. Itaque culpa
                error nisi, totam tempore deleniti aliquam distinctio excepturi commodi? Placeat molestiae consequatur illo
                incidunt similique magnam numquam perspiciatis quae? </p>
            <a href="https://facebook.com" class="btn">Read more</a>
            <button class="btn">Contact us</button>
    
    </body>
    
    </html>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});