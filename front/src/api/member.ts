import { api } from "./api";
import {Member} from "../domain/Member";

export const getMembers = async () : Promise<Member[]> => {
  const memberResponse = await api
    .get("member")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  
  return memberResponse;
};

export const getMembersYear = async (year: number) : Promise<Member[]> => {
  const memberResponse = await api
    .get(`member/year/${year}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return memberResponse;
}