const {ObjectId} = require('mongodb');
const User = require('../schemas/User')
const {delay} = require('../../util/Core')

class UserService {
	constructor() {
	}

	async jRename() {
		console.log('----------Start job: jRename----------')
		try {
			const users = await User.find({roles: {$all: ["temp"]}});
			let raws = users.map((user, index) => ({_id: user._id, name: `Temp ${index + 1}`, updated: true}));
			if (raws.length > 0) {
				for (let i = 0; i < raws.length; i++) {
					await User.findOneAndUpdate({_id: raws[i]._id}, {$set: {...raws[i]}}, {new: true})
					await delay(1000)
					console.log(`----------Running job: jRename data ${JSON.stringify(raws[i])} ----------`)
				}
			}
			console.log('----------End job: jRename----------')
			return false;
		} catch (err) {
			console.log(`Error`, err);
		}
	}
}

module.exports = new UserService
