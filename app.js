// Import required modules
const express = require('express');
const { dirname } = require('path');

// Create an Express app
const app = express();

// Define routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.sendFile('./view/about.html', {root:__dirname});
});

app.get('/index', (req, res) => {
    res.sendFile('./view/index.html',{root:__dirname});
});


// Start the server
const PORT = process.env.PORT || 3000; // Use the environment variable PORT or default to 3000
app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});
