const express = require('express');
const routes = require('./controllers');
const path = require('path')
const app = express();

const PORT = process.env.PORT || 3001;

// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(PORT, () => {
    console.log(`API server now running on PORT ${PORT}`);
});