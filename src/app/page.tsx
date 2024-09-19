'use client';

import React from 'react';
import Header from './components/Header';
import PokemonList from './components/PokemonList';
import Footer from './components/Footer';
import { usePokemonData } from './hooks/usePokemonData';
import Pokeball from './components/Pokeball';

const HomePage: React.FC = () => {
  const {
    pokemonList,
    loading,
    searchTerm,
    setSearchTerm,
    loadMore,
    nextUrl,
  } = usePokemonData();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const showLoadMoreButton = searchTerm === '' && !loading && !!nextUrl;
  const noMorePokemon = !nextUrl && searchTerm === '' && !loading;
  const noPokemonFound = pokemonList.length === 0 && searchTerm !== '';

  return (
    <div className="page">
      <Pokeball className="pokeball1" />
      <Pokeball className="pokeball2" />
      <Pokeball className="pokeball3" />
      <Pokeball className="pokeball4" />
      <Pokeball className="pokeball5" />
      <Pokeball className="pokeball6" />

      <div className="container">
        <Header searchTerm={searchTerm} onSearchChange={handleSearch} />
        <PokemonList pokemonList={pokemonList} />
        <Footer
          loading={loading}
          showLoadMoreButton={showLoadMoreButton}
          onLoadMore={loadMore}
          noMorePokemon={noMorePokemon}
          noPokemonFound={noPokemonFound}
        />
      </div>
    </div>
  );
};

export default HomePage;
