
import stockImage from '../../images/stock-tea-image.jpg';

import { teaCardProps } from '../../types';

const TeaCards: React.FC<teaCardProps> = ({ _id, name, description, colorDescription, caffeine, origin, type, tasteDescription, image }) => {
  return (
    <div className="bg-green-400 text-brown-800 rounded-lg shadow-3xl p-4 m-4 flex flex-wrap justify-between">
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
        <h2 className="text-lg font-semibold">{name}</h2>
        <img
          id={_id}
          src={image}
          alt={name}
          className="tea-card-image mt-2 max-w-xs w-full rounded-lg"
          style={{ maxHeight: '200px' }}
        />
        <p>Origin: {origin}</p>
        <p>Type: {type}</p>
        <p>Caffeine Content: {caffeine}</p>
        <p>Color: {colorDescription}</p>
        <p>Description: {description}</p>
        <p>Taste: {tasteDescription}</p>
      </div>
    </div>
  );
};

export default TeaCards;