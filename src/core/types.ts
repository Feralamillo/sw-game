export interface CardData {
  name: string;
  metric: number; 
}

export interface Person {
  name: string; 
  height: string; 
  mass: string; 
  hair_color: string; 
  skin_color: string; 
  eye_color: string; 
  birth_year: string; 
  gender: string; 
  homeworld: string; 
  films: Array<string>; 
  species: Array<string>; 
  vehicles: Array<string>; 
  starships: Array<string>; 
  created: string; 
  edited: string; 
  url: string
}

export interface Starship {
  MGLT: string,
  cargo_capacity: string
  consumables: string, 
  cost_in_credits: string, 
  created: string, 
  crew: string, 
  edited: string, 
  hyperdrive_rating: string, 
  length: string, 
  manufacturer: string, 
  max_atmosphering_speed: string, 
  model: string, 
  name: string, 
  passengers: string, 
  films: Array<string>,
  pilots: Array<string>,
  starship_class: string, 
  url: string
}

export interface Vehicle {
  cargo_capacity: string, 
  consumables: string, 
  cost_in_credits: string, 
  created: string, 
  crew: string, 
  edited: string, 
  length: string, 
  manufacturer: string, 
  max_atmosphering_speed: string, 
  model: string, 
  name: string, 
  passengers: string, 
  pilots: Array<string>,
  films: Array<string>,
  url: string, 
  vehicle_class: string, 
}

export interface Specie {
  average_height: string, 
  average_lifespan: string, 
  classification: string, 
  created: string, 
  designation: string, 
  edited: string, 
  eye_colors: string, 
  hair_colors: string, 
  homeworld: string, 
  language: string, 
  name: string, 
  people: Array<string>,
  films: Array<string>,
  skin_colors: string, 
  url: string, 
}

export interface Planet {
  climate: string, 
  created: string, 
  diameter: string, 
  edited: string, 
  films: Array<string>,
  gravity: string, 
  name: string, 
  orbital_period: string, 
  population: string, 
  residents: Array<string>,
  rotation_period: string, 
  surface_water: string, 
  terrain: string, 
  url: string, 
}