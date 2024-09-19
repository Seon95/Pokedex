import { useState, useEffect } from 'react';

interface PokemonDetails {
  name: string;
  id: number;
  height: number;
  weight: number;
  abilities: { ability: { name: string } }[];
  stats: { stat: { name: string }; base_stat: number }[];
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
        front_shiny: string;
      };
    };
  };
}

export const usePokemonDetails = (name: string) => {
  const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!response.ok) {
          throw new Error('Failed to fetch Pokémon details');
        }
        const data: PokemonDetails = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error('Error fetching Pokémon details:', error);
        setError('Failed to load Pokémon details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonDetails();
  }, [name]);

  return { pokemon, loading, error };
};