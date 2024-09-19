import React from 'react';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header: React.FC<HeaderProps> = ({ searchTerm, onSearchChange }) => (
  <header className="header">
    <h1 className="title">Pokédex</h1>
    <input
      type="text"
      placeholder="Search Pokémon"
      value={searchTerm}
      onChange={onSearchChange}
      className="search-input"
    />
  </header>
);

export default Header;