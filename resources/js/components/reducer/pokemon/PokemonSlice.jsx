import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
      list: [],
      isLoading:true
    },
    reducers: {
        setPokemon: (state,action) => {
        state.list = action.payload
        state.isLoading = false
      }
    }
  })

  // Action creators are generated for each case reducer function
  export const { setPokemon } = pokemonSlice.actions

  export default pokemonSlice.reducer

 export const allPokemon =()=>(dispatch)=>{
        axios
        .get('https://pokeapi.co/api/v2/pokemon/')
        .then(response=>{
            let res = {...response};
            dispatch(setPokemon(response.data.results))
        })
        .catch(error=>{
                console.log(error);
        })
  }


