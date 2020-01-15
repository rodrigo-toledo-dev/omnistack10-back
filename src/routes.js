const { Router } = require('express');
const axios = require('axios');
const Dev = require('./models/Dev');

const routes = Router();

routes.post('/devs', async (req, res) => {
  const { github_username, techs } = req.body
  console.log(github_username)
  const apiRes = await axios.get(`https://api.github.com/users/${github_username}`)

  const { name = login, avatar_url, bio } = apiRes.body
  
  const techsArray = techs.split(',').map(tech => tech.trim())

  return res.json({test: 'hello'})
})

module.exports = routes;