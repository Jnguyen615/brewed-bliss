import { useState } from 'react';
import { teaCardProps } from '../../types';
import StockPhoto from '../../images/stock-tea-image.jpg';
import HeartIcon from '../HeartIcon/HeartIcon';

const TeaCards: React.FC<teaCardProps> = ({
  _id,
  name,
  description,
  colorDescription,
  caffeine,
  origin,
  type,
  tasteDescription,
  image,
  index,
  toggleFavoriteTeas,
  favoriteTeas,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const imageUrl = image && !imageError ? image : StockPhoto;
  const cardColor = index % 2 === 0 ? 'bg-green-400' : 'bg-white';

  return (
    <div
      className={`text-brown-800 rounded-lg shadow-3xl m-4 ${cardColor}`}
      style={{
        width: '250px',
        height: '350px',
        perspective: '1000px',
        position: 'relative',
        opacity: '0.8'
      }}
    >
      {/* Front of the card */}
      <div
        className={`p-4 flex flex-col justify-center items-center ${isFlipped ? 'hidden' : ''}`}
        onClick={handleClick}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          zIndex: isFlipped ? -1 : 1,
        }}
      >
        <h2 className="text-lg font-semibold">{name}</h2>
        <div className="tea-card-image-container" style={{ width: '200px', height: '200px' }}>
          <img
            src={imageUrl}
            alt={name}
            className="tea-card-image rounded-lg cursor-pointer"
            style={{ width: '100%', height: '100%', objectFit: 'cover',  opacity: 1}}
            onError={handleImageError}
            
          />
        </div>
      </div>
      {/* Back of the card */}
      <div
        className={`p-4 flex flex-col justify-center items-center ${isFlipped ? '' : 'hidden'}`}
        onClick={handleClick}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          zIndex: isFlipped ? 1 : -1,
          transform: `rotateY(${isFlipped ? '0' : '0'}deg)`,
        }}
      >
        <h2 className="text-lg font-semibold">{name}</h2>
        <div className="mt-2 justify-center flex-col">
          <p className="text-sm">Origin: {origin}</p>
          <p className="text-sm">Type: {type}</p>
          <p className="text-sm">Caffeine Content: {caffeine}</p>
          <p className="text-sm">Color: {colorDescription}</p>
          {description && <p className="text-sm">Description: {description}</p>}
          <p className="text-sm">Taste: {tasteDescription}</p>
        </div>
        <HeartIcon
          isFavorite={favoriteTeas.some(tea => tea._id === _id)}
          toggleFavoriteTeas={toggleFavoriteTeas}
          tea={{
            _id,
            name,
            description,
            colorDescription,
            caffeine,
            origin,
            type,
            tasteDescription,
            image,
            index,
          }}
        />
      </div>
    </div>
  );
};

export default TeaCards;
