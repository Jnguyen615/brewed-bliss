import Header from './components/Header/Header';
import Search from './components/Search/Search';
import teaBackground from '../src/images/tea-background.jpg'

function App() {
  return (
    <div className='bg-cover bg-no-repeat bg-center h-screen' style={{backgroundImage: `url(${teaBackground})`}}>
    <div className="bg-black bg-opacity-40 h-full">
        <Header />
        <Search />
      </div>
    </div>
  );
}

export default App;