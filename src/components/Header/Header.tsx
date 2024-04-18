import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header className="bg-green-700 text-white py-4 font-bold text-4xl text-center uppercase border-b-4 border-brown-800 flex-grow font-zeyada">💚 Brewed Bliss 💚</header>
      <Link to="/favorites">
      <button className="bg-green-700 text-white py-2 px-4 rounded-md border-b-4 border-brown-800">Favorites</button>
      </Link>
    </div>
  );
};

export default Header;