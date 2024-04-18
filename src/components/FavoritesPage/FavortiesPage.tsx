import { Link } from 'react-router-dom';

const FavoritesPage = () => {
  return (
    <main>
      <h1>Favorites!</h1>
      <Link to='/'>
      <button className="bg-green-700 text-white px-4 rounded-md border-b-4 border-brown-800">Home</button>
      </Link>

    </main>
  )
}

export default FavoritesPage