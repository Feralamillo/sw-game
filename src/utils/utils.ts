import { CardData, Person, Starship, Planet, Specie, Vehicle } from '../core/types';
import { RESOURCES } from '../core/constants';

export const getRandomIntInclusive = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max); 
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

export const transformAPIData = (resource: string, dataIn: any): CardData => {
  switch (resource) {
    case RESOURCES.PEOPLE:
      return transformPeopleAPIData(dataIn);
    case RESOURCES.STARSHIPS:
      return transformStarshipAPIData(dataIn);
    case RESOURCES.VEHICLES:
      return transformVehicleAPIData(dataIn);
    case RESOURCES.SPECIES:
      return transformSpecieAPIData(dataIn);
    default:
      return transformPlanetAPIData(dataIn);
  }
}

export const transformPeopleAPIData = (dataIn: Person): CardData => {
    const { name, height: metric } = dataIn;
    // If the metric is unknown return 0
    const cardData = { name, metric: Number(metric) ? Number(metric) : 0 }
    return cardData;
}

export const transformStarshipAPIData = (dataIn: Starship): CardData => {
  const { name, passengers: metric } = dataIn;
  // If the metric is unknown return 0
  const cardData = { name, metric: Number(metric) ? Number(metric) : 0 }
  return cardData;
}

export const transformVehicleAPIData = (dataIn: Vehicle): CardData => {
  const { name, passengers: metric } = dataIn;
  // If the metric is unknown return 0
  const cardData = { name, metric: Number(metric) ? Number(metric) : 0 }
  return cardData;
}

export const transformSpecieAPIData = (dataIn: Specie): CardData => {
  const { name, average_height: metric } = dataIn;
  // If the metric is unknown return 0
  const cardData = { name, metric: Number(metric) ? Number(metric) : 0 }
  return cardData;
}

export const transformPlanetAPIData = (dataIn: Planet): CardData => {
  const { name, population: metric } = dataIn;
  // If the metric is unknown return 0
  const cardData = { name, metric: Number(metric) ? Number(metric) : 0 }
  return cardData;
}
