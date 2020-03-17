#Pokemon-test


**Requirements:**
- installed nodejs
- installed npm

**Run project**
You can run this project with line command npm run test wich run with nodemon to monitoring all changes in coding
to veify if it run, in console you must see the message "running in the port 5000", so, if you change this port in index.js, the message will change to number port that you wrote.

**Use Functions**
- Get pokemon
  To use this function, you need to use /api/get_pokemon/:pokemon
  where :pokemon is the name or id pokemon, this param must be integer greater than or equals to 0 (in id case) or must be string made up width alphabet in upper or lower, excluding special character like $%&$&ñ etc.
  In right case the function will return status 200 and json with:
   - id
   - name
   - sprite (front and back)
   - one move
  In case when includes special characters or negative inteer will return a json with status:"400" and message: "You must use int or string valido".
  In case that the pokemon don´t exist will return error with  message: "Request failed with status code 404".

- Get random pokemon
   To use this function, you need to use /api/get_random_pokemon/ and wil return one of 800 pokmenns
    In right case will return status 200 and json with:
   - id
   - name
   - sprite (front and back)
   - one move
  In error case will return json  with  message: "Request failed with status code 404".
  
- Get list pokemon
   To use this function, you need to use /api/get_list/:from/:size
   Where :from must be Integer greater than 0 and :size must be integer greater than or equals to 0.
    In right case yhe function will return status 200 and object array with the following data in each object:
   - id
   - name
   - sprite (front and back)
   - one move
  In error case will return json  with  message: "Request failed with status code 404".
  
  
