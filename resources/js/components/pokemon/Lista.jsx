import React, { useEffect, useState } from "react";
import axios from "axios";

const Lista = ({ url, infoPokemon }) => {
    const [getPoke, setGetPoke] = useState([]);

    useEffect(() => {
        async function api() {
            let result = await axios.get(url);

            setGetPoke((state) => {
                state = [...state, result.data];
                state.sort((a, b) => a.CostSort - b.CostSort);
                return state;
            });
        }
        api();
    }, []);

    return (
        <div>
            {getPoke.map((item, index) => {
                return (
                    <>
                        <div
                            className="card text-bg-dark  mb-3"
                            style={{ width: "10rem" }}
                            key={item.id}
                            onClick={() => infoPokemon(item)}
                        >
                            <img
                                src={item.sprites.front_default}
                                className="card-img-top"
                                alt="pokemon"
                            />
                            <hr class="solid"></hr>
                            <div className="card-body">
                                <h5 className="card-title text-center">
                                    {item.name}
                                </h5>
                                <h3 className="card-text text-center">
                                    #{item.id}{" "}
                                </h3>
                            </div>
                        </div>
                    </>
                );
            })}
        </div>
    );
};

export default Lista;
