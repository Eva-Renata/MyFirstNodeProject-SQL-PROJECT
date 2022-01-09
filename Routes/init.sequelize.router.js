import express from 'express';  //importerer express, efter den har været installeret i terminalen. (npm install express)
import { sequelize } from '../config/db.sequelize.js';

const router = express.Router();  //kalder på router
//constanten bærer express.Router objekt

//modeller der skal medtages i initialiseringen
import SongModel from '../models/song.model.js'
import ArtistModel from '../models/artist.model.js'

//INIT ROUTER

router.get('/init', (req, res) => { 
    try {
        sequelize.sync()
        res.sendStatus(200)
    } catch (err) {
        res.send(err)
    }
});


export {router}


