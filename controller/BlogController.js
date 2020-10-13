const boom = require('boom')
const Blog = require("../model/schemas/Post")

exports.all = async (req, rep) => {
	try {
		let posts = await Blog.find();
		return posts;
	} catch (err) {
		throw boom.boomify(err)
	}
}

exports.show = async (req, rep) => {
	try {
		const id = req.params.id
		let post = await Blog.findById(id);
		return post
	} catch (err) {
		throw boom.boomify(err)
	}
}

exports.add = async (req, rep) => {
	try {
		let raw = new Blog(req.body);
		let post = await post.save();
		return post
	} catch (err) {
		throw boom.boomify(err)
	}
}

exports.update = async (req, rep) => {
	try {
		const id = req.params.id
		let result = await Blog.findByIdAndUpdate(id, req.body, {new: true});
		return result
	} catch (err) {
		throw boom.boomify(err)
	}
}

exports.delete = async (req, rep) => {
	try {
		const id = req.params.id
		let result = await Blog.findByIdAndDelete(id);
		return {Message: "Post Deleted"}
	} catch (err) {
		throw boom.boomify(err)
	}
}
