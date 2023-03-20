const { Router } = require('express');

const {
	getMessages,
	postMessage,
} = require('../controllers/messages.controller');

const messagesRouter = Router();

messagesRouter.get('/', getMessages);
messagesRouter.post('/', postMessage);

module.exports = messagesRouter;
