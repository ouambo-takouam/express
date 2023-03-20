const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
	return res.send({ id: 1, name: 'Patrick' });
});

app.get('/messages', (req, res) => {
	return res.send('<ul><li>Helooo Albert</li></ul>');
});

app.post('/messages', (req, res) => {
	return res.send('Updating messages');
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
