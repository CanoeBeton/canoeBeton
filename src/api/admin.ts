import { api } from './api'
import {Token} from "../domain/Token";

export const getToken = async (credentials: {
  email: string
  password: string
}): Promise<Token> => {
  const tokenResponse = await api()
    .post('/login', {
      ...credentials,
    })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
    })

  return tokenResponse
}
