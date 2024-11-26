

const express = require('express');
const { swaggerDocs, swaggerUi } = require('./swagger');

const app = express();
const port = 3000;

// Swagger setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


// router.get('/', function(req, res) {
//     res.render('app/about');
//  });
app.use('/sample', require('./routes/sample'));
  
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });

// module.exports = function(app){
    
//     //app.use('/about', require('./routes/about'));
// }