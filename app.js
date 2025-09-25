const express = require('express');
const path = require('path');
const app = express();

// Set the port
const PORT = process.env.PORT || 3000;

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Main route only
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Bhushan Telkikar - Portfolio',
        name: 'Bhushan Shrikant Telkikar',
        tagline: 'Technical Leader',
        about: 'System and Software verification and validation Engineer experience in modern Automotive technologies...',
        projects: [],  // Your projects array from the EJS template
        contact: {
            email: 'bhushantelkikar001@gmail.com',
            linkedin: 'https://www.linkedin.com/in/telbhu/',
            github: 'https://github.com/BhushanTelkikar'
        }
    });
});

// Catch all other routes and redirect to home
app.get('*', (req, res) => {
    res.redirect('/');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;