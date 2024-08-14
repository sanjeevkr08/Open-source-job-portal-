const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;
const mysql = require("mysql2");
const bcrypt = require('bcrypt');
const { use } = require('bcrypt/promises');


app.set("view engine", "ejs");


app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));


const conection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"sanju@1234#",
    database:"job_portal"
});

conection.connect((err)=>{
    if(err){
        console.error(err);
    }
    console.log("database connected Succesfully")
})

// let q = `INSERT INTO user (username, email, password, user_type, contact_details, skills, work_history) 
// VALUES 
// ('john_doen', 'john@example1.com', 'hashed_password_here', 'job_seeker', '123 Main St, Anytown', 'Java, Python', 'Intern at Company A')`;

// conection.query(q, (err, result) => {
//     if (err) {
//         console.error(err); 
//     }
//     console.log(result); 
// });

app.get("/",(req,res)=>{
    
    res.render("index.ejs");

});

app.get("/register",(req,res)=>{
    res.render("register.ejs");

});

app.get("/dashboard",(req,res)=>{
    res.render("dashboard.ejs");
});

app.get("/jobs",(req,res)=>{
    res.render("jobs.ejs");
})

app.get("/contact",(req,res)=>{
    res.render("contact.ejs");
});

app.get("/about",(req,res)=>{
    res.render("about.ejs");
});

app.get("/style",(req,res)=>{
    res.render("style.css");
});

app.post("/register", (req, res) => {
   
    let { username, email, password, user_type, contact_details, skills, work_history } = req.body;
    

  
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error hashing password. Please try again.");
        }

        let q = `INSERT INTO user (username, email, password, user_type, contact_details, skills, work_history) 
                  VALUES (?, ?, ?, ?, ?, ?, ?)`;

                  conection.query(q, [username, email, hashedPassword, user_type, contact_details, skills, work_history], (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Error registering user. Please try again.");
            }

            // console.log("User registered:", result);
            res.redirect("/login");
        });
    });
});

app.get("/login",(req,res)=>{
    res.render("login.ejs");
})

app.get("/profile",(req,res)=>{
    res.render("profile.ejs");
})


app.post("/login", (req, res) => {
    let { email, password } = req.body;

    let q = 'SELECT * FROM user WHERE email = ?';

    conection.query(q, [email], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error logging in user. Please try again.");
        }
        if (results.length === 0) {
            // No user found with the given email
            return res.status(401).send("Invalid email or password.");
        }

        const user = results[0];

        // Compare the password with the hashed password
        bcrypt.compare(password, user.password, (err, match) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Error checking password. Please try again.");
            }

            if (match) {
                // console.log("User logged in successfully");
                // You may want to create a session or a token here
                res.redirect("/jobs");
            } else {
                // Password does not match
                return res.status(401).send("Invalid email or password.");
            }
        });
    });
});


app.get('/search-jobs', (req, res) => {
    const { keywords, location } = req.query;
    console.log(`Keywords: ${keywords}, Location: ${location}`); // Check if these are being logged

    // Your SQL query logic
    const q = `
        SELECT * FROM jobs 
        WHERE 
            (title LIKE ? OR description LIKE ? OR company_name LIKE ?) 
            AND location LIKE ?
    `;

    const values = [`%${keywords}%`, `%${keywords}%`, `%${keywords}%`, `%${location}%`];

    conection.query(q, values, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error searching for jobs. Please try again.');
        }

        res.render('search-jobs.ejs', { jobs: results });
    });
});






app.listen(PORT,()=>{
    console.log(`server connected at ${PORT}`);
});



