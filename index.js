const path = require('path');
const express = require('express');
const exp = require('constants');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT || 3000, function(){
    console.log('Express app running on PORT' + ' ' + (process.env.PORT || 3000))
});
