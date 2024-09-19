import React from 'react';

interface FooterProps {
  loading: boolean;
  showLoadMoreButton: boolean;
  onLoadMore: () => void;
  noMorePokemon: boolean;
  noPokemonFound: boolean;
}

const Footer: React.FC<FooterProps> = ({
  loading,
  showLoadMoreButton,
  onLoadMore,
  noMorePokemon,
  noPokemonFound,
}) => (
  <div className="footer">
    {loading && <div className="loading">Loading more Pokémon...</div>}
    {showLoadMoreButton && (
      <button onClick={onLoadMore} className="load-more-button">
        Load More
      </button>
    )}
    {noMorePokemon && <div>No more Pokémon to load</div>}
    {noPokemonFound && <div>No Pokémon found</div>}
  </div>
);

export default Footer;