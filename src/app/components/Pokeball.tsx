'use client';

import React from 'react';
import Image from 'next/image'; // Importar el componente Image de Next.js
import pokeballImage from "../images/png.png"

interface PokeballProps {
  className?: string;
}

const Pokeball: React.FC<PokeballProps> = ({ className }) => {
  return (
    <div className={`pokeball-container ${className}`}>
      <Image 
        src={pokeballImage} 
        alt="Pokeball" 
        className="pokeball-image" 
        width={150} // Ancho de la imagen
        height={150} // Alto de la imagen
      />
    </div>
  );
};

export default Pokeball;
