export interface teaCardProps {
  _id: string
  name: string;
  description: string;
  colorDescription: string;
  caffeine: string;
  origin: string; 
  type: string;
  tasteDescription: string;
  image: string;
  index: number;
  toggleFavoriteTeas: (tea: TeaProps) => void
  favoriteTeas: TeaProps[]
  
}
export interface TeaProps {
  _id: string 
  name: string;
  description: string;
  colorDescription: string;
  caffeine: string;
  origin: string;
  type: string;
  tasteDescription: string;
  image: string;
  index: number;
}

export interface SearchProps {
  teas: TeaProps[];
  _id: string;
  name: string
  description: string;
  colorDescription: string;
  caffeine: string;
  origin: string;
  type: string;
  tasteDescription: string;
  image: string;
  toggleFavoriteTeas: (tea: TeaProps) => void
}

export interface HeartIconProps {
  isFavorite: boolean;
  toggleFavoriteTeas: (tea: TeaProps) => void
  tea: TeaProps
  
}

export interface MainDisplayProps {
  teas: TeaProps[];
  toggleFavoriteTeas: (tea: TeaProps) => void;
  favoriteTeas: TeaProps[];
}

export interface FavoritesPageProps {
  setShowResults: React.Dispatch<React.SetStateAction<boolean>>; 
  favoriteTeas: TeaProps[]
  toggleFavoriteTeas: (tea: TeaProps) => void
}