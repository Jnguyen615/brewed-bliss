// import { teaCardProps } from '../../types';
// import StockPhoto from '../../images/stock-tea-image.jpg';

// const TeaCards: React.FC<teaCardProps> = ({ _id, name, description, colorDescription, caffeine, origin, type, tasteDescription, image }) => {
//   return (
//     <div className="bg-green-400 text-brown-800 rounded-lg shadow-3xl m-4">
//       <div className="p-4">
//         <h2 className="text-lg font-semibold">{name}</h2>
//         <div className="tea-card-image-container" style={{ width: '200px', height: '200px' }}>
//           <img
//             id={_id}
//             src={image}
//             alt={name}
//             className="tea-card-image rounded-lg"
//             style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//           />
//         </div>
//         <div className="mt-2">
//           <p className="text-sm">Origin: {origin}</p>
//           <p className="text-sm">Type: {type}</p>
//           <p className="text-sm">Caffeine Content: {caffeine}</p>
//           <p className="text-sm">Color: {colorDescription}</p>
//           <p className="text-sm">Description: {description}</p>
//           <p className="text-sm">Taste: {tasteDescription}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeaCards;

import { useState } from 'react';
import { teaCardProps } from '../../types';
import StockPhoto from '../../images/stock-tea-image.jpg';

const TeaCards: React.FC<teaCardProps> = ({ _id, name, description, colorDescription, caffeine, origin, type, tasteDescription, image, index }) => {
  const [imageError, setImageError] = useState(false);

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
      </div>
    </div>
  );
};

export default TeaCards;
