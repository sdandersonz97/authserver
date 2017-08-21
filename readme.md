## deploying a server with node:

run npm install 

## install mongoDB
windows run mongo "C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe"
mac os run mongod

## Endpoints

* `/signup`
Params:
email
password

* `/signin`
Params:
email
password

## Creating Protected Endpoint
* You need to add requireAuth method 

`app.get('/',requireAuth,function(req,res){
        res.send({hi:"there"});
    });`