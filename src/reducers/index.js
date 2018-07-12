//this file will be the root of reducers for our app
export const ADD_CHARACTER = 'ADD_CHARACTER';

export default function addCharacterById(id) {
    const action = {
      type: ADD_CHARACTER,
      id
    }
    return action;
  }

