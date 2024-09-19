import React from 'react';
import Image from 'next/image';

interface PokemonImagesProps {
  name: string;
  frontDefault: string;
  frontShiny: string;
}

const PokemonImages: React.FC<PokemonImagesProps> = ({ name, frontDefault, frontShiny }) => (
  <div className="pokemon-images">
    <Image
      src={frontDefault}
      alt={name}
      width={400}
      height={400}
      className="pokemon-imagedetail"
    />
    <Image
      src={frontShiny}
      alt={`${name} shiny`}
      width={400}
      height={400}
      className="pokemon-imagedetail"
    />
  </div>
);

export default PokemonImages;