/* eslint-disable react/prop-types */
import { capitalize } from '../../utils/capitalize';
import { getFormatedSkill } from '../../utils/formatSkill';

import './pokemon-card.css';

export const PokemonCard = ({ pokemon, onClose }) => {
  return (
    <div className='poke-card'>
      <div className='img-box'>
        <span className='close-icon' onClick={onClose} />
        <img
          src={pokemon?.sprites?.other.dream_world.front_default}
          alt='Avatar'
          className='poke-img'
        />
      </div>
      <h2 className='poke-name'>
        {capitalize(pokemon?.name)} #{pokemon?.id}
      </h2>
      <div className='poke-info-box'>
        <table>
          <tbody>
            <tr>
              <td>Type</td>
              <td>{capitalize(pokemon?.types[0].type.name)}</td>
            </tr>
            {pokemon?.stats.map((stat) => (
              <tr key={stat.stat.name}>
                <td>{getFormatedSkill(stat.stat.name)}</td>
                <td>{stat.base_stat}</td>
              </tr>
            ))}
            <tr>
              <td>Weight</td>
              <td>{pokemon?.weight}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
