import { api } from './api';
import { Boat } from '../domain/Boat';

export const getBoat = async (name: string) : Promise<Boat> => {
  const response = await api
    .get(`/boat/${name}`);

  return response.data
}