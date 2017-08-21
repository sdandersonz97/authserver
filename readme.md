## Deploying a server with node:

run npm install 

## Important

* You have to Install mongoDB

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