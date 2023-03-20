import { api } from "./api";

export const getMembers = async () => {
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