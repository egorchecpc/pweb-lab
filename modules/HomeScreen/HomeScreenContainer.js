import {connect} from "react-redux";
import { addCharacters, setCharacters, changeFetching, setFavoriteCharacters, addFavChar,removeFavChar } from "../../redux/homeReducer"; 
import HomeScreen from "./HomeScreen";
import charactersAPI from "../../api/api";
import { useEffect } from "react";



const HomeScreenContainer = (props) => {

    useEffect(()=>{
        props.changeFetching()
        charactersAPI.getCharacters(props.pageNum.toString()).then(data=> {props.setCharacters(data.results);props.changeFetching()})
    },[props.pageNum])
    return (<HomeScreen navigation={props.navigation}
                        addCharacters={props.addCharacters}
                        characters={props.characters}
                        pageNum={props.pageNum}
                        isFetching={props.isFetching}
                        favoriteCharacters={props.favoriteCharacters}
                        addFavChar={props.addFavChar}
                        removeFavChar={props.removeFavChar}
                        />)
}

const mapStateToProps = (state) => {
    return {
        characters: state.homePage.characters,
        pageNum: state.homePage.pageNum,
        isFetching: state.homePage.isFetching,
        favoriteCharacters: state.homePage.favoriteCharacters,
    }
}


export default connect(mapStateToProps, {
    addCharacters, setCharacters,changeFetching,setFavoriteCharacters,addFavChar,removeFavChar
})(HomeScreenContainer)