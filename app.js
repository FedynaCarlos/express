let express = require('express');
const path = require('path');
const app = express();

const publicFolderPath = path.resolve(__dirname, './public');
app.use(express.static(publicFolderPath));

app.listen(3001, () => {
	console.log('senvidor corriendo en el puerto 3001');
});
app.get('/', (req, res) => {
	//let htmlpath = path.resolve(__dirname, './views/index.html');
	res.sendFile(path.resolve(__dirname, './views/index.html'));
});
