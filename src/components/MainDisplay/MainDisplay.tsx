// MainDisplay.tsx
import React from 'react';
import TeaCards from '../TeaCards/TeaCards';
import { TeaProps } from '../../types';
import ScrollButton from '../ScrollButton/ScrollButton';

const MainDisplay: React.FC<{ teas: TeaProps[] }> = ({ teas }) => {
  return (
    <main>
    <div className='grid grid-cols-5'>
      {teas.map((tea, index) => (
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
        index={index}
        />
      ))}
    </div>
      <ScrollButton />
    </main>
  );
}

export default MainDisplay;
