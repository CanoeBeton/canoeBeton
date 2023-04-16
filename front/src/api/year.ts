import { api } from './api'
import { Year } from '../domain/Year'

export const getActiveYear = async (): Promise<Year> => {
  const config = {
    headers: {
      active: true,
    },
  }
  const response = await api().get('year', config)

  return response.data
}

export const getYears = async (): Promise<Year[]> => {
  const response = await api().get('year')

  return response.data
}

export const getYear = async (year: number): Promise<Year> => {
  const response = await api().get(`year/${year}`)

  return response.data
}

export const activateYear = async (year: number) => {
  const response = await api().post(`year/${year}/activate`)
}

export const modifyYear = async (data: Year) => {
  const response = await api().put(`year/${data.year}`, data)
}

export const activateNewYear = async (year: number) => {
  const response = await api().post(`year/${year}/activate`)
}
