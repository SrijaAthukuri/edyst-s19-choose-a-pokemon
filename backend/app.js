var express = require('express');
var app = express();
app.get('/api/pokemon', function(req, res){
   res.send({
    "pokemon": [
        "bulbasaur", 
        "charmander", 
        "squirtle"  
    ]
});
});
app.get('*', function(req, res){
   res.status(404).send('Sorry!!The requested URL is not found!!!');   
});
app.listen(8006);
