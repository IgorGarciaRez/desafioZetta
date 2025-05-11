import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'; 
import FlipCardBootstrap from '../components/FlipCard';

export const Search = () => {
    const { pkm } = useParams();
    const [pokemon, setPokemon] = useState<any>(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkm}`);
                if (!res.ok) throw new Error('Pokémon não encontrado');
                const data = await res.json();
                setPokemon(data);
                setError('');
            } catch (err) {
                setError('Pokémon não encontrado');
                setPokemon(null);
            }
        };

        if (pkm) fetchPokemon();
    }, [pkm]);

    return (
        <div className="container mt-5 text-center">
            {error && <p className="text-danger">{error}</p>}
            {pokemon && (
                <>
                    <div className="container">
                        <h1 className="text-center mt-5">{pokemon.name}</h1>
                        <div className="d-flex flex-wrap justify-content-center mt-5">
                            <FlipCardBootstrap
                                key={pokemon.name}
                                name={pokemon.name}
                                img={pokemon.sprites.front_default}
                                fallbackImg="../assets/fallbackPkm.png" />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
