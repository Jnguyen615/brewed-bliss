import { Link } from 'react-router-dom';

import { FavoritesPageProps } from '../../types';
import TeaCards from '../TeaCards/TeaCards';

const FavoritesPage: React.FC<FavoritesPageProps> = ({
  favoriteTeas,
  toggleFavoriteTeas,
}) => {
  console.log('favoriteTeas', favoriteTeas);

  const displayFavoriteTeas = favoriteTeas.map((tea, index) => (
    <div className='p-4 flex flex-col justify-center items-center'>
      <TeaCards
        key={tea._id}
        _id={tea._id}
        name={tea.name}
        description={tea.description}
        colorDescription={tea.colorDescription}
        caffeine={tea.caffeine}
        origin={tea.origin}
        type={tea.type}
        tasteDescription={tea.tasteDescription}
        image={tea.image}
        index={index}
        toggleFavoriteTeas={toggleFavoriteTeas}
        favoriteTeas={favoriteTeas}
      />
    </div>
  ));
  console.log('displayFavoriteTeas:', displayFavoriteTeas);

  return (
    <main className='flex flex-col items-center justify-center'>
      <h1 className="text-white py-4 font-bold text-6xl text-center border-brown-800 font-zeyada" >Favorites</h1>
      <Link to='/'>
        <button className='bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md mt-2 rounded-md border-brown-800'>
          Home
        </button>
      </Link>
      {!displayFavoriteTeas.length && (
        <div>
          <h1>No Favorite Teas!, add some</h1>
        </div>
      )}
            <div className="grid grid-cols-5 gap-4">
        {displayFavoriteTeas}
      </div>

    </main>
  );
};

export default FavoritesPage;
