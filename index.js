import express from 'express';
import dotenv from 'dotenv';

import {router as SongRouter} from './Routes/song.router.js';
import {router as ArtistRouter} from './Routes/artist.router.js';
import {router as InitRouter} from './Routes/init.sequelize.router.js';

//kalder environment vars
dotenv.config();

const app = new express();

//we write this, when we want to post,update //vi får adgang til body data
app.use(express.urlencoded({
    extended:true
}))

const port = process.env.PORT || 3030;


// App Settings to ensure CORS Access from browser
app.use((req, res, next) => {
	res.append('Access-Control-Allow-Origin', ['*']);
	res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.append('Access-Control-Allow-Headers', 'Content-Type');
	next();
})
app.use(SongRouter);
app.use(ArtistRouter);
app.use(InitRouter);
app.listen(port, () => {
    console.log(`Server kører på port http://localhost:${port}`);
})

