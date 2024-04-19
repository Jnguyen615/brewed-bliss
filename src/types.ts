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
}