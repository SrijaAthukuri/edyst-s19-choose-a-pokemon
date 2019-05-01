var express = require('express');
var app = express();

app.get('/api/pokemon', function(req, res){
   res.send({
    "pokemon": [
        "bulbasaur", 
        "squirtle"  
    ]
});
});

app.listen(8006);