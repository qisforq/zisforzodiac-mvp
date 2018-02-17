const request = require('request');
const rp = require('request-promise');
const saveRepo = require('../database/index.js')
// const config = require('../config.js');
const token = process.env.TOKEN;



let getReposByUsername = (githubUser, cb) => {
  // GET /users/:username/repos

  // Use the request module to request repos for a specific
  // user from the github API
  let options = {
    // url: 'FILL ME IN',
    url: `https://api.github.com/users/${githubUser}/repos`,
    headers: {
      'User-Agent': 'request-promise',
      'Authorization': `token ${token}`
    },
    // qs: {
    //     access_token: config.T OKEN // -> uri + '?access_token=xxxxx%20xxxxx'
    // },
    // headers: {
    //     'User-Agent': 'Request-Promise'
    // },
    json: true// Automatically parses the JSON string in the response
  };

  rp(options)
      .then(function (repos) {
          console.log('User has %d repos', repos.length);
          //repos is an ARRAY of repo objects
          saveRepo.save(repos, cb)
      })
      .catch(function (err) {
          console.error(err, 'Got yoself an erra')
      });


}



module.exports.getReposByUsername = getReposByUsername;
// In this function, you'll use the npm request module to fetch a user's Github repositories from the Github API.

    // let options = {
    //   url: 'FILL ME IN',
    //   headers: {
    //     'User-Agent': 'request',
    //     'Authorization': `token ${config.TOKEN}`
    //   }
    // };
