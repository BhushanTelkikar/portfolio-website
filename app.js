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

// Routes
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Your Name - Portfolio',
        name: 'Bhushan Shrikant Telkikar',
        tagline: 'Technical Leader',
        about: 'System and Software verification and validation Engineer experience in modern Automotive technologies...',
        skills: [	'VECTOR', 'dSPACE', 'IPG CarMaker', 'Robot Framework', 
					'Python', 'MATLAB', 'Simulink', 'CAPL', 
					'Windows', 'Ubuntu', 'github', 'ISTQB',
					'Cyber Security', 'FUSA', 'ISO26262', 'ISO14229', 
					'PTC Integrity', 'IBM DOORS', 'JIRA', 'CodeBeamer'],
        projects: [
            {
                title: 'Portfolio Website',
                description: 'A responsive portfolio website built with Node.js and Express',
                tech: ['Node.js', 'Express', 'EJS', 'CSS'],
                link: '#',
                github: '#'
            },
            {
                title: 'Project 2',
                description: 'Description of your second project',
                tech: ['Technology 1', 'Technology 2'],
                link: '#',
                github: '#'
            }
        ],
        contact: {
            email: 'bhushantelkikar001@gmail.com',
            linkedin: 'https://www.linkedin.com/in/telbhu/',
            github: 'https://github.com/BhushanTelkikar'
        }
    });
});

// About page
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About - Your Name'
    });
});

// Projects page
app.get('/projects', (req, res) => {
    res.render('projects', {
        title: 'Projects - Your Name'
    });
});

// Contact page
app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact - Your Name'
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).render('404', {
        title: '404 - Page Not Found'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Visit: http://localhost:${PORT}`);
});

module.exports = app;