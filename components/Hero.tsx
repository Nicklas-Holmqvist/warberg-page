import React from 'react';

interface HeroProps {}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <article>
      <h1 className="text-3xl font-bold underline">HERO</h1>
    </article>
  );
};
