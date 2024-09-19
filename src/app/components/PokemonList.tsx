import React from 'react';
import PokemonCard from './PokemonCard';

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonListProps {
  pokemonList: Pokemon[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemonList }) => (
  <div className="pokemon-list">
    {pokemonList.map((pokemon) => (
      <PokemonCard key={pokemon.name} {...pokemon} />
    ))}
  </div>
);

export default PokemonList;