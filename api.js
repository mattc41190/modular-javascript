'use strict';

const request = require('request');
const _ = require('lodash');
const key = 'rKseKlaEml2C46c9PliBIUvJBakFiFaO';



function getAllRegions() {
  request(`http://api-public.guidebox.com/v1.43/US/${key}/regions/all`, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      let results =  JSON.parse(body).results;
      _.forEach(results, (value, index) => {
        console.log(value.name);
      })
    }
  });
}

function getAllChannels() {
  request(`http://api-public.guidebox.com/v1.43/US/${key}/channels/all/0/25`, function (error, response, body) {
    console.log(response);
    if (!error && response.statusCode == 200) {
      let results =  JSON.parse(body).results;
      _.forEach(results, (value, index) => {
        console.log(value);
      })
    }
  });
}

function getAllMovies() {
  request(`http://api-public.guidebox.com/v1.43/US/${key}/movies/all/0/250/all/web`, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      let results =  JSON.parse(body).results;
      _.forEach(results, (value, index) => {
        console.log(value.title);
      })
    }
  });
}

getAllMovies();
