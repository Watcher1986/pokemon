/* eslint-disable react/no-unknown-property */
import { useState, useEffect, useCallback, useMemo } from 'react';

import { getPokemons } from '../../api';

import { ListItemCard } from '../listItemCard';
import { PokemonCard } from '../pokemonCard';

import './pokedex.css';

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});
  const [offset, setOffset] = useState(0);
  const [sort, setSort] = useState(false);

  useEffect(() => {
    getPokemons(offset).then((data) => {
      setPokemons([...pokemons, ...data]);
      setLoading(false);
    });
  }, [offset]);

  const handlePokemon = useCallback((pokemon) => {
    setPokemon(pokemon);
  }, []);

  const handleLoadMore = () => {
    setOffset(offset + 12);
    setLoading(true);
  };

  const handleCloseCard = useCallback(() => setPokemon({}), []);

  const handleSort = () => setSort(!sort);

  const pokemonsList = useMemo(() => {
    const sortedPokemons = [...pokemons].sort((a, b) =>
      a.types[0].type.name.localeCompare(b.types[0].type.name)
    );

    return sort ? sortedPokemons : pokemons;
  }, [pokemons, sort]);

  return (
    <div className='pokedex-container'>
      <h1>Pokedex</h1>
      <span className='items-count'>{pokemons.length} items</span>
      <div className='sort-checkbox-container'>
        <label forhtml='checkbox'>sort by type</label>
        <input onClick={handleSort} type='checkbox' id='checkbox' />
      </div>
      <div className='main-section'>
        <div className='pokedex-content'>
          {loading && (
            <div className='spinner-container'>
              <div className='spinner'></div>
            </div>
          )}
          <div className='list-container'>
            {!!pokemonsList.length &&
              pokemonsList.map((pokemon) => (
                <ListItemCard
                  key={pokemon.id}
                  pokemon={pokemon}
                  onClick={handlePokemon}
                />
              ))}
          </div>
          <button
            disabled={loading}
            className='load-more'
            onClick={handleLoadMore}
          >
            Load more
          </button>
        </div>
        {pokemon?.name && (
          <PokemonCard pokemon={pokemon} onClose={handleCloseCard} />
        )}
      </div>
    </div>
  );
};

export default Pokedex;
