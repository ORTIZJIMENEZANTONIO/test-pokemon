const express = require ('express');
const router = express.Router();
const pok = require('../model/pokemon');


router.get('/api/get_pokemon/:pokemon', (req, res) => {
   let pokemon = req.params.pokemon;
    if(/[a-zA-Z]+/.test(pokemon)){
        pok.getPokemonByName (pokemon)
        .then(function(response) {
          res.json({
              id: response.id,
              name: response.name, 
              sprites: {
                  front_shine: response.sprites.front_shiny,
                  back_shiny: response.sprites.back_shiny
              },
              moves: response.moves[0].move
          });
        })
        .catch(function(error) {
          res.status(400).send(error);
        });
    }else if(/[0-9]+/.test(pokemon)){
        pok.getPokemonByName (pokemon)
        .then(function(response) {
          res.json({
            id: response.id,
            name: response.name, 
            sprites: {
                front_shine: response.sprites.front_shiny,
                back_shiny: response.sprites.back_shiny
            },
            moves: response.moves[0].move
        });
        })
        .catch(function(error) {
          res.status(400).send(error);
        });
    }else{
        res.json({
            status: '400',
            message: 'You must use int or string valido'
        });
    }   
   
});

router.get('/api/get_list/:from/:size', (req, res) => {
    let from = req.params.from;
    let size = req.params.size;
    if(/[0-9]+/.test(from) && /[0-9]+/.test(size)){
        console.log("valido");
        res.json({
            status: '200'
        });
    }else{
        res.json({
            status: '400',
            message: 'You must use int in two parameters'
        });
    }
});





router.get('*', (req, res) =>{
    res.status(404).redirect(__dirname);
});




module.exports = router;