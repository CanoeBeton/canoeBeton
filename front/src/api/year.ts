import { api } from "./api";
import {Year} from "../domain/Year";

export const getActiveYear = async () : Promise<Year> => {
    const config = {
        headers:{
            active: true,
        }
    };
    const response = await api
      .get("year", config);

    return response.data
};

export const getYears = async () : Promise<Year[]> => {
    const response = await api
      .get("year");

    return response.data
}