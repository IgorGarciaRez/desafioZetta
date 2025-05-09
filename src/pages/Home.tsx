import React, { useState } from "react"
import { useEffect } from "react"
import FlipCardBootstrap from "../components/FlipCard"
import NavbarBootstrap from "../components/Navbar"
import axios from "axios"

export const Home = ()=> {

    const [pokemons, setPokemons] = useState([]);    
    useEffect(() => {
        getPokemons();
    }, []);

    const getPokemons = () => {
        var endpoints = [];
        for (var i = 1; i < 50; i++){
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
        }
        var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
            .then((res) => setPokemons(res))
            .catch((err) => console.log(err));


        /*axios.get("https://pokeapi.co/api/v2/pokemon?limit=50")
        .then((res) => setPokemons(res.data.results))
        .catch((err) => console.log(err))*/
    };
    
    return (
        <div>
            <NavbarBootstrap/>
            <div className="d-flex flex-wrap justify-content-center mt-5">
                {pokemons.map((pokemon) => (
                    <FlipCardBootstrap key={pokemon.data.name} name={pokemon.data.name} img={pokemon.data.sprites.front_default}/>
                ))}
            </div>
            
        </div>
        
    )
}