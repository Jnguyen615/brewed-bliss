import { Link } from 'react-router-dom';
import { FavoritesPageProps } from '../../types';
import TeaCards from '../TeaCards/TeaCards';


const FavoritesPage: React.FC<FavoritesPageProps> = ({ favoriteTeas, toggleFavoriteTeas }) => {
  
  console.log('favoriteTeas', favoriteTeas)
  const displayFavoriteTeas = favoriteTeas.map((tea, index) => (
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
))
console.log('displayFavoriteTeas:', displayFavoriteTeas);

  return (
    <main>
      <h1>Favorites!</h1>
      <Link to='/'>
      <button className="bg-green-500 hover:bg-green-700 text-white px-4 rounded-md border-brown-800">Home</button>
      </Link>
      {!displayFavoriteTeas.length && (
        <div>
          <h1>No Favorite Teas!, add some</h1>
        </div>
      )}
      <div>{displayFavoriteTeas}</div>

    </main>
  )
}

export default FavoritesPage