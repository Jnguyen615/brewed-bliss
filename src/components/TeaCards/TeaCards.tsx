import { useState, useEffect } from 'react';
import { teaCardProps } from '../../types';
import StockPhoto from '../../images/stock-tea-image.jpg';
import HeartIcon from '../HeartIcon/HeartIcon';

const TeaCards: React.FC<teaCardProps> = ({ _id, name, description, colorDescription, caffeine, origin, type, tasteDescription, image, index, toggleFavoriteTeas, favoriteTeas }) => {
  const [imageError, setImageError] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const isFavorited = favoriteTeas.some((favTea) => favTea._id === _id);
    setIsFavorite(isFavorited);
  }, [favoriteTeas, _id]);

  const handleImageError = () => {
    setImageError(true); 
  };

  const imageUrl = image && !imageError ? image : StockPhoto;
  const cardColor = index % 2 === 0 ? 'bg-green-400' : 'bg-white';

  return (
    <div className={`text-brown-800 rounded-lg shadow-3xl m-4 ${cardColor}`}>
      <div className="p-4">
        <h2 className="text-lg font-semibold">{name}</h2>
        <div className="tea-card-image-container" style={{ width: '200px', height: '200px' }}>
          <img
            id={_id}
            src={imageUrl}
            alt={name}
            className="tea-card-image rounded-lg"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={handleImageError} 
          />
        </div>
        <div className="mt-2 justify-center flex-col">
          <p className="text-sm">Origin: {origin}</p>
          <p className="text-sm">Type: {type}</p>
          <p className="text-sm">Caffeine Content: {caffeine}</p>
          <p className="text-sm">Color: {colorDescription}</p>
          <p className="text-sm">Description: {description}</p>
          <p className="text-sm">Taste: {tasteDescription}</p>
        </div>
        <HeartIcon isFavorite={isFavorite} toggleFavoriteTeas={toggleFavoriteTeas} tea={{ _id, name, description, colorDescription, caffeine, origin, type, tasteDescription, image, index }} />
      </div>
    </div>
  );
};

export default TeaCards;
