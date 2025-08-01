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
app.get('/app', (req, res) => {
    res.render('ai');
});
app.get('/contact', (req, res) => {
    res.render('contact');
});
app.get('/error', (req, res) => {
    res.render('not-found');
});

app.get('/test', (req, res) => {
    res.render('test');
});

app.get('/lt', (req, res) => {
    res.render('lt');
});


app.get('/privacy-policy', (req, res) => {
    res.render('privacy-policy');
});

app.get('/ToS', (req, res) => {
    res.render('tos');
});

app.get('/shadowveil-studioZ', (req, res) => {
    res.render('ssz');
});
app.get('/shadowveil-studioZ/projects', (req, res) => {
    res.render('ssproj');
});
app.get('/shadowveil-studioZ/simplify-goals', (req, res) => {
    res.render('sg');
});

app.get('/shadowveil-studioz/lt', (req, res) => {
    res.render('lk-ssz');
});

app.use((req, res) => {
     res.status(404).render('not-found'); 
    });

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
