// Search.tsx
import React, { useState } from 'react';
import { TeaProps } from '../../types';
import TeaCards from '../TeaCards/TeaCards';

interface SearchProps {
  teas: TeaProps[];
}

const Search: React.FC<SearchProps> = ({ teas }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTeas, setFilteredTeas] = useState<TeaProps[]>([]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    // Filter the teas based on the search term and set the state with the filtered results
    const filteredResults = teas.filter(tea =>
      tea.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredTeas(filteredResults);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => handleSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {filteredTeas.length === 0 && (
        <p>No teas found matching your search criteria.</p>
      )}
      {filteredTeas.length > 0 && (
        <div className="grid grid-cols-3 gap-4">
          {filteredTeas.map(tea => (
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
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
