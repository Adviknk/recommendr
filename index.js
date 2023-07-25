const { readFile, readFileSync } = require('fs')
const express = require('express');

const app = express();

app.get('/', (request, response) => {

    // readFile('./navigation.html', 'utf8', (err, html) => {
        
    //     response.send(html);
    // });
    response.render('navigation');

});


// Where the app is running
app.listen(process.env.PORT || 3000, () => console.log('App is available on http://localhost:3000'));
