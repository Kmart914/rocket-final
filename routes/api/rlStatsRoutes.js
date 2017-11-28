const db = require('../models');
const itemController = require('../controller/itemsController');
const router = require('express').Router();
const axios = require('axios');

const APIKEY = "3597323503c19f4b378b5125a8d0ee39053d967c";

export default {
    const skillSearch = (steamID) => {
        axios.get(`https://api.rocketleague.com/api/v1/steam/playerskills/${steamID}/`)
             .then( (response) => {
                 console.log(response);
                 return response;
             })
             .catch( (err) => {
                 console.log(err);
             });
    }

    const statsSearch = (steamID, statType) => {
        axios.get(`https://api.rocketleague.com/api/v1/steam/leaderboard/stats/${statType}/${steamID}/`)
             .then( (response) => {
                 console.log(response);
             })
             .catch( (err) => {
                 console.log(err);
            });
    }
}
