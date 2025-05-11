import React, { useState } from "react"
import { useEffect } from "react"
import FlipCardBootstrap from "../components/FlipCard"
import { useParams } from "react-router-dom"
import axios from "axios"

export const Regions = ()=> {
    const { id } = useParams();
    const [reg, setReg] = useState("");
    const [pokemons, setPokemons] = useState([]);
    
    useEffect(() => {
        if (id) {
          getPokemons(parseInt(id)); // Passa o ID da região para pegar os Pokémons
        }
      }, [id]);

    const getPokemons = (region: number) => {
        var endpoints = [];
        let i = 0;
        let n = 0;
        switch (region) {
            case 1: // Geração I (Kanto)
              i = 1;
              n = 151;
              setReg("Kanto");
              break;
            case 2: // Geração II (Johto)
              i = 152;
              n = 251;
              setReg("Johto");
              break;
            case 3: // Geração III (Hoenn)
              i = 252;
              n = 386;
              setReg("Hoenn");
              break;
            case 4: // Geração IV (Sinnoh)
              i = 387;
              n = 493;
              setReg("Sinnoh");
              break;
            case 5: // Geração V (Unova)
              i = 494;
              n = 649;
              setReg("Unova");
              break;
            case 6: // Geração VI (Kalos)
              i = 650;
              n = 721;
              setReg("Kalos");
              break;
            case 7: // Geração VII (Alola)
              i = 722;
              n = 809;
              setReg("Aloha");
              break;
            case 8: // Geração VIII (Galar)
              i = 810;
              n = 898;
              setReg("Galar");
              break;
            case 9: // Geração IX (Paldea)
              i = 899;
              n = 1012;
              setReg("Paldea");
              break;
            default:
              return;
        }
        for (var index = i; index <= n; index++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${index}`);
        }
        var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
            .then((res) => setPokemons(res))
            .catch((err) => console.log(err));
    };
    
    return (
        <div>
            <div className="container">
                <h1 className="text-center mt-5">{reg}</h1>
                <div className="d-flex flex-wrap justify-content-center mt-5">
                    {pokemons.map((pokemon) => (
                        <FlipCardBootstrap 
                        key={pokemon.data.name} 
                        name={pokemon.data.name} 
                        img={pokemon.data.sprites.front_default}
                        fallbackImg="../assets/fallbackPkm.png"/>
                    ))}
                </div>
            </div>            
        </div>
        
    )
}