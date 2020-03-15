const express = require ('express');
const router = express.Router();
const pok = require('../model/pokemon');


router.get('/api/get_pokemon/:pokemon', (req, res) => {
   let pokemon = req.params.pokemon;
    if(/^[a-zA-Z]+$/.test(pokemon)){
        pok.getPokemonByName (pokemon)
        .then(response => {
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
          res.status(400).json(error);
        });
    }else if(/^[0-9]+$/.test(pokemon)){
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
          res.status(400).json(error);
        });
    }else{
        res.json({
            status: '400',
            message: 'You must use int or string valido'
        });
    }   
   
});

router.get('/api/get_list/:from/:size', (req, res) => {
    from = req.params.from;
    size = req.params.size;
     
    if(/^[0-9]+$/.test(from) && /^[0-9]+$/.test(size)){
        to   = parseInt(from) + parseInt(size);
        array_pokemon = [];
        while(parseInt(from) <= to ){
            array_pokemon.push("https://pokeapi.co/api/v2/pokemon/" + from + "/");
            ++from;
        }

        pok.resource(  array_pokemon )
        .then(function(response){
           // console.log(response.length);
            let pokemon_list = [];
            let size = response.length;
            i = 0; 
            while(i < size){
                pokemon_list.push({
                    id: response[i].id,
                    name: response[i].name, 
                    sprites: {
                        front_shine: response[i].sprites.front_shiny,
                        back_shiny: response[i].sprites.back_shiny
                    },
                 moves: response[i].moves[0].move 
                });
                i++;
            }

            res.json(pokemon_list);
        })
        .catch(function(error){
            res.json({
                status: '400',
                message: error.message
            });
        });
        
    }else{
        res.json({
            status: '400',
            message: 'You must use int in two parameters'
        });
    }
});



router.get('/api/get_random_pokemon/', (req, res) => {
    const num = Math.round(Math.random() * (800 - 1)) + 1
         pok.getPokemonByName (parseInt(num))
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
           res.status(400).json(error);
         });
    
 });



module.exports = router;