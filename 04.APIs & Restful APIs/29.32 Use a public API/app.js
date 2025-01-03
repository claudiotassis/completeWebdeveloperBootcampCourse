const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', (req, res) => {
    res.render('index', { joke: null, error: null });
});

// Joke route
app.get('/joke', async (req, res) => {
    const { firstName, lastName } = req.query;

    if (!firstName || !lastName) {
        return res.render('index', { joke: null, error: 'Please provide both first and last names!' });
    }

    try {
        const response = await axios.get(`https://v2.jokeapi.dev/joke/Any?type=single&contains=${firstName} ${lastName}`);
        const joke = response.data.joke || "Couldn't fetch a joke for now, try again later.";
        res.render('index', { joke, error: null });
    } catch (error) {
        console.error(error);
        res.render('index', { joke: null, error: 'Error fetching the joke, try again later.' });
    }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
