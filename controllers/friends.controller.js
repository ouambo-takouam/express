const friends = require('../models/friends.model');

function postFriend(req, res) {
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
}

function getFriends(req, res) {
	return res.json(friends);
}

function getFriend(req, res) {
	const { friendId } = req.params;
	const friend = friends[+friendId];

	if (friend) {
		return res.status(200).json(friend);
	} else {
		return res.status(404).json({
			error: 'Friend does not exist',
		});
	}
}

module.exports = {
	postFriend,
	getFriends,
	getFriend,
};
