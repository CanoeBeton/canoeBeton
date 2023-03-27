import {api} from './api';
import { Tournament } from '../domain/Tournament';
export const getTournaments = async (year: number) : Promise<Tournament[]> => {
  const response = await api
    .get(`/tournament/year/${year}`);

  return response.data
}
