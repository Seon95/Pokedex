import { useState, useEffect, useCallback, useMemo } from 'react';

interface Pokemon {
  name: string;
  url: string;
}

export const usePokemonData = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const fetchPokemons = useCallback(async (url: string) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setPokemonList(prev => {
        const existingPokemonNames = new Set(prev.map(pokemon => pokemon.name));
        const newPokemons = data.results.filter((pokemon: Pokemon) => !existingPokemonNames.has(pokemon.name));
        return [...prev, ...newPokemons];
      });
      setNextUrl(data.next);
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPokemons('https://pokeapi.co/api/v2/pokemon/?limit=20');
  }, [fetchPokemons]);

  const filteredPokemonList = useMemo(() => 
    pokemonList.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  [pokemonList, searchTerm]);

  const loadMore = () => {
    if (nextUrl && !loading) {
      fetchPokemons(nextUrl);
    }
  };

  return {
    pokemonList: filteredPokemonList,
    loading,
    searchTerm,
    setSearchTerm,
    loadMore,
    nextUrl,
  };
};
