import React, { useEffect, useState } from "react";
import "../pokemon/style.scss";
import { useSelector, useDispatch } from "react-redux";
import { allPokemon } from "../reducer/pokemon/PokemonSlice";
import Lista from "./Lista";
import Pokeinfo from "./Pokeinfo";
const Card = () => {
    const dispatch = useDispatch();
    const lista = useSelector((state) => state.pokemon.list);
    //Llamando a funcion de redux
    const [pokeInfo, setPokeInfo] = useState();

    useEffect(() => {
        dispatch(allPokemon());
    }, [dispatch]);
    return (
        <div className="container">
            <div className="left-content">
                {lista &&
                    lista.map((item, index) => {
                        return (
                            <div key={index}>
                                <Lista
                                    url={item.url}
                                    infoPokemon={setPokeInfo}
                                />
                            </div>
                        );
                    })}
            </div>
            <div className="right-content">
                <p></p>
                <Pokeinfo data={pokeInfo} />
            </div>
        </div>
    );
};

export default Card;
