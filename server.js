const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/cv', (req, res) => {
    res.render('cv');
});
app.get('/projects', (req, res) => {
    res.render('projects');
});
app.get('/ai', (req, res) => {
    res.render('ai');
});
app.get('/contact', (req, res) => {
    res.render('contact');
});
app.get('/error', (req, res) => {
    res.render('not-found');
});

app.get('/os', (req, res) => {
    res.render('os-s5');
});
app.get('/study-plans', (req, res) => {
    res.render('plans');
});

app.use((req, res) => {
     res.status(404).render('not-found'); 
    });

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
