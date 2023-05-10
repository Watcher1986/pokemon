/* eslint-disable react/prop-types */
import { capitalize } from '../../utils/capitalize';
import { typesColors } from '../../static/typesMapper';
import './list-item.css';

export const ListItemCard = ({ pokemon, onClick }) => {
  return (
    <div className='card' onClick={() => onClick(pokemon)}>
      <img
        src={pokemon?.sprites.other.dream_world.front_default}
        alt='Avatar'
        className='avatar'
      />
      <h3 className='avatar-name'>{capitalize(pokemon?.name)}</h3>
      <div className='typos-box'>
        {pokemon?.types.map(({ type }) => (
          <span
            className='type-tab'
            key={type?.name}
            style={{ background: `${typesColors[type?.name]}` }}
          >
            {capitalize(type?.name)}
          </span>
        ))}
      </div>
    </div>
  );
};
