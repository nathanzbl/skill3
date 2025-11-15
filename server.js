const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Route for the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/admin', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Admin Area</title>
      </head>
      <body>
        <h1>Admin area</h1>
        <p>If you can see this, your IP passed the Nginx allow list.</p>
        <p>Domain: nathanblatter.is404.net</p>
        <p>Path: /admin</p>
      </body>
    </html>
  `);
});


// Start the server
app.listen(PORT, () => {
    console.log(`Queue du Castor server is running on http://localhost:${PORT}`);
});
