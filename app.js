const app = require('./config/server');
const port = 3000;
app.listen(port, function(){
	console.log('Server online in port: '+ port);
})