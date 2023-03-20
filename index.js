const express = require('express');

const app = express();

const PORT = 3000;

const friends = [
	{
		id: 0,
		name: 'Patrick O.',
	},
	{
		id: 1,
		name: 'Georges S.',
	},
	{
		id: 2,
		name: "Samuel Eto'o",
	},
];

app.use((req, res, next) => {
	const start = Date.now();
	next();
	const delta = Date.now() - start;
	console.log(`${req.method} ${req.url} ${delta}ms`);
});
app.use(express.json());

app.post('/friends', (req, res) => {
	const { name } = req.body;

	if (!name) {
		return res.status(400).json({
			error: 'Missing friend name',
		});
	}

	const newFriend = {
		id: friends.length,
		name,
	};

	friends.push(newFriend);
	return res.status(200).json(newFriend);
});

app.get('/friends', (req, res) => {
	return res.json(friends);
});

app.get('/friends/:friendId', (req, res) => {
	const { friendId } = req.params;
	const friend = friends[+friendId];

	if (friend) {
		return res.status(200).json(friend);
	} else {
		return res.status(404).json({
			error: 'Friend does not exist',
		});
	}
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
