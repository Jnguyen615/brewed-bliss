import { Link } from 'react-router-dom';
import Search from '../TeaCards/TeaCards';

const Header = () => {
  return (
    <div>
      <header className="bg-green-700 text-white py-4 font-bold text-6xl text-center border-b-4 border-brown-800 font-zeyada">💚 Brewed Bliss 💚</header>
      {/* <Search /> */}
      <Link to="/favorites">
      <button className="bg-green-700 text-white py-2 px-4 rounded-md border-b-4 border-brown-800">Favorites</button>
      </Link>
    </div>
  );
};

export default Header;