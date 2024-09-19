import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface PokemonCardProps {
  name: string;
  url: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, url }) => {
  const router = useRouter();
  const pokemonId = url.split('/')[6];

  return (
    <div className="pokemon-item" onClick={() => router.push(`/details/${name}`)}>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
        alt={name}
        width={100}
        height={100}
        className="pokemon-image"
      />
      <h2 className="pokemon-name">{name}</h2>
      
    </div>
    
  );
};

export default PokemonCard;