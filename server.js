//dependencies for server ogg instansialisere den
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public')); 
app.use("/images", express.static('images'));
app.use("/scripts", express.static('scripts'));
app.use("/data", express.static('data'));

app.get('/menu', (req, res) => {
    const filePath = path.join(__dirname, 'data', 'menu.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) return res.status(500).send('Error reading menu');
      res.json(JSON.parse(data));  // Sender meny dataen til frontend
    });
    console.log(filePath)
  });

// GET endpoint til users.json
app.get('/users', (req, res) => {
    const filePath = path.join(__dirname, 'data', 'users.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) return res.status(500).send('Error reading users');
      res.json(JSON.parse(data));  // Sender bruker array til frontend
    });
  });
  
app.post('/users', (req, res) => {
  const newUser = req.body; // Frontend sender en ny bruker
  const filePath = path.join(__dirname, 'data', 'users.json');

  // leser eksisterende brukere
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading users');

    let users = JSON.parse(data);
    users.push(newUser);

    // Skriver den nye filen til users.json
    fs.writeFile(filePath, JSON.stringify(users, null, 2), err => {
      if (err) return res.status(500).send('Error writing users');
      res.status(201).send('User added');
    });
  });
});


//kjører serveren 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});