import { CardData, People } from '../core/types';

export const getRandomIntInclusive = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max); 
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

export const findWinner = (data: Array<CardData>): string => {
  const max = data.reduce((prev, current) => (prev.metric > current.metric) ? prev : current);

  // @TODO: If the metric is unknown. Currently returning that as the biggest.
  return max.name;
}

export const transformPeopleAPIData = (resource: string, dataIn: People):CardData | null => {
  if (resource === 'people') {
    const { name, height: metric } = dataIn;
    const cardData = { name, metric }
    return cardData;
  }

  return null;
}