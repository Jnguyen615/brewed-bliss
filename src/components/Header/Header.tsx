import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex flex-col text-center mt-1'>
      <header className="text-white py-4 font-bold text-6xl text-center border-brown-800 font-zeyada">💚 Brewed Bliss 💚</header>
      <Link to="/favorites">
      <button className="bg-green-500 hover:bg-green-70 text-white py-2 px-4 rounded-md mt-2 border-brown-800">Favorites</button>
      </Link>
    </div>
  );
};

export default Header;