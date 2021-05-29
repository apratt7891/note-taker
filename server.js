const fs = require('fs');
const path = require('path');


const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static(__dirname));

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());


require('./routes/apiRoutes')(app);





app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});