import {connect} from "react-redux";
import { addCharacters, setCharacters, changeFetching, setFavoriteCharacters, addFavChar,removeFavChar } from "../../redux/homeReducer"; 
import HomeScreen from "./HomeScreen";
import charactersAPI from "../../api/api";
import { useEffect } from "react";
import { getFavChars, setFavChars } from "../../storage";


const HomeScreenContainer = (props) => {
    useEffect(()=>{
        props.changeFetching()
        charactersAPI.getCharacters(props.pageNum.toString()).then(data=> {props.setCharacters(data.results);props.changeFetching()})
    },[props.pageNum])
    useEffect(() => {
        const fetchData = async () => {
            const storedFavChars = await getFavChars();
            console.log('Async-data:', storedFavChars);
            if (storedFavChars) {
                props.setFavoriteCharacters(storedFavChars);
            } else {
                console.log('Async Storage пуст');
            }
        };
        fetchData();
    }, []);
    // useEffect(()=>{
    //     const storedFavChars = getFavChars();
    //     console.log('Async-data:',storedFavChars)
    //     if (storedFavChars) {
    //     props.setFavoriteCharacters(storedFavChars);
    //     } else {
    //         console.log('Async Storage пуст');
    //     }
    // }, [])
    return (<HomeScreen navigation={props.navigation}
                        addCharacters={props.addCharacters}
                        characters={props.characters}
                        pageNum={props.pageNum}
                        isFetching={props.isFetching}
                        favoriteCharacters={props.favoriteCharacters}
                        addFavChar={props.addFavChar}
                        removeFavChar={props.removeFavChar}
                        setFavChars={setFavChars}
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