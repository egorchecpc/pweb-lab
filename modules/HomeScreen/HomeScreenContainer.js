import {connect} from "react-redux";
import { addCharacters, setCharacters, addFavChar, changeFetching } from "../../redux/homeReducer"; 
import HomeScreen from "./HomeScreen";
import charactersAPI from "../../api/api";
import { useEffect } from "react";


const HomeScreenContainer = (props) => {
    useEffect(()=>{
        props.changeFetching()
        charactersAPI.getCharacters(props.pageNum.toString()).then(data=> {props.setCharacters(data.results);props.changeFetching()})
    },[props.pageNum])
    return (<HomeScreen navigation={props.navigation}
                        fav_char={props.fav_char}
                        addFavChar={props.addFavChar}
                        addCharacters={props.addCharacters}
                        characters={props.characters}
                        pageNum={props.pageNum}
                        isFetching={props.isFetching}/>)
}

const mapStateToProps = (state) => {
    return {
        characters: state.homePage.characters,
        pageNum: state.homePage.pageNum,
        isFetching: state.homePage.isFetching,
        fav_char: state.homePage.fav_char
    }
}


export default connect(mapStateToProps, {
    addCharacters, setCharacters, addFavChar,changeFetching
})(HomeScreenContainer)