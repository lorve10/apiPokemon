import { configureStore  } from "@reduxjs/toolkit";
import  listPokemon  from "./pokemon/PokemonSlice";
export const store = configureStore({
    reducer:{
        pokemon: listPokemon,
    }
})
