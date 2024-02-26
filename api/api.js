import axios from "axios"

const charactersAPI = {
    getCharacters: (pageNum)=> {
        return axios.get(`https://rickandmortyapi.com/api/character/?page=${pageNum}`).then(response=> response.data)
    }
}

export default charactersAPI