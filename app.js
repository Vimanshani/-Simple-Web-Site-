const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// const path = require('path'); -> we use this to automatically route the paths for files,
//if we use this for some files we need to use - path.join(__ dirname , 'folder or file name that want to access') instead just using file or folder name
const app=express()

app.use(bodyParser.json())    
app.use(express.static('public'))
app.use(bodyParser.urlencoded({     
    extended:true,
}))
app.use(express.json());

mongoose.connect('mongodb://Localhost:27017/mydb');

var db = mongoose.connection;
db.on('error', ()=>{
    console.log("Error in data base connection");
});
db.once('open',()=>{
    console.log("Connected to the data base");
});


app.post("/login", (req,res)=>{
    var name= req.body.Username;
    var email = req.body.exampleInputEmail1;
    var password = req.body.exampleInputPassword1;

    var data = {
        "name": name,
        "email": email,
        "password": password,
        "cart" : [],
    };
    db.collection('users').findOne({ email: data.email, password: data.password }, (err, user) => {
        if (err) {
            db.collection('users').insertOne(data ,(err,user)=>{
                if(err){
                   throw err;
                }
                console.log("User details inserted successfully");
           });
           
           return res.redirect('index.html?loggedin=true');
        }
        if(user){
            
            return res.redirect('login.html');
            
        }
        
        
    });

});

app.post("/signin", (req, res) => {
    
    var data = {
        email: req.body.exampleInputEmail1,
        password: req.body.exampleInputPassword2
    };
    
    db.collection('users').findOne({ email: data.email, password: data.password }, (err, user) => {
        if (err) {
            console.error("Error during sign-in:", err);
            return res.status(500).send("Internal server error");
        }
        
        if (user) {
            console.log('User signed in successfully');
            return res.redirect('index.html?signedin=true');
        } else {
            console.log('Invalid email or password');
            return res.redirect('signin.html');
        }
    });
});

app.get("/" , (req,res)=>{
        res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        next();

     res.redirect('index.html');

});


  

  app.listen(4600, () => {
    console.log("Server running on port 4600");
  });
  


/*app.use((req,res) =>{
    res.status(404);
    res.send('<h1>Error 404 : Page not found.</h1>');
})  check this later*/    

