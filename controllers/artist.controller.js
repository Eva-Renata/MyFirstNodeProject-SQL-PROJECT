import ArtistModel from '../models/artist.model.js';

class ArtistController {
    constructor() {}


  /*SONG CONTROLLER METHODS BEGIN*/
  list = async (req, res) => {
    const result = await ArtistModel.findAll({
        order: ['name']
    })
    res.json(result)
}

    //efter ID (1stk)
    get = async (req, res) => {
        const result = await ArtistModel.findAll({
            where: { id: req.params.id}
        })
        if(!result.length){
            res.send(404);
        }
        res.json(...result)
    }

    //POST en ny sang  (CREATE)
    create = async (req, res) => {
        const {name} = req.body;

        if(name) {
            const model = await ArtistModel.create(req.body)
            return res.json({newid: model.id})
        } else {
            res.send(418)
        }
    }

    //PUT en sang (updte)
    update = async (req, res) => {
        const {name} = req.body;
        const id = req.params.id
        if(name) {
            const model = await ArtistModel.update(req.body, {where: { id: id}})
            return res.json({status: true})
        } else {
            res.send(418)
        }
    }

    //DELETE
    delete = async (req, res) => {
        try {
            await ArtistModel.destroy({where: {id:req.params.id}})
            res.sendStatus(200)
        } catch (err) {
            res.send(err)
        }
    }

    //SEARCH
    search = async (req, res) => {
        const result = await model.search(req, res);
        res.json(result)  //vi udskriver i browseren
    }
}

export default ArtistController;