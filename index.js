// holds info you don't want visible in source code
// sets up env for testing !!! dfgdfgdfgdf   sdfdsfsdf
require('dotenv').config(); 

const server = require('./api/server.js');

// look for PORT env variable and if it doesn't find it, uses 5000
const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** server up on port ${port} **\n`));
