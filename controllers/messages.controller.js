function getMessages(req, res) {
	return res.status(200).send('<ul><li>Helooo Albert</li></ul>');
}

function postMessage(req, res) {
	return res.status(200).send('Updating messages');
}

module.exports = {
	getMessages,
	postMessage,
};
