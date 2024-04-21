import { useState, useEffect } from 'react';
import { TeaProps } from '../../types';
import TeaCards from '../TeaCards/TeaCards';

interface SearchProps {
  teas: TeaProps[];
  favoriteTeas: TeaProps[];
  toggleFavoriteTeas: (tea: TeaProps) => void;
  showResults: boolean;
}

const Search: React.FC<SearchProps> = ({ teas, showResults, toggleFavoriteTeas, favoriteTeas }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTeas, setFilteredTeas] = useState<TeaProps[]>([]);
  const [searchClicked, setSearchClicked] = useState(false);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setSearchClicked(true);
    const filteredResults = teas.filter(tea =>
      tea.name.toLowerCase().includes(term.toLowerCase())
    );

    setFilteredTeas(filteredResults);
    setSearchTerm('');
  };

  useEffect(() => {
    // Reset filteredTeas state when component unmounts
    return () => {
      setFilteredTeas([]);
    };
  }, []);

  return (
    <div className='h-full flex flex-col items-center justify-center'>
      <form
        className='mb-8'
        onSubmit={e => {
          e.preventDefault();
          handleSearch(searchTerm);
        }}>
        <input
          type='text'
          placeholder='Search...'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className='bg-white rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mt-2'
        />
        <button
          type='submit'
          className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
          Search
        </button>
      </form>
      {showResults && filteredTeas.length > 0 && (
        <div>
          {filteredTeas.map(tea => (
            <div key={tea._id}>
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
                index={tea.index}
                toggleFavoriteTeas={toggleFavoriteTeas}
                favoriteTeas={favoriteTeas}
              />
             
            </div>
          ))}
        </div>
      )}
      {showResults && searchClicked && filteredTeas.length === 0 && (
        <div className='bg-white rounded-lg p-4 shadow-md'>
          <p className='text-6xl text-green-600'>
            No teas found matching your search criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default Search;
