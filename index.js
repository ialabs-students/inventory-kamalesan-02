const express = require("express");

console.log("hello , i'm  kamal");

const server = express(); 

server.use(express.json())    


var users = [];
// add array in multiple data (1 method)
var user1 = [
    { id: 1, name:'kamal',orderdetails: 'burgger',  order: 1, deliverd: true},
    { id: 2, name:'aaaa', orderdetails: 'Pizza',     order: 2, deliverd: true},
    { id: 3, name:'bbbb',orderdetails: 'Chicken fry', order: 3, deliverd: true},
    { id: 4, name:'cccc',orderdetails: 'Momos',     order: 4, deliverd: false},
    { id: 5, name:'dddd',orderdetails: 'Cocacola',   order: 5, deliverd: false},
];
// add array in (2 method)

var data = [];


var emailValidator = (req, res, next) =>  {
     var userdata = req.body;
     if(userdata.email == undefined){
        res.status(400);
        res.send("Invalid request body , Email is mandatory");
     }
     next();
};





server.get("/hello",(req,res)=> {
    res.send("Hello welcomee!!");
});


server.get("/hello/:name", (req, res) => {
    res.send("Hi there, glad to meet you " + req.params.name);
});


server.get("/hi", (req, res) => {
    res.send("Hello there, glad to meet you " + req.query.name);
});
server.post("/register/users", (req, res) => {
    
    users.push(req.body);
    res.send("user register succesfully")
});
server.post("/register/data", (req, res) => {
    
    data.push(req.body);
    res.send("user register succesfully")
});
server.put("/update/user", (req, res) => {
   
    users.push(req.body);
    res.send("user register succesfully")
});
server.get("/fetch/user",emailValidator, (req, res) => {

    res.send(users)
});

server.get("/fetch/user1", (req, res) => {

    res.send(user1)
});
server.get("/fetch/user2", (req, res) => {

    res.send(data)
});
//delete method

server.delete('/:id', function (req, res) {
    
    var found = user1.find(function (item) {
        return item.id === parseInt(req.params.id);
    });

    if (found) {
        
        var targetIndex = user1.indexOf(found);

        user1.splice(targetIndex, 1);
    }

    
    res.sendStatus(204);
});

server.get("/fetch/user/:id", (req, res) => {
    var id = req.params.id;
    users.forEach(u => {
        if (u.id == id) {
            res.send(u);
        }
})
res.send({});
});

// get filter 

// server.get('/:id', function (req, res) {
    
//     var found = user1.find(function (item) {
//         return item.id === parseInt(req.params.id);
//     });
    
//     if (found) {
//         res.status(200).json(found);
//     } else {
//         res.sendStatus(404);
//     }
// });
// another method
server.use('/', (req, res, next) => {
    const filters = req.query;
    const filteredUsers = user1.filter(user => {
      let isValid = true;
      for (key in filters) {
        console.log(key, user[key], filters[key]);
        isValid = isValid && user[key] == filters[key];
      }
      return isValid;
    });
    res.send(filteredUsers);
  });
    
  
  server.listen(5000, () => {
    console.log('Server started!');
  });











//
server.put('/:id', function (req, res) {
    
    var found = user1.find(function (item) {
        return item.id === parseInt(req.params.id);
    });

   
    if (found) {
        var updated = {
            id: found.id,
            name: req.body.name, 
            orderdetails:req.body.orderdetails,
            order: req.body.order,
            deliverd: req.body.deliverd 
        };

        
        var targetIndex = user1.indexOf(found);

       
        user1.splice(targetIndex, 1, updated);

       
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
});

server.listen(4000, () => {
    console.log("server running on port :4000");
});

