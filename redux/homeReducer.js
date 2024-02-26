const SET_CHARACTERS = 'SET-CHARACTERS';
const ADD_CHARACTERS = 'ADD-CHARACTERS';
const ADD_TO_FAV ='ADD-TO-FAV';
const CHANGE_FETCHING = 'CHANGE_FETCHING'

const initialState = {
    characters: [],
    pageNum:1,
    isFetching: false,
    fav_char: [],
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHARACTERS:
            const newCharacters = action.characters.filter(newCharacter => !state.characters.some(existingCharacter => existingCharacter.id === newCharacter.id));
            return {...state, characters: [...state.characters, ...newCharacters]};
        case ADD_CHARACTERS:
            return {
                ...state,
                pageNum: ++state.pageNum
            }
        case ADD_TO_FAV:
            return{
                ...state,
                fav_char:[...state.fav_char, action.character]
            }
        case CHANGE_FETCHING:
            return{
                ...state,
                isFetching:!state.isFetching
            }
        default:
            return state;
    }
}



export const setCharacters = (characters) => ({type: SET_CHARACTERS, characters});
export const addCharacters = () => ({type: ADD_CHARACTERS});
export const addFavChar = (character) => ({type: ADD_TO_FAV, character});
export const changeFetching = () => ({type: CHANGE_FETCHING})

export default homeReducer;