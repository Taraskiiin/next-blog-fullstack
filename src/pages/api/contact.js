import { MongoClient } from 'mongodb';

const mongoDBUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.asxy0o4.mongodb.net/my-blog?retryWrites=true&w=majority`;

async function handler(req, res) {
	if (req.method === 'POST') {
		const { email, name, message } = req.body;
		if (
			!email.includes('@') ||
			!name ||
			name.trim() === '' ||
			!message ||
			message.trim() === ''
		) {
			res.status(422).json({ message: 'Invalid input.' });
			return;
		}

		const newMessage = {
			email,
			name,
			message,
		};

		let client;

		try {
			client = await MongoClient.connect(mongoDBUrl);
		} catch (error) {
			res.status(500).json({ message: error.message });
		}

		const db = client.db();

		try {
			const result = await db.collection('messages').insertOne(newMessage);
			newMessage._id = result.insertedId;
		} catch (error) {
			client.close();
			res.status(500).json({ message: 'saving message failed' });
			return;
		}
		client.close();
		res.status(201).json({ message: 'all cool!' });
	}
}

export default handler;
