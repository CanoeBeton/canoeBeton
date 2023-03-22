import { api } from "./api";

export const getEvents = async () => {
  const eventResponse = await api
    .get("event")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return eventResponse;
}