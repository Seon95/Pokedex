import React from 'react';
import { capitalizeFirstLetter } from '../utils/stringUtils';


interface AbilityListProps {
  abilities: { ability: { name: string } }[];
}

const AbilityList: React.FC<AbilityListProps> = ({ abilities }) => (
  <div className="info-section">
    <h2>Abilities</h2>
    <ul className="ability-list">
      {abilities.map((ability, index) => (
        <li key={index}>{capitalizeFirstLetter(ability.ability.name)}</li>
      ))}
    </ul>
  </div>
);

export default AbilityList;
