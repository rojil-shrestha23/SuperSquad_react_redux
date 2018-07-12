//this file will be the root of reducers for our app
import characters_json from '../data/characters.json';

function characters(state= characters_json, action){
    switch(action.type){
        default:    
            return state;
    }
}

export default characters;  