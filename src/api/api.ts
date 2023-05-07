import axios, { AxiosInstance } from 'axios'

export const api = (): AxiosInstance => {
  return axios.create({
    baseURL: 'canoe-staging.fly.dev',
    headers: {
      'Access-Control-Allow-Origin': '*',
      token: document.cookie
        .split('; ')
        .find((row) => row.startsWith('token='))
        ?.split('=')[1],
    },
  })
}
