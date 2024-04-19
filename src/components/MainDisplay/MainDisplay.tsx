// MainDisplay.tsx
import React from 'react';
import TeaCards from '../TeaCards/TeaCards';
import { TeaProps } from '../../types';

const MainDisplay: React.FC<{ teas: TeaProps[] }> = ({ teas }) => {
  return (
    <main className='grid grid-cols-5'>
      {teas.map(tea => (
        <TeaCards 
          key={tea.name}
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
    </main>
  );
}

export default MainDisplay;
