'use client';

import React from 'react';
import Link from 'next/link';
import PokemonImages from '../../components/PokemonImages';
import PokemonInfo from '../../components/PokemonInfo';
import AbilityList from '../../components/AbilityList';
import StatList from '../../components/StatList';
import { usePokemonDetails } from '../../hooks/usePokemonDetails';
import { capitalizeFirstLetter } from '../../utils/stringUtils';

const PokemonDetailsPage = ({ params }: { params: { name: string } }) => {
  const { name } = params;
  const { pokemon, loading, error } = usePokemonDetails(name);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!pokemon) return <div className="not-found">Pokémon not found</div>;

  return (
    <div className="page">
      <Link href="/" className="home-button">
        Home
      </Link>
      <div className="container">
        <h1
          style={{
            textAlign: 'center',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#4a90e2',
           
          }}
        >
          {capitalizeFirstLetter(pokemon.name)}
        </h1>
        <div className="pokemon-details">
          <PokemonImages
            name={pokemon.name}
            frontDefault={pokemon.sprites.other['official-artwork'].front_default}
            frontShiny={pokemon.sprites.other['official-artwork'].front_shiny}
          />
          <div className="pokemon-info">
            <PokemonInfo id={pokemon.id} weight={pokemon.weight} height={pokemon.height} />
            <AbilityList abilities={pokemon.abilities} />
            <StatList stats={pokemon.stats} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailsPage;
