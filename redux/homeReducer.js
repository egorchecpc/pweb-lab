
const SET_CHARACTERS = 'SET-CHARACTERS';
const ADD_CHARACTERS = 'ADD-CHARACTERS';
const CHANGE_FETCHING = 'CHANGE_FETCHING';
const SET_FAVORITE_CHARACTERS = 'SET_FAVORITE_CHARACTERS';
const ADD_FAVORITE_CHARACTER = 'ADD_FAVORITE_CHARACTER';
const REMOVE_FAVORITE_CHARACTER = 'REMOVE_FAVORITE_CHARACTER';

const initialState = {
    characters: [],
    pageNum:1,
    isFetching: false,
    favoriteCharacters: [],
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
        case CHANGE_FETCHING:
            return{
                ...state,
                isFetching:!state.isFetching
            }
        case SET_FAVORITE_CHARACTERS:
            return {
                ...state,
                favoriteCharacters: action.characters
            }
        case ADD_FAVORITE_CHARACTER:
            return {
                ...state,
                favoriteCharacters: [...state.favoriteCharacters,action.character],
            }
        case REMOVE_FAVORITE_CHARACTER:
            return {
                ...state,
                favoriteCharacters: state.favoriteCharacters.filter((item)=>item.id!==action.id)
            }
        default:
            return state;
    }
}



export const setCharacters = (characters) => ({type: SET_CHARACTERS, characters});
export const addCharacters = () => ({type: ADD_CHARACTERS});
export const changeFetching = () => ({type: CHANGE_FETCHING});
export const setFavoriteCharacters = (characters) => ({ type: SET_FAVORITE_CHARACTERS, characters });
export const addFavChar = (character) => ({type:ADD_FAVORITE_CHARACTER,character });
export const removeFavChar = (id) => ({type: REMOVE_FAVORITE_CHARACTER, id})

export default homeReducer;