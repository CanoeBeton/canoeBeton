import {Melange} from '../domain/Melange'
import {api} from "./api";

export const getMelangesByBoat = async (boatName: string) : Promise<[Melange]> => {
  const melangeResponse = await api
    .get(`/melange/${boatName}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return melangeResponse;
}
