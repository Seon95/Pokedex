import React from 'react';

interface PokemonInfoProps {
  id: number;
  weight: number;
  height: number;
}

const PokemonInfo: React.FC<PokemonInfoProps> = ({ id, weight, height }) => (
    <div className="info-section">
      <h2>Details</h2>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Weight:</strong> {weight / 10} kg</p>
      <p><strong>Height:</strong> {height / 10} m</p>
    </div>
  );

export default PokemonInfo;