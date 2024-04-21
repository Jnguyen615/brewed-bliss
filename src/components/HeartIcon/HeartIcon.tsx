import React from 'react';
import { HeartIconProps } from '../../types';

const HeartIcon: React.FC<HeartIconProps> = ({ isFavorite, toggleFavoriteTeas, tea }) => {
 
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event propagation to the parent elements
    toggleFavoriteTeas(tea);
  };

  return (
    <div className='collected-mount-icon' onClick={handleFavoriteClick}>
      {isFavorite ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          className="heart-icon text-green-500 hover:text-green-700 transform hover:scale-110 transition duration-300 ease-in-out cursor-pointer"
        >
          <path
            fill="green"
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          className="heart-icon text-green-500 hover:text-green-700 transform hover:scale-110 transition duration-300 ease-in-out cursor-pointer"
        >
          <path
            fill="none"
            d="M0 0h24v24H0V0z"
          />
          <path
            fill="none"
            stroke="green"
            strokeWidth="2"
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>
      )}
    </div>
  );
};

export default HeartIcon;
