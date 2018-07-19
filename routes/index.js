var express = require('express');
var router = express.Router();
const sqlite = require('sqlite3').verbose();
const models = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/playlists', function(req, res, next) {
  models.playlists.findAll({

  }).then(playlistsFound => {
    res.render('playlists', {
      playlists: playlistsFound
    });
  });
});


router.post('/playlists', function(req, res) {
  models.playlists
    .findOrCreate({
      where: {
        Name: req.body.name, 
        NumberOfTracks: req.body.NumberOfTracks
      }
    }).spread(function(result, created){
      if(created) {
        res.redirect('/playlists');
      }
console.log(NumberOfTracks);
    });
});



module.exports = router;
