const BlogController = require('../controller/BlogController');

const routes = [
  {
    method: 'GET',
    url: '/api/posts',
    handler: BlogController.all
  },
  {
    method: 'GET',
    url: '/api/post/:id',
    handler: BlogController.show
  },
  {
    method: 'POST',
    url: '/api/post',
    handler: BlogController.add,
  },
  {
    method: 'PUT',
    url: '/api/post/:id',
    handler: BlogController.update
  },
  {
    method: 'DELETE',
    url: '/api/post/:id',
    handler: BlogController.delete
  }
]

module.exports = routes