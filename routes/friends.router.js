const { Router } = require('express');
const {
	postFriend,
	getFriends,
	getFriend,
} = require('../controllers/friends.controller');

const friendsRouter = Router();

friendsRouter.post('/', postFriend);

friendsRouter.get('/', getFriends);

friendsRouter.get('/:friendId', getFriend);

module.exports = friendsRouter;
