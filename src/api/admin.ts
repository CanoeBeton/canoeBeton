import { api } from './api'

export const getToken = async (credentials: {
  email: string
  password: string
}): Promise<string> => {
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
