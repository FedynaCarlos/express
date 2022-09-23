let express = require('express');
const path = require('path');
const app = express();

app.listen(3000, () => {
	console.log('senvidor corriendo en el puerto 3000');
});
app.get('/', (req, res) => {
	let htmlpath = path.resolve(__dirname, './views/index.html');
	res.sendFile(htmlpath);
});
