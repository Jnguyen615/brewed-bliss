import TeaCards from "../TeaCards/TeaCards"
import { useState, useEffect } from 'react'
import { getTeas } from '../../api-call'
import { TeaProps} from '../../types'

const MainDisplay = () => {
  const [teas, setTeas] = useState<TeaProps[]>([]) 
  
  useEffect(() => {
    getTeas()
      .then(data => setTeas(data as TeaProps[]))
      .catch(error => console.error('Error fetching tea data:', error));
  }, []);

  return (
    <main className='grid grid-cols-5'>
      {teas.map(tea => (
        <TeaCards 
          
          key={tea.id}
          id={tea.id}
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

export default MainDisplay
