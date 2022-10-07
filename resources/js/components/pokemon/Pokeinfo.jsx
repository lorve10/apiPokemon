import React from "react";

const Pokeinfo = ({ data }) => {
    return (
        <>
            {data ? (
                <>
                    <div
                        key={data.id}
                        className="card text-bg-secondary border-success"
                        style={{ width: "20rem" }}
                    >
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
                            className="card-img-top"
                            alt="aqui va el socio pokemon"
                        />
                        <div className="card-body">
                            <h1 className="card-title">{data.name}</h1>
                            <div className="abilities">
                                {data.abilities.map((poke) => {
                                    return (
                                        <>
                                            <div className="group">
                                                <p>{poke.ability.name}</p>
                                            </div>
                                        </>
                                    );
                                })}
                            </div>
                            <ul className="list-group list-group-flush rounded-4">
                                {data.stats.map((poke) => {
                                    return (
                                        <li className="list-group-item bg-dark">
                                            <div className="stats">
                                                <p className="text-info">
                                                    {poke.stat.name}:{" "}
                                                </p>
                                                <p className="text-success">
                                                    {poke.base_stat}
                                                </p>
                                            </div>{" "}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </>
            ) : (
                <></>
            )}
        </>
    );
};

export default Pokeinfo;
